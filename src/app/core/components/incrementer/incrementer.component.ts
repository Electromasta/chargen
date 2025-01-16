import { Component } from '@angular/core';

@Component({
  selector: 'incrementer',
  standalone: false,
  
  templateUrl: './incrementer.component.html',
  styleUrl: './incrementer.component.css'
})
export class IncrementerComponent {
  count: number = 0;
  increment() { this.count++; }
  decrement() { this.count--; }
}
