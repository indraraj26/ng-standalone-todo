import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoListModule } from '../todo-list/todo-list.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, TodoListModule, AddTodoComponent],
  standalone: true,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
