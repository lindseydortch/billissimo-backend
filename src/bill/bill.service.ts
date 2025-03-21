import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Bill, Prisma } from '@prisma/client';

@Injectable()
export class BillService {
  constructor(private prisma: PrismaService) {}

  async bill(
    billWhereUniqueInput: Prisma.BillWhereUniqueInput,
  ): Promise<Bill | null> {
    return this.prisma.bill.findUnique({
      where: billWhereUniqueInput,
    });
  }

  async bills(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BillWhereUniqueInput;
    where?: Prisma.BillWhereInput;
    orderBy?: Prisma.BillOrderByWithRelationInput;
  }): Promise<Bill[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.bill.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createBill(data: Prisma.BillCreateInput): Promise<Bill> {
    return this.prisma.bill.create({
      data,
    });
  }

  async updateBill(params: {
    where: Prisma.BillWhereUniqueInput;
    data: Prisma.BillUpdateInput;
  }): Promise<Bill> {
    const { where, data } = params;
    return this.prisma.bill.update({
      data,
      where,
    });
  }

  async deleteBill(where: Prisma.BillWhereUniqueInput): Promise<Bill> {
    return this.prisma.bill.delete({
      where,
    });
  }
}
