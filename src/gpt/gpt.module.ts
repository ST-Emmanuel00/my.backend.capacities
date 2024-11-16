import { Module } from '@nestjs/common';
import { GptService } from './gpt.service';
import { GptController } from './gpt.controller';
import { OpenAIConfig } from '../common/config';

@Module({
  controllers: [GptController],
  providers: [GptService, OpenAIConfig],
})
export class GptModule { }
