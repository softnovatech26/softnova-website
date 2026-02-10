from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
import re


class SignupSerializer(serializers.Serializer):
    # Full name field from frontend
    full_name = serializers.CharField(max_length=100)
    # Email field, will check uniqueness
    email = serializers.EmailField()
    # Password field 
    password = serializers.CharField(write_only=True, min_length=8)
    # Confirm password field to ensure user typed correctly
    confirm_password = serializers.CharField(write_only=True, min_length=8)

    def validate_email(self, value):
        """
        Check if email already exists in DB.
        Raise error if duplicate found.
        """
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists")
        return value

    def validate(self, data):
        """
        General validation:
        - Passwords match
        - Password contains letters and numbers (strength check)
        """
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match")

        # Password strength: at least 1 letter and 1 number
        if not re.search(r'\d', data['password']) or not re.search(r'[A-Za-z]', data['password']):
            raise serializers.ValidationError("Password must contain letters and numbers")
        return data

    def create(self, validated_data):
        """
        Create a new user with validated data.
        - Use Django's create_user to hash password
        - Split full_name into first_name and last_name
        """
        full_name = validated_data.get('full_name')
        first_name = full_name.split(' ')[0]
        last_name = ' '.join(full_name.split(' ')[1:]) if len(full_name.split(' ')) > 1 else ''

        user = User.objects.create_user(
            username=validated_data['email'],  # using email as username
            email=validated_data['email'],
            password=validated_data['password'],  # automatically hashed
            first_name=first_name,
            last_name=last_name
        )
        return user



class LoginSerializer(serializers.Serializer):
    # fields from frontend
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        """
        1. take Email + password 
        2. authenticate user from django
        3. if not valid raise error
        4. if valid return user
        """

        email = data.get("email")
        password = data.get("password")

        # Django authentication
        user = authenticate(username=email, password=password)

        if not user:
            raise serializers.ValidationError("Invalid email or password")

        data["user"] = user
        return data
