import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var arcane_lexicon_desc = "Commit Effort for the scene.  For the rest of the scene, you can read any script that was not encoded by its writer.";
var counter_magic_desc = "Commit Effort for the scene.  For the rest of the scene, you can read any script that was not encoded by its writer.";
var empowered_sorc_desc = "Commit Effort for the scene.  For the rest of the scene, you can read any script that was not encoded by its writer.";

export class Feats {
    static readonly ArcaneLexicon: Feat = {name: "Arcane Lexicon", skill: MetaSkills.NoSkill, 
        description: arcane_lexicon_desc, LevelTwoDesc: "" };
    static readonly CounterMagic: Feat = {name: "Counter Magic", skill: MetaSkills.NoSkill, 
        description: counter_magic_desc, LevelTwoDesc: "" };
    static readonly EmpoweredSorc: Feat = {name: "Empowered Sorcery", skill: MetaSkills.NoSkill, 
        description: empowered_sorc_desc, LevelTwoDesc: "" };
}