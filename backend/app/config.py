import os

from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
ALLOWED_ORIGINS = [
<<<<<<< HEAD
    "https://scamdna.vercel.app/",
=======
    "https://scamdna.vercel.app",
>>>>>>> 839a72dafca9b57f65f7c9967a8bcc5380b54830
]
