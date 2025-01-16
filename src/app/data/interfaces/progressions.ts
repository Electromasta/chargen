export interface Progression {
    level: number;
    hitdice: number;
    bab: number;
    feats: Array<FeatType>
    focus?: number;
    arts?: number;
    spelltier?: number;
    spellslots?: number;
    spellsprep?: number;
}

export enum FeatType {
    WARRIOR = "Warrior",
    EXPERT = "Expert",
    MAGE = "Mage",
    ANY = "Any"
} 

export class Progressions {
    static readonly Warrior: Progression = { level: 1, hitdice: 2, bab: 1, feats: [ FeatType.ANY, FeatType.WARRIOR ] };
    static readonly Expert: Progression = { level: 1, hitdice: 0, bab: 0, feats: [ FeatType.ANY, FeatType.EXPERT ] };
    static readonly Mage: Progression = { level: 1, hitdice: -1, bab: 0, feats: [ FeatType.ANY ], focus: 3, arts: 2, spelltier: 1, spellslots: 1, spellsprep: 3 };

    static readonly ExpertWarrior: Progression = { level: 1, hitdice: 2, bab: 1, feats: [ FeatType.ANY, FeatType.WARRIOR, FeatType.EXPERT ] };
    static readonly ExpertMage: Progression = { level: 1, hitdice: 0, bab: 0, feats: [ FeatType.ANY, FeatType.EXPERT ], focus: 2, arts: 1, spelltier: 1, spellslots: 1, spellsprep: 2 };
    static readonly WarriorMage: Progression = { level: 1, hitdice: 2, bab: 1, feats: [ FeatType.ANY, FeatType.WARRIOR ], focus: 2, arts: 1, spelltier: 1, spellslots: 1, spellsprep: 2 };
    static readonly DualMage: Progression = { level: 1, hitdice: -1, bab: 0, feats: [ FeatType.ANY ], focus: 3, arts: 2, spelltier: 1, spellslots: 1, spellsprep: 3 };

    static readonly SpecialistExpert: Progression = { level: 1, hitdice: 0, bab: 0, feats: [ FeatType.ANY, FeatType.EXPERT ], focus: 2, arts: 1 };
    static readonly SpecialistWarrior: Progression = { level: 1, hitdice: 2, bab: 1, feats: [ FeatType.ANY, FeatType.WARRIOR ], focus: 2, arts: 1 };
    static readonly SpecialistMage: Progression = { level: 1, hitdice: 0, bab: 0, feats: [ FeatType.ANY ], focus: 2, arts: 1, spelltier: 1, spellslots: 1, spellsprep: 2  };
    static readonly DualSpecialist: Progression = { level: 1, hitdice: 0, bab: 0, feats: [ FeatType.ANY ], focus: 3, arts: 2 };
    static readonly ErrorProgression: Progression = { level: 0, hitdice: 0, bab: 0, feats: [ ] };
}