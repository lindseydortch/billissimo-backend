import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BillToPaycheck, Prisma } from '@prisma/client';

@Injectable()
export class BillToPaycheckService {
  constructor(private prisma: PrismaService) {}

  async billToPaycheck(
    billToPaycheckWhereUniqueInput: Prisma.BillToPaycheckWhereUniqueInput,
  ): Promise<BillToPaycheck | null> {
    return this.prisma.billToPaycheck.findUnique({
      where: billToPaycheckWhereUniqueInput,
    });
  }

  async billToPaychecks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BillToPaycheckWhereUniqueInput;
    where?: Prisma.BillToPaycheckWhereInput;
    orderBy?: Prisma.BillToPaycheckOrderByWithRelationInput;
  }): Promise<BillToPaycheck[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.billToPaycheck.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createBillToPaycheck(
    data: Prisma.BillToPaycheckCreateInput,
  ): Promise<BillToPaycheck> {
    return this.prisma.billToPaycheck.create({
      data,
    });
  }

  // async updateBillToPaycheck(params: {
  //   where: Prisma.BillToPaycheckWhereUniqueInput;
  //   data: Prisma.BillToPaycheckUpdateInput;
  // }): Promise<BillToPaycheck> {
  //   const { where, data } = params;
  //   return this.prisma.billToPaycheck.update({
  //     data,
  //     where,
  //   });
  // }

  async deleteBillToPaycheck(
    where: Prisma.BillToPaycheckWhereUniqueInput,
  ): Promise<BillToPaycheck> {
    return this.prisma.billToPaycheck.delete({
      where,
    });
  }
}
