#!/usr/bin/env python3
"""
Test email functionality to diagnose issues
"""

import os
import sys
import django
from django.core.mail import send_mail, EmailMessage
from django.conf import settings

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'website_backend.settings')
django.setup()

def test_admin_email():
    """Test admin notification email"""
    print("🧪 Testing Admin Email Notification...")
    
    subject = "Test: New Contact Form Submission"
    message = """
    This is a test email from SoftNova contact form system.
    
    If you receive this, admin notifications are working.
    """
    
    try:
        result = send_mail(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            ['softnovatech.pk@gmail.com'],  # Admin email
            fail_silently=False,
        )
        print(f"✅ Admin email sent successfully: {result}")
        return True
    except Exception as e:
        print(f"❌ Admin email failed: {str(e)}")
        return False

def test_auto_reply():
    """Test auto-reply to user"""
    print("\n🧪 Testing Auto-Reply Email...")
    
    subject = "Thank You for Contacting SoftNova Tech"
    message = """
    Dear Test User,

    Thank you for contacting SoftNova Tech.

    We have successfully received your message, and our team will review your inquiry shortly.

    If your matter is urgent, you may also reach us directly via WhatsApp or email for a quicker response.

    We truly appreciate your interest in working with us and look forward to assisting you.

    Best regards,
    SoftNova Tech Team
    softnovatech.pk@gmail.com
    """
    
    try:
        email = EmailMessage(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            ['test@example.com'],  # Test recipient
        )
        result = email.send()
        print(f"✅ Auto-reply email sent successfully: {result}")
        return True
    except Exception as e:
        print(f"❌ Auto-reply email failed: {str(e)}")
        return False

def check_email_settings():
    """Check email configuration"""
    print("📋 Email Configuration Check:")
    print(f"  EMAIL_BACKEND: {settings.EMAIL_BACKEND}")
    print(f"  EMAIL_HOST: {settings.EMAIL_HOST}")
    print(f"  EMAIL_PORT: {settings.EMAIL_PORT}")
    print(f"  EMAIL_USE_TLS: {settings.EMAIL_USE_TLS}")
    print(f"  EMAIL_HOST_USER: {settings.EMAIL_HOST_USER}")
    print(f"  DEFAULT_FROM_EMAIL: {settings.DEFAULT_FROM_EMAIL}")
    
    # Check if password is set
    if hasattr(settings, 'EMAIL_HOST_PASSWORD'):
        password = settings.EMAIL_HOST_PASSWORD
        if password == 'your-app-password' or password == '':
            print("  ❌ EMAIL_HOST_PASSWORD: Not configured (still using placeholder)")
            return False
        else:
            print(f"  ✅ EMAIL_HOST_PASSWORD: Configured (length: {len(password)})")
            return True
    else:
        print("  ❌ EMAIL_HOST_PASSWORD: Not found")
        return False

if __name__ == "__main__":
    print("🔧 Email System Diagnosis")
    print("=" * 50)
    
    # Check configuration
    config_ok = check_email_settings()
    
    if config_ok:
        # Test emails
        admin_ok = test_admin_email()
        auto_ok = test_auto_reply()
        
        print("\n" + "=" * 50)
        if admin_ok and auto_ok:
            print("🎉 ALL EMAIL TESTS PASSED!")
            print("💡 Contact form emails should work perfectly!")
        else:
            print("❌ SOME EMAIL TESTS FAILED!")
            print("💡 Check the error messages above")
    else:
        print("\n" + "=" * 50)
        print("❌ EMAIL CONFIGURATION ISSUES!")
        print("💡 Please fix EMAIL_HOST_PASSWORD in settings.py")
