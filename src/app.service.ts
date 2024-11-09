import { Injectable } from '@nestjs/common';
import { Response } from './common/types';

@Injectable()
export class AppService {
  health(): Response {
    return { message: 'App ok.' };
  }
}
