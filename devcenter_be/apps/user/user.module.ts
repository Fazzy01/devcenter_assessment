import { Logger, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from 'entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { MongooseRepository } from 'repositories/mongooseRepository';


@Module({
    imports: [
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    providers: [
      UsersService,
      MongooseRepository,
    ],
    controllers: [UsersController],
    exports: [MongooseModule], // Export the MongooseModule
  })
  export class UsersModule {}
