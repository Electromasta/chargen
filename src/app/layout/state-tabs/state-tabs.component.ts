import { Component } from '@angular/core';
import { getBonus, renderBonus, toArray } from '../../data/interfaces/attribute';
import { Progression, Progressions } from '../../data/interfaces/progressions';
import { Job, Jobs } from '../../data/interfaces/job';
import { Background, Backgrounds } from '../../data/interfaces/background';

@Component({
  selector: 'state-tabs',
  standalone: false,
  templateUrl: './state-tabs.component.html',
  styleUrl: './state-tabs.component.css'
})
export class StateTabsComponent {
  Backgrounds: Array<Background> = toArray(Backgrounds);
  getBonus = getBonus; renderBonus = renderBonus;

  attributes: number[] = [ 10, 10, 10, 10, 10, 10 ];
  jobs: Array<Job> = [ Jobs.PartialExpert ];
  progression: Progression = Progressions.Expert;
  armor: number = 12;
  background: Background = Backgrounds.Peasant;

  consumeAttribute(a: number[]) { this.attributes = a; }
  consumeJobs(j: Job[]) { this.jobs = j; }
  consumeProgression(p: Progression) { this.progression = p; }
  consumeArmor(a: string) { this.armor = +a; }

  renderJobs()  {
    return "Warrior";
  }

  calculateSavingThrow(a1: number, a2: number)  {
    const selected = (a1 > a2) ? a1 : a2;
    return 15 - this.getBonus(selected);
  }

  pickBackground(b: Background)  {
    this.background = b;
  }
}
