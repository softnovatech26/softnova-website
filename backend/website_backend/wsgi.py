import os
from django.core.wsgi import get_wsgi_application

# region agent log
import json
import time
from pathlib import Path


def _agent_log(message, data, hypothesis_id, run_id="run1"):
    
    try:
        log_entry = {
            "id": f"log_{int(time.time() * 1000)}",
            "timestamp": int(time.time() * 1000),
            "location": "website_backend/website_backend/wsgi.py:module_import",
            "message": message,
            "data": data,
            "runId": run_id,
            "hypothesisId": hypothesis_id,
        }
        log_path = Path(r"c:\Users\Dell\OneDrive\softnova_company\.cursor\debug.log")
        with log_path.open("a", encoding="utf-8") as f:
            f.write(json.dumps(log_entry) + "\n")
    except Exception:
        # Logging must never break the app
        pass


_agent_log(
    "WSGI module import start",
    {"django_settings_module": os.environ.get("DJANGO_SETTINGS_MODULE")},
    hypothesis_id="H1",
)
# endregion

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "website_backend.settings")

application = get_wsgi_application()

# region agent log
_agent_log(
    "WSGI application created",
    {"django_settings_module": os.environ.get("DJANGO_SETTINGS_MODULE")},
    hypothesis_id="H1",
)
# endregion
