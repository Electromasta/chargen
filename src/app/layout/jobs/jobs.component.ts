import { Component, Output, EventEmitter } from '@angular/core';
import { toArray } from '../../data/interfaces/attribute';
import { ArtsType, Job, Jobs, SpellType } from '../../data/interfaces/job';
import { FeatType } from '../../data/interfaces/progressions';
import { renderBonus } from '../../data/interfaces/attribute';
import { Progression, Progressions } from '../../data/interfaces/progressions';
import { Feat } from '../../data/interfaces/feats';

import { HighMageSpells } from '../../data/interfaces/spells/highmage-spells';
import { ElementalistSpells } from '../../data/interfaces/spells/elementalist-spells';
import { NecromancerSpells } from '../../data/interfaces/spells/necromancer-spells';

import { BardArts } from '../../data/interfaces/arts/bard-arts';
import { BeastMasterArts } from '../../data/interfaces/arts/beastmaster-arts';
import { DuelistArts } from '../../data/interfaces/arts/duelist-arts';
import { ElementalistArts } from '../../data/interfaces/arts/elementalist-arts';
import { HighMageArts } from '../../data/interfaces/arts/highmage-arts';
import { NecromancerArts } from '../../data/interfaces/arts/necromancer-arts';
import { PriestArts } from '../../data/interfaces/arts/priest-arts';
import { ShifterArts } from '../../data/interfaces/arts/skinshifter-arts';
import { VowedArts } from '../../data/interfaces/arts/vowed-arts';
import { WiseArts } from '../../data/interfaces/arts/wise-arts';

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

  computeSupernatural(powersource: ArtsType | SpellType)  {
    let abilities: Feat[];
    Jobs.PartialMage.artstype;

    switch(true)  {
      case (powersource === SpellType.HIGHSPELL):
        abilities = toArray(HighMageSpells); break;
      case (powersource === SpellType.ELEMENTALISTSPELL):
        abilities = toArray(ElementalistSpells); break;
      case (powersource === SpellType.NECROMANCERSPELL):
        abilities = toArray(NecromancerSpells); break;

      case (powersource === ArtsType.HIGH):
        abilities = toArray(HighMageArts); break;
      case (powersource === ArtsType.ELEMENTALIST):
        abilities = toArray(ElementalistArts); break;
      case (powersource === ArtsType.NECROMANCER):
        abilities = toArray(NecromancerArts); break;

      case (powersource === ArtsType.BARD):
        abilities = toArray(BardArts); break;
      case (powersource === ArtsType.BEASTMASTER):
        abilities = toArray(BeastMasterArts); break;
      case (powersource === ArtsType.DUELIST):
        abilities = toArray(DuelistArts); break;
      case (powersource === ArtsType.PRIEST):
        abilities = toArray(PriestArts); break;
      case (powersource === ArtsType.SKINSHIFTER):
        abilities = toArray(ShifterArts); break;
      case (powersource === ArtsType.VOWED):
        abilities = toArray(VowedArts); break;
      case (powersource === ArtsType.WISE):
        abilities = toArray(WiseArts); break;
      default:
        abilities = toArray(HighMageSpells); break;
    }
    return abilities;
  }
}
