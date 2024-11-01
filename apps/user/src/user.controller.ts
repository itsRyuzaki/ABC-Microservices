import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHealth(): string {
    return this.userService.getHealth();
  }

  @Post('login')
  loginUser(@Body() request: UserLoginDto): void {
    console.log(request);
  }
}
