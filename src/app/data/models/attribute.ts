export interface Ability    {
    name: string,
    score: number,
    mod: number
}

export var baseAttributes: Ability[] = [
    { name: "Strength", score: 14, mod: 1 },
    { name: "Dexterity", score: 12, mod: 0 },
    { name: "Constitution", score: 11, mod: 0 },
    { name: "Intelligence", score: 10, mod: 0 },
    { name: "Wisdom", score: 9, mod: 0 },
    { name: "Charisma", score: 7, mod: -1 }
];