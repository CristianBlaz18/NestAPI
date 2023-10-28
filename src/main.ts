import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  //Configuracion de Swagger
  const config = new DocumentBuilder()
  .setTitle("EcoAmbiental APIS")
  .setDescription("Eh aqui las Apis de los guerreros.")
  .setVersion("1.0")
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
  app.enableCors();
  //Puerto del servidor
  await app.listen(4000);
}
bootstrap();
