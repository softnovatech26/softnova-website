#!/usr/bin/env python3
"""
Test script to verify frontend-backend connection
"""

import requests
import json

def test_contact_api():
    """Test the contact form API endpoint"""
    
    # API endpoint
    url = "http://localhost:8000/api/contact/submit/"
    
    # Test data
    test_data = {
        "name": "Test User",
        "email": "test@example.com", 
        "message": "This is a test message from the connection test script."
    }
    
    try:
        print("🧪 Testing Contact Form API...")
        print(f"📡 Sending POST request to: {url}")
        print(f"📝 Data: {json.dumps(test_data, indent=2)}")
        
        # Make the request
        response = requests.post(
            url,
            headers={"Content-Type": "application/json"},
            json=test_data
        )
        
        print(f"📊 Status Code: {response.status_code}")
        print(f"📄 Response: {response.json()}")
        
        if response.status_code == 201:
            print("✅ SUCCESS: Contact form API is working!")
            return True
        else:
            print("❌ ERROR: API returned unexpected response")
            return False
            
    except requests.exceptions.ConnectionError:
        print("❌ ERROR: Cannot connect to backend server")
        print("💡 Make sure Django server is running on http://localhost:8000")
        return False
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")
        return False

def test_admin_panel():
    """Test if admin panel is accessible"""
    try:
        print("\n🧪 Testing Admin Panel...")
        response = requests.get("http://localhost:8000/admin/")
        if response.status_code == 200:
            print("✅ SUCCESS: Admin panel is accessible!")
            print("🌐 URL: http://localhost:8000/admin/")
            return True
        else:
            print("❌ ERROR: Admin panel not accessible")
            return False
    except:
        print("❌ ERROR: Cannot connect to admin panel")
        return False

if __name__ == "__main__":
    print("🔗 Testing Frontend-Backend Connection")
    print("=" * 50)
    
    api_ok = test_contact_api()
    admin_ok = test_admin_panel()
    
    print("\n" + "=" * 50)
    if api_ok and admin_ok:
        print("🎉 ALL TESTS PASSED! Your contact form is ready!")
        print("\n📋 Next Steps:")
        print("1. Open http://localhost:3000/contact")
        print("2. Submit a test form")
        print("3. Check results in http://localhost:8000/admin/")
    else:
        print("❌ Some tests failed. Check the errors above.")
