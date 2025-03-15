import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { Account as AccountModel, Prisma } from '@prisma/client';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('accounts/:id')
  async getAccountByID(@Param('id') id: string): Promise<AccountModel | null> {
    return this.accountService.account({ id: Number(id) });
  }

  @Get('accounts')
  async getAccounts(): Promise<AccountModel[]> {
    return this.accountService.accounts({});
  }

  @Post('accounts')
  async createAAccount(
    @Body()
    accountData: Prisma.AccountCreateInput,
  ): Promise<AccountModel> {
    return this.accountService.createAccount(accountData);
  }

  @Patch('accounts/:id')
  async updateAccountByID(
    @Param('id') id: string,
    @Body()
    accountData: Partial<AccountModel>,
  ): Promise<AccountModel> {
    return this.accountService.updateAccount({
      data: accountData,
      where: { id: Number(id) },
    });
  }

  @Delete('accounts/:id')
  async deleteAccountByID(@Param('id') id: string): Promise<AccountModel> {
    return this.accountService.deleteAccount({ id: Number(id) });
  }
}
