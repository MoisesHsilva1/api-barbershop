import { Controller, Put, Body, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppointmentService } from './service/appointment.service';
import { CreateAppointmentDto } from './dto/create-Appointment.dto';

@ApiTags('Appointments')
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly serviceAppointment: AppointmentService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create appointment' })
  @ApiResponse({ status: 201, description: 'Create appointment success!!' })
  async createAppointment(@Body() body: CreateAppointmentDto) {
    return await this.serviceAppointment.create({
      ...body,
    });
  }
}
