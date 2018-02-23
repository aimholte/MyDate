

//counter to keep track of the category chosen
let count = 0;
//arrays holding the objects of the categories
let active = [

    {
        title: "Indoor Rockclimbing",
        location: "Climb Up",
        cost: 40
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

let city = [
    {
        title:"Professional Sports Game",
        location: "Target Center",
        cost: 50
    },
    {
        title: "Go see a Play",
        location: "Guthrie Theatre",
        cost:30
    },
    {
        title:"Museum",
        loction: "Night-town Museum",
        cost:15

    }

];
let fresh =[
    {
        title: "Try relaxing at a Spa",
        loction: "Ease your mind",
        cost:50
    },
    {
        title: "Pick a book out for eachother",
        loction: " R & R's bookstore",
        cost:20
    },
    {
        title:"Go see the Ice Castles",
        location: "Stillwater,MN",
        cost:30
    }
];

let vintage =[
    {
        title:"Bowling Alley",
        location:"Pinz",
        cost:25
    },
    {
        title:"Drive-In",
        location:"Ya Ya movies",
        cost:20
    },
    {
        title: "Go dancing in the Caves",
        location:"Saint Paul Caves",
        cost:16
    }
];
//functions that send you to the page with the activites given the price ranges set all ready and category chosen

function activeprint() {


    window.location= "Money_Page_Active.html";
    count =1;
}
function cityprint() {

    window.location= "Money_Page_City.html";
    count=2;
}
function freshprint() {

    window.location= "Money_Page_Fresh.html";
    count = 3;
}
function vintageprint() {
    window.location= "Money_Page_Vintage.html";
    count = 4;
}
//functions that go through and prints out three options for the date based on the price and the category prints them
function runnercheap() {
    let date = "";
    if(count===1){
        for(i=0; i<active.length;i++){
            if (active[i].cost<=25){
                date+= active[i].title;
                date+= ", ";
            }
        }
    }
    if (count ===2){
        for (i=0; i<city.length; i++){
            if (city[i].cost<=25){
                date+= city[i].title;
                date+=", ";
            }
        }
    }
    if(count===3){
        for(i=0; i<fresh.length;i++){
            if (fresh[i].cost<=25){
                date+= fresh[i].title;
                date+= ", ";
            }
        }
    }
    if(count===4){
        for(i=0; i<vintage.length;i++){
            if (vintage[i].cost<=25){
                date+= vintage[i].title;
                date+= ", ";
            }
        }
    }
    if(date ===""){
        date+="Sorry no dates for you";
    }
    window.alert(date)
}
function runnermid() {
    let date1 = "";
    if(count===1){
        for(i=0; i<active.length;i++){
            if (active[i].cost<=35){
                date1+= active[i].title;
                date1+= ", ";
            }
        }
    }
    else if (count ===2){
        for (i=0; i<city.length; i++){
            if (city[i].cost<=35){
                date1+= city[i].title;
                date1+=", ";
            }
        }
    }
    else if (count === 3){
        for (i=0; i<fresh.length; i++){
            if (fresh[i].cost<=35){
                date1+= fresh[i].title;
                date1+=", ";
            }
        }
    }
    else if(count === 4){
        for (i=0; i<vintage.length; i++){
            if (vintage[i].cost<=35){
                date1+= vintage[i].title;
                date1+=", ";
            }
        }
    }

    window.alert(date1)
}

function runnerhigh() {
    let date2 = "";
    if(count===1){
        for(i=0; i<active.length;i++){
            if (active[i].cost<=100){
                date2+= active[i].title;
                date2+= ", ";
            }
        }
    }
    else if (count ===2){
        for (i=0; i<city.length; i++){
            if (city[i].cost<=100){
                date2+= city[i].title;
                date2+=", ";
            }
        }
    }
    else if (count === 3){
        for(i=0; i<fresh.length;i++){
            if (fresh[i].cost<=100){
                date2+= fresh[i].title;
                date2+= ", ";
            }
        }
    }
    else if (count === 4){
        for(i=0; i<vintage.length;i++){
            if (vintage[i].cost<=100){
                date2+= vintage[i].title;
                date2+= ", ";
            }
        }
    }
    window.alert(date2)
}
let price = 0;
//functions to go to a different page
function gotToActive(){
    window.location = "Active_Page.html"

}
function goToCity(){
    window.location = "City_Page.html"
}
function goToFresh(){
    window.location = "Fresh_Page.html"
}
function goToVintage(){
    window.location = "Vintage_Page.html"
}

//sends you to the correct page
function bigBallerActive(){
   window.location ="High_Budget_Active.html"

}
function someDoughActive(){
    window.location = "Mid_Active.html"

}
function ballingBudgetActive(){
    window.location = "Cheap_Active.html"


}

function bigBallerCity(){
    window.location ="High_Budget_City.html"

}
function someDoughCity(){
    window.location = "Mid_City.html"

}
function ballingBudgetCity(){
    window.location = "Cheap_City.html"
}

function bigBallerFresh(){
    window.location ="High_Budget_Fresh.html"

}
function someDoughFresh(){
    window.location = "Mid_Fresh.html"

}
function ballingBudgetFresh(){
    window.location = "Cheap_Fresh.html"


}

function bigBallerVintage(){
    window.location ="High_Budget_Vintage.html"

}
function someDoughVintage(){
    window.location = "Mid_Vintage.html"

}
function ballingBudgetVintage(){
    window.location = "Cheap_Vintage.html"


}



