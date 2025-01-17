import { Label } from "./label";
import { Progressions, Progression, FeatType } from "./progressions";
import { Feat } from '../../data/interfaces/feats';
import { MetaSkills, Skills, Skill } from "./skill";

export interface Job extends Label {
    jobtype: JobType;
    progression: Progression;
    bonusskill?: Skill;
    feats: Feat[];
    artstype?: ArtsType;
    spelltype?: SpellType;
}

export enum JobType {
    WARRIOR = 1,
    EXPERT = 10,
    MAGE = 100,
    SPECIALIST = 1000
}

export enum SpellType {
    HIGHSPELL = 100,
    ELEMENTALISTSPELL = 101,
    NECROMANCERSPELL = 102
}

export enum ArtsType {
    HIGH,
    ELEMENTALIST,
    NECROMANCER,
    BARD,
    BEASTMASTER,
    DUELIST,
    PRIEST,
    SKINSHIFTER,
    VOWED,
    WISE
}

export class ClassFeats {
    static readonly MasterfulExpertise: Feat = {name: "Masterful Expertise", skill: MetaSkills.NoSkill, description: "Once per scene, the Expert may reroll any non-combat skill check, choosing the higher roll." };
    static readonly QuickLearner: Feat = {name: "Quick Learner", skill: MetaSkills.NoSkill, description: "Gain an extra skill point, that can be spent on non combat skills or raising attributes." };
    static readonly JuryRig: Feat = {name: "Jury Rig", skill: MetaSkills.NoSkill, description: "The expert has the ability to modify equipment with ancient salvage using a crafting check and the appropriate tools." };
    static readonly KillingBlow: Feat = {name: "Killing Blow", skill: MetaSkills.NoSkill, description: "Whenever a warrior inflicts damage with an attack, spell or ability, they may add half their level to damage/shock." };
    static readonly CrushingBlow: Feat = {name: "Crushing Blow", skill: MetaSkills.NoSkill, description: "Whenever a warrior inflicts damage with an attack, spell or ability, they may add one third their level to damage/shock." };
    static readonly VeteransLuck: Feat = {name: "Veteran's Luck", skill: MetaSkills.NoSkill, description: "Once per scene, the Warrior may turn a missed attack into a hit, or a successful attack against them to a miss." };
    static readonly MightyDeeds: Feat = {name: "Mighty Deeds", skill: MetaSkills.NoSkill, description: "When a fighter attacks and hits, they can attempt a mighty deed by rolling high their mighty dice, a 1d4." };
    static readonly FavoredWeapon: Feat = {name: "Favored Weapon", skill: MetaSkills.NoSkill, description: "Begin play with one free Chosen melee weapon.  Your Duelist arts only work with that weapon." };
    static readonly MartialArts: Feat = {name: "Martial Arts", skill: MetaSkills.NoSkill, description: "When not wearing armor or a shield, your AC is 13 + Half your level, and your Unarmed Strike deals 1d6 damage, 1/15 Shock." };
    static readonly ChangeForm: Feat = {name: "Change Form", skill: MetaSkills.NoSkill, description: "Commit Effort for the day as an action to transform into an alternate form." };
    static readonly BindCompanion: Feat = {name: "Bind Companion", skill: MetaSkills.NoSkill, description: "With a day's work in a natural location, you can bind an animal companion or otherwise appropriate beast." };
    static readonly ThousandTongues: Feat = {name: "Thousand Tongues", skill: MetaSkills.NoSkill, description: "Your abilities that require communication are intuitively understood by all intelligent creatures.  Learning a new Language takes only a week for you." };
    static readonly BonusArt: Feat = {name: "Bonus Art", skill: MetaSkills.NoSkill, description: "This partial class gains a bonus art above its listed value." };
}

const warriorDesc = "The Warrior is a hero born to the blade, a man or woman gifted with a superb capacity for physical violence.";
const expertDesc = "Your hero is an expert at some useful skill. Thieves, diplomats, healers, scholars, exploreres and artisans belong to the Expert class.";
const mageDesc = "Your hero wields arcane formulas and otherworldly arts in the service of their ambitions.";

const fighterDesc = "Fighters are masters of combat, whos technical prowess on the battlefield enables them to preform mighty deeds.";
const duelistDesc = "The swordmasters are famed for their almost supernatural exertise with their chosen weapon and uncanny powers of agility.";

const bardDesc = "The power of music and chant move to move the heart has been known since humankind has existed, and you are an expert of the bardic arts.";
const wiseDesc = "The Wise are oracles, old men and women, leaders, healers, and tricksters with an almost supernatural amount of common sense.";

const eleDesc = "The elementalist uses magic in its most raw and chaotic of components, of fire, water, wind, and earth.";
const necroDesc = "Necromancers are sorcerer and clerics who want to overcome death.  Some for their own selfish ends, others use magic purely to heal the sick.";

const monkDesc = "Monks are members of sects, determined and bound by oaths to master the hidden capabilities of both body and spirit.  Monks are a Specialist Class that must be taken with another class.";
const shifterDesc = "A shifter has the supernatural ability to change shape, meaning their soul is the only true constant about them.  Shifters are a Specialist Class that must be taken with another class.";
const beastmasterDesc = "Beastmasters have a special connection with nature, allowing them to befriend and command the most Dire of Beasts.  Beastmasters are a Specialist Class that must be taken with another class.";
const priestDesc = "Your hero is a chosen man or woman of a god, empowered with miracles to punish evildooers and influence communities towards order with healing.  Priests are a Specialist Class that must be taken with another class.";

export class ErrorJobs {
    static readonly DefaultJob: Job = { name: "Pick 1-2 Classes", progression: Progressions.Expert, jobtype: JobType.EXPERT, feats: [], description: expertDesc };
}

export class BasicJobs {
    static readonly Warrior: Job = { name: "Warrior", progression: Progressions.Warrior, jobtype: JobType.WARRIOR, feats: [ClassFeats.KillingBlow, ClassFeats.VeteransLuck], description: warriorDesc };
    static readonly Expert: Job = { name: "Expert", progression: Progressions.Expert, jobtype: JobType.EXPERT, feats: [ClassFeats.MasterfulExpertise, ClassFeats.QuickLearner, ClassFeats.JuryRig], description: expertDesc };
    static readonly Mage: Job = { name: "Mage", progression: Progressions.Mage, jobtype: JobType.MAGE, bonusskill: Skills.Arcane, spelltype: SpellType.HIGHSPELL, feats: [], description: mageDesc };

}

export class Jobs {
    static readonly PartialWarrior: Job = { name: "Warrior", progression: Progressions.Warrior, jobtype: JobType.WARRIOR, feats: [ClassFeats.CrushingBlow], description: warriorDesc };
    static readonly PartialExpert: Job = { name: "Expert", progression: Progressions.Expert, jobtype: JobType.EXPERT, feats: [ClassFeats.QuickLearner, ClassFeats.JuryRig], description: expertDesc };
    static readonly PartialMage: Job = { name: "Mage", progression: Progressions.Mage, jobtype: JobType.MAGE, bonusskill: Skills.Arcane, spelltype: SpellType.HIGHSPELL, feats: [], artstype: ArtsType.HIGH, description: mageDesc };

    static readonly Fighter: Job = { name: "Fighter", progression: Progressions.Warrior, jobtype: JobType.WARRIOR, feats: [ClassFeats.MightyDeeds], description: fighterDesc };
    static readonly Duelist: Job = { name: "Duelist", progression: Progressions.Warrior, jobtype: JobType.WARRIOR, bonusskill: Skills.Martial, feats: [ClassFeats.FavoredWeapon], artstype: ArtsType.DUELIST, description: duelistDesc };

    static readonly Bard: Job = { name: "Bard", progression: Progressions.Expert, jobtype: JobType.EXPERT, bonusskill: Skills.Perform, feats: [ClassFeats.ThousandTongues], artstype: ArtsType.BARD, description: bardDesc };
    static readonly Wise: Job = { name: "Wise", progression: Progressions.Expert, jobtype: JobType.EXPERT, bonusskill: MetaSkills.AnyNonCombat, feats: [], artstype: ArtsType.WISE, description: wiseDesc };

    static readonly Elementalist: Job = { name: "Elementalist", progression: Progressions.Mage, jobtype: JobType.MAGE, bonusskill: Skills.Arcane, spelltype: SpellType.ELEMENTALISTSPELL, feats: [], artstype: ArtsType.ELEMENTALIST, description: eleDesc };
    static readonly Necromancer: Job = { name: "Necromancer", progression: Progressions.Mage, jobtype: JobType.MAGE, bonusskill: Skills.Arcane, spelltype: SpellType.NECROMANCERSPELL, feats: [], artstype: ArtsType.NECROMANCER, description: necroDesc };

    static readonly Monk: Job = { name: "Monk", progression: Progressions.Mage, jobtype: JobType.SPECIALIST, bonusskill: Skills.Athletics, feats: [ClassFeats.MartialArts], artstype: ArtsType.VOWED, description: monkDesc };
    static readonly Shifter: Job = { name: "Shifter", progression: Progressions.Mage, jobtype: JobType.SPECIALIST, bonusskill: Skills.Survival, feats: [ClassFeats.ChangeForm], artstype: ArtsType.SKINSHIFTER, description: shifterDesc };
    static readonly Beastmaster: Job = { name: "Beastmaster", progression: Progressions.Mage, jobtype: JobType.SPECIALIST, bonusskill: Skills.Survival, feats: [ClassFeats.BindCompanion], artstype: ArtsType.BEASTMASTER, description: beastmasterDesc };
    static readonly Priest: Job = { name: "Priest", progression: Progressions.Mage, jobtype: JobType.SPECIALIST, bonusskill: Skills.Prayer, feats: [ClassFeats.BonusArt], artstype: ArtsType.PRIEST, description: priestDesc };
}
