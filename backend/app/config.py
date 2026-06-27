import os

from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://scamdna.vercel.app/",
]
