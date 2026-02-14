# 🚀 SoftNova Tech - Complete Website & Contact System

## 📋 **Overview**
Full-stack website with React frontend, Django backend, SQLite database, and email notifications. Complete contact form system with admin panel and auto-reply functionality.

## 🛠 **Tech Stack**

### **Frontend**
- **React 19.2.3** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **React Icons** - Icon library

### **Backend**
- **Django 5.2.10** - Web framework
- **Django REST Framework** - API framework
- **SQLite** - Database (db.sqlite3)
- **Gmail SMTP** - Email service
- **Python-dotenv** - Environment variables

## 🗂 **Project Structure**
```
softnova-website/
├── src/                    # React frontend
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── App.js             # Main App component
│   └── index.js           # Entry point
├── backend/                # Django backend
│   ├── website_backend/    # Django project
│   │   ├── settings.py    # Configuration
│   │   ├── urls.py        # URL routing
│   │   └── wsgi.py        # WSGI config
│   ├── contact/           # Contact app
│   │   ├── models.py      # ContactForm model
│   │   ├── views.py       # API endpoints
│   │   ├── serializers.py # API serializers
│   │   └── admin.py       # Django admin
│   ├── .env               # Environment variables (NOT in git)
│   ├── .env.example       # Environment template
│   ├── requirements.txt   # Python dependencies
│   └── manage.py          # Django CLI
├── package.json           # Node.js dependencies
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## ✅ **Features**
- 🌐 **Modern Website**: Professional company website
- 📝 **Contact Form**: Submit inquiries with validation
- 📧 **Email Notifications**: Admin receives submissions instantly
- 🤖 **Auto-Reply**: Users get professional confirmation email
- 🎛 **Admin Panel**: Manage submissions in Django admin
- 🔒 **Security**: Environment variables for sensitive data
- 📱 **Responsive**: Works on all devices
- ⚡ **Fast**: Optimized performance

## 🚀 **Quick Start for Team Members**

### **📋 Prerequisites**
- [ ] Node.js 16+ installed
- [ ] Python 3.8+ installed
- [ ] Git installed
- [ ] Code editor (VS Code recommended)

### **🔧 Step 1: Clone & Setup**
```bash
# Clone repository
git clone <repository-url>
cd softnova-website

# Install frontend dependencies
npm install

# Setup backend
cd backend
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install backend dependencies
pip install -r requirements.txt
```

### **🗄 Step 2: Database Setup**
```bash
# SQLite is used - no external database required
# Database file will be created automatically

cd website_backend
python manage.py migrate

# Create superuser (if needed)
python manage.py createsuperuser
```

### **📧 Step 3: Email Configuration**
```bash
# 1. Enable Gmail 2FA
# Visit: https://myaccount.google.com/security

# 2. Generate App Password
# Visit: https://myaccount.google.com/apppasswords
# App: "Mail"
# Device: "Other (Custom name)"
# Name: "SoftNova Contact Form"
# Copy the 16-character password

# 3. Update .env file
# Edit: backend/.env
# Replace: EMAIL_HOST_PASSWORD = 'your-16-char-app-password'
```

### **🚀 Step 4: Start Development**
```bash
# Terminal 1: Start Backend
cd backend/website_backend
python manage.py runserver
# Backend: http://localhost:8000

# Terminal 2: Start Frontend
cd ../../
npm start
# Frontend: http://localhost:3000
```

## 🌐 **Access Points**

### **Frontend**
- **Website**: http://localhost:3000
- **Contact Page**: http://localhost:3000/contact
- **All Pages**: Home, About, Services, Contact

### **Backend**
- **API**: http://localhost:8000
- **Admin Panel**: http://localhost:8000/admin/
- **Contact API**: http://localhost:8000/api/contact/submit/

### **Admin Access**
- **URL**: http://localhost:8000/admin/
- **Username**: Your superuser credentials
- **Password**: Your superuser password
- **Contact Forms**: Click "Contact forms"
- **Note**: Create superuser with `python manage.py createsuperuser`

## 📧 **Email System**

### **What Happens on Form Submission:**

#### **1. Admin Notification**
- **To**: Your admin email (configured in .env)
- **Subject**: "New Contact Form Submission: [User Name]"
- **Content**: User details + message
- **Purpose**: Immediate notification to team

#### **2. Auto-Reply to User**
- **To**: User's email address
- **Subject**: "Thank You for Contacting SoftNova Tech"
- **Content**: Professional thank you message
- **Purpose**: User confirmation

### **Email Configuration**
```bash
# In backend/.env (DO NOT COMMIT TO GIT)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-16-char-app-password
DEFAULT_FROM_EMAIL=your-email@gmail.com

# Use backend/.env.example as template
# Copy to .env and add your actual credentials
```

## 🌐 **API Documentation**

### **Submit Contact Form**
```http
POST http://localhost:8000/api/contact/submit/
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
```

### **Get All Contacts**
```http
GET http://localhost:8000/api/contact/list/

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
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(100) NOT NULL,
    email varchar(254) NOT NULL,
    message longtext NOT NULL,
    created_at datetime(6) NOT NULL,
    is_read tinyint(1) NOT NULL DEFAULT 0
);
-- SQLite database file: db.sqlite3
```

## 🧪 **Testing**

### **Test Contact Form**
1. **Start both servers** (Backend & Frontend)
2. **Open**: http://localhost:3000/contact
3. **Fill form**: Name, Email, Message
4. **Submit**: Click "Send Message"
5. **Check email**: Should receive auto-reply
6. **Check admin**: http://localhost:8000/admin/

### **Test API Directly**
```bash
# Test API endpoint
curl -X POST http://localhost:8000/api/contact/submit/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

## 🔧 **Configuration**

### **Environment Variables (.env)**
```bash
# Database Configuration (SQLite)
DB_NAME=db.sqlite3

# Email Configuration (DO NOT COMMIT TO GIT)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-16-char-app-password
DEFAULT_FROM_EMAIL=your-email@gmail.com

# Django Secret Key
SECRET_KEY=your-django-secret-key-here

# Debug Mode (False for production)
DEBUG=True

# IMPORTANT: Use backend/.env.example as template
# Copy to backend/.env and add your actual credentials
# backend/.env is excluded from git via .gitignore
```

### **Django Settings Key Points**
```python
# Database Configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / os.getenv('DB_NAME', 'db.sqlite3'),       
    }
}

# Email Configuration
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.getenv('EMAIL_HOST', 'smtp.gmail.com')
EMAIL_PORT = int(os.getenv('EMAIL_PORT', '587'))
EMAIL_USE_TLS = os.getenv('EMAIL_USE_TLS', 'True').lower() == 'true'
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER', '')
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD', '')
DEFAULT_FROM_EMAIL = os.getenv('DEFAULT_FROM_EMAIL', EMAIL_HOST_USER)

# CORS Configuration
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
CORS_ALLOW_CREDENTIALS = True
```

## 🎛 **Admin Panel Features**

### **Key Features**
- 📝 **View Submissions**: Complete list of all contact forms
- 🔍 **Search**: Find by name, email, or message content
- ✅ **Mark Read/Unread**: Track which submissions are handled
- 📅 **Filter by Date**: View submissions by time period
- ⚡ **Bulk Actions**: Mark multiple as read at once
- 📊 **Statistics**: Track submission volume over time

### **Access Information**
- **URL**: http://localhost:8000/admin/
- **Username**: Your superuser credentials
- **Password**: Your superuser password
- **Contact Forms**: Click "Contact forms"
- **Note**: Create superuser with `python manage.py createsuperuser`

## 🐛 **Troubleshooting**

### **Common Issues & Solutions**

#### **Frontend Issues**
```bash
# Error: 'react-scripts' not recognized
# Solution: Install dependencies
npm install

# Error: Port 3000 already in use
# Solution: Kill process or use different port
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### **Backend Issues**
```bash
# Error: ModuleNotFoundError: No module named 'dotenv'
# Solution: Install python-dotenv
pip install python-dotenv

# Error: Database connection issues
# Solution: SQLite usually works out of the box
python manage.py dbshell
```

#### **Email Issues**
```bash
# Error: SMTPAuthenticationError
# Solution: Generate new app password
# Visit: https://myaccount.google.com/apppasswords

# Error: Connection refused
# Solution: Check firewall/antivirus
```

#### **CORS Issues**
```bash
# Error: Cross-Origin Request Blocked
# Solution 1: Check both servers running
# Backend: localhost:8000
# Frontend: localhost:3000

# Solution 2: Verify CORS settings
# Check: CORS_ALLOWED_ORIGINS in settings.py
```

## 👥 **Team Collaboration**

### **Git Workflow**
```bash
# Repository Setup
git clone <repository-url>
cd softnova-website

# Branch Strategy
git checkout -b develop
git checkout -b feature/your-feature-name

# Daily Workflow
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name

# Create Pull Request
# Review and merge to develop/main
```

### **Code Standards**
- **JavaScript**: Follow ESLint configuration
- **Python**: Follow PEP 8 style guide
- **Documentation**: Add comments to complex functions
- **Testing**: Test features before committing
- **Security**: Never commit passwords or secrets

### **Environment Setup for New Team Members**
1. **Clone repository**
2. **Install dependencies** (npm install, pip install)
3. **Copy .env.example to .env**
4. **Configure email settings**
5. **Run migrations**
6. **Create superuser**
7. **Start both servers**

## 🚀 **Deployment Guide**

### **Production Checklist**
- [ ] Set `DEBUG = False` in .env
- [ ] Configure `ALLOWED_HOSTS` with production domain
- [ ] Use environment variables for all secrets
- [ ] Set up production database
- [ ] Configure production email service
- [ ] Enable SSL/HTTPS
- [ ] Set up monitoring and logging
- [ ] Test all functionality in staging

### **Production Commands**
```bash
# Frontend Build
npm run build

# Backend Production
cd backend/website_backend
python manage.py collectstatic --noinput
python manage.py migrate
python manage.py createsuperuser
```

## 📞 **Support & Resources**

### **Documentation Files**
- `TEAM_SETUP_GUIDE.md` - Detailed team setup
- `backend/.env.example` - Environment template
- `backend/requirements.txt` - Python dependencies
- `package.json` - Node.js dependencies

### **Useful Commands**
```bash
# Frontend
npm start              # Start development server
npm run build          # Build for production
npm test               # Run tests

# Backend
python manage.py runserver          # Start development server
python manage.py migrate            # Run database migrations
python manage.py createsuperuser    # Create admin user
python manage.py collectstatic      # Collect static files
python manage.py shell             # Django shell
```

### **External Documentation**
- [React Documentation](https://reactjs.org/docs/)
- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🎯 **Success Metrics**

### **When Setup is Working**
- ✅ Frontend loads at http://localhost:3000
- ✅ Backend runs at http://localhost:8000
- ✅ Contact form submits successfully
- ✅ Admin receives email notification
- ✅ User receives auto-reply email
- ✅ Submission appears in Django admin
- ✅ All pages load without errors

### **Performance Expectations**
- **Frontend Load**: < 2 seconds initial load
- **API Response**: < 500ms for form submission
- **Email Delivery**: < 30 seconds
- **Database Query**: < 100ms for contact list

---

## 🎉 **Ready for Production!**

Your SoftNova Tech website is now:
- ✅ **Fully documented** for team collaboration
- ✅ **Complete with contact form** and email system
- ✅ **Ready for development** and testing
- ✅ **Scalable for production** deployment
- ✅ **Secure** with environment variables

### **Team Members Can Now:**
- 🚀 **Set up development environment** easily
- 🔧 **Develop new features** efficiently
- 🐛 **Fix bugs** with proper guidance
- 📧 **Test email functionality**
- 🎛 **Manage contact submissions**
- 🚀 **Deploy to production** confidently

**Happy coding!** 🚀

---

*Last updated: February 2026*
*For questions, contact the project maintainer or team lead*