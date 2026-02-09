
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn("Missing VITE_GEMINI_API_KEY. Gemini requests will fail until it is configured.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export const generateProjectBrief = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a world-class senior systems architect. Create a detailed project brief for this idea: "${prompt}". Return as JSON only.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            projectName: { type: Type.STRING },
            techStack: { type: Type.ARRAY, items: { type: Type.STRING } },
            keyFeatures: { type: Type.ARRAY, items: { type: Type.STRING } },
            architecture: {
              type: Type.OBJECT,
              properties: {
                overview: { type: Type.STRING },
                rationale: { type: Type.STRING },
                dataFlow: { type: Type.STRING },
                microservices: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      description: { type: Type.STRING }
                    },
                    required: ["name", "description"]
                  }
                },
                protocols: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["overview", "rationale", "dataFlow", "microservices", "protocols"]
            }
          },
          required: ["projectName", "techStack", "keyFeatures", "architecture"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response");
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Brief Generation Failed:", error);
    throw error;
  }
};

export const chatWithArchitect = async (history: any[], message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: "You are a senior systems architect. Keep answers concise, technical, and professional. Focus on scalability and performance."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Failed:", error);
    return "Protocol error. Uplink unstable.";
  }
};

export const generateCyberpunkVisual = async (title: string, description: string) => {
  // Placeholder for when image generation is requested, 
  // currently focusing on text reasoning as per user request for smoothness.
  return null;
};
