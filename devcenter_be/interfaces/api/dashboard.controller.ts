import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'guards/auth.guard';
// import { AuthGuard } from './auth.guard';

@Controller('dashboard')
export class ProtectedController {
  @Get()
  @UseGuards(AuthGuard)
  async protectedRoute(): Promise<string> {
    return 'Hello, You are authenticated user!';
  }
}
