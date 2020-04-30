import { Module } from '@nestjs/common';
import { CoreModule } from './modules/core/core.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      TypeOrmModule.forRoot(),
      CoreModule,
      UserModule
    ],
})
export class AppModule {}
