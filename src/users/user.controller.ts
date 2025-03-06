import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { User as UserModel } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users/:id')
  async getUserByID(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.user({ id: Number(id) });
  }

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Post('users')
  async createAUser(
    @Body()
    userData: {
      first_name: string;
      last_name: string;
      email: string;
      image?: string;
    },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Patch('users/:id')
  async updateUserByID(
    @Param('id') id: string,
    @Body()
    userData: Partial<UserModel>,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      data: userData,
      where: { id: Number(id) },
    });
  }

  @Delete('users/:id')
  async deleteUserByID(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
