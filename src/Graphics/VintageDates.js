let LowVintage =[
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

let CheapVin = "";
for (i=0;i<LowVintage.length;i++){
    CheapVin+= LowVintage[i].title;
    CheapVin+=" ,"
}
let ModVin ="";
for(i=0;i<Midvintage.length;i++){
    ModVin+= Midvintage[i].title;
    ModVin+=", ";
}
let ExVin = "";
for(i=0;i<Hivintage.length;i++){
    ExVin += Hivintage[i].title;
    ExVin+=", ";
}