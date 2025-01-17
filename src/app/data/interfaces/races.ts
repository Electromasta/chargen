import { Label } from "./label";

export interface Race extends Label {
    bonus?: string;
    bane?: string;
    sense?: string;
    skill?: string;
}

export class Races {
    static readonly Human: Race = { name: "Human", bonus: "None", bane: "None", sense: "None", skill: "None", description: "Humans are the most numerous and are born into a variety of circumstances.  They are the only Origin to not require the selection of the Origin Feat." };

    static readonly Elf: Race = { name: "Elf", bonus: "+1 Dex or Int", bane: "-1 Con", sense: "Lowlight Vision", skill: "Lore", description: "Elves have lived since the creation of the world, or even before.  Tall, slender, and beautiful, they retreat to hidden enclaves to remove their burdens by reincarnating." };
    static readonly Dwarf: Race = { name: "Dwarf", bonus: "+1 Con or Wis", bane: "-1 Cha", sense: "Tremorsense", skill: "Craft", description: "Built for the underground, dwarves are stocky and resistant to magic.  They have a deep connection to the earth and their cultures pride themselves on craftsmanship and earthworks." };
    static readonly Orc: Race = { name: "Orc", bonus: "+1 Str or Con", bane: "-1 Int", sense: "Darkvision", skill: "Intimidation", description: "Orcs are born into castes of warriors, shamans, or traders.  They lionize martial combat and elemental spirits while traveling in mobile caravan towns." };
    static readonly Beastfolk: Race = { name: "Beastfolk", bonus: "+1 Str or Dex", bane: "-1 Str or Dex", sense: "Scent", skill: "Perception", description: "Humanoid mammals that have varied features resembling cats, dogs, mice, and bats.  Because of their short lives, beastfolk collect and pass on agriculture, martial arts, and book collecting." };
    static readonly Greenfolk: Race = { name: "Greenfolk", bonus: "+1 Str or Cha", bane: "-1 Wis", sense: "Amphibious", skill: "Photosynthesis", description: "Refugees from a blighted deep sea civilization, Greenfolk now create communities on land, but the memory of their homeland is passed down to each generation." };
}