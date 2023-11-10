import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  async create(todo: TodoDto) {
    const newTodo = this.todoRepository.create(todo);

    const inserted = await this.todoRepository.insert(newTodo);

    return inserted.identifiers[0];
  }

  async findAll(userId: string) {
    return this.todoRepository.findBy({ userId });
  }

  async findOne(id: number) {
    return this.todoRepository.findOneBy({ id });
  }

  async update(updateTodoDto: TodoDto, id: number) {
    const { userId } = updateTodoDto;

    return this.todoRepository.update(
      { id, userId },
      { ...updateTodoDto, modifiedDate: new Date() },
    );
  }

  delete(id: number) {
    return this.todoRepository.delete({ id });
  }
}
