# 🚀 SoftNova Tech Backend - Complete Setup Guide

**Complete step-by-step guide for team members to set up the Django backend locally.**

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Database Configuration](#database-configuration)
4. [Understanding the Project](#understanding-the-project)
5. [API Endpoints](#api-endpoints)
6. [Testing the APIs](#testing-the-apis)
7. [Troubleshooting](#troubleshooting)
8. [Quick Reference](#quick-reference)

---

## Prerequisites ✅

Before starting, **have these installed:**

### Windows Users
- **Python 3.10+** → [Download](https://www.python.org/downloads/)
- **MySQL Server 8.0** → [Download](https://dev.mysql.com/downloads/mysql/)
- **Git** → [Download](https://git-scm.com/)
- **MySQL Workbench** (optional, for GUI)

### macOS Users
```bash
brew install python@3.10 mysql git
```

### Linux Users (Ubuntu/Debian)
```bash
sudo apt-get install python3.10 python3-pip mysql-server git
```

**Verify installations:**
```bash
python --version      # Should be 3.10+
mysql --version       # Should show 8.0+
git --version         # Any version is fine
```

---

## Installation Steps 📦

### ✅ Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd "Soft Nova Tech/softnova-website/backend"
```

### ✅ Step 2: Create Virtual Environment

This isolates your project's dependencies from your system Python.

**Windows (PowerShell or CMD):**
```bash
python -m venv venv
venv\Scripts\activate
```

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

✅ **You should see `(venv)` in your terminal when activated.**

### ✅ Step 3: Install Dependencies

```bash
pip install -r requirements.txt
```

This installs:
- Django 5.2.10
- Django REST Framework
- CORS Headers
- PyMySQL (database driver)
- Other required packages

**Expected output ends with: `Successfully installed ...`**

### ✅ Step 4: Start MySQL Server

**Windows:**
MySQL usually starts automatically as a service. Verify:
```bash
mysql --version
```

**macOS:**
```bash
brew services start mysql
```

**Linux:**
```bash
sudo service mysql start
```

**Verify MySQL is running:**
```bash
mysql -u root -p
# Press Enter if no password (or enter your password)
# Type: exit
```

---

## Database Configuration 🗄️

### ✅ Step 1: Create Database

**Option A: Using MySQL Command Line**
```bash
mysql -u root -p
# Enter password (or press Enter if none)
```

Then copy-paste this:
```sql
CREATE DATABASE softnova_db;
SHOW DATABASES;
exit
```

**Option B: Using MySQL Workbench**
1. Open MySQL Workbench
2. Click on "+" next to Databases
3. Name: `softnova_db`
4. Click Apply
5. The database appears in the list

### ✅ Step 2: Configure Connection in Django

Edit this file: `website_backend/website_backend/settings.py`

Find the `DATABASES` section (around line 75-90) and update:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'softnova_db',
        'USER': 'root',
        'PASSWORD': '',              # Leave empty if no password
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

**If you have a custom MySQL password:**
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'softnova_db',
        'USER': 'root',
        'PASSWORD': 'your_mysql_password',    # Your password here
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

### ✅ Step 3: Run Migrations

Migrations create all database tables.

```bash
cd website_backend
python manage.py makemigrations
python manage.py migrate
```

**Expected output:**
```
Operations to perform:
  Apply all migrations: ...
Running migrations:
  Applying auth.0001_initial... OK
  Applying auth_app.0001_initial... OK
  Applying contact_app.0001_initial... OK
  ...
```

### ✅ Step 4: Create Admin User

```bash
python manage.py createsuperuser
```

**Follow the prompts:**
```
Username: admin
Email address: admin@softnova.com
Password: YourPassword123
Password (again): YourPassword123
Superuser created successfully.
```

💾 **Save these credentials! You'll need them to log into the admin panel.**

---

## Project Structure 📁

```
backend/
├── requirements.txt                 # Python packages to install
├── README.md                        # Basic documentation
├── SETUP_GUIDE.md                   # This file
└── website_backend/
    ├── manage.py                    # Django command tool
    ├── db.sqlite3                   # Database (if using SQLite)
    │
    ├── website_backend/             # Main project settings
    │   ├── settings.py              # Django configuration
    │   ├── urls.py                  # Main URL routing
    │   ├── wsgi.py                  # Web server config
    │   └── asgi.py                  # Async config
    │
    ├── auth_app/                    # (Reserved; no auth API in use)
    │
    └── contact_app/                 # CONTACT FORM APP
        ├── models.py                # Contact message model
        ├── views.py                 # Handle contact form submissions
        ├── serializers.py           # Validate contact data
        ├── urls.py                  # Routes: /api/contact/
        ├── admin.py                 # View messages in admin
        └── migrations/              # Database changes
```

---

## Running the Server 🎯

```bash
python manage.py runserver
```

**Expected output:**
```
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

### Access Points:

- **API Home:** http://127.0.0.1:8000/
- **Admin Panel:** http://127.0.0.1:8000/admin/
  - Use superuser credentials (created with `createsuperuser`)

✅ **Server is now running!**

---

## API Endpoints 📡

### Base URL: `http://127.0.0.1:8000`

---

#### 💬 CONTACT FORM ENDPOINTS

### 1️⃣ SUBMIT CONTACT MESSAGE

**Endpoint:** `POST http://127.0.0.1:8000/api/contact/`

**Send this JSON:**
```json
{
    "full_name": "Jane Smith",
    "email": "jane@example.com",
    "message": "I'm interested in your web development services. Please contact me."
}
```

**Field Rules:**
- `full_name`: 2-255 characters
- `email`: Valid email format
- `message`: Any text

**Success Response (201):**
```json
{
    "id": 1,
    "full_name": "Jane Smith",
    "email": "jane@example.com",
    "message": "I'm interested...",
    "created_at": "2026-02-12T10:30:45.123456Z"
}
```

**What Happens:**
- ✅ Message saved to database
- ✅ Stored with timestamp
- ✅ Can be viewed in admin panel

**Error Example:**
```json
{
    "email": ["Enter a valid email address"]
}
```

---

### 5️⃣ GET ALL CONTACT MESSAGES (For Admin)

**Endpoint:** `GET http://127.0.0.1:8000/api/contact/`

**Success Response (200):**
```json
[
    {
        "id": 1,
        "full_name": "Jane Smith",
        "email": "jane@example.com",
        "message": "I'm interested...",
        "created_at": "2026-02-12T10:30:45Z"
    },
    {
        "id": 2,
        "full_name": "Bob Johnson",
        "email": "bob@example.com",
        "message": "Please contact me...",
        "created_at": "2026-02-12T11:45:30Z"
    }
]
```

---

## Testing the APIs 🧪

### Method 1: Using Postman (Easiest for Beginners)

1. **Download & Install:** https://www.postman.com/downloads/
2. **Create a new request:**
   - Click "+" → New Request
   - Name: "Contact Test"
   - URL: `http://127.0.0.1:8000/api/contact/`
   - Method: `POST`
3. **Add headers:**
   - Key: `Content-Type`
   - Value: `application/json`
4. **Add body (raw JSON):**
```json
{
    "full_name": "Test User",
    "email": "test@example.com",
    "message": "Hello from Postman!"
}
```
5. **Click "Send"** and see the response

**Save your requests for reuse!**

---

### Method 2: Using cURL (Command Line)

**Test Contact:**
```bash
curl -X POST http://127.0.0.1:8000/api/contact/ \
  -H "Content-Type: application/json" \
  -d '{"full_name":"John Doe","email":"john@example.com","message":"Hello!"}'
```

---

## Viewing Data in Admin Panel 👨‍💼

### Access Admin Panel
1. Server must be running (`python manage.py runserver`)
2. Go to: http://127.0.0.1:8000/admin/
3. Sign in with superuser credentials (created with `createsuperuser`)

### View Contact Messages
1. Click on **"Contacts"** in the sidebar
2. See all submitted messages
3. Click any message to view full details
4. Can edit or delete messages here

### Manage Users
1. Click on **"Users"** in the sidebar
2. View all registered users
3. Create new users manually if needed
4. Edit user details

---

## Database Queries 📊

### View Data Using MySQL

```bash
mysql -u root -p
# Enter password (or press Enter if none)
```

Then run:

```sql
-- Select the database
USE softnova_db;

-- View all contact messages
SELECT * FROM contact_app_contact;

-- View user accounts
SELECT id, username, email FROM auth_user;

-- Count total contact submissions
SELECT COUNT(*) as total_messages FROM contact_app_contact;

-- View latest 5 messages
SELECT * FROM contact_app_contact ORDER BY created_at DESC LIMIT 5;

-- Search messages by email
SELECT * FROM contact_app_contact WHERE email = 'jane@example.com';

-- Exit
exit
```

---

## Common Issues & Solutions ⚠️

### Issue 1: "Access denied for user 'root'@'localhost'"

**What it means:** Wrong MySQL password

**Solution:**
```bash
# Test if you remember your password
mysql -u root -p
# Enter password

# If still stuck, reset MySQL password
# This varies by system - check MySQL documentation
```

**Fix in settings.py:**
```python
DATABASES = {
    'default': {
        ...
        'PASSWORD': 'your_correct_password',  # Update this
        ...
    }
}
```

---

### Issue 2: "ModuleNotFoundError: No module named 'django'"

**What it means:** Virtual environment not activated

**Solution:**
```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Then install packages
pip install -r requirements.txt
```

---

### Issue 3: "No such table: contact_app_contact"

**What it means:** Migrations not applied

**Solution:**
```bash
cd website_backend
python manage.py makemigrations
python manage.py migrate
```

**Verify it worked:**
```bash
mysql -u root -p
USE softnova_db;
SHOW TABLES;
# You should see: contact_app_contact
```

---

### Issue 4: "Port 8000 already in use"

**What it means:** Another program is using port 8000

**Solution - Option A (Use different port):**
```bash
python manage.py runserver 8001
# Server runs on http://127.0.0.1:8001/ instead
```

**Solution - Option B (Stop other program):**

Windows:
```bash
netstat -ano | findstr :8000
taskkill /PID <number> /F
python manage.py runserver
```

macOS/Linux:
```bash
lsof -i :8000
kill -9 <PID>
python manage.py runserver
```

---

### Issue 5: "CORS error: No 'Access-Control-Allow-Origin' header"

**What it means:** Frontend can't access backend

**Solution:** Check `settings.py` has:
```python
INSTALLED_APPS = [
    'corsheaders',  # Must be here
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Must be first
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
```

---

## Development Workflow 🔄

### When You Change Code

**If you modify `models.py`:**
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

**If you modify `views.py` or `serializers.py`:**
```bash
# Just restart server with Ctrl+C then:
python manage.py runserver
```

**If you modify `settings.py`:**
```bash
# Restart server
Ctrl+C
python manage.py runserver
```

---

## Adding New Features 🎨

### Add a New API Endpoint

1. **Edit `views.py`:**
```python
class MyNewView(APIView):
    def post(self, request):
        return Response({"message": "It works!"})
```

2. **Edit `urls.py`:**
```python
urlpatterns = [
    path('myendpoint/', MyNewView.as_view(), name='myendpoint'),
]
```

3. **Restart server** and test

### Add Fields to Contact Model

1. **Edit `models.py`:**
```python
class Contact(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    phone = models.CharField(max_length=20)  # NEW FIELD
    created_at = models.DateTimeField(auto_now_add=True)
```

2. **Create & apply migrations:**
```bash
python manage.py makemigrations
python manage.py migrate
```

3. **Update `serializers.py`:**
```python
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'full_name', 'email', 'message', 'phone', 'created_at']
```

---

## Quick Reference 🚀

```bash
# Activate virtual environment
venv\Scripts\activate              # Windows
source venv/bin/activate           # macOS/Linux

# Install packages
pip install -r requirements.txt

# Navigate to project
cd website_backend

# Create migrations (after model changes)
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Run development server
python manage.py runserver

# Run on different port
python manage.py runserver 8001

# Access admin panel
http://127.0.0.1:8000/admin/

# Deactivate virtual environment
deactivate
```

---

## Directory Navigation

**Windows PowerShell:**
```powershell
# Navigate to backend
cd "D:\Soft Nova Tech\softnova-website\backend"

# Navigate to project
cd website_backend

# Back to backend
cd ..

# View files
ls
```

**macOS/Linux Bash:**
```bash
cd "/path/to/Soft Nova Tech/softnova-website/backend"
cd website_backend
cd ..
ls
```

---

## Need Help?

### Check These First:
1. ✅ Is Python 3.10+ installed? → `python --version`
2. ✅ Is MySQL running? → Try connecting: `mysql -u root -p`
3. ✅ Is virtual environment activated? → Look for `(venv)` in terminal
4. ✅ Are migrations applied? → Check table exists in MySQL
5. ✅ Is server running? → Check http://127.0.0.1:8000/

### Documentation:
- Django: https://docs.djangoproject.com/
- Django REST Framework: https://www.django-rest-framework.org/
- MySQL: https://dev.mysql.com/doc/

---

## Team Checklist ✨

Print this and check off as you complete:

- [ ] Python 3.10+ installed
- [ ] MySQL installed & running
- [ ] Repository cloned
- [ ] Virtual environment created
- [ ] Virtual environment activated (see `(venv)` in terminal)
- [ ] Dependencies installed (`pip install -r requirements.txt`)
- [ ] MySQL database created (`softnova_db`)
- [ ] Settings.py updated with correct DB password
- [ ] Migrations applied (`python manage.py migrate`)
- [ ] Superuser created (`python manage.py createsuperuser`)
- [ ] Server running (`python manage.py runserver`)
- [ ] Admin panel accessible (http://127.0.0.1:8000/admin/)
- [ ] Can submit contact form (test with Postman)
- [ ] Contact messages visible in admin panel

---

**Last Updated:** February 12, 2026
**Version:** 1.0
**Status:** ✅ Complete & Ready for Team
