import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var blood_for_blood = "Commit Effort for the scene when an enemy hits you, the next attack vs the creature automatically hits and does at least that much damage.";
var burst_of_speed = "Commit effort for the day as an on turn action.  You may move your full movement rate as an On Turn action.";
var code_duello = "Commit effort for the day, and Engage with a single foe, gaining +4 AC and rolling damage with advantage.";
var crushing_superiority = "Your favored weapon has Less Lethal.  On hit, Commit effort for the day to force moral check.";
var dauntless_step = "Commit Effort for the scene as an on turn action, your move action can cross difficult terrain or go up walls.";

export class DuelistArts {
    static readonly BloodForBlood: Feat = {name: "Blood for Blood", skill: MetaSkills.NoSkill, description: blood_for_blood, LevelTwoDesc: "" };
    static readonly BurstOfSpeed: Feat = {name: "Burst of Speed", skill: MetaSkills.NoSkill, description: burst_of_speed, LevelTwoDesc: "" };
    static readonly CodeDuello: Feat = {name: "Code Duello", skill: MetaSkills.NoSkill, description: code_duello, LevelTwoDesc: "" };
    static readonly CrushingSuperiority: Feat = {name: "Crushing Superiority", skill: MetaSkills.NoSkill, description: crushing_superiority, LevelTwoDesc: "" };
    static readonly DauntlessStep: Feat = {name: "Dauntless Step", skill: MetaSkills.NoSkill, description: dauntless_step, LevelTwoDesc: "" };
}