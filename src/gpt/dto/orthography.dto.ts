import { IsInt, IsOptional, IsString } from "class-validator";

export class OrthographtDto {

    @IsString()
    readonly prompt: string;
    @IsInt()
    @IsOptional()
    readonly maxTokens: number;
}
