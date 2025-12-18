
import { GoogleGenAI, Type } from "@google/genai";
import { Suggestion, StyleManifesto } from "../types";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateImage = async (prompt: string): Promise<string | null> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "16:9", imageSize: "1K" } }
    });
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes("Requested entity was not found")) throw new Error("KEY_REQUIRED");
  }
  return null;
};

export const generateVideo = async (prompt: string): Promise<string | null> => {
  const ai = getAI();
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '16:9' }
    });
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({operation: operation});
    }
    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (downloadLink) {
      const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    }
  } catch (e) { console.error(e); }
  return null;
};

export const elaboratePrompt = async (
  basePrompt: string, 
  activeManifestos: StyleManifesto[], 
  isSecret: boolean = false
): Promise<string> => {
  const ai = getAI();
  
  const contextBlock = activeManifestos.map(m => `
    STYLE MODULE: ${m.name}
    PHILOSOPHY: ${m.philosophy}
    TECHNICAL RULES:
    ${m.technicalRules.map(r => `- ${r}`).join('\n')}
  `).join('\n\n');

  const secretInstruction = isSecret ? "Access the Vault Archives. Use non-euclidean descriptors. Prioritize the 'wwwrong' aesthetic: beautiful but technically impossible." : "";

  const systemPrompt = `
    You are the 'wwwrong' Technical Architect. Your role is to transform vague prompts into CONCISE, RIGOROUS TECHNICAL BLUEPRINTS.
    
    GUIDELINES:
    1. CONCISENESS IS LAW: No conversational filler. No introductory phrases. No 'Here is your prompt'.
    2. Resolve Conflicts: Create unified technical solutions (e.g., 'Grotesque Luxury').
    3. Technical Vocabulary: Replace 'beautiful' or 'scary' with 'subsurface scattering', 'anisotropic flare', 'asynchronous mirror dissonance', 'chiaroscuro shadows'.
    4. Respect the Manifestos:
    ${contextBlock}
    
    ${secretInstruction}
    
    OUTPUT: A single, dense paragraph of technical instructions. Focus on material physics, lighting, and camera optics.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Blueprint this vision: "${basePrompt}"`,
      config: { 
        thinkingConfig: { thinkingBudget: 2500 },
        systemInstruction: systemPrompt
      }
    });
    return response.text?.trim() || basePrompt;
  } catch (error) {
    return basePrompt;
  }
};

export const getSuggestions = async (currentPrompt: string, activeManifestos: StyleManifesto[], isSecret: boolean = false): Promise<Suggestion[]> => {
  const ai = getAI();
  const manifestoContext = activeManifestos.map(m => m.name).join(', ');
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Based on prompt "${currentPrompt}" and modules [${manifestoContext}], suggest 3 ultra-short professional directives to make it more "wwwrong". Return JSON: [{text, category}]`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              text: { type: Type.STRING },
              category: { type: Type.STRING }
            },
            required: ["text", "category"]
          }
        }
      }
    });
    return JSON.parse(response.text || '[]');
  } catch (e) { return []; }
};

export const generateCreativeText = async (prompt: string): Promise<string | null> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Write a short, evocative narrative fragment for: "${prompt}". Use an editorial, high-fashion tone.`,
      config: { thinkingConfig: { thinkingBudget: 1000 } }
    });
    return response.text || null;
  } catch (e) { return null; }
};

export const refineNarrative = async (currentPrompt: string): Promise<string> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Perform a technical audit and refinement of this prompt. Focus on material physics and cinematic vocabulary. Be EXTREMELY concise: "${currentPrompt}"`,
      config: { thinkingConfig: { thinkingBudget: 1500 } }
    });
    return response.text?.trim() || currentPrompt;
  } catch (e) { return currentPrompt; }
};

export const analyzeAsset = async (base64Data: string): Promise<string> => {
  const ai = getAI();
  try {
    const base64 = base64Data.split(',')[1];
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/png', data: base64 } },
          { text: "Perform a technical studio critique. Audit the lighting setup, material authenticity, and compositional balance. Suggest one 'wwwrong' adjustment." }
        ]
      },
      config: { thinkingConfig: { thinkingBudget: 2000 } }
    });
    return response.text || "Analysis unavailable.";
  } catch (e) { return "Analysis failed."; }
};
