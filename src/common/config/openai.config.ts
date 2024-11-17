import OpenAI from "openai";
import { envValues } from "./env.config";

export class OpenAIConfig {

    public model: string = "gpt-3.5-turbo";

    public ai = new OpenAI({
        apiKey: envValues.openai_api_key,
    });


    async chat(content?: string): Promise<any> {
        try {
            const response = await this.ai.chat.completions.create({
                model: this.model,
                messages: [
                    {
                        role: "system",
                        content: "Tu nombre es xisti agent, debes ser amable siempre y eres un corrector de ortografía que ayuda a los usuarios a escribir correctamente y vas a dar tu nombre siempre."
                        // content: "Eres un asesor de servicio al cliente servicial y muy amable que quiere que los usuarios tengan una excelente experiencia contigo y cuando no puedes datisfacer una necesidad, remites al usuario a uno asesor humano."
                    },
                    {
                        role: "user",
                        content: content ?? "Hola, ¿puedes ayudarme a corregir mi ortografía?",
                    },
                ],
                temperature: 0.2,
                max_tokens: 150,
            });
            return { response: response.choices[0].message.content, id: response.id };
        } catch (error) {
            throw error;
            // throw new Error(`Error during chat completion: ${error.message}`);
        }
    }

}       