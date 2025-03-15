import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PaycheckService } from 'src/paycheck/paycheck.service';
import { Paycheck as PaycheckModel, Prisma } from '@prisma/client';

@Controller()
export class PaycheckController {
  constructor(private readonly paycheckService: PaycheckService) {}

  @Get('paychecks/:id')
  async getPaycheckByID(
    @Param('id') id: string,
  ): Promise<PaycheckModel | null> {
    return this.paycheckService.paycheck({ id: Number(id) });
  }

  @Get('paychecks')
  async getPaychecks(): Promise<PaycheckModel[]> {
    return this.paycheckService.paychecks({});
  }

  @Post('paychecks')
  async createAPaycheck(
    @Body()
    paycheckData: Prisma.PaycheckCreateInput,
  ): Promise<PaycheckModel> {
    return this.paycheckService.createPaycheck(paycheckData);
  }

  @Patch('paychecks/:id')
  async updatePaycheckByID(
    @Param('id') id: string,
    @Body()
    paycheckData: Partial<PaycheckModel>,
  ): Promise<PaycheckModel> {
    return this.paycheckService.updatePaycheck({
      data: paycheckData,
      where: { id: Number(id) },
    });
  }

  @Delete('paychecks/:id')
  async deletePaycheckByID(@Param('id') id: string): Promise<PaycheckModel> {
    return this.paycheckService.deletePaycheck({ id: Number(id) });
  }
}
