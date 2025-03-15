import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PaycheckSettingService } from 'src/paycheckSetting/paycheckSetting.service';
import {
  PaycheckSetting as PaycheckSettingModel,
  Prisma,
} from '@prisma/client';

@Controller()
export class PaycheckSettingController {
  constructor(
    private readonly paycheckSettingService: PaycheckSettingService,
  ) {}

  @Get('paycheckSettings/:id')
  async getPaycheckSettingByID(
    @Param('id') id: string,
  ): Promise<PaycheckSettingModel | null> {
    return this.paycheckSettingService.paycheckSetting({ id: Number(id) });
  }

  @Get('paycheckSettings')
  async getPaycheckSettings(): Promise<PaycheckSettingModel[]> {
    return this.paycheckSettingService.paycheckSettings({});
  }

  @Post('paycheckSettings')
  async createAPaycheckSetting(
    @Body()
    paycheckSettingData: Prisma.PaycheckSettingCreateInput,
  ): Promise<PaycheckSettingModel> {
    return this.paycheckSettingService.createPaycheckSetting(
      paycheckSettingData,
    );
  }

  @Patch('paycheckSettings/:id')
  async updatePaycheckSettingByID(
    @Param('id') id: string,
    @Body()
    paycheckSettingData: Partial<PaycheckSettingModel>,
  ): Promise<PaycheckSettingModel> {
    return this.paycheckSettingService.updatePaycheckSetting({
      data: paycheckSettingData,
      where: { id: Number(id) },
    });
  }

  @Delete('paycheckSettings/:id')
  async deletePaycheckSettingByID(
    @Param('id') id: string,
  ): Promise<PaycheckSettingModel> {
    return this.paycheckSettingService.deletePaycheckSetting({
      id: Number(id),
    });
  }
}
