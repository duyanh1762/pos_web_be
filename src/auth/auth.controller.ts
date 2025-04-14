import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('login')
    async login(@Body() body: { email: string; password: string }) {
      const user = await this.authService.validate(body.email, body.password);
      if(user.error){
        return {error:user.error};
      }else{
        return this.authService.login(user);
      }
    }
}
