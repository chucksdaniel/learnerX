import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: any) {
    return this.authService.signup();
  }

  @Post('login')
  login() {
    return this.authService.login();
  }
}
