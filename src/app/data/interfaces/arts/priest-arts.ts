import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var armor_of_god = "Commit Effort to gain 15 + half your level AC.";
var divine_guidance = "Commit Effort for the day to meditate on future actions, your god responds with weal, woe, or other revelations.";
var fear_no_flame = "Commit Effort for the day and pick a target, for the rest of the scene they are immune to flame, smoke, explosive damage, and take reduced damage from magical fire.";
var god_wills_it = "Commit Effort for the day to call a blessing of your god down to earth, giving +1 to hit, damage, and shock damage.";
var merciful_healing = "Commit Effort for the day as a main action and touch a target to magically heal 1d6+2 life.";

export class PriestArts {
    static readonly ArmorOfGod: Feat = {name: "Armor of God", skill: MetaSkills.NoSkill, description: armor_of_god, LevelTwoDesc: "" };
    static readonly DivineGuidance: Feat = {name: "Divine Guidance", skill: MetaSkills.NoSkill, description: divine_guidance, LevelTwoDesc: "" };
    static readonly FearNoFlame: Feat = {name: "Fear no Flame", skill: MetaSkills.NoSkill, description: fear_no_flame, LevelTwoDesc: "" };
    static readonly GodWillsIt: Feat = {name: "God wills it", skill: MetaSkills.NoSkill, description: god_wills_it, LevelTwoDesc: "" };
    static readonly MercifulHealing: Feat = {name: "Merciful Healing", skill: MetaSkills.NoSkill, description: merciful_healing, LevelTwoDesc: "" };
}