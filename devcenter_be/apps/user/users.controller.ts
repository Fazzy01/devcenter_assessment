import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDTO } from 'dtos/user-auth-.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

@Post('create')
async register(@Body() registerUserDTO: RegisterUserDTO) {
  try {
    const user = await this.usersService.register(registerUserDTO);
    return user;
  } catch (error) {
    if(error.response === 'User already exists'){
        throw new HttpException('User already exists', 400);
    }
    throw new HttpException('Error registering user', 400);
  }
}

}