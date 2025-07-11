import {
  Controller,
  Body,
  Post,
  UseGuards,
  Req,
  Get,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppointmentService } from './service/appointment.service';
import { CreateAppointmentDto } from './dto/create-Appointment.dto';
import { AlphGuard } from '../auth/service/alphGuard.service';
import { Request } from 'express';
import { Appointment } from './model/appointment.model';

@ApiTags('Appointments')
@Controller('appointments')
export class AppointmentController {
  constructor(private readonly serviceAppointment: AppointmentService) {}

  @Post()
  @UseGuards(AlphGuard)
  @ApiOperation({ summary: 'Create appointment' })
  @ApiResponse({ status: 201, description: 'Create appointment success!!' })
  async createAppointment(
    @Body() body: CreateAppointmentDto,
    @Req() req: Request,
  ): Promise<Appointment> {
    const user = (req as any).user;
    const uid = user.uid;

    return await this.serviceAppointment.create({
      userId: uid,
      ...body,
    });
  }

  @Get('available-times')
  @ApiOperation({ summary: 'Get appointments success' })
  @ApiResponse({ status: 200, description: 'Get appointments success!!' })
  async getAllTimes(@Query('date') date: string): Promise<string[]> {
    return await this.serviceAppointment.findHoursAvailable(date);
  }

  @Get('appointments-date')
  @ApiOperation({ summary: 'Get appointments success' })
  @ApiResponse({ status: 200, description: 'Get appointments success!!' })
  async getAppointments(@Query('date') date: string): Promise<Appointment[]> {
    return await this.serviceAppointment.findByDate(date);
  }
}
