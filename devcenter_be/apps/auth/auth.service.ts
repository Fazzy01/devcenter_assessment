import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'apps/user/users.service';
import { MongooseRepository } from 'repositories/mongooseRepository';
// import { UsersService } from './users.service';

// @Injectable()
// export class AuthService {
//   constructor(private readonly mongooseRepository: MongooseRepository,
//     private readonly jwtService: JwtService,
//     private readonly configService: ConfigService,

//    ) {}

//   async login(email: string, password: string) {
//     const user = await  await this.mongooseRepository.find(email);
//     if (!user || !(await user.comparePassword(password))) {
//       throw new Error('Invalid email or password');
//     }
//     const payload = { sub: user.email, email: user.email };
//     return {
//       access_token: this.jwtService.sign(payload, {
//         expiresIn: '1h',
//       }),
//     };
//   }
// }
@Injectable()
export class AuthService {
  constructor(
    private readonly mongooseRepository: MongooseRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.mongooseRepository.find({email: email}, { lean: false });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid email or password');
    }
    const payload = { sub: user.email, email: user.email };
    const secret = this.configService.get('JWT_SECRET');
    return {
      access_token: this.jwtService.sign(payload, {
        secret,
        expiresIn: '1h',
      }),
    };
  }
}
