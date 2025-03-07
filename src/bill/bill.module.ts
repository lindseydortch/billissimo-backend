import { Module } from '@nestjs/common';
import { BillController } from 'src/bill/bill.controller';
import { PrismaService } from 'src/prisma.service';
import { BillService } from 'src/bill/bill.service';

@Module({
  controllers: [BillController],
  providers: [PrismaService, BillService],
})
export class BillModule {}
