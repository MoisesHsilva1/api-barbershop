import { InjectModel } from '@nestjs/mongoose';
import { Appointment } from '../model/appointment.model';
import { Model } from 'mongoose';

export class AppointmentService {
  constructor(
    @InjectModel(Appointment.name)
    private readonly appointmentModel: Model<Appointment>,
  ) {}

  async create(data: {
    date: string;
    time: string;
    services: string[];
  }): Promise<Appointment> {
    const newAppointment = await this.appointmentModel.create(data);
    return newAppointment;
  }
}
