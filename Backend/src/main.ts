import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const cors = require('cors');
  // app.use(cors({ origin: 'http://localhost:3001' }));
  app.use(cors());
  await app.listen(3000);
}
bootstrap();