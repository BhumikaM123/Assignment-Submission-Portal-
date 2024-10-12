/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; 

export type AssignmentDocument = Assignment & Document;

@Schema({ collection: 'assignments',versionKey: false}) 
export class Assignment {

  @Prop({ default: uuidv4 })  
  assessmentId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  task: string;

  @Prop({ required: true })
  admin: string;

  @Prop({ type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' })
  status: 'pending' | 'accepted' | 'rejected';

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);
