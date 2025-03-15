import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  // Patch,
  Delete,
} from '@nestjs/common';
import { BillToPaycheckService } from 'src/billToPaycheck/billToPaycheck.service';
import { BillToPaycheck as BillToPaycheckModel, Prisma } from '@prisma/client';

@Controller()
export class BillToPaycheckController {
  constructor(private readonly billToPaycheckService: BillToPaycheckService) {}

  @Get('billToPaychecks/:id')
  async getBillToPaycheckByID(
    @Param('id') id: string,
  ): Promise<BillToPaycheckModel | null> {
    return this.billToPaycheckService.billToPaycheck({ id: Number(id) });
  }

  @Get('billToPaychecks')
  async getBillToPaychecks(): Promise<BillToPaycheckModel[]> {
    return this.billToPaycheckService.billToPaychecks({});
  }

  @Post('billToPaychecks')
  async createABillToPaycheck(
    @Body()
    billToPaycheckData: Prisma.BillToPaycheckCreateInput,
  ): Promise<BillToPaycheckModel> {
    return this.billToPaycheckService.createBillToPaycheck(billToPaycheckData);
  }

  // @Patch('billToPaychecks/:id')
  // async updateBillToPaycheckByID(
  //   @Param('id') id: string,
  //   @Body()
  //   billToPaycheckData: Partial<BillToPaycheckModel>,
  // ): Promise<BillToPaycheckModel> {
  //   return this.billToPaycheckService.updateBillToPaycheck({
  //     data: billToPaycheckData,
  //     where: { id: Number(id) },
  //   });
  // }

  @Delete('billToPaychecks/:id')
  async deleteBillToPaycheckByID(
    @Param('id') id: string,
  ): Promise<BillToPaycheckModel> {
    return this.billToPaycheckService.deleteBillToPaycheck({ id: Number(id) });
  }
}
