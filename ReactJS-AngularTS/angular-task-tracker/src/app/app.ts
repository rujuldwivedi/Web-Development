import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  tasks: string[] = [];
  input: string = '';

  addTask() {
    if (!this.input.trim()) return;
    this.tasks.push(this.input.trim());
    this.input = '';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
