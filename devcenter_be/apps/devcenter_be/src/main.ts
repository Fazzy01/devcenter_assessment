import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('OUR SERVER LISTENING ON PORT', process.env.PORT)
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();