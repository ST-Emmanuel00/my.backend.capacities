import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envValues } from './common/config';

async function bootstrap() {

  const { port } = envValues
  const logger = new Logger('Server');
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }));

  app.setGlobalPrefix('api');
  await app.listen(port);
  logger.log(`Server running on http://localhost:${port}`);
}
bootstrap();
