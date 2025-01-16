import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var command_dead = "Bring undead bound under your command.";
var speak_with_dead = "Speak to a corpse, one question per level.";
var channel_energy = "Damages and destroys undead in a 20ft radius.";
var feign_life = "Disguise undead to appear and act as it did in life.";

export class NecromancerSpells {
    static readonly CommandDead: Feat = {name: "Command Dead", skill: MetaSkills.NoSkill, description: command_dead, LevelTwoDesc: "Command the Dead" };
    static readonly SpeakwithDead: Feat = {name: "Speak with Dead", skill: MetaSkills.NoSkill, description: speak_with_dead, LevelTwoDesc: "Query the Skull" };
    static readonly ChannelEnergy: Feat = {name: "Channel Energy", skill: MetaSkills.NoSkill, description: channel_energy, LevelTwoDesc: "Smite the Dead" };
    static readonly FeignLife: Feat = {name: "Feign Life", skill: MetaSkills.NoSkill, description: feign_life, LevelTwoDesc: "Terrible Liveliness" };
}