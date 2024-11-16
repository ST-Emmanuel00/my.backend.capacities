import { Controller, Post, Body } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthographtDto } from './dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post("orthography-check")
  orthographyCheck(@Body() orthographtDto: OrthographtDto) {
    return this.gptService.orthographyCheck(orthographtDto);
  }


}
