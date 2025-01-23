import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_URL } from './dotenv.config';

export const swaggerConfig = async (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Open Table Backend APIs Documentation')
    .setDescription('')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_URL, app, documentFactory);
};
