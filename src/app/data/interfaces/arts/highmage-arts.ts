import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var read_magic = "Commit Effort for the scene.  For the rest of the scene, you can read any script that was not encoded by its writer.";
var counterspell = "Commit Effort for the day as an instant action.  Make an opposed casting check, cancel their spell on success.";
var empowered_spell = "Commit Effort for the scene.  Reroll any variable die associated with the spells effects.";
var delay_spell = "Commit effort for the scene when casting a spell.  The spell is delayed until a predefined trigger.";
var heightened_spell = "Commit effort for the day.  One enemy is forced to reroll their saving throw.";
var combat_casting = "Commit effort for the day and make a physical save to resist disruption of spellcasting";
var silent_spell = "Commit effort for the day.  You cast a spell without somatic gestures in complete silence.";
var arcane_recovery = "Commit effort for the day, your spell does not count against your normal limits for the day.  You can only use this once/day.";

export class HighMageArts {
    static readonly ReadMagic: Feat = {name: "Read Magic", skill: MetaSkills.NoSkill, description: read_magic, LevelTwoDesc: "Arcane Lexicon" };
    static readonly Counterspell: Feat = {name: "Counterspell", skill: MetaSkills.NoSkill, description: counterspell, LevelTwoDesc: "Counter Magic" };
    static readonly EmpoweredSpell: Feat = {name: "Empowered Spell", skill: MetaSkills.NoSkill, description: empowered_spell, LevelTwoDesc: "Empowered Sorcery" };
    static readonly DelaySpell: Feat = {name: "Delay Spell", skill: MetaSkills.NoSkill, description: delay_spell, LevelTwoDesc: "Hang Sorcery" };
    static readonly HeightenedSpell: Feat = {name: "Heightened Spell", skill: MetaSkills.NoSkill, description: heightened_spell, LevelTwoDesc: "Inexorable Effect" };
    static readonly CombatCasting: Feat = {name: "Combat Casting", skill: MetaSkills.NoSkill, description: combat_casting, LevelTwoDesc: "Iron Resolution" };
    static readonly SilentSpell: Feat = {name: "Silent Spell", skill: MetaSkills.NoSkill, description: silent_spell, LevelTwoDesc: "Restrained Casting" };
    static readonly ArcaneRecovery: Feat = {name: "Arcane Recovery", skill: MetaSkills.NoSkill, description: arcane_recovery, LevelTwoDesc: "Retain Sorcery" };
}