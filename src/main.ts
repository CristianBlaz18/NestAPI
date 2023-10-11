import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Prefijo fijo de utilizacion de apis
  app.setGlobalPrefix("api/v1");
  //Validacion Flobal
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true,
    })
  );
  //Puerto del servidor
  await app.listen(4000);
}
bootstrap();
