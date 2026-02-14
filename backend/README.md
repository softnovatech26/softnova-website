# 🚀 SoftNova Tech Backend - Contact Form System

## 📋 **Overview**
Complete contact form system with database storage, admin panel, email notifications, and auto-reply functionality.

## 🛠 **Tech Stack**
- **Backend**: Django 5.2.10
- **Database**: MySQL (softnova_db)
- **API**: Django REST Framework
- **Email**: Gmail SMTP
- **Frontend**: React (localhost:3000)

## 🗂 **Project Structure**
```
backend/
├── website_backend/
│   ├── settings.py          # Django configuration
│   ├── urls.py             # Main URL routing
│   └── wsgi.py            # WSGI config
├── contact/                 # Contact form app
│   ├── models.py           # ContactForm model
│   ├── views.py            # API endpoints
│   ├── serializers.py      # API serializers
│   ├── admin.py           # Django admin
│   └── urls.py            # Contact app URLs
├── manage.py               # Django CLI
└── requirements.txt        # Python dependencies
```

## 🚀 **Quick Start for Team Members**

### **1. Environment Setup**
```bash
# Clone repository
git clone <repository-url>
cd softnova-website/backend

# Activate virtual environment
cd venv/Scripts
activate

# Install dependencies
pip install -r requirements.txt
```

### **2. Database Setup**
```bash
# Prerequisites
- MySQL Server 8.0 must be running
- Port: 3305 (configured)
- Database: softnova_db
- User: root / Password: faiza123

# Run migrations
cd website_backend
python manage.py migrate
```

### **3. Email Configuration**
```bash
# Gmail Setup Required
1. Enable 2FA: https://myaccount.google.com/security
2. Create App Password: https://myaccount.google.com/apppasswords
3. Update settings.py with app password
```

### **4. Start Development Server**
```bash
cd website_backend
python manage.py runserver
# Backend: http://localhost:8000
# Admin: http://localhost:8000/admin/
```

## 📧 **Email System Configuration**

### **Gmail Setup Steps**
1. **Enable Two-Factor Authentication**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Name: "SoftNova Contact Form"
   - Copy 16-character password

3. **Update Django Settings**
   ```python
   # In website_backend/settings.py
   EMAIL_HOST_PASSWORD = 'your-16-char-app-password'
   ```

### **Email Features**
- ✅ **Admin Notifications**: Instant email to softnovatech.pk@gmail.com
- ✅ **Auto-Reply**: Professional thank you email to users
- ✅ **Error Handling**: Email status tracking in API

## 🌐 **API Documentation**

### **Contact Form Submit**
```http
POST /api/contact/submit/
Content-Type: application/json

Request Body:
{
    "name": "John Doe",
    "email": "john@example.com", 
    "message": "Your message here"
}

Success Response:
{
    "success": true,
    "message": "Contact form submitted successfully!",
    "email_status": "Email notifications sent"
}

Error Response:
{
    "success": false,
    "errors": {"name": ["This field is required."]}
}
```

### **Get All Contacts**
```http
GET /api/contact/list/

Response:
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Message content",
        "created_at": "2026-02-14T12:00:00Z",
        "is_read": false
    }
]
```

## 🗄 **Database Schema**

### **Contact Form Table**
```sql
CREATE TABLE contact_contactform (
    id bigint AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    email varchar(254) NOT NULL,
    message longtext NOT NULL,
    created_at datetime(6) NOT NULL,
    is_read tinyint(1) NOT NULL DEFAULT 0
);
```

## 🔧 **Configuration Details**

### **settings.py Key Configuration**
```python
# Database Configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'softnova_db',
        'USER': 'root',
        'PASSWORD': 'faiza123',
        'HOST': 'localhost',
        'PORT': '3305',
    }
}

# Email Configuration
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'softnovatech.pk@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'  # 16-char app password
DEFAULT_FROM_EMAIL = 'softnovatech.pk@gmail.com'

# CORS Configuration
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
CORS_ALLOW_CREDENTIALS = True
```

## 🎛 **Admin Panel Guide**

### **Access Information**
- **URL**: http://localhost:8000/admin/
- **Login**: Use superuser credentials
- **Contact Management**: Click "Contact forms"

### **Admin Features**
- ✅ **View Submissions**: List all contact form entries
- ✅ **Read Status**: Mark submissions as read/unread
- ✅ **Search**: Find submissions by name, email, or message
- ✅ **Filters**: Filter by date and read status
- ✅ **Bulk Actions**: Mark multiple submissions as read
- ✅ **Export**: Data export capabilities

## 🧪 **Testing & Development**

### **Development Workflow**
```bash
# 1. Start Backend
cd website_backend
python manage.py runserver

# 2. Start Frontend (separate terminal)
cd ../../softnova-website
npm start

# 3. Test Integration
# Frontend: http://localhost:3000/contact
# Backend: http://localhost:8000/admin/
```

### **Test Scripts**
```bash
# Test API connectivity
python test_connection.py

# Test email functionality
python test_email.py

# Test database connection
python manage.py dbshell
```

## 🔍 **Troubleshooting Guide**

### **Common Issues & Solutions**

#### **Database Connection Issues**
```bash
# Check MySQL service
net start MySQL80

# Check port
netstat -ano | findstr :3305

# Reset database
python manage.py migrate --fake-initial
```

#### **Email Issues**
```bash
# Test email configuration
python manage.py shell
>>> from django.core.mail import send_mail
>>> send_mail('Test', 'Test message', 'from@email.com', ['to@email.com'])

# Common fixes:
- Generate new app password
- Enable 2FA on Gmail
- Check firewall blocking SMTP
```

#### **CORS Issues**
```bash
# Verify both servers running
# Frontend: localhost:3000
# Backend: localhost:8000

# Check CORS settings
# Ensure frontend URL in CORS_ALLOWED_ORIGINS
```

## 👥 **Team Collaboration**

### **Git Workflow**
```bash
# Repository Setup
git clone <repository-url>
cd softnova-website/backend

# Branch Strategy
git checkout -b develop
git checkout -b feature/contact-enhancement

# Daily Workflow
git add .
git commit -m "feat: add email notifications"
git push origin feature/contact-enhancement

# Create Pull Request
# Review and merge to develop/main
```

### **Code Standards**
- **Python**: Follow PEP 8 style guide
- **Documentation**: Add docstrings to all functions
- **Testing**: Write tests for new features
- **Security**: Never commit passwords or secrets

### **Environment Variables**
```bash
# For production, use environment variables
export EMAIL_HOST_PASSWORD='your-app-password'
export DATABASE_PASSWORD='your-db-password'
```

## 🚀 **Deployment Guide**

### **Production Checklist**
- [ ] Set `DEBUG = False`
- [ ] Configure production database
- [ ] Set `ALLOWED_HOSTS`
- [ ] Use environment variables for secrets
- [ ] Configure production email service
- [ ] Set up SSL/HTTPS
- [ ] Configure production WSGI server
- [ ] Set up monitoring and logging

### **Production Commands**
```bash
# Collect static files
python manage.py collectstatic --noinput

# Run production migrations
python manage.py migrate

# Create superuser if needed
python manage.py createsuperuser
```

## 📞 **Support & Resources**

### **Documentation Files**
- `GMAIL_SETUP.md` - Detailed Gmail configuration
- `test_connection.py` - API connectivity test
- `test_email.py` - Email functionality test
- `contact_form_queries.sql` - Database queries

### **Useful Commands**
```bash
# Django Management
python manage.py makemigrations contact
python manage.py migrate
python manage.py createsuperuser
python manage.py collectstatic
python manage.py runserver 0.0.0.0:8000

# Database Management
python manage.py dbshell
python manage.py showmigrations
python manage.py sqlmigrate contact
```

### **Team Contacts**
- **Backend Issues**: Check this README first
- **Database Issues**: MySQL 8.0 documentation
- **Email Issues**: Gmail SMTP configuration guide
- **Frontend Issues**: React development documentation

---

## 🎉 **Ready for Production!**

Your SoftNova Tech contact form system is now:
- ✅ Fully documented for team collaboration
- ✅ Configured with email notifications
- ✅ Ready for development and testing
- ✅ Scalable for production deployment

**Team members can now set up and develop efficiently!** 🚀

## Project Structure

```text
backend/
  requirements.txt
  website_backend/
    manage.py
    website_backend/
      settings.py
      urls.py
    contact_app/
      views.py
      urls.py
```

## API Endpoints

- `POST /api/contact/`
- `GET /admin/`

## Run

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python website_backend\manage.py migrate
python website_backend\manage.py runserver
```