/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAssignmentDto } from './assignment.dto';
import { Assignment } from './assignment.schema';

@Injectable()
export class AssignmentsService {
  constructor(@InjectModel(Assignment.name) private assignmentModel: Model<Assignment>) {}

  async create(assignmentDto: CreateAssignmentDto): Promise<Assignment> {
    const createdAssignment = new this.assignmentModel(assignmentDto);
    return createdAssignment.save();
  }

  async findByAdmin(adminId: string): Promise<Assignment[]> {
    return this.assignmentModel.find({ admin: adminId }).exec();
  }

  async updateStatus(assessmentId: string, status: string, user: any): Promise<Assignment> {
    if (user.role !== 'admin') {
      throw new ForbiddenException('Only admins can update the assignment status');
    }
  
    const assignment = await this.assignmentModel.findOneAndUpdate(
      { assessmentId },  
      { status },
      { new: true }
    );
  
    if (!assignment) {
      throw new Error('Assignment not found');
    }
  
    return assignment;
  }
  
}
