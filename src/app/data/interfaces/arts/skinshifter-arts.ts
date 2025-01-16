import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var eyes_of_the_hawk = "This form can scent trails and see objects clearly at a distance, and has +2 bonus to all sensory checks.";
var feline_leap = "This form can jump equal to your movement speed horizontally, or half as much vertically.";
var feral_prowess = "This form has +1 to strength, dexterity, or constitution.";
var intrinsic_armor = "Your Shape has 14 + half your character level AC.";
var savage_talons = "This shape has natural weapons that deal (brawling) 1d8 damage, 2/AC13";

export class ShifterArts {
    static readonly EyesOfTheHawk: Feat = {name: "Eyes of the Hawk", skill: MetaSkills.NoSkill, description: eyes_of_the_hawk, LevelTwoDesc: "" };
    static readonly FelineLeap: Feat = {name: "Feline Leap", skill: MetaSkills.NoSkill, description: feline_leap, LevelTwoDesc: "" };
    static readonly FeralProwess: Feat = {name: "Feral Prowess", skill: MetaSkills.NoSkill, description: feral_prowess, LevelTwoDesc: "" };
    static readonly IntrinsicArmor: Feat = {name: "IntrinsicArmor", skill: MetaSkills.NoSkill, description: intrinsic_armor, LevelTwoDesc: "" };
    static readonly SavageTalons: Feat = {name: "Savage Talons", skill: MetaSkills.NoSkill, description: savage_talons, LevelTwoDesc: "" };
}