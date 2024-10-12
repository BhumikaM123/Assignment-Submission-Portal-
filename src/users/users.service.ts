/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema'; 
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({ username: userDto.username }).exec();
    
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }
    const createdUser = new this.userModel(userDto); 
    return createdUser.save(); 
  }

  async findOne(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec(); 
  }

  async findAllAdmins(): Promise<User[]> {
    return this.userModel.find({ role: 'admin' }).exec();
  }
}
