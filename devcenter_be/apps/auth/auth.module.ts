import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { MongooseRepository } from 'repositories/mongooseRepository';
import { UsersModule } from 'apps/user/user.module';

@Module({
    imports: [
      JwtModule.register({
        secret: process.env.JWT_TOKEN_SECRET,
        signOptions: { expiresIn: '1h' },
      }),
      ConfigModule,
      UsersModule,
    ],
    providers: [AuthService, MongooseRepository],
    controllers: [AuthController],
  })
  export class AuthModule {}
