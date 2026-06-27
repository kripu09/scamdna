import type { AnalyzeResponse } from "@/types/analyzer";

const API_BASE_URL = "https://scamdna-lmdn.onrender.com";

export async function analyzeMessage(message: string): Promise<AnalyzeResponse> {
  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Unable to analyze message.");
  }

  return (await response.json()) as AnalyzeResponse;
}
