# SoftNova Website

Official website of SoftNova Tech, built with React + Tailwind CSS.

## Backend

Django + Django REST Framework backend for contact form API and admin.

## Key Endpoints

- `GET /admin/` Django admin panel
- `POST /api/contact/` Submit contact form

## Run

Frontend:

```bash
npm install
npm start
```

Backend:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python website_backend\manage.py migrate
python website_backend\manage.py runserver
```