import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'speed-label',
  standalone: false,
  
  templateUrl: './speed-label.component.html',
  styleUrl: './speed-label.component.css'
})
export class SpeedLabelComponent {
  @Input() label: string = "";
  @Input() for: string = "";
  @Input() control?: AbstractControl;
}
