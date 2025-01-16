import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var battle_cry = "Commit Effort for the Day to give allies +1 to hit, saving throws, damage, and shock.";
var cursed_tune = "Commit Effort for the scene to give enemies -1 to hit, saving throws, damage and shock.";
var deft_fingers = "You have +2 Readied Items.";
var entangle_incantation = "Commit Effort for the scene and make an opposed perform/magic check, with a +2 bonus to counter target spell.";
var evoke_emotion = "Commit Effort for the day while performing to evoke an emotion in listeners, giving a +1 to social checks and allowing you to reroll reactions.";

export class BardArts {
    static readonly BattleCry: Feat = {name: "Battle Cry", skill: MetaSkills.NoSkill, description: battle_cry, LevelTwoDesc: "" };
    static readonly Cursedtune: Feat = {name: "Cursed Tune", skill: MetaSkills.NoSkill, description: cursed_tune, LevelTwoDesc: "" };
    static readonly DeftFingers: Feat = {name: "Deft Fingers", skill: MetaSkills.NoSkill, description: deft_fingers, LevelTwoDesc: "" };
    static readonly EntangleIncantation: Feat = {name: "Entangle Incantation", skill: MetaSkills.NoSkill, description: entangle_incantation, LevelTwoDesc: "" };
    static readonly EvokeEmotion: Feat = {name: "Evoke Emotion", skill: MetaSkills.NoSkill, description: evoke_emotion, LevelTwoDesc: "" };
}