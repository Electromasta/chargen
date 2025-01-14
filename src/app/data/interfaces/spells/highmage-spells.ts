import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var detect_magic_desc = "See magic for 15 minutes per level, while also seeing in the dark.";
var find_familiar_desc = "Telepathically bond with an animal, which obeys but won’t fight.";
var magic_missile_desc = "Do 1d8 dmg/level to a visible target, save for half. 1 HD foes die";

export class Feats {
    static readonly DetectMagic: Feat = {name: "Detect Magic", skill: MetaSkills.NoSkill, 
        description: detect_magic_desc, LevelTwoDesc: "Apprehending the Arcane Form" };
    static readonly FindFamiliar: Feat = {name: "Find Familiar", skill: MetaSkills.NoSkill, 
        description: find_familiar_desc, LevelTwoDesc: "Cognitive Supersession of Inferior Orders" };
    static readonly HoldPerson: Feat = {name: "Magic Missile", skill: MetaSkills.NoSkill, 
        description: magic_missile_desc, LevelTwoDesc: "Coruscating Coffin" };
}