import { Module } from '@nestjs/common';
import { AccountController } from 'src/account/account.controller';
import { PrismaService } from 'src/prisma.service';
import { AccountService } from 'src/account/account.service';

@Module({
  controllers: [AccountController],
  providers: [PrismaService, AccountService],
})
export class AccountModule {}
