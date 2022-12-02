import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone-todo';
}
