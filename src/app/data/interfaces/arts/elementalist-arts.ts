import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var hydraulic_push = "Commit Effort for the scene.  For the rest of the scene, you can read any script that was not encoded by its writer.";
var infrared_sight = "Commit Effort for the day as an instant action.  Make an opposed casting check, cancel their spell on success.";
var scorching_ray = "Commit Effort for the scene.  Reroll any variable die associated with the spells effects.";
var light_sight = "Commit Effort for the day as an instant action.  Make an opposed casting check, cancel their spell on success.";
var mage_armor = "Commit effort for the scene when casting a spell.  The spell is delayed until a predefined trigger.";

export class ElementalistArts {
    static readonly HydraulicPush: Feat = {name: "Hydraulic Push", skill: MetaSkills.NoSkill, description: hydraulic_push, LevelTwoDesc: "Beckoned Deluge" };
    static readonly InfraredSight: Feat = {name: "Infrared Sight", skill: MetaSkills.NoSkill, description: infrared_sight, LevelTwoDesc: "Earthsight" };
    static readonly ScorchingRay: Feat = {name: "Scorching Ray", skill: MetaSkills.NoSkill, description: scorching_ray, LevelTwoDesc: "Elemental Blast" };
    static readonly LightSight: Feat = {name: "Light Sight", skill: MetaSkills.NoSkill, description: light_sight, LevelTwoDesc: "Flamesight" };
    static readonly MageArmor: Feat = {name: "Mage Armor", skill: MetaSkills.NoSkill, description: mage_armor, LevelTwoDesc: "Pavis of Elements" };
}