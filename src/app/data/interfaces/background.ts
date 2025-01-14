import { Label } from './label';
import { Skill, Skills } from './skill';

export interface Background extends Label {
    free: Skill,
    quick: Skill[],
    learning: Skill[]
}

const artisanDesc = "Your hero was a crafter of some variety, whether a blacksmith, carpenter, shipwright, weaver, or maker of more exotic goods.";
const barbDesc = "Your people or past were counted savage even in this brutal world.";
const carterDesc = "Overland transport is hard and dangerous, and it requires an equally hard breed of men and women to carry it out.";
const courtDesc = "Your hero made a profession of companionship, whether carnel or otherwise.";
const criminalDesc = "Some would argue that all advenrurers are criminals sooner or later, but your hero made it their profession from an early age.";

const hunterDesc = "Both primitive tribals and bored nobles require hunts for their table and their pleasures, and such efforts require professional hunters to help in their work.";
const laborDesc = "In the city, the great mass of unskilled workers are laborers, day-workers and help employed by artisans and craftsmen of the town.";
const merchantDesc = "Merchants range from the gilded merchant-princes of the great trading cities to the humble peddlers who roam between villages with packs full of goods.";
const nobleDesc = "Nobility is a quality that varies from cultures, some bestowing it for virtue, others by blood, and still others who fulfill a roles in the culture.";
const nomadDesc = "Some peoples are force to travel far to find their sustenance, whether they are beast-riders, drivers of great wagons, or simple masses of people ways-walking.";

const peasantDesc  = "A peasants life is never easy, though in some lands its a kinder fate than others.";
const performerDesc  = "Singers, dancers, musicians, actors, poets, orators, and all other entertainers and edifiers might be found here.";
const physicianDesc  = "Your hero is classically trained professional or a local herbalist learning by intuition.";
const priestDesc  = "Priests live as moral exemplars, teaching them of ethical demands and encouraging their faith.";
const sailorDesc  = "your hero was a sailor, a voyager on the salt tides or deep rivers of their home.";

const scholarDesc  = "Dedicated schoalrs are few and far between in this world, but your hero is one of those rarities.";
const slaveDesc  = "Slavery is a short, brutal existance in mines and manufactories, until one fateful day they escaped.";
const soldierDesc  = "Mercenary, regular soldier, temple knights, militiamen or raider, your hero has made their living by war.";
const thugDesc  = "Village bully, street ruffian, assassin, bandit, or outlaw, you are used to getting what you want through the strength of your arms.";
const wandererDesc  = "Some people simply have no home, and your hero is one such unfortunate.";

export class Backgrounds {
    static readonly Artisan: Background = { name: "Artisan", description: artisanDesc, free: Skills.Crafting, quick: [ Skills.Deception, Skills.Persuasion ], learning: [ Skills.Arcane, Skills.Lore, Skills.Perception ] };
    static readonly Barbarian: Background = { name: "Barbarian", description: barbDesc, free: Skills.Survival, quick: [ Skills.Martial, Skills.Perception ], learning: [ Skills.Intimidation, Skills.Athletics, Skills.Persuasion ] };
    static readonly Carter: Background = { name: "Carter", description: carterDesc, free: Skills.Riding, quick: [ Skills.Insight, Skills.Crafting ], learning: [ Skills.Acrobatics, Skills.Persuasion, Skills.Athletics ] };
    static readonly Courtesan: Background = { name: "Courtesan", description: courtDesc, free: Skills.Perform, quick: [ Skills.Perception, Skills.Persuasion ], learning: [ Skills.Deception, Skills.Insight, Skills.Prayer ] };
    static readonly Criminal: Background = { name: "Criminal", description: criminalDesc, free: Skills.Stealth, quick: [ Skills.Acrobatics, Skills.Thievery ], learning: [ Skills.Brawling, Skills.Perception, Skills.Deception ] };

    static readonly Hunter: Background = { name: "Hunter", description: hunterDesc, free: Skills.Archery, quick: [ Skills.Survival, Skills.Stealth ], learning: [ Skills.Acrobatics, Skills.Riding, Skills.Medicine ] };
    static readonly Laborer: Background = { name: "Laborer", description: laborDesc, free: Skills.Crafting, quick: [ Skills.Athletics, Skills.Dungeoneering ], learning: [ Skills.Persuasion, Skills.Riding, Skills.Prayer ] };
    static readonly Merchant: Background = { name: "Merchant", description: merchantDesc, free: Skills.Persuasion, quick: [ Skills.Deception, Skills.Lore ], learning: [ Skills.Martial, Skills.Insight, Skills.Crafting ] };
    static readonly Noble: Background = { name: "Noble", description: nobleDesc, free: Skills.Persuasion, quick: [ Skills.Lore, Skills.Martial ], learning: [ Skills.Prayer, Skills.Riding, Skills.Intimidation ] };
    static readonly Nomad: Background = { name: "Nomad", description: nomadDesc, free: Skills.Riding, quick: [ Skills.Archery, Skills.Perception ], learning: [ Skills.Survival, Skills.Acrobatics, Skills.Insight ] };

    static readonly Peasant: Background = { name: "Peasant", description: peasantDesc, free: Skills.Athletics, quick: [ Skills.Stealth, Skills.Thievery ], learning: [ Skills.Persuasion, Skills.Perception, Skills.Survival ] };
    static readonly Performer: Background = { name: "Performer", description: performerDesc, free: Skills.Perform, quick: [ Skills.Deception, Skills.Acrobatics ], learning: [ Skills.Stealth, Skills.Arcane, Skills.Intimidation ] };
    static readonly Physician: Background = { name: "Physician", description: physicianDesc, free: Skills.Medicine, quick: [ Skills.Lore, Skills.Insight ], learning: [ Skills.Persuasion, Skills.Crafting, Skills.Perception ] };
    static readonly Priest: Background = { name: "Priest", description: priestDesc, free: Skills.Prayer, quick: [ Skills.Arcane, Skills.Medicine ], learning: [ Skills.Persuasion, Skills.Lore, Skills.Insight ] };
    static readonly Sailor: Background = { name: "Sailor", description: sailorDesc, free: Skills.Riding, quick: [ Skills.Athletics, Skills.Perception ], learning: [ Skills.Brawling, Skills.Medicine, Skills.Perform ] };

    static readonly Scholar: Background = { name: "Scholar", description: scholarDesc, free: Skills.Lore, quick: [ Skills.Medicine, Skills.Arcane], learning: [ Skills.Prayer, Skills.Crafting, Skills.Perception ] };
    static readonly Slave: Background = { name: "Slave", description: slaveDesc, free: Skills.Stealth, quick: [ Skills.Prayer, Skills.Athletics ], learning: [ Skills.Brawling, Skills.Acrobatics, Skills.Dungeoneering ] };
    static readonly Soldier: Background = { name: "Soldier", description: soldierDesc, free: Skills.Martial, quick: [ Skills.Athletics, Skills.Intimidation ], learning: [ Skills.Persuasion, Skills.Medicine, Skills.Stealth ] };
    static readonly Thug: Background = { name: "Thug", description: thugDesc, free: Skills.Brawling, quick: [ Skills.Intimidation, Skills.Dungeoneering ], learning: [ Skills.Thievery, Skills.Athletics, Skills.Survival ] };
    static readonly Wanderer: Background = { name: "Wanderer", description: wandererDesc, free: Skills.Survival, quick: [ Skills.Stealth, Skills.Acrobatics ], learning: [ Skills.Arcane, Skills.Insight, Skills.Archery ] };
};
