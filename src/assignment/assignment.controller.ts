/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Request,
  ValidationPipe,
  UsePipes,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { CreateAssignmentDto } from './assignment.dto';
import { AssignmentsService } from './assignment.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('assignments')
export class AssignmentsController {
  constructor(private assignmentsService: AssignmentsService) {}

  @Post('upload')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async uploadAssignment(@Body() createAssignmentDto: CreateAssignmentDto) {
    return this.assignmentsService.create(createAssignmentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAssignmentsForAdmin(@Request() req: any) {
    const userId = req.user.userId;
    return this.assignmentsService.findByAdmin(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/accept')
  async acceptAssignment(@Param('id') id: string, @Request() req: any) {
    const user = req.user;

    if (user.role !== 'admin') {
      throw new ForbiddenException('Only admins can accept assignments');
    }

    return this.assignmentsService.updateStatus(id, 'accepted', user);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/reject')
  async rejectAssignment(@Param('id') id: string, @Request() req: any) {
    const user = req.user;

    if (user.role !== 'admin') {
      throw new ForbiddenException('Only admins can reject assignments');
    }

    return this.assignmentsService.updateStatus(id, 'rejected', user);
  }
}
