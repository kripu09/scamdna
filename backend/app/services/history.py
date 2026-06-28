import hashlib
import logging
from datetime import datetime
from typing import Any, Dict, List

from supabase import Client, create_client

from app.config import SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL

logger = logging.getLogger(__name__)

# Initialize Supabase client lazily
supabase: Client | None = None

if SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY:
    try:
        supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    except Exception as e:
        logger.error(f"Failed to initialize Supabase client: {e}")
else:
    logger.warning("Supabase credentials not found. History service will mock responses.")


def generate_hash(message: str) -> str:
    """Generates a SHA-256 hash of the message for privacy-preserving storage."""
    return hashlib.sha256(message.encode("utf-8")).hexdigest()


def save_analysis(message_hash: str, risk_score: int, scam_type: str) -> None:
    """Saves the analysis results without storing the original message."""
    if not supabase:
        logger.warning("Skipping save_analysis: Supabase not configured.")
        return

    try:
        supabase.table("analysis_history").insert(
            {
                "message_hash": message_hash,
                "risk_score": risk_score,
                "scam_type": scam_type,
            }
        ).execute()
    except Exception as e:
        logger.error(f"Error saving analysis to Supabase: {e}")


def get_recent_analyses(limit: int = 10) -> List[Dict[str, Any]]:
    """Fetches the most recent analyses to display on the frontend."""
    if not supabase:
        logger.warning("Skipping get_recent_analyses: Supabase not configured.")
        return []

    try:
        response = (
            supabase.table("analysis_history")
            .select("scam_type, risk_score, created_at")
            .order("created_at", desc=True)
            .limit(limit)
            .execute()
        )
        return response.data
    except Exception as e:
        logger.error(f"Error fetching recent analyses from Supabase: {e}")
        return []

def get_total_scans() -> int:
    """Returns the total number of scans across the platform."""
    if not supabase:
        logger.warning("Skipping get_total_scans: Supabase not configured.")
        return 0

    try:
        response = supabase.table("analysis_history").select("id", count="exact").execute()
        return response.count or 0
    except Exception as e:
        logger.error(f"Error counting total scans from Supabase: {e}")
        return 0
