
import { GoogleGenAI } from "@google/genai";

/**
 * Standard chat helper using the Google GenAI SDK.
 * Communicates with the Gemini model to provide AI-driven career guidance.
 */
export async function chatWithAI(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  // Always initialize GoogleGenAI inside the function using the environment variable directly as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are Cyber-Sathi, a 22nd-century AI career companion for Margdarshak, a super-app for Sri Chaitanya Global Vista students. 
        Your tone is professional, encouraging, futuristic, and helpful. 
        You use terminology like 'neural sync', 'career cockpit', 'data-uplink', 'pathway synchronization'. 
        Always guide students toward high-quality educational and career resources.`,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    /**
     * The .text property on GenerateContentResponse is a direct string getter.
     * We access it directly without calling it as a method.
     */
    return response.text;
  } catch (error) {
    console.error("AI Sync Error:", error);
    return "Communication error during neural uplink. Please try again.";
  }
}
