import { HttpException, Injectable } from '@nestjs/common';
import { MongooseRepository } from 'repositories/mongooseRepository';
import { RegisterUserDTO } from 'dtos/user-auth-.dto';

@Injectable()
export class UsersService {
  constructor(private readonly mongooseRepository: MongooseRepository) {}

  async register(registerUserDTO: RegisterUserDTO) {
    const { email } = registerUserDTO;
    // await this.mongooseRepository.find({email: email}, { lean: false })
    const existingUser = await this.mongooseRepository.find({ email: email });
    if (existingUser) {
      throw new HttpException('User already exists', 400);
    }
    const user = await this.mongooseRepository.create(registerUserDTO);
    const { _id, ...data } = user.toObject();
    return data;
  }

}


