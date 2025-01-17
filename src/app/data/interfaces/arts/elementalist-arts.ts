import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var hydraulic_push = "Commit Effort for the scene as a main action to conjure water to drench one 10ft cube.";
var infrared_sight = "Commit Effort on Turn, for the rest of the scene you can see through darkness and earth.";
var scorching_ray = "Commit Effort for the scene.  Hurl a blast of elements that does 1d6 + Level + Spellcasting Modifier.";
var light_sight = "Commit Effort on Turn, while committed you can see thermal gradiants and can project light from your eyes 30ft.";
var mage_armor = "Commit effort to create a barrier of elements around you, granting +4 AC to a maximum of 18 AC.";

export class ElementalistArts {
    static readonly HydraulicPush: Feat = {name: "Beckoned Deluge", skill: MetaSkills.NoSkill, description: hydraulic_push, LevelTwoDesc: "Beckoned Deluge" };
    static readonly InfraredSight: Feat = {name: "Earthsight", skill: MetaSkills.NoSkill, description: infrared_sight, LevelTwoDesc: "Earthsight" };
    static readonly ScorchingRay: Feat = {name: "Elemental Blast", skill: MetaSkills.NoSkill, description: scorching_ray, LevelTwoDesc: "Elemental Blast" };
    static readonly LightSight: Feat = {name: "Flamesight", skill: MetaSkills.NoSkill, description: light_sight, LevelTwoDesc: "Flamesight" };
    static readonly MageArmor: Feat = {name: "Pavis of Elements", skill: MetaSkills.NoSkill, description: mage_armor, LevelTwoDesc: "Pavis of Elements" };
}