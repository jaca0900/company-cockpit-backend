import { Module } from '@nestjs/common';
import { CoreService } from './service/core.service';

@Module({
  imports: [
    CoreService
  ]
})
export class CoreModule {}
