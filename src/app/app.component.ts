import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorDirective } from './color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ColorDirective],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone-todo';
}
