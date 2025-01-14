import { Component, Output, EventEmitter } from '@angular/core';
import { toArray } from '../../data/interfaces/attribute';
import { Job, Jobs } from '../../data/interfaces/job';
import { FeatType } from '../../data/interfaces/progressions';
import { renderBonus } from '../../data/interfaces/attribute';
import { Progression, Progressions } from '../../data/interfaces/progressions';

@Component({
  selector: 'jobs',
  standalone: false,
  
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  @Output() jobsEvent = new EventEmitter<Array<Job>>();
  @Output() progressionEvent = new EventEmitter<Progression>();
  jobs: Array<Job> = toArray(Jobs);
  picked: Array<Job> = [];
  computedProgression: Progression = Progressions.ErrorProgression;
  FeatType = FeatType;

  emitJobs() { this.jobsEvent.emit(this.picked); }
  emitProg() { this.progressionEvent.emit(this.computedProgression); }

  train(job: Job) {
    this.picked.push(job);

    if (this.picked.length == 2) 
      this.computeDualClass();
    else
      this.computedProgression = job.progression;

    this.emitJobs();
    this.emitProg();
  }

  remove(i: number) {
    this.picked.splice(i, 1);
  }

  renderBonus(n: number) {
    return renderBonus(n);
  }

  computeDualClass()  {
    var merged: number = this.picked[0].jobtype + this.picked[1].jobtype;
    switch(true)  {
      case (merged === 2):
        this.computedProgression = Progressions.Warrior; break;
      case (merged === 11):
        this.computedProgression = Progressions.ExpertWarrior; break;
      case (merged === 20):
        this.computedProgression = Progressions.Expert; break;
      case (merged === 101):
        this.computedProgression = Progressions.WarriorMage; break;
      case (merged === 110):
        this.computedProgression = Progressions.ExpertMage; break;
      case (merged === 200):
          this.computedProgression = Progressions.DualMage; break;
      case (merged === 1001):
        this.computedProgression = Progressions.SpecialistWarrior; break;
      case (merged === 1010):
        this.computedProgression = Progressions.SpecialistExpert; break;
      case (merged === 1100):
        this.computedProgression = Progressions.SpecialistMage; break;
      case (merged === 2000):
        this.computedProgression = Progressions.DualSpecialist; break;
      default:
        this.computedProgression = Progressions.ErrorProgression; break;
    }
  }
}
