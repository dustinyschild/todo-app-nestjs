import { Injectable } from '@nestjs/common';
import { Todo } from './todo.module';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  create(todo: Todo) {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }

  find(id: string): Todo {
    const todo = this.todos.find((t) => {
      console.log(id, t.id);

      return id === t.id;
    });

    if (!todo) {
      throw new Error('todo not found');
    }

    return todo;
  }

  update(newTodo: Todo): Todo {
    this.todos.map((todo) => {
      if (newTodo.id === todo.id) {
        return newTodo;
      }

      return todo;
    });

    return newTodo;
  }

  delete(id: string): void {
    this.todos = this.todos.reduce((acc, todo) => {
      if (todo.id !== id) {
        acc.push(todo);
      }

      return acc;
    }, [] as Todo[]);
  }
}
