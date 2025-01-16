import { Component } from '@angular/core';

@Component({
  selector: 'classes',
  standalone: false,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  tiles = [
    { title: 'Warrior', imageUrl: 'https://placehold.co/100x75' },
    { title: 'Expert', imageUrl: 'https://placehold.co/100x75' },
    { title: 'Mage', imageUrl: 'https://placehold.co/100x75' },
  ];

  customtiles = { title: 'Create Custom', imageUrl: 'https://placehold.co/100x75' };
}
