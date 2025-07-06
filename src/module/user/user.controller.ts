import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './service/user.service';
import { User } from './model/user.model';
import { CreateUserDto } from './dto/createUser.dto';

@ApiTags('user')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'Create a new user' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { name, email, phone, password } = createUserDto;

    return await this.userService.create({
      name,
      email,
      phone,
      password,
    });
  }
}
