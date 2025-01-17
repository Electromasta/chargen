import { Component } from '@angular/core';
import { getBonus, renderBonus, toArray } from '../../data/interfaces/attribute';
import { Progression, Progressions } from '../../data/interfaces/progressions';
import { Job, Jobs, ErrorJobs } from '../../data/interfaces/job';
import { Background, Backgrounds } from '../../data/interfaces/background';
import { Race, Races } from '../../data/interfaces/races';
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'state-tabs',
  standalone: false,
  templateUrl: './state-tabs.component.html',
  styleUrl: './state-tabs.component.css'
})
export class StateTabsComponent {
  Backgrounds: Array<Background> = toArray(Backgrounds);
  Races: Array<Race> = toArray(Races);
  Jobs: Array<Job> = toArray(Jobs);
  getBonus = getBonus; renderBonus = renderBonus;
  faCaretDown = faCaretDown; faPlus = faPlus;

  attributes: number[] = [ 10, 10, 10, 10, 10, 10 ];
  jobs: Array<Job> = [];
  progression: Progression = Progressions.Expert;
  armor: number = 12;
  background: Background = Backgrounds.Peasant;
  race: Race = Races.Human;

  consumeAttribute(a: number[]) { this.attributes = a; }
  consumeJobs(j: Job[]) { this.jobs = j; }
  consumeProgression(p: Progression) { this.progression = p; }
  consumeArmor(a: string) { this.armor = +a; }

  renderJobs()  {
    if (this.jobs.length === 0) return ErrorJobs.DefaultJob.name;
    return this.jobs.map((j) => j.name).join(" / ");
  }

  calculateSavingThrow(a1: number, a2: number)  {
    const selected = (a1 > a2) ? a1 : a2;
    return 15 - this.getBonus(selected);
  }

  pickBackground(b: Background)  { this.background = b; }
  pickRace(r: Race) { this.race = r; }
  pickJob(j: Job) { if (this.jobs.length < 2) this.jobs.push(j); }
}
