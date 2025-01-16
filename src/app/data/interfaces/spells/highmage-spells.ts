import { Feat } from "../feats";
import { MetaSkills } from "../skill";

var detect_magic_desc = "See magic for 15 minutes per level, while also seeing in the dark.";
var find_familiar_desc = "Telepathically bond with an animal, which obeys but won’t fight.";
var magic_missile_desc = "Do 1d8 dmg/level to a visible target, save for half. 1 HD foes die";
var dominate_sense = "Take control of one sense of a target for a scene on a failed save";
var destroy_wood = "Destroy all non-magic plant-derived matter in the target area.";
var invisibility = "Turn one target per level invisible for an hour per caster level.";
var detect_thoughts = "Detect a target’s surface thoughts and get answers to questions.";
var charm = "Enslave a target’s mind, leaving them visibly dazed but obedient.";
var hold_person = "Put a willing creature into temporary invulnerable stasis.";
var phantasmal_illusion = "Create an independently-functional illusion in the target area.";
var expeditious_retreat = "Augment the movement speed and options of one target/level.";
var blade_ward = "Make a target partially weapon-immune or make a weapon useless.";
var sleep = "Put living targets of 4 HD or less to sleep within the area of effect.";


export class HighMageSpells {
    static readonly DetectMagic: Feat = {name: "Detect Magic", skill: MetaSkills.NoSkill, description: detect_magic_desc, LevelTwoDesc: "Apprehending the Arcane Form" };
    static readonly FindFamiliar: Feat = {name: "Find Familiar", skill: MetaSkills.NoSkill, description: find_familiar_desc, LevelTwoDesc: "Cognitive Supersession of Inferior Orders" };
    static readonly MagicMissile: Feat = {name: "Magic Missile", skill: MetaSkills.NoSkill, description: magic_missile_desc, LevelTwoDesc: "Coruscating Coffin" };
    static readonly DominateSense: Feat = {name: "Dominate Sense", skill: MetaSkills.NoSkill, description: dominate_sense, LevelTwoDesc: "Damnation of the Sense" };
    static readonly DestroyWood: Feat = {name: "Destroy Wood", skill: MetaSkills.NoSkill, description: destroy_wood, LevelTwoDesc: "Decree of Ligneous Dissolution" };
    static readonly Invisibility: Feat = {name: "Invisibility", skill: MetaSkills.NoSkill, description: invisibility, LevelTwoDesc: "The Excellent Transpicuous Transformation" };
    static readonly DetectThoughts: Feat = {name: "Detect Thoughts", skill: MetaSkills.NoSkill, description: detect_thoughts, LevelTwoDesc: "Imperceptible Cerebral Divulgence" };
    static readonly Charm: Feat = {name: "charm", skill: MetaSkills.NoSkill, description: charm, LevelTwoDesc: "Ineluctable Shackles of Volition" };
    static readonly HoldPerson: Feat = {name: "Hold Person", skill: MetaSkills.NoSkill, description: hold_person, LevelTwoDesc: "The Long Amber Moment" };
    static readonly PhantasmalIllusion: Feat = {name: "Phantasmal Illusion", skill: MetaSkills.NoSkill, description: phantasmal_illusion, LevelTwoDesc: "Phantasmal Mimesis" };
    static readonly ExpeditiousRetreat: Feat = {name: "Expeditious Retreat", skill: MetaSkills.NoSkill, description: expeditious_retreat, LevelTwoDesc: "Velocitous Imbuement" };
    static readonly Bladeward: Feat = {name: "Blade Ward", skill: MetaSkills.NoSkill, description: blade_ward, LevelTwoDesc: "Wardpact Invocation" };
    static readonly Sleep: Feat = {name: "Sleep", skill: MetaSkills.NoSkill, description: sleep, LevelTwoDesc: "The Wind of Final Repose" };
}