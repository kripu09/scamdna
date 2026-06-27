from app.schemas import PsychologicalFactors


def _scale_to_band(
    value: float,
    input_min: float,
    input_max: float,
    band_min: int,
    band_max: int,
) -> int:
    if input_max <= input_min:
        return band_min

    normalized = (value - input_min) / (input_max - input_min)
    clamped = min(max(normalized, 0.0), 1.0)
    return round(band_min + clamped * (band_max - band_min))


def calculate_risk(factors: PsychologicalFactors) -> tuple[int, str]:
    values = {
        "fear": factors.fear,
        "urgency": factors.urgency,
        "authority": factors.authority,
        "greed": factors.greed,
        "curiosity": factors.curiosity,
        "trust_manipulation": factors.trust_manipulation,
        "fomo": factors.fomo,
    }
    core_average = (factors.fear + factors.urgency + factors.authority) / 3
    elevated_values = [value for value in values.values() if value > 70]

    if core_average > 70:
        risk_score = _scale_to_band(core_average, 71, 100, 85, 95)
    elif len(elevated_values) >= 2:
        top_two_average = sum(sorted(elevated_values, reverse=True)[:2]) / 2
        risk_score = _scale_to_band(top_two_average, 71, 100, 65, 84)
    elif len(elevated_values) == 1:
        risk_score = _scale_to_band(elevated_values[0], 71, 100, 40, 64)
    else:
        overall_average = sum(values.values()) / len(values)
        risk_score = _scale_to_band(overall_average, 0, 70, 0, 39)

    if risk_score >= 85:
        risk_level = "Critical"
    elif risk_score >= 65:
        risk_level = "High"
    elif risk_score >= 40:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return risk_score, risk_level
