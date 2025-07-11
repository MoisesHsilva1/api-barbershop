import { Test } from '@nestjs/testing';
import { AppointmentController } from '../../src/module/appointment/appointment.controller';
import { AppointmentService } from '../../src/module/appointment/service/appointment.service';

describe('AppointmentController', () => {
  let appointmentController: AppointmentController;
  let appointmentService: AppointmentService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppointmentController],
      providers: [AppointmentService],
    }).compile();

    appointmentService = moduleRef.get(AppointmentService);
    appointmentController = moduleRef.get(AppointmentController);
  });

  it('Should', () => {});
});
