import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var breathe_water = "A dozen creatures are enchanted to be able to breathe, see, and move underwater.";
var flame_scryimg = "See through flames within 30 ft per caster level.";
var mold_elements = "Can shape elements in a 10ft cube, and become permanent if stable.";
var elemental_spy = "Charm an ounce of element to see and hear through.";

export class ElementalistSpells {
    static readonly BreatheWater: Feat = {name: "Breathe Water", skill: MetaSkills.NoSkill, description: breathe_water, LevelTwoDesc: "Aqueous Harmony" };
    static readonly FlameScrying: Feat = {name: "Flame Scrying", skill: MetaSkills.NoSkill, description: flame_scryimg, LevelTwoDesc: "Flame Scrying" };
    static readonly MoldElements: Feat = {name: "Mold Elements", skill: MetaSkills.NoSkill, description: mold_elements, LevelTwoDesc: "Elemental Favor" };
    static readonly ElementalSpy: Feat = {name: "Elemental Spy", skill: MetaSkills.NoSkill, description: elemental_spy, LevelTwoDesc: "Elemental Spy" };
}