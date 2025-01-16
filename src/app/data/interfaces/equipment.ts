import { Label } from "./label";

export interface Equipment extends Label {
    value: string;
    shock?: string;
    weight: number;
}

export class Armors {
    static readonly Tunic: Equipment = { name: "Tunic", value: "12", weight: 1, description: "12 AC" };
    static readonly Pieced: Equipment = { name: "Pieced Mail", value: "14", weight: 2, description: "14 AC" };
    static readonly ScrapPlate: Equipment = { name: "Scrap Plate", value: "16", weight: 3, description: "16 AC" };
}

export class Weapons {
    static readonly Blackjack: Equipment = { name: "Blackjack", value: "1d4", shock: "-/AC10", weight: 1, description: "Subtle, Less Lethal" };
    static readonly Dagger: Equipment = { name: "Dagger", value: "1d4", shock: "1/AC15", weight: 1, description: "Thrown (30), Subtle, Murderous" };
    static readonly ClawBlades: Equipment = { name: "Claw Blades", value: "1d6", shock: "1/AC13", weight: 1, description: "Subtle" };
    static readonly Quarterstaff: Equipment = { name: "Quarterstaff", value: "1d6", shock: "1/AC13", weight: 1, description: "Two Handed, Less Lethal" };
    static readonly Shortsword: Equipment = { name: "Shortsword", value: "1d6", shock: "1/AC15", weight: 1, description: "" };
    static readonly Javelin: Equipment = { name: "Javelin", value: "1d6", shock: "1/AC13", weight: 1, description: "Thrown (30)" };
    static readonly Spear: Equipment = { name: "Spear", value: "1d6", shock: "1/AC13", weight: 1, description: "Reach" };
    static readonly Sling: Equipment = { name: "Sling", value: "1d4", shock: "-/AC10", weight: 1, description: "Reload (40), Subtle" };
    static readonly Crossbow: Equipment = { name: "Crossbow", value: "1d6", shock: "-/AC10", weight: 1, description: "Reload (50), Two Handed" };
    static readonly KiteShield: Equipment = { name: "Kite Shield", value: "+1 AC", shock: "", weight: 1, description: "" };
    static readonly Quiver: Equipment = { name: "Quiver", value: "+1 AC", shock: "", weight: 1, description: "" };
    static readonly Lamp: Equipment = { name: "Candle-Lamp", value: "30ft Light", shock: "", weight: 1, description: "" };
}

export class Bundles {
    static readonly Survival: Equipment = { name: "Survival Bundle", value: "", weight: 3, description: "Tinderbox, Mess Kit, Soap, Hatchet, Knife, Extra Rations." };
    static readonly Artisan: Equipment = { name: "Artisan Bundle", value: "", weight: 4, description: "Contains everything required for a certain type of artisanal crafting or trade." };
    static readonly Thieves: Equipment = { name: "Thieves Bundle", value: "", weight: 2, description: "Lockpicks, Ball Bearings, Caltrops, Bear Trap, Locks, Rope, Crowbar, Iron Spikes." };
    static readonly Performers: Equipment = { name: "Performers Bundle", value: "", weight: 3, description: "Various Disguises, Writing Kit, Fine Clothes, Mirror, Perfume." };
    static readonly Courtier: Equipment = { name: "Courtier Bundle", value: "", weight: 2, description: "Noble Clothes, Fine Clothes, Writing Kit, Signet Ring, Spyglass." };
}

export class StarterGear {
    static readonly Basic: Equipment = { name: "Basic Bundle", value: "", weight: 2, description: "Two Spare Sets of Clothes, Waterskins, Tent, and a Backpack." };
    static readonly HealingFlask: Equipment = { name: "Flask of Healing", value: "", weight: 1, description: "This potion’s Amber-Red liquid glimmers when shaken." };
    static readonly Rations: Equipment = { name: "Rations, 1 Week", value: "", weight: 5, description: "A weeks worth of non-perishable rations." };
}