import { Component } from '@angular/core';
import { toArray } from '../../data/interfaces/attribute';
import { Feat, Feats } from '../../data/interfaces/feats';

@Component({
  selector: 'features',
  standalone: false,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  feats: Array<Feat> = toArray(Feats);
  picked: Array<Feat> = [];

  train(feat: Feat) {
    this.picked.push(feat);
  }

  remove(i: number) {
    this.picked.splice(i, 1);
  }
}
