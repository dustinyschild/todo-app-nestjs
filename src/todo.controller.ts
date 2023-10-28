import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.module';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  find(@Param() { id }: { id: string }): Todo {
    console.log(id);

    return this.todoService.find(id);
  }

  @Post()
  create(@Body() body: Todo) {
    return this.todoService.create(body);
  }
}
