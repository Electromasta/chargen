import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  standalone: false,
  
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent  {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
}