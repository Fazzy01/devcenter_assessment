import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: '.env',
      }),
      MongooseModule.forRootAsync({
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          const mongoose = await import('mongoose');
          await mongoose.connect(configService.get('MONGO_URL'));
          console.log('Database connected successfully!');
          return {
            uri: configService.get('MONGO_URL'),
            useNewUrlParser: true,
            useUnifiedTopology: true,
          };
        },
      }),
    ],
  })
  export class DatabaseModule {}
