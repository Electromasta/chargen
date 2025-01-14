import { Attribute, Attributes } from "./attribute";
import { Label } from "./label";

export interface Skill extends Label{
    prime: Attribute,
    isCombat?: boolean
}

export class MetaSkills {
    static readonly AnySkill: Skill = {name: "Any", prime: Attributes.Strength, description: "Pick Any Skill" };
    static readonly AnyNonCombat: Skill = {name: "Any Non-Combat", prime: Attributes.Strength, description: "Pick Any Non-Combat Skill" };
    static readonly AnyCombat: Skill = {name: "Any Combat", prime: Attributes.Strength, description: "Pick Any Combat Skill" };
    static readonly AnyCharisma: Skill = {name: "Any Charisma", prime: Attributes.Strength, description: "Pick one of Persuasion, Deception, Intimidation, Perform, or Insight" };
    static readonly NoSkill: Skill = {name: "None", prime: Attributes.Strength, description: "None" };
}

export class Skills {
    static readonly Athletics: Skill = {name: "Athletics", prime: Attributes.Strength, description: "Climbing, Jumping, Swimming, Brawling, and Laboring" };
    static readonly Martial: Skill = { name: "Martial", prime: Attributes.Strength, description: "Fight in Melee with weapons, identify and maintain weapons and armor", isCombat: true };
    static readonly Brawling: Skill = { name: "Brawling", prime: Attributes.Strength, description: "Fight in Melee without weapons, grapple, nonlethal takedowns", isCombat: true };
    static readonly Acrobatics: Skill = { name: "Acrobatics", prime: Attributes.Dexterity, description: "Coordination, Grace, Balancing, Escaping, Catching a Fall" };
    static readonly Archery: Skill = { name: "Archery", prime: Attributes.Dexterity, description: "Fight with ranged weapons, identify and maintain weapons and armor", isCombat: true };
    static readonly Stealth: Skill = { name: "Stealth", prime: Attributes.Dexterity, description: "Move silently and hide in shadows, or smuggle an item" };
    static readonly Thievery: Skill = { name: "Thievery", prime: Attributes.Dexterity, description: "Pick Locks and Defeat both magical and mundane Traps, overcome security" };
    static readonly Dungeoneering: Skill = { name: "Dungeoneering", prime: Attributes.Constitution, description: "Jam doors, set traps, use rope, skillful use of equipment" };
    static readonly Riding: Skill = { name: "Riding", prime: Attributes.Constitution, description: "Ride an animal, drive a cart, carriage or sailing ship, maintain and navigate" };
    static readonly Arcane: Skill = { name: "Arcane", prime: Attributes.Intelligence, description: "Analyze and Comprehend Arcane Theories and Traditions" };
    static readonly Crafting: Skill = { name: "Crafting", prime: Attributes.Intelligence, description: "Craft Items related to the Players Background, Society, and Class" };
    static readonly Lore: Skill = { name: "Lore", prime: Attributes.Intelligence, description: "Know matters of History, Geography and Natural Sciences" };
    static readonly Medicine: Skill = { name: "Medicine", prime: Attributes.Intelligence, description: "Identify and Treat diseases, poisons, and injuries" };
    static readonly Perception: Skill = { name: "Perception", prime: Attributes.Wisdom, description: "Spot Enemies, Listen, detect subtle sensory input like taste or smell" };
    static readonly Insight: Skill = { name: "Insight", prime: Attributes.Wisdom, description: "Determine intentions behind lies and body language" };
    static readonly Survival: Skill = { name: "Survival", prime: Attributes.Wisdom, description: "Hunt, Fish, Navigate in the wilderness, identify shelter, commune with animals" };
    static readonly Prayer: Skill = { name: "Prayer", prime: Attributes.Wisdom, description: "Ability to recall and perform Rites of Deities" };
    static readonly Persuasion: Skill = { name: "Persuasion", prime: Attributes.Charisma, description: "Influence Others through Negotiations, Flattery, Small Talk" };
    static readonly Deception: Skill = { name: "Deception", prime: Attributes.Charisma, description: "Mislead others using Disguises, Lies, and Subterfuge" };
    static readonly Intimidation: Skill = { name: "Intimidation", prime: Attributes.Charisma, description: "Dominate others with Blunt or Implied Threats" };
    static readonly Perform: Skill = { name: "Perform", prime: Attributes.Charisma, description: "Sing, Act, Dance, Orate, to impress a crowd" };
};