import { Attribute } from './attribute';
import { Background } from './background';
import { Job } from './job';
import { Skill } from './skill';

export interface CharacterSheet {
    level: number,
    skillpoints: number,
    attributes: Attribute[],
    background: Background,
    skills: Skill[],
    jobs: Job[],
    mergedJob: Job,
    spells: [],
    feats: [],
    items: []
}