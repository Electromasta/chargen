export interface Job    {
    name: String;
    focus: String;
    hitdice: number;
    bab: number;
}

var expertRogue: Job = { name: "Expert", focus: "Expert", hitdice: 6, bab: 5 };
var expertAlchemist: Job = { name: "Alchemist", focus: "Expert", hitdice: 6, bab: 5 };
var expertBard: Job = { name: "Bard", focus: "Expert", hitdice: 6, bab: 5 };
var warriorBarbarian: Job = { name: "Warrior", focus: "Warrior", hitdice: 10, bab: 10 };
var warriorFighter: Job = { name: "Fighter", focus: "Warrior", hitdice: 10, bab: 10 };
var warriorDuelist: Job = { name: "Duelist", focus: "Warrior", hitdice: 6, bab: 10 };
var mageHighMage: Job = { name: "High Mage", focus: "Mage", hitdice: 4, bab: 2 };
var mageElementalist: Job = { name: "Elementalist", focus: "Mage", hitdice: 4, bab: 2 };
var mageNecromancer: Job = { name: "Necromancer", focus: "Mage", hitdice: 4, bab: 2 };
var specialistVowed: Job = { name: "Vowed", focus: "Specialist", hitdice: 4, bab: 2 };
var specialistSkinshifter: Job = { name: "Skinshifter", focus: "Specialist", hitdice: 4, bab: 2 };
var specialistBeastmaster: Job = { name: "Beastmaster", focus: "Specialist", hitdice: 4, bab: 2 };
var specialistPriest: Job = { name: "Priest", focus: "Specialist", hitdice: 4, bab: 2 };

export var allJobs = [
    { label: "Expert", value: expertRogue, selected: true },
    { label: "Alchemist", value: expertAlchemist, selected: false },
    { label: "Bard", value: expertBard, selected: false },
    { label: "Warrior", value: warriorBarbarian, selected: false },
    { label: "Fighter", value: warriorFighter, selected: false },
    { label: "Duelist", value: warriorDuelist, selected: false },
    { label: "High Mage", value: mageHighMage, selected: false },
    { label: "Elementalist", value: mageElementalist, selected: false },
    { label: "Necromancer", value: mageNecromancer, selected: false },
    { label: "Vowed", value: specialistVowed, selected: false },
    { label: "Skinshifter", value: specialistSkinshifter, selected: false },
    { label: "Beastmaster", value: specialistBeastmaster, selected: false },
    { label: "Priest", value: specialistPriest, selected: false }
];
