
let activecheap = [

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
let Hiact = "";
for (i=0;i<activeHi.length;i++){
    Hiact+= activeHi[i].title;
    Hiact+=" ,"
}
let Midact ="";
for(i=0;i<activeMid.length;i++){
    Midact+= activeMid[i].title;
    Midact+=", ";}
let LowAct = "";
for(i=0;i<activecheap.length;i++){
    LowAct += activecheap[i].title;
    LowAct+=", ";
}


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

let HiCi ="";
for (i=0;i<Hicity.length;i++){
    HiCi+= Hicity[i].title;
    HiCi+= ", ";
}
let Midci ="";
for(i=0;i<Midcity.length;i++){
    Midci+= Midcity[i].title;
    Midci+= ", ";
}
let LowCi = "";
for(i=0;i<Lowcity.length;i++){
    LowCi+= Lowcity[i].title;
    LowCi+=", ";
}
let Hifresh =[
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
let Hifre ="";
for(i=0;i<Hifreshresh.length;i++){
    Hifre+=Hifresh[i].title;
    Hifre+=", "
}
let Midfre="";
for(i=0;i<MidFresh.length;i++){
    Midfre+= MidFresh[i].title;
    Midfre+=", "
}
let Lowfre="";
for(i=0;i<LowFresh.length;i++){
    Lowfre+= LowFresh[i].title;
}
let Lowvintage =[
    {
        title:"Stroll around the Mall",

    },
    {
        title:"Go to an Arcade",

    },
    {
        title: "Go to a Pet store",

    }
];
let Hivintage =[
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
let Midvintage =[
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
let LV ="";
for(i=0;i<Lowvintage.length;i++){
    LV+= Lowvintage[i].title;
    LV += ", ";
}
let HV ="";
for(i=0;i<Hivintage.length;i++){
    HV+= Hivintage[i].title;
    HV+= ", ";
}
let MV ="";
for(i=0;i<Midvintage.length;i++){
    MV+= Midvintage[i].title;
    MV+=", ";
}

