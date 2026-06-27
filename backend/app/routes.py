from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse

from app.gemini import InvalidAIResponseError, analyze_message
from app.schemas import AnalyzeRequest, AnalyzeResponse
from app.risk import calculate_risk

router = APIRouter()


@router.post("/analyze", response_model=AnalyzeResponse)
def analyze(payload: AnalyzeRequest) -> AnalyzeResponse:
    message = payload.message.strip()
    if not message:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Message cannot be empty",
        )

    try:
        analysis = analyze_message(message)
    except InvalidAIResponseError:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"error": "Invalid AI response"},
        )

    risk_score, risk_level = calculate_risk(analysis.psychological_factors)

    return AnalyzeResponse(
        risk_score=risk_score,
        risk_level=risk_level,
        scam_type=analysis.scam_type,
        language_detected=analysis.language_detected,
        psychological_factors=analysis.psychological_factors,
        trigger_sentences=analysis.trigger_sentences,
        scam_explanation=analysis.scam_explanation,
        recommendation=analysis.recommendation,
        manipulation_flow=analysis.manipulation_flow,
    )
