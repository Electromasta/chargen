import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var brutal_counter = "Commit Effort for the scene after an attack targeting you, you may immediatly make an attack against them.";
var faultless_awareness = "You cannot be surprised, even when sleeping.";
var hurling_throw = "After succeeding to hit a target, commit effort for the scene to throw a target 10ft.";
var inward_eye = "Commit Effort to be able to see when blinded.";
var leap_of_the_heavens = "Commit effort for the scene to leap up to your full move action horizonally or half that vertically, or negate fall damage";

export class VowedArts {
    static readonly BrutalCounter: Feat = {name: "Brutal Counter", skill: MetaSkills.NoSkill, description: brutal_counter, LevelTwoDesc: "" };
    static readonly FaultlessAwareness: Feat = {name: "Faultless Awareness", skill: MetaSkills.NoSkill, description: faultless_awareness, LevelTwoDesc: "" };
    static readonly HurlingThrow: Feat = {name: "Hurling Throw", skill: MetaSkills.NoSkill, description: hurling_throw, LevelTwoDesc: "" };
    static readonly TheInwardEye: Feat = {name: "The Inward Eye", skill: MetaSkills.NoSkill, description: inward_eye, LevelTwoDesc: "" };
    static readonly LeapOfTheHeavens: Feat = {name: "Leap of the Heavens", skill: MetaSkills.NoSkill, description: leap_of_the_heavens, LevelTwoDesc: "" };
}