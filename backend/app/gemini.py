import json
from pathlib import Path

from google import genai
from google.genai import types

from app.config import GEMINI_API_KEY
from app.schemas import GeminiAnalyzeResponse

SYSTEM_PROMPT = (
    Path(__file__).resolve().parent.parent / "prompts" / "system_prompt.txt"
).read_text(encoding="utf-8")

client = genai.Client(api_key=GEMINI_API_KEY)


class InvalidAIResponseError(Exception):
    pass


def analyze_message(message: str) -> GeminiAnalyzeResponse:
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=message,
        config=types.GenerateContentConfig(system_instruction=SYSTEM_PROMPT),
    )
    raw_text = response.text or ""

    try:
        parsed = json.loads(raw_text)
    except json.JSONDecodeError as exc:
        raise InvalidAIResponseError from exc

    try:
        return GeminiAnalyzeResponse.model_validate(parsed)
    except Exception as exc:
        raise InvalidAIResponseError from exc
