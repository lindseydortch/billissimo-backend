import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BillService } from 'src/bill/bill.service';
import { Bill as BillModel, Prisma } from '@prisma/client';

@Controller()
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Get('bills/:id')
  async getBillByID(@Param('id') id: string): Promise<BillModel | null> {
    return this.billService.bill({ id: Number(id) });
  }

  @Get('bills')
  async getBills(): Promise<BillModel[]> {
    return this.billService.bills({});
  }

  @Post('bills')
  async createABill(
    @Body()
    billData: Prisma.BillCreateInput,
  ): Promise<BillModel> {
    return this.billService.createBill(billData);
  }

  @Patch('bills/:id')
  async updateBillByID(
    @Param('id') id: string,
    @Body()
    billData: Partial<BillModel>,
  ): Promise<BillModel> {
    return this.billService.updateBill({
      data: billData,
      where: { id: Number(id) },
    });
  }

  @Delete('bills/:id')
  async deleteBillByID(@Param('id') id: string): Promise<BillModel> {
    return this.billService.deleteBill({ id: Number(id) });
  }
}
