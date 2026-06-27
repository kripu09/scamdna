from typing import Literal

from pydantic import BaseModel, Field


class AnalyzeRequest(BaseModel):
    message: str


class PsychologicalFactors(BaseModel):
    fear: int = Field(ge=0, le=100)
    urgency: int = Field(ge=0, le=100)
    authority: int = Field(ge=0, le=100)
    greed: int = Field(ge=0, le=100)
    curiosity: int = Field(ge=0, le=100)
    trust_manipulation: int = Field(ge=0, le=100)
    fomo: int = Field(ge=0, le=100)


class TriggerSentence(BaseModel):
    sentence: str
    factor: str
    reason: str


class GeminiAnalyzeResponse(BaseModel):
    scam_type: str
    language_detected: str
    psychological_factors: PsychologicalFactors
    trigger_sentences: list[TriggerSentence]
    scam_explanation: str
    recommendation: str
    manipulation_flow: list[str]


class AnalyzeResponse(BaseModel):
    risk_score: int = Field(ge=0, le=95)
    risk_level: Literal["Low", "Medium", "High", "Critical"]
    scam_type: str
    language_detected: str
    psychological_factors: PsychologicalFactors
    trigger_sentences: list[TriggerSentence]
    scam_explanation: str
    recommendation: str
    manipulation_flow: list[str]
