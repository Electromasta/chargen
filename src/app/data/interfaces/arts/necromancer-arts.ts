import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var read_necromancy = "You can see and communicated with any dead creature, regardless of language or visibility.";
var false_life = "You no longer require sleep,  You have 12 + half level AC and can only take 2 shock damage maximum from each hit.";
var vampiric_touch = "Making a melee attack, heal for 1d6 on hit.";
var feign_death = "Commit Effort to appear undead, no longer needing to eat, drink, breathe, and poisons/disease do not progress.";
var ki_sight = "Commit Effort to see life energies of creatures around you, including sicknesses, poisons, and other maladies";
var gentle_repose = "Creatures mortally wounded near you will instantly die or instantly stabilize at your discretion by committing effort for the day.";
var transfer_wounds = "Commit Effort for the day, and for this scene you can transfer hitpoints between one willing or helpless target and another.";

export class NecromancerArts {
    static readonly ReadNecromancy: Feat = {name: "Read Necromancy", skill: MetaSkills.NoSkill, description: read_necromancy, LevelTwoDesc: "Bonetalker" };
    static readonly FalseLife: Feat = {name: "False Life", skill: MetaSkills.NoSkill, description: false_life, LevelTwoDesc: "Cold Flesh" };
    static readonly VampiricTouch: Feat = {name: "Vampire Touch", skill: MetaSkills.NoSkill, description: vampiric_touch, LevelTwoDesc: "Consume Life Energy" };
    static readonly FeignDeath: Feat = {name: "Feign Death", skill: MetaSkills.NoSkill, description: feign_death, LevelTwoDesc: "False Death" };
    static readonly KiSight: Feat = {name: "Ki Sight", skill: MetaSkills.NoSkill, description: ki_sight, LevelTwoDesc: "Gravesight" };
    static readonly GentleRepose: Feat = {name: "GentleRepose", skill: MetaSkills.NoSkill, description: gentle_repose, LevelTwoDesc: "Keeper of the Gate" };
    static readonly TransferWounds: Feat = {name: "Transfer Wounds", skill: MetaSkills.NoSkill, description: transfer_wounds, LevelTwoDesc: "Life Bridge" };
}