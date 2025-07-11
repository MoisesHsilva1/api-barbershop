import { InjectModel } from '@nestjs/mongoose';
import { Appointment } from '../model/appointment.model';
import { Model } from 'mongoose';

export class AppointmentService {
  constructor(
    @InjectModel(Appointment.name)
    private readonly appointmentModel: Model<Appointment>,
  ) {}

  async create(data: {
    userId: string;
    date: string;
    time: string;
    services: string[];
  }): Promise<Appointment> {
    return await this.appointmentModel.create(data);
  }

  async findHoursAvailable(date: string): Promise<string[]> {
    const allTimes = [
      '8h às 8h50',
      '9h às 9h50',
      '10h às 10h50',
      '11h às 11h50',
      '14h às 14h50',
      '15h às 15h50',
      '16h às 16h50',
      '17h às 17h50',
      '18h às 18h50',
      '19h às 19h50',
    ];

    const appointments = await this.appointmentModel.find({ date }).exec();

    const occupied = appointments.map((a) => a.time);

    return allTimes.filter((time) => !occupied.includes(time));
  }

  async findByDate(date: string): Promise<Appointment[]> {
    return this.appointmentModel.find({ date });
  }
}
