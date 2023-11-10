import { IsString, IsBoolean } from 'class-validator';

export class TodoDto {
  @IsString()
  userId: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  isCompleted: boolean;
}
