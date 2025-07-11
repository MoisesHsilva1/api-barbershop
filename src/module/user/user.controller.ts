import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  ParseArrayPipe,
} from '@nestjs/common';
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

  @Get(':id')
  @ApiOperation({ summary: 'Get a list user by id' })
  @ApiResponse({ status: 200, description: 'Get a user by id' })
  async getUserById(@Query('id') id: string): Promise<User | null> {
    return await this.userService.findByUid(id);
  }

  @Get('admin/:id')
  async getUserIsAdmin(@Param('id') id: string): Promise<{ isAdmin: boolean }> {
    const isAdmin = await this.userService.findIsAdmin(id);
    return { isAdmin };
  }

  @Get()
  @ApiOperation({ summary: 'Get a users by ids' })
  @ApiResponse({ status: 200, description: 'Get a users by ids' })
  async getUsersByIds(
    @Query('ids', new ParseArrayPipe({ items: String, separator: ',' }))
    id: string[],
  ): Promise<User[]> {
    return await this.userService.findManyByIds(id);
  }
}
