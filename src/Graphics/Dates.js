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
        location: "Can Can",
        cost:25
    },
    {
        title: " Bike around a Lake ",
        location: "Lake of the Isles",
        cost:10
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

];


let activeHi =[
    {
        title: "Yoga in a Salt Cave",
        cost:60
    },
    {
        title:"Go zip lining through a Forest",
        cost: 160

    },
    {
        title:"White Water Rafting",
        cos:106
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
        title: "Check out the sculpture garden and Ice cream",

    },
    {
        title:"Go on a Food Tour",
        loction: "Night-town Museum",
        cost:50

    }

];
let Hicity =[
    {
        title: "Brewery Tour",
        cost:75
    },
    {
        title:"Eat up top of a Skyscraper",
    },
    {
        title:"Go see a play"
    }
];
let Lowcity =[
    {
        title:"The World Market"
    },
    {
        title:"Check out a Museum"
    },
    {
        title:"Ride Bike's around the Green Way"
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

