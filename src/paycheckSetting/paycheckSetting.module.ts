import { Module } from '@nestjs/common';
import { PaycheckSettingController } from 'src/paycheckSetting/paycheckSetting.controller';
import { PrismaService } from 'src/prisma.service';
import { PaycheckSettingService } from 'src/paycheckSetting/paycheckSetting.service';

@Module({
  controllers: [PaycheckSettingController],
  providers: [PrismaService, PaycheckSettingService],
})
export class PaycheckSettingModule {}
