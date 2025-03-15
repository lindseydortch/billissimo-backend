import { Module } from '@nestjs/common';
import { PaycheckController } from 'src/paycheck/paycheck.controller';
import { PrismaService } from 'src/prisma.service';
import { PaycheckService } from 'src/paycheck/paycheck.service';

@Module({
  controllers: [PaycheckController],
  providers: [PrismaService, PaycheckService],
})
export class PaycheckModule {}
