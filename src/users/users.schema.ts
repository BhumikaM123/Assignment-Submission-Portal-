/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; 

export type UserDocument = User & Document;

@Schema({versionKey: false})

export class User {
  @Prop({ default: uuidv4 })  
  userId: string;

  @Prop({ unique: true })
  username: string;

  @Prop()
  password: string;

  @Prop({ type: String, enum: ['user', 'admin'], default: 'user' })
  role: 'user' | 'admin';
}

export const UserSchema = SchemaFactory.createForClass(User);
