import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var erudite = "Once per day, reroll a failed Lore check.";
var folk_friend = "Commoners and lower class natives consider you a useful healer or helper.  Once per day you can ask them for a modest favor in exchange for advice.";
var holy_sanctity = "You are honored and respected by religious in the region.  Gain a +1 on social checks who are not opposed to your religion.";
var dread_awe = "Gain a +1 bonus on intimidation, and enemies suffer a -1 on moral checks.";
var auspicious_undertaking = "Bless a plan, during its execution the blessed person may reroll one failed dice roll.";

export class WiseArts {
    static readonly Erudite: Feat = {name: "Erudite", skill: MetaSkills.NoSkill, description: erudite, LevelTwoDesc: "" };
    static readonly FolkFriend: Feat = {name: "Folk Friend", skill: MetaSkills.NoSkill, description: folk_friend, LevelTwoDesc: "" };
    static readonly HolySanctity: Feat = {name: "Holy Sanctity", skill: MetaSkills.NoSkill, description: holy_sanctity, LevelTwoDesc: "" };
    static readonly DreadAwe: Feat = {name: "Dread Awe", skill: MetaSkills.NoSkill, description: dread_awe, LevelTwoDesc: "" };
    static readonly AuspiciousUndertaking: Feat = {name: "Auspicious Undertaking", skill: MetaSkills.NoSkill, description: auspicious_undertaking, LevelTwoDesc: "" };
}