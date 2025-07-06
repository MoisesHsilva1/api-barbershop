import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './model/appointment.model';
import { User, UserSchema } from '../user/model/user.model';
import { AppointmentService } from './service/appointment.service';
import { AppointmentController } from './appointment.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appointment.name, schema: AppointmentSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [AppointmentService],
  controllers: [AppointmentController],
})
export class AppointmentModule {}
