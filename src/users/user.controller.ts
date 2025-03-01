import { Controller, Get, Param } from '@nestjs/common';
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
}
