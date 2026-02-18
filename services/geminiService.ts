import { GoogleGenAI } from "@google/genai";

// Initialize the client strictly with the process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePatientResponse = async (context: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        Você é um assistente de comunicação especializado para clínicas médicas. 
        Sua tarefa é criar uma resposta profissional, empática e clara para um paciente, baseada no cenário fornecido.
        
        Cenário: "${context}"
        
        A resposta deve ser curta (máximo 3 parágrafos), acolhedora e instruir o paciente sobre o próximo passo.
        Não inclua marcadores de texto como "Assunto:" ou "Resposta:", apenas o corpo da mensagem.
      `,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Disable thinking for faster response on simple tasks
        temperature: 0.7,
      }
    });

    return response.text || "Não foi possível gerar uma resposta no momento. Tente novamente.";
  } catch (error) {
    console.error("Erro ao gerar resposta com Gemini:", error);
    return "Erro ao conectar com a IA. Verifique sua chave de API ou tente mais tarde.";
  }
};
