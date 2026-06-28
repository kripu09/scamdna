import type { AnalyzeResponse, AnalysisHistory } from "@/types/analyzer";

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

export async function getHistory(): Promise<AnalysisHistory[]> {
  const response = await fetch(`${API_BASE_URL}/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // Adding no-cache to ensure we see the latest history immediately
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to fetch history.");
  }

  return (await response.json()) as AnalysisHistory[];
}

export async function getStats(): Promise<{ total_scans: number }> {
  const response = await fetch(`${API_BASE_URL}/stats`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // Adding no-cache to ensure we see the latest stats immediately
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to fetch stats.");
  }

  return (await response.json()) as { total_scans: number };
}
