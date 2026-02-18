from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from django.core.mail import send_mail, EmailMessage
from .models import ContactForm
from .serializers import ContactFormSerializer


def send_admin_notification(contact):
    """Send email notification to admin"""
    subject = f"New Email From: {contact.name}"
    message = f"""
    New contact submission received:
    
    Name: {contact.name}
    Email: {contact.email}
    Phone: {contact.phone}
    Message: {contact.message}
    
    Submitted at: {contact.created_at}
    
    Please review this submission in the admin panel.
    """
    
    send_mail(
        subject,
        message,
        'softnovatech.pk@gmail.com',
        ['softnovatech.pk@gmail.com'],
        fail_silently=False,
    )


def send_auto_reply(contact):
    """Send automatic reply to user"""
    subject = "Thank You for Contacting SoftNova Tech"
    
    message = f"""
    Dear {contact.name},

    Thank you for contacting SoftNova Tech.

    We have successfully received your message, and our team will review your inquiry shortly.

    If your matter is urgent, you may also reach us directly via WhatsApp or email for a quicker response.

    We truly appreciate your interest in working with us and look forward to assisting you.

    Best regards,
    SoftNova Tech Team
    softnovatech.pk@gmail.com
    """
    
    email = EmailMessage(
        subject,
        message,
        'softnovatech.pk@gmail.com',
        [contact.email],
    )
    email.send()


@api_view(['POST'])
@permission_classes([AllowAny])
def contact_submit(request):
    serializer = ContactFormSerializer(data=request.data)
    if serializer.is_valid():
        contact = serializer.save()
        
        try:
            send_admin_notification(contact)
            send_auto_reply(contact)
            email_status = "Email notifications sent"
        except Exception as e:
            email_status = f"Email failed: {str(e)}"
        
        return Response({
            'success': True,
            'message': 'Contact form submitted successfully!',
            'email_status': email_status
        }, status=status.HTTP_201_CREATED)
    else:
        return Response({
            'success': False,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def contact_list(request):
    contacts = ContactForm.objects.all().order_by('-created_at')
    serializer = ContactFormSerializer(contacts, many=True)
    return Response(serializer.data)
