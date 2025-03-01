import { Module } from '@nestjs/common';
import { UserController } from 'src/users/user.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/users/user.service';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService],
})
export class UserModule {}
