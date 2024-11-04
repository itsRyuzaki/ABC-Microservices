import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDto } from './dto/user-login.dto';
import { userSignUpDto } from './dto/user-signup.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHealth(): string {
    return this.userService.getHealth();
  }

  @Post('login')
  loginUser(@Body() loginRequest: UserLoginDto): void {
    console.log(loginRequest);
  }

  @Post('signup')
  userSignUp(@Body() signupRequest: userSignUpDto): void {}
}
