import { Module } from '@nestjs/common';
import { BillToPaycheckController } from 'src/billToPaycheck/billToPaycheck.controller';
import { PrismaService } from 'src/prisma.service';
import { BillToPaycheckService } from 'src/billToPaycheck/billToPaycheck.service';

@Module({
  controllers: [BillToPaycheckController],
  providers: [PrismaService, BillToPaycheckService],
})
export class BillToPaycheckModule {}
