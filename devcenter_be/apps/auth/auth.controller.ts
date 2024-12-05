import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from 'dtos/user-auth-.dto';
// import { LoginUserDTO } from './dtos/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUserDTO: LoginUserDTO) {
    try {
      const token = await this.authService.login(loginUserDTO.email, loginUserDTO.password);
      return token;
    } catch (error) {
      throw new HttpException('Invalid email or password', 401);
    }
  }
}

