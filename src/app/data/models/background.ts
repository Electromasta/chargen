export interface Background    {
    id: number,
    name: string,
    free: string,
    quick: string[],
    learning: string[],
    chosen: string[],
}

export var backgrounds: Background[] = [
    { id: 0, name: "Artisan", free: "Craft", quick: [ "Trade", "Connect" ], learning: [ "Connect", "Convince", "Craft", "Craft", "Exert", "Know", "Notice", "Trade" ], chosen: [ "Trade", "Connect" ] },
    { id: 1, name: "Barbarian", free: "Survive", quick: [ "*Combat", "Notice" ], learning: [ "*Combat", "Connect", "Exert", "Lead", "Notice", "Punch", "Sneak", "Survive" ], chosen: [ "*Combat", "Notice" ] },
    { id: 2, name: "Carter", free: "Ride", quick: [ "Connect", "*Combat" ], learning: [ "*Combat", "Connect", "Craft", "Exert", "Notice", "Ride", "Survive", "Trade" ], chosen: [ "Connect", "*Combat" ] },
    { id: 3, name: "Courtesan", free: "Perform", quick: [ "Notice", "Connect" ], learning: [ "*Combat", "Connect", "Convince", "Exert", "Notice", "Punch", "Survive", "Trade" ], chosen: [ "Notice", "Connect" ] },
    { id: 4, name: "Criminal", free: "Sneak", quick: [ "Connect", "Convince" ], learning: [ "Administer", "*Combat", "Connect", "Convince", "Exert", "Notice", "Sneak", "Trade" ], chosen: [ "Connect", "Convince" ] },
    { id: 5, name: "Hunter", free: "Shoot", quick: [ "Survive", "Sneak" ], learning: [ "*Combat", "Exert", "Heal", "Notice", "Ride", "Shoot", "Sneak", "Survive" ], chosen: [ "Survive", "Sneak" ] },
    { id: 6, name: "Laborer", free: "Work", quick: [ "Connect", "*Any" ], learning: [ "Administer", "*Any", "Connect", "Convince", "Craft", "Exert", "Ride", "Work" ], chosen: [ "Connect", "*Any" ] },
    { id: 7, name: "Merchant", free: "Trade", quick: [ "Convince", "Connect" ], learning: [ "Administer", "*Combat", "Connect", "Convince", "Craft", "Know", "Notice", "Trade" ], chosen: [ "Convince", "Connect" ] },
    { id: 8, name: "Noble", free: "Lead", quick: [ "Connect", "Administer" ], learning: [ "Administer", "*Combat", "Connect", "Convince", "Know", "Lead", "Notice", "Ride" ], chosen: [ "Connect", "Administer" ] },
    { id: 9, name: "Nomad", free: "Ride", quick: [ "Survive", "*Combat" ], learning: [ "*Combat", "Connect", "Exert", "Lead", "Notice", "Ride", "Survive", "Trade" ], chosen: [ "Survive", "*Combat" ] },
    { id: 10, name: "Peasant", free: "Exert", quick: [ "Sneak", "Survive" ], learning: [ "Connect", "Exert", "Craft", "Notice", "Sneak", "Survive", "Trade", "Work" ], chosen: [ "Sneak", "Survive" ] },
    { id: 11, name: "Performer", free: "Perform", quick: [ "Convince", "Connect" ], learning: [ "*Combat", "Connect", "Exert", "Notice", "Perform", "Perform", "Sneak", "Convince" ], chosen: [ "Convince", "Connect" ] },
    { id: 12, name: "Physician", free: "Heal", quick: [ "Know", "Notice" ], learning: [ "Administer", "Connect", "Craft", "Heal", "Know", "Notice", "Convince", "Trade" ], chosen: [ "Know", "Notice" ] },
    { id: 13, name: "Priest", free: "Pray", quick: [ "Pray", "Know" ], learning: [ "Administer", "Connect", "Know", "Lead", "Heal", "Convince", "Pray", "Pray" ], chosen: [ "Pray", "Know" ] },
    { id: 14, name: "Sailor", free: "Sail", quick: [ "Exert", "Notice" ], learning: [ "*Combat", "Connect", "Craft", "Exert", "Heal", "Notice", "Perform", "Sail" ], chosen: [ "Exert", "Notice" ] },
    { id: 15, name: "Scholar", free: "Know", quick: [ "Heal", "Administer" ], learning: [ "Administer", "Heal", "Craft", "Know", "Notice", "Perform", "Pray", "Convince" ], chosen: [ "Heal", "Administer" ] },
    { id: 16, name: "Slave", free: "Sneak", quick: [ "Survive", "Exert" ], learning: [ "Administer", "*Combat", "*Any", "Convince", "Exert", "Sneak", "Survive", "Work" ], chosen: [ "Survive", "Exert" ] },
    { id: 17, name: "Soldier", free: "*Combat", quick: [ "Exert", "Survive" ], learning: [ "*Combat", "*Combat", "Exert", "Lead", "Notice", "Ride", "Sneak", "Survive" ], chosen: [ "Exert", "Survive" ] },
    { id: 18, name: "Thug", free: "*Combat", quick: [ "Convince", "Connect" ], learning: [ "*Combat", "*Combat", "Connect", "Convince", "Notice", "Sneak", "Survive" ], chosen: [ "Convince", "Connect" ] },
    { id: 19, name: "Wanderer", free: "Survive", quick: [ "Sneak", "Notice" ], learning: [ "*Combat", "Connect", "Notice", "Perform", "Ride", "Sneak", "Survive", "Work" ], chosen: [ "Sneak", "Notice" ] }
];