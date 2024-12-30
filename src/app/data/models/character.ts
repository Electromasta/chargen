import { Ability } from './attribute';
import { Background } from './background';
import { Job } from './job';
import { Skill } from './skill';

export interface Character  {
    level: number,
    skillpoints: number,
    attributes: Ability[],
    background: Background,
    skills: Skill[],
    jobs: Job[],
    mergedJob: Job,
    spells: [],
    feats: [],
    items: []
}