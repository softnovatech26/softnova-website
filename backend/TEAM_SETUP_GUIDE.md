# 👥 Team Setup Guide - SoftNova Backend

## 🚀 **Quick Start for New Team Members**

### **📋 Prerequisites Checklist**
- [ ] Python 3.8+ installed
- [ ] Git installed
- [ ] MySQL Server 8.0 running
- [ ] Code editor (VS Code recommended)

### **🔧 Step 1: Clone & Setup**
```bash
# Clone the repository
git clone <repository-url>
cd softnova-website/backend

# Create virtual environment (if not exists)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### **🗄 Step 2: Database Setup**
```bash
# Ensure MySQL is running
net start MySQL80

# Check MySQL connection
mysql -u root -pfaiza123 -P 3305 -e "SHOW DATABASES;"

# Run Django migrations
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

# 3. Update settings.py
# Edit: website_backend/settings.py
# Replace: EMAIL_HOST_PASSWORD = 'your-16-char-app-password'
```

### **🚀 Step 4: Start Development**
```bash
# Terminal 1: Start Backend
cd website_backend
python manage.py runserver
# Backend: http://localhost:8000

# Terminal 2: Start Frontend
cd ../../softnova-website
npm start
# Frontend: http://localhost:3000
```

## 🧪 **Testing Your Setup**

### **Test 1: Backend API**
```bash
# Test API connectivity
python test_connection.py

# Expected output:
# ✅ SUCCESS: Contact form API is working!
# ✅ SUCCESS: Admin panel is accessible!
```

### **Test 2: Email Function**
```bash
# Test email sending
python test_email.py

# Expected output:
# ✅ Admin email sent successfully
# ✅ Auto-reply email sent successfully
```

### **Test 3: Full Integration**
1. Open browser: http://localhost:3000/contact
2. Fill form: Name, Email, Message
3. Submit form
4. Check email: Should receive auto-reply
5. Check admin: http://localhost:8000/admin/
6. Verify submission appears in admin

## 🎛 **Admin Panel Features**

### **Access Information**
- **URL**: http://localhost:8000/admin/
- **Username**: Your superuser credentials
- **Password**: Your superuser password

### **Key Features**
- **📝 View Submissions**: Complete list of all contact forms
- **🔍 Search**: Find by name, email, or message content
- **✅ Mark Read/Unread**: Track which submissions are handled
- **📅 Filter by Date**: View submissions by time period
- **⚡ Bulk Actions**: Mark multiple as read at once
- **📊 Statistics**: Track submission volume over time

## 🌐 **API Endpoints Reference**

### **Submit Contact Form**
```bash
curl -X POST http://localhost:8000/api/contact/submit/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Test message"
  }'
```

### **Get All Contacts**
```bash
curl -X GET http://localhost:8000/api/contact/list/
```

## 🔧 **Development Workflow**

### **Daily Development**
```bash
# 1. Pull latest changes
git pull origin main

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Make changes
# Edit code, test, etc.

# 4. Run tests
python manage.py test

# 5. Commit changes
git add .
git commit -m "feat: add your feature description"

# 6. Push branch
git push origin feature/your-feature-name

# 7. Create Pull Request
# Through GitHub/GitLab interface
```

### **Code Style Guidelines**
```python
# Follow PEP 8
def contact_submit(request):
    """
    Handle contact form submission.
    
    Args:
        request: HTTP request object
        
    Returns:
        Response: JSON response with success/error status
    """
    # Your code here
    pass
```

## 🐛 **Common Issues & Solutions**

### **Issue: Database Connection Failed**
```bash
# Error: Can't connect to MySQL server
# Solution 1: Check MySQL service
net start MySQL80

# Solution 2: Check port
netstat -ano | findstr :3305

# Solution 3: Verify credentials
mysql -u root -pfaiza123 -P 3305 -e "SHOW DATABASES;"
```

### **Issue: Email Not Sending**
```bash
# Error: SMTPAuthenticationError
# Solution: Generate new app password
# Visit: https://myaccount.google.com/apppasswords

# Error: Connection refused
# Solution: Check firewall/antivirus
# Temporarily disable to test
```

### **Issue: CORS Errors**
```bash
# Error: Cross-Origin Request Blocked
# Solution 1: Check both servers running
# Backend: localhost:8000
# Frontend: localhost:3000

# Solution 2: Verify CORS settings
# Check: CORS_ALLOWED_ORIGINS in settings.py
```

### **Issue: Frontend Not Connecting**
```bash
# Error: Network Error
# Solution 1: Check backend server
curl http://localhost:8000/api/contact/list/

# Solution 2: Check frontend network tab
# Open browser dev tools, check console errors
```

## 📚 **Useful Resources**

### **Documentation Files**
- `README.md` - Complete system documentation
- `GMAIL_SETUP.md` - Detailed email setup
- `contact_form_queries.sql` - Database queries
- `test_connection.py` - API testing script
- `test_email.py` - Email testing script

### **External Documentation**
- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [MySQL 8.0 Reference](https://dev.mysql.com/doc/refman/8.0/en/)
- [React Documentation](https://reactjs.org/docs/)

### **Development Tools**
- **API Testing**: Postman, Insomnia
- **Database Management**: MySQL Workbench, phpMyAdmin
- **Code Editor**: VS Code with Python extension
- **Version Control**: Git + GitHub/GitLab

## 🚀 **Production Deployment**

### **Pre-Deployment Checklist**
- [ ] Set `DEBUG = False` in settings.py
- [ ] Configure `ALLOWED_HOSTS` with production domain
- [ ] Use environment variables for sensitive data
- [ ] Set up production database
- [ ] Configure production email service
- [ ] Enable SSL/HTTPS
- [ ] Set up monitoring and logging
- [ ] Test all functionality in staging

### **Production Commands**
```bash
# Collect static files
python manage.py collectstatic --noinput

# Run database migrations
python manage.py migrate

# Create production superuser
python manage.py createsuperuser

# Run production server (example with gunicorn)
gunicorn website_backend.wsgi:application
```

## 📞 **Getting Help**

### **Internal Team Support**
1. **Check this guide first** - Most issues are covered here
2. **Search existing issues** - Check project issue tracker
3. **Ask in team chat** - Get help from experienced members
4. **Create detailed bug report** - Include error messages and steps

### **Bug Report Template**
```
**Issue Description**: Brief description of the problem
**Steps to Reproduce**: 
1. Step one
2. Step two
3. Step three
**Expected Behavior**: What should happen
**Actual Behavior**: What actually happens
**Error Messages**: Copy complete error messages
**Environment**: OS, Python version, browser
**Screenshots**: If applicable
```

## 🎯 **Success Metrics**

### **When Setup is Working**
- ✅ Backend server starts without errors
- ✅ Frontend loads contact form successfully
- ✅ Form submission returns success message
- ✅ Admin receives email notification
- ✅ User receives auto-reply email
- ✅ Submission appears in Django admin
- ✅ All test scripts pass successfully

### **Performance Expectations**
- **API Response**: < 500ms for form submission
- **Email Delivery**: < 30 seconds
- **Database Query**: < 100ms for contact list
- **Frontend Load**: < 2 seconds initial load

---

## 🎉 **Welcome to the Team!**

You're now ready to:
- ✅ Develop new features
- ✅ Fix bugs efficiently
- ✅ Contribute to codebase
- ✅ Deploy to production
- ✅ Support users effectively

**Happy coding!** 🚀

---

*Last updated: February 2026*
*For questions, contact the project maintainer or team lead*
