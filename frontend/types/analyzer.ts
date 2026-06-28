export type PsychologicalFactors = {
  fear: number;
  urgency: number;
  authority: number;
  greed: number;
  curiosity: number;
  trust_manipulation: number;
  fomo: number;
};

export type TriggerSentence = {
  sentence: string;
  factor: string;
  reason: string;
};

export type AnalyzeResponse = {
  risk_score: number;
  risk_level: "Low" | "Medium" | "High" | "Critical";
  scam_type: string;
  language_detected: string;
  psychological_factors: PsychologicalFactors;
  trigger_sentences: TriggerSentence[];
  scam_explanation: string;
  recommendation: string;
  manipulation_flow: string[];
};

export type AnalysisHistory = {
  scam_type: string;
  risk_score: number;
  created_at: string;
};
