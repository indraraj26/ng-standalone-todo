import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListModule } from './todo-list/todo-list.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, TodoListModule, AddTodoComponent],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone-todo';
}
