import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodosController } from './todos.controller';

export interface Todo {
  id: string;
  title: string;
  description: string;
}

@Module({
  controllers: [TodoController, TodosController],
  providers: [TodoService],
})
export class TodoModule {}
