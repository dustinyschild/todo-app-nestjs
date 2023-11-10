import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('all')
  findAll(@Param() { userId }: { userId: string }) {
    return this.todoService.findAll(userId);
  }

  @Get(':id')
  find(@Param() { id }: { id: number }) {
    return this.todoService.findOne(id);
  }

  @Post()
  create(@Body() createTodoDto: TodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Put(':id')
  update(@Body() updateTodoDto: TodoDto, @Param() { id }: { id: number }) {
    return this.todoService.update(updateTodoDto, id);
  }

  @Delete(':id')
  delete(@Param() { id }: { id: number }) {
    return this.todoService.delete(id);
  }
}
