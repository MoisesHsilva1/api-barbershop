import { IsString, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  date: string;

  @IsString()
  time: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  services: string[];
}
