# SoftNova Website ....

Official website of SoftNova Tech  
Built with React + Tailwind CSS



Under the process dashboard
http://localhost:3000/Dashboard

# Backend (Authentication)

Django + Django REST Framework backend for **user signup and login**.

---

## Folder Structure 

```
softnova-website/
│
├── backend/                     # Backend root folder
│   │
│   ├── venv/                     # Virtual environment 
│   │
│   ├── requirements.txt          # Backend dependencies
│   │
│             
│   │
│   └── website_backend/          # Django project container
        | manage.py               # Django command-line utility
│       │
│       ├── website_backend/      # Main Django project
│       │   ├── settings.py       # Settings: DB, apps, DRF, ports
│       │   ├── urls.py           # Root URLs
│       │   ├── asgi.py
│       │   ├── wsgi.py
│       │   └── __init__.py
│       │
│       ├── auth_app/             # Authentication app
│       │   ├── serializers.py    # Signup & Login serializers
│       │   ├── views.py          # SignupView & LoginView (Class-based)
│       │   ├── urls.py           # signup/login endpoints
│       │   ├── models.py         # Default User model
│       │   ├── apps.py
│       │   └── migrations/       # DB migrations
│       │
│       └── __init__.py
```

---

## Tech Stack

* Python
* Django
* Django REST Framework (DRF)
* MySQL (local database)
* Virtual Environment (venv)

---

## Database Setup (MySQL)

**Requirements:**

* MySQL installed and running
* Database created manually

**Example settings.py configuration:**

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'softnova_db',
        'USER': 'db_user',
        'PASSWORD': 'db_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

**Steps:**

1. Open MySQL / Workbench
2. Create database: `softnova_db`
3. Configure user and password
4. Update settings.py with credentials

---

## Backend Setup

1. Open terminal inside `backend/` folder
2. Create virtual environment:

```
python -m venv venv
```

3. Activate virtual environment:

```
venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/Mac
```

4. Install dependencies:

```
pip install -r requirements.txt
```

5. Apply migrations:

```
python manage.py makemigrations
python manage.py migrate
```

6. Run server:

```
python manage.py runserver 8000
```

**Server runs at:**

```
http://127.0.0.1:8000/
```

---

## API Endpoints

### Signup

* **URL:** `/auth/signup/`
* **Method:** POST
* **Request Body:**

```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "password": "Test1234",
  "confirm_password": "Test1234"
}
```

* **Response:**

  * Success: 201 Created + message
  * Failure: 400 Bad Request + errors

---

### Login

* **URL:** `/auth/login/`
* **Method:** POST
* **Request Body:**

```json
{
  "email": "john@example.com",
  "password": "Test1234"
}
```

* **Response:**

  * Success: 200 OK + user info
  * Failure: 400 Bad Request + errors

---

## Testing

* Use **Postman** or similar tool
* Only **POST requests** are supported
* Database must be running

---



