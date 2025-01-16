import { Component, Input  } from '@angular/core';
import { Feat } from '../../../data/interfaces/feats';

@Component({
  selector: 'feat-picker',
  standalone: false,
  
  templateUrl: './feat-picker.component.html',
  styleUrl: './feat-picker.component.css'
})
export class FeatPickerComponent {
  @Input() label: string = "";
  @Input() feats: Array<Feat> = [];
  picked: Array<Feat> = [];

  push(feat: Feat) { this.picked.push(feat); }
  pop(i: number) { this.picked.splice(i, 1); }
}
