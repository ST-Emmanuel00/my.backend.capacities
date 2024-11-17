import { Controller, Post, Body } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthographtDto, ProsConsDiscusserDto } from './dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post("orthography-check")
  orthographyCheck(@Body() orthographtDto: OrthographtDto) {
    return this.gptService.orthographyCheck(orthographtDto);
  }

  @Post("pros-cons-discusser")
  prosConsDicusser(@Body() prosConsDicusserDto: ProsConsDiscusserDto) {
    return this.gptService.prosConsDicusser(prosConsDicusserDto);
  }


}
