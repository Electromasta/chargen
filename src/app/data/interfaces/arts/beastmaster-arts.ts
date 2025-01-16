import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var beast_ward = "Commit Effort to magically prevent beasts from attacking you.";
var eyes_of_the_beast = "Commit effort for the scene to share senses with your companion.";
var feral_toughness = "Your maximum hit point total is increased by the number of hit dice your animal companion has. You have 13 plus half your level AC.";
var howl_of_distant_summons = "Commit Effort for the da, you can call a previous companion across distances and time.";
var know_the_weak_spot = "You roll with advantage against beasts. Commit effort for the scene to give this buff to your beast .";

export class BeastMasterArts {
    static readonly BeastWard: Feat = {name: "Beast Ward", skill: MetaSkills.NoSkill, description: beast_ward, LevelTwoDesc: "" };
    static readonly EyesOfTheBeast: Feat = {name: "Eyes of the Beast", skill: MetaSkills.NoSkill, description: eyes_of_the_beast, LevelTwoDesc: "" };
    static readonly FeralToughness: Feat = {name: "Feral Toughness", skill: MetaSkills.NoSkill, description: feral_toughness, LevelTwoDesc: "" };
    static readonly HowlOfDistanceSummons: Feat = {name: "Howl of Distant Summons", skill: MetaSkills.NoSkill, description: howl_of_distant_summons, LevelTwoDesc: "" };
    static readonly KnowTheWeakSpot: Feat = {name: "Know the Weak Spot", skill: MetaSkills.NoSkill, description: know_the_weak_spot, LevelTwoDesc: "" };
}