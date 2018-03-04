function titlesSeparatedByCommas(items) {
    return items
        .map((item) => item.title)
        .join(", ");
}
let activeCheap = [

    {
        title:"Swing Dancing in the Caves",
        cost:16
    },
    {
        title:"Mini Golfing",
        cost:25
    },
    {
        title: " Bike around a Lake ",
        cost:10
    },
    {
        title:"Play Ping Pong",
        cost:0
    },
    {
        title:"Walk around the City",
        cost: 0
    },
    {
        title: "Go to a Park",
        cost: 0
    },
    {
        title:"See Minnehaha Falls",
        cost:0
    },
    {
        title: "Go to a Roller Durby game",
        cost: 25
    }

];

let activeMid =[
    {
        title: "Go Indoor Rock Climbing",
        cost: 40
    }  ,
    {
        title: "Pedal Pub",
        cost:30
    },
    {
        title: "Go to the Zoo",
        cost:36
    },
    {
        title:"Go Salsa Dancing ",
        cost: 20
    },
    {
        title:"Roller Skating",
        cost: 25
    },
    {
        title:"Go Karting",
        cost: 40
    },
    {
        title: "Laser Tag",
        cost: 45
    }


];


let  activeHi =[
    {
        title: "Yoga in a Salt Cave",
        cost:60
    },
    {
        title:"Zip lining through a Forest",
        cost: 160

    },
    {
        title:"White Water Rafting",
        cost:110
    },
    {
        title:"Go Skiing",
        cost:100
    },
    {
        title: "Trampoline House",
        cost:80
    },
    {
        title:"Valley Fair",
        cost: 50
    }
];
let Hiact = titlesSeparatedByCommas(activeHi);
let Midact =titlesSeparatedByCommas(activeMid);
let LowAct = titlesSeparatedByCommas(activeCheap);


let Midcity = [
    {
        title:"Professional Sports Game",
        location: "Target Center",
        cost: 50
    },
    {
        title: "Check out the sculpture garden",
        cost: 30

    },
    {
        title:"Go on a Food Tour",
        loction: "Night-town Museum",
        cost:50

    },
    {
        title:"Segway Tour",
        cost:45
    },
    {
        title: "Go to a club",
        cost: 33
    },
    {
        title: "Casino Time",
        cost:40
    }

];
let Hicity =[
    {
        title: "Brewery Tour",
        cost:75
    },
    {
        title:"Eat up top of a Skyscraper",
        cost:100
    },
    {
        title:"Go see a play",
        cost:70
    },
    {
        title:"Something here",
        cost: 80
    },
    {
        title:"Change this",
        cost:55
    },
    {
        title:"Change this one too",
        cost:66
    }
];
let Lowcity =[
    {
        title:"The World Market",
        cost: 20
    },
    {
        title:"Check out a Museum",
        cost: 15
    },
    {
        title:"Ride Bike's around the Green Way",
        cost: 10
    },
    {
        title: "The old Mill downtown",
        cost:10
    },
    {
        title: "Raspberry Island",
        cost:0
    },
    {
        title: "The River Downtown",
        cost:0
    }
];

let HiCi =  titlesSeparatedByCommas(Hicity);
let Midci =titlesSeparatedByCommas(Midcity);
let LowCi = titlesSeparatedByCommas(Lowcity);

let HiFresh =[
    {
        title: "Try relaxing at a Spa",

    },
    {
        title: "Try Skydiving",

    },
    {
        title:"Go see the Ice Castles",

    },
    {
        title:"Wine and Pallet"
    }
];
let MidFresh =[
    {
        title:"Go see the Ice Castles",
    },
    {
        title:"Aquarium"
    },
    {
        title:"Look at open houses"
    }
];
let LowFresh =[
    {
        title: "Pick a book out for eachother"
    },
    {
        title: "Go look at the frozen waterfall"
    },
    {
        title: "Try that new Bakery"
    }
];
let Hifre =titlesSeparatedByCommas(HiFresh);
let Midfre=titlesSeparatedByCommas(MidFresh);
let Lowfre=titlesSeparatedByCommas(LowFresh);

let LowVintage =[
    {
        title:"Stroll around the Mall",
        cost: 30

    },
    {
        title:"Go to an Arcade",
        cost:20

    },
    {
        title: "Go to a Pet store",
        cost:0

    }
];
let HiVintage =[
    {
        title:"Rent an old convertible"
    },
    {
        title:"Find a field to go picnicking in"
    },
    {
        title:"Rent out a Lake House"
    }
];
let MidVintage =[
    {
        title: "Drive-In"
    },
    {
        title: "Go dancing in the Caves",
    },
    {
        title:"Bowling Alley"
    }
];




let LV = titlesSeparatedByCommas(LowVintage);
let HV = titlesSeparatedByCommas(HiVintage);
let MV = titlesSeparatedByCommas(MidVintage);









