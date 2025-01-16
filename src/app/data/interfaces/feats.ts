import { Label } from "./label";
import { Skill, Skills, MetaSkills } from "./skill";

export interface Feat extends Label{
    skill: Skill
    LevelTwoDesc?: string
    restriction?: boolean
}

const alertDesc1 = "You cannot be surprised or executed, and have advantage on Initiative rolls.";
var amoredMDesc1 = "You can cast spells or arts while wearing armor that has Encumbrance of no more than two.";
var armsDesc1 = "You can ready a stowed melee/thrown weapon as an instant action.  You add your Martial skill level to melee or thrown weapons damage/shock rolls.";
var artisanDesc1 = "Your Craft Skill is counted as one level higher, for the purpose of crafting and mantaining mods, and requires 1 less salvage to maintain.";
var assasinDesc1 = "You can conceal an object no larger than a knife from searches.  You can draw this object as an on turn action, which can't miss during surprise.";

var authDesc1 = "Once per day, you can make a request from an NPC who is not hostile, provided it is not harmful or uncharacteristic.";
var closeCombDesc1 = "You can use knife sized thrown weapons in melee without suffering penalties for melee attackers, and ignore shock damage from melee, as long as you are not spellcasting.";
var connectDesc1 = "If you've spent at least a week in a location, you have a web of connections that are willing to do favors once per day.";
var culturedDesc1 = "You speak all languages common to a region of the world, and can learn new ones well enough in a week, and gain minor favors.";
var dieHardDesc1 = "You gain +2 maximum hp per level, and automatically stabilize if mortaly wounded, provided your body isn't dismembered.";

var deadeyeDesc1 = "You can ready a stowed ranged weapon as an instant action, and can shoot ranged weapons in melee at a -4 penalty.  Add Archery skill to damage.";
var dealmakerDesc1 = "With a half hour of effor you find a trader to buy or sell any goods and services, including illegal goods.";
var devattrDesc1 = "Choose an attribute, its modifier increases +1 up to a +3.";
var diplgraceDesc1 = "You speak all languages common to a region of the world, and can learn new ones well enough in a week, fleuncy in a month.";
var chirugeonDesc1 = "You can attempt to stabilize a dying creature with an on turn action, rolling 3d6 medicine and dropping lowest.  You heal x2 hitpoints when using first aid outside of combat.";

var henchDesc1 = "You can aquire henchman within 24 hours of arriving to a community, one for every 3 character levels.";
var impiDefDesc1 = "You have an innate Armor Class of 15 + Half Your Character Level.";
var imposterDesc1 = "Once per scene, reroll any failed skill check or saving throw made to maintain disguise.  You can create one false identity to flawlessly switch to.";
var luckyDesc1 = "Once per week, a blow or effect that would otherwise have left you killed or rendered helpless fails to connect.  In games of chance, you have advantage.";
var nulliDesc1 = "You and allies witihin 20ft gain a +2 bonus to all saving throws against magical effects.  Your first failed saving throw vs magic a day is a success.";

var poisonerDesc1 = "Advantage vs poison.  Your toxins inflict 2d6 + level on hit/shock, with physical save for half.";
var polyDesc1 = "You treat al non-combat skills as if they were level-0 even if you are not trained in them.";
var riderDesc1 = "Your steeds all count as Moral 12, and have your AC if it is higher.  You can communicate Intuitively with your steed.";
var shockassaultDesc1 = "The shock damage of your weapon treats targets AC as if it was 10, if the target is not immune to your damage.";

var sniperDesc1 = "When making a skill check for a ranged execution attack, roll 3d6 and drop the lowest.";
var originDesc1 = "You pick a Racial Feat.";
var specialistDesc1 = "Pick one skill, Roll 3d6 and drop the lowest dice for all checks with that skill.";
var familiarDesc1 = "You gain a familiar, with all the traits on page 68.";
var trapDesc1 = "Once per scene, reroll any failed saving throw or check related to traps.  You can create powerful traps.";

var unarmedDesc1 = "Your Unarmed Attacks become more dangerous as your Punch Skill increases, starting at 1d6.";
var giftDesc1 = "You have a GM/Player negociated gift, fitting the setting and subject to balancing.";
var valientDefDesc1 = "You gain +2 on Screen Ally actions, and can screen +1 allies, even against spells and area damage.";
var wellMetDesc1 = "Reaction rolls have +1 bonus, and even innately hostile creature will give you personally a round of parley.";
var whirlwindDesc1 = "Once per scene as an action, apply your shock damage to all foes within reach.";

var alertDesc2 = "test2";

export class Feats {
    static readonly Alert: Feat = {name: "Alert", skill: Skills.Perception, 
        description: alertDesc1, LevelTwoDesc: alertDesc2 };
    static readonly ArmoredMagic: Feat = { name: "Armored Magic", skill: MetaSkills.NoSkill, 
        description: amoredMDesc1, LevelTwoDesc: alertDesc2 };
    static readonly ArmsMaster: Feat = { name: "Arms Master", skill: Skills.Martial, 
        description: armsDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Artisan: Feat = {name: "Artisan", skill: Skills.Crafting, 
        description: artisanDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Assassin: Feat = { name: "Assassin", skill: Skills.Stealth, 
        description: assasinDesc1, LevelTwoDesc: alertDesc2 };

    static readonly Authority: Feat = { name: "Authority", skill: MetaSkills.AnyCharisma, 
        description: authDesc1, LevelTwoDesc: alertDesc2 };
    static readonly CloseCombat: Feat = { name: "Close Combat", skill: MetaSkills.AnyCombat, 
        description: closeCombDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Connect: Feat = { name: "Connect", skill: MetaSkills.AnyCharisma, 
        description: connectDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Cultured: Feat = {name: "Cultured", skill: MetaSkills.AnyCharisma, 
        description: culturedDesc1, LevelTwoDesc: alertDesc2 };
    static readonly DieHard: Feat = { name: "Die Hard", skill: MetaSkills.NoSkill, 
        description: dieHardDesc1, LevelTwoDesc: alertDesc2 };

    static readonly DeadEye: Feat = {name: "Deadeye", skill: Skills.Archery, 
        description: deadeyeDesc1, LevelTwoDesc: alertDesc2 };
    static readonly DealMaker: Feat = { name: "Deal Maker", skill: MetaSkills.AnyCharisma, 
        description: dealmakerDesc1, LevelTwoDesc: alertDesc2 };
    static readonly DevelopedAttribute: Feat = { name: "Developed Attribute", skill: MetaSkills.NoSkill, 
        description: devattrDesc1, LevelTwoDesc: alertDesc2 };
    static readonly DiplomaticGrace: Feat = {name: "Diplomatic Grace", skill: MetaSkills.AnyCharisma, 
        description: diplgraceDesc1, LevelTwoDesc: alertDesc2 };
    static readonly GiftedChirurgeon: Feat = { name: "Gifted Chirurgeon", skill: Skills.Medicine, 
        description: chirugeonDesc1, LevelTwoDesc: alertDesc2 };

    static readonly Henchkeeper: Feat = {name: "Henchkeeper", skill: MetaSkills.AnyCharisma, 
        description: henchDesc1, LevelTwoDesc: alertDesc2 };
    static readonly ImperviousDefense: Feat = { name: "Impervious Defense", skill: MetaSkills.NoSkill, 
        description: impiDefDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Imposter: Feat = { name: "Imposter", skill: Skills.Stealth, 
        description: imposterDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Lucky: Feat = {name: "Lucky", skill: MetaSkills.NoSkill, 
        description: luckyDesc1, LevelTwoDesc: alertDesc2 };

    static readonly Nullifier: Feat = { name: "Nullifier", skill: MetaSkills.NoSkill, 
        description: nulliDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Poisoner: Feat = { name: "Poisoner", skill: Skills.Medicine, 
        description: poisonerDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Polymath: Feat = {name: "Polymath", skill: MetaSkills.AnyNonCombat, 
        description: polyDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Rider: Feat = { name: "Rider", skill: Skills.Riding, 
        description: riderDesc1, LevelTwoDesc: alertDesc2 };
    static readonly ShockingAssault: Feat = { name: "Shocking Assault", skill: MetaSkills.AnyCombat, 
        description: shockassaultDesc1, LevelTwoDesc: alertDesc2 };

    static readonly SnipersEye: Feat = {name: "Sniper’s Eye", skill: Skills.Archery, 
        description: sniperDesc1, LevelTwoDesc: alertDesc2 };
    static readonly SpecialOrigin: Feat = { name: "Special Origin", skill: MetaSkills.NoSkill, 
        description: originDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Specialist: Feat = { name: "Specialist", skill: MetaSkills.AnySkill, 
        description: specialistDesc1, LevelTwoDesc: alertDesc2 };
    static readonly SpiritFamiliar: Feat = {name: "Spirit Familiar", skill: MetaSkills.NoSkill, 
        description: familiarDesc1, LevelTwoDesc: alertDesc2 };
    static readonly Trapmaster: Feat = { name: "Trapmaster", skill: Skills.Perception, 
        description: trapDesc1, LevelTwoDesc: alertDesc2 };

    static readonly UnarmedCombatant: Feat = { name: "Unarmed Combatant", skill: Skills.Perception, 
        description: unarmedDesc1, LevelTwoDesc: alertDesc2 };
    static readonly UniqueGift: Feat = { name: "Unique Gift", skill: MetaSkills.NoSkill, 
        description: giftDesc1, LevelTwoDesc: alertDesc2 };
    static readonly ValiantDefender: Feat = {name: "Valiant Defender", skill: MetaSkills.AnyCombat, 
        description: valientDefDesc1, LevelTwoDesc: alertDesc2 };
    static readonly WellMet: Feat = { name: "Well Met", skill: MetaSkills.NoSkill, 
        description: wellMetDesc1, LevelTwoDesc: alertDesc2 };
    static readonly WhirlwindAssault: Feat = { name: "Whirlwind Assault", skill: MetaSkills.AnyCombat, 
        description: whirlwindDesc1, LevelTwoDesc: alertDesc2 };
};