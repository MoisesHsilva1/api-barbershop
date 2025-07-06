import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { DatabaseModule } from './database/database.module';
import { AppointmentModule } from './module/appointment/appointment.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    AppointmentModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
