import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { BiodataModule } from './crud/biodata/biodata.module';

@Module({
  imports: [PrismaModule, AuthModule, BiodataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
