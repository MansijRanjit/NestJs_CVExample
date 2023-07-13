import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
    return this.service.create(body.email, body.password);
  }

  @Get()
  getalluser() {
    return this.service.findAll();
  }

  @Get('/:id')
  getbyid(@Param('id') id: string) {
    return this.service.findOne(parseInt(id));
  }

  @Get()
  getbyemail(@Query('email') email: string) {
    console.log(email);
    return this.service.findbyEmail(email);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.service.update(parseInt(id), body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.service.remove(parseInt(id));
  }
}
