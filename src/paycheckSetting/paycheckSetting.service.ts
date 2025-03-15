import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PaycheckSetting, Prisma } from '@prisma/client';

@Injectable()
export class PaycheckSettingService {
  constructor(private prisma: PrismaService) {}

  async paycheckSetting(
    paycheckSettingWhereUniqueInput: Prisma.PaycheckSettingWhereUniqueInput,
  ): Promise<PaycheckSetting | null> {
    return this.prisma.paycheckSetting.findUnique({
      where: paycheckSettingWhereUniqueInput,
    });
  }

  async paycheckSettings(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PaycheckSettingWhereUniqueInput;
    where?: Prisma.PaycheckSettingWhereInput;
    orderBy?: Prisma.PaycheckSettingOrderByWithRelationInput;
  }): Promise<PaycheckSetting[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.paycheckSetting.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPaycheckSetting(
    data: Prisma.PaycheckSettingCreateInput,
  ): Promise<PaycheckSetting> {
    return this.prisma.paycheckSetting.create({
      data,
    });
  }

  async updatePaycheckSetting(params: {
    where: Prisma.PaycheckSettingWhereUniqueInput;
    data: Prisma.PaycheckSettingUpdateInput;
  }): Promise<PaycheckSetting> {
    const { where, data } = params;
    return this.prisma.paycheckSetting.update({
      data,
      where,
    });
  }

  async deletePaycheckSetting(
    where: Prisma.PaycheckSettingWhereUniqueInput,
  ): Promise<PaycheckSetting> {
    return this.prisma.paycheckSetting.delete({
      where,
    });
  }
}
