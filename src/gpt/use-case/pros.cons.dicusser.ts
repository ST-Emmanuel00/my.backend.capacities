import { Response } from "../..//common/types";
import { OpenAIConfig } from "../../common/config";

interface ProsConsDicusserOptions {
    prompt: string;
}

export const prosConsDicusser = async (openai: OpenAIConfig, { prompt }: ProsConsDicusserOptions): Promise<Response> => {

    try {

        const response = await openai.ai.chat.completions.create({
            model: openai.model,
            messages: [
                {
                    role: "system",
                    content: `Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras, 
                    la respuesta debe de ser en formato markdown,
                    los pros y contras deben de estar en una lista, `
                },
                {
                    role: "user",
                    content: prompt ?? "Hola, ¿puedes ayudarme a corregir mi ortografía?",
                },
            ],
            temperature: 0.2,
            max_tokens: 150,
        });

        return {
            message: ['Pros Cons Discusser use case'],
            info: { aiResponse: response.choices[0].message }
        }

    } catch (error) {

        throw error;

    }
}
