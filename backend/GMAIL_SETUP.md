# 📧 Gmail Setup for Email Notifications

## 🔐 **Step 1: Enable 2-Factor Authentication**
1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification"
3. Complete the setup process

## 🔑 **Step 2: Create App Password**
1. Go to: https://myaccount.google.com/apppasswords
2. Select app: "Mail"
3. Select device: "Other (Custom name)"
4. Name it: "SoftNova Contact Form"
5. Click "Generate"
6. **Copy the 16-character password** (this is your EMAIL_HOST_PASSWORD)

## ⚙️ **Step 3: Update Django Settings**
In `website_backend/settings.py`, replace:
```python
EMAIL_HOST_PASSWORD = 'your-app-password'  # Replace with actual app password
```

## 🧪 **Step 4: Test Email Function**
```bash
python manage.py shell
>>> from django.core.mail import send_mail
>>> send_mail('Test', 'Test message', 'softnovatech.pk@gmail.com', ['your-email@example.com'])
```

## ✅ **What Happens When Form is Submitted:**

### **1. Admin Notification:**
- **To**: softnovatech.pk@gmail.com
- **Subject**: "New Contact Form Submission: [User Name]"
- **Content**: User details + message
- **Purpose**: Immediate notification

### **2. Auto-Reply to User:**
- **To**: User's email address
- **Subject**: "Thank You for Contacting SoftNova Tech"
- **Content**: Professional thank you message
- **Purpose**: User confirmation

## 🔧 **Troubleshooting:**

### **If emails don't send:**
1. Check Gmail app password is correct
2. Ensure 2FA is enabled
3. Verify email in settings
4. Check firewall/antivirus blocking

### **Common Errors:**
- `SMTPAuthenticationError`: Wrong app password
- `SMTPServerDisconnected`: Network/firewall issue
- `SSL.SSLError`: SSL/TLS configuration

## 🎯 **Final Result:**
- ✅ Form submission → Database storage
- ✅ Admin gets instant email notification
- ✅ User gets automatic professional reply
- ✅ Admin can manage submissions in Django admin

**Your contact form is now a complete communication system!** 🚀
