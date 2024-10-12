import { IsString, IsNotEmpty, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsIn(['user', 'admin'], {
    message: 'Role must be either "user" or "admin"',
  })
  role: string;
}
