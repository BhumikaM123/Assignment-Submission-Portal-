import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AssignmentsModule } from './assignment/assignment.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/assignment-submission'), 
    UsersModule,
    AssignmentsModule,
    AuthModule,
  ],
})
export class AppModule {}
