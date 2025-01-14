import { Component } from '@angular/core';
import { toArray } from '../../data/interfaces/attribute';
import { Skill, Skills } from '../../data/interfaces/skill';

@Component({
  selector: 'skills',
  standalone: false,
  
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Array<Skill> = toArray(Skills);
  picked: Array<Skill> = [];

  train(skill: Skill) {
    this.picked.push(skill);
  }

  remove(i: number) {
    this.picked.splice(i, 1);
  }
}
