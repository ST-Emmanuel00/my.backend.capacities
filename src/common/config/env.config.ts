import { Logger } from "@nestjs/common";
import * as joi from "joi";

interface Envs {
    port: number;
    node_env: string;
    openai_api_key: string;
}

const logger = new Logger('Envronment');

const envsSchema = joi
    .object({
        PORT: joi.number().integer().max(9999).required().default(3001),
        NODE_ENV: joi.string().valid("DEV", "PROD", "TEST").required().default("DEV"),
        OPENAI_API_KEY: joi.string().required(),
    })
    .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
    logger.error(`Config validation error: ${error.message}`);
    throw new Error(`Config validation error`);
}

export const envValues: Envs = {

    port: value.PORT ?? 3000,
    node_env: value.NODE_ENV ?? "NINO",
    openai_api_key: value.OPENAI_API_KEY,
};

logger.log(`${envValues.node_env} Envronment ok.`);