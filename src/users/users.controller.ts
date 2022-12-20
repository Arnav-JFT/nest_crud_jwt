import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('token')
  jwt(@Body('user') user: string) {
    return this.usersService.jwt(user);
  }
  @Post()
  create(
    @Body('name') name: string,
    @Body('job') job: string,
    @Body('salary') salary: number,
  ) {
    return this.usersService.create(name, job, salary);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('job') job: string,
    @Body('salary') salary: number,
  ) {
    return this.usersService.update(id, name, job, salary);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
