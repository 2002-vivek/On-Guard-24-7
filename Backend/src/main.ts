import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const cors = require('cors');
  // app.use(cors({ origin: 'http://localhost:3001' }));
  app.use(cors());
  const port = process.env.PORT || 4000;
  await app.listen(port);
}
bootstrap();
