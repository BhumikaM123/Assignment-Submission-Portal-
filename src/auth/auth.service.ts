/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service'; 
import { User } from 'src/users/users.schema'; 

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, 
    private jwtService: JwtService,
  ) {}

  async register(userDto: any): Promise<User> {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const createdUser = await this.usersService.create({ ...userDto, password: hashedPassword });
    return createdUser;
  }

  async login(username: string, password: string): Promise<{ accessToken: string }> {
    const user = await this.usersService.findOne(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

  const payload = { sub: user.userId, username: user.username, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
