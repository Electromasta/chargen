import { Label } from "./label";

export interface Attribute extends Label {}

export class Attributes {
    static readonly Strength: Attribute = { name: "Strength", description: "Lifting heavy weights, breaking things, melee combat, carrying gear" };
    static readonly Dexterity: Attribute = { name: "Dexterity", description: "Speed, evasion, manual dexterity, reaction time, initiative" };
    static readonly Constitution: Attribute = { name: "Constitution", description: "Hardiness, enduring injury, resisting poisons, going without food or water" };
    static readonly Intelligence: Attribute = { name: "Intelligence", description: "Memory, reasoning, intellectual skills, general education" };
    static readonly Wisdom: Attribute = { name: "Wisdom", description: "Noticing things, making judgements, reading sitautions, intuition" };
    static readonly Charisma: Attribute = { name: "Charisma", description: "Force of character, charming others, attracting attention, winning loyalty" };
}

export function toArray(me: any) { return Object.keys(me).map(key => me[key as keyof typeof me]); }
export function renderBonus(bonus: number)  { return (bonus>=0) ? "+" + bonus : bonus; }
export function getBonus(score: number)  { return (score >=10) ? Math.floor((score-10) / 4) : -Math.floor((11-score) / 4); }