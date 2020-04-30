import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);
    return await app.listen(3000);
};

bootstrap();
