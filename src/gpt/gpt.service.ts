import { Injectable } from '@nestjs/common';
import { OrthographtDto, ProsConsDiscusserDto } from './dto';
import * as GptUseCase from './use-case';
import { OpenAIConfig } from '../common/config';


@Injectable()
export class GptService {

  constructor(private readonly ai: OpenAIConfig) { }

  
  async orthographyCheck(orthographtDto: OrthographtDto) {
    return await GptUseCase.orthographyCheck(this.ai, {
      prompt: orthographtDto.prompt
    });
  }

  async prosConsDicusser(prosConsDicusserDto: ProsConsDiscusserDto) {
    return await GptUseCase.prosConsDicusser(this.ai, {
      prompt: prosConsDicusserDto.prompt
    });
  }



}
