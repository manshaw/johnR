import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DashboardModule } from './modules/dashboard/dashboard.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DashboardModule
  ],
})
export class AppModule { }
