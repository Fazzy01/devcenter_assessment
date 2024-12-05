import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'apps/user/user.module';
import { DatabaseModule } from 'infra/database/database.module';
import { ConfigModuleConfig } from 'config/config.module';
import { AuthModule } from 'apps/auth/auth.module';

@Module({
    imports: [
        DatabaseModule,
        UsersModule,
        ConfigModuleConfig,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {}

