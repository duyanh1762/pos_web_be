import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private jwtService:JwtService,
  ) {}

  async validate(email: string, password: string):Promise<any>{
    let user: UserEntity = await this.userRepo.findOne({
      where: { email: email },
    });
    if (!user || user.password != password) {
        return { error:"User không tồn tại"};
    }else{
        return {userID:user.id,email:user.email};
    }
  }
  
  async login(user: any) {
    const payload = { userID:user.userID ,email:user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
