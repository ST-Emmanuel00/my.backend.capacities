import { OpenAIConfig } from "../../common/config";
import { Response } from "../../common/types";

interface OrthographyCheckOptions {
    prompt: string;
}

export const orthographyCheck = async (ai: OpenAIConfig, options: OrthographyCheckOptions): Promise<Response> => {

    const { prompt } = options;

    const { response, id } = await ai.chat(prompt);

    return {
        message: ['Orthography check use case'],
        info: { aiResponse: response }
    };
}