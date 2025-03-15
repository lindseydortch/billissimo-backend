import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Paycheck, Prisma } from '@prisma/client';

@Injectable()
export class PaycheckService {
  constructor(private prisma: PrismaService) {}

  async paycheck(
    paycheckWhereUniqueInput: Prisma.PaycheckWhereUniqueInput,
  ): Promise<Paycheck | null> {
    return this.prisma.paycheck.findUnique({
      where: paycheckWhereUniqueInput,
    });
  }

  async paychecks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PaycheckWhereUniqueInput;
    where?: Prisma.PaycheckWhereInput;
    orderBy?: Prisma.PaycheckOrderByWithRelationInput;
  }): Promise<Paycheck[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.paycheck.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPaycheck(data: Prisma.PaycheckCreateInput): Promise<Paycheck> {
    return this.prisma.paycheck.create({
      data,
    });
  }

  async updatePaycheck(params: {
    where: Prisma.PaycheckWhereUniqueInput;
    data: Prisma.PaycheckUpdateInput;
  }): Promise<Paycheck> {
    const { where, data } = params;
    return this.prisma.paycheck.update({
      data,
      where,
    });
  }

  async deletePaycheck(
    where: Prisma.PaycheckWhereUniqueInput,
  ): Promise<Paycheck> {
    return this.prisma.paycheck.delete({
      where,
    });
  }
}
