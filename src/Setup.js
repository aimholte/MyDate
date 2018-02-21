

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

    count =1;
    window.location= "Money_Page.html"
}
function cityprint() {
    count=2;
    window.location= "Money_Page.html"
}
function freshprint() {
    count = 3;
    window.location= "Money_Page.html"
}
function vintageprint() {
    count = 4;
    window.location= "Money_Page.html"
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
function gotToThree(){
    window.location = "Page3.html"

}
function goToFour(){
    window.location = "http://localhost:63342/HS/working/Page4.html?_ijt=5mdijck2gh2a38s515odco4d9i"
}
function goToFive(){
    window.location = "http://localhost:63342/HS/working/Page5.html?_ijt=5mdijck2gh2a38s515odco4d9i"
}
function goToSix(){
    window.location = "http://localhost:63342/HS/working/Page6.html?_ijt=5mdijck2gh2a38s515odco4d9i"
}
function goToSeven()
{
    window.location ="http://localhost:63342/HS/working/Page7.html?_ijt=5mdijck2gh2a38s515odco4d9i"
}
//sends you to the correct page
function bigBaller(){
    price = 3;
    if(count === 1){
        gotToThree();
    }
    else if(count ===2){
        goToFour();
    }
    else if(count===3){
        goToFive();
    }
    else{
        goToSix();
    }
}
function someDough(){
    price =2;
    if(count === 1){
        gotToThree();
    }
    else if(count ===2){
        goToFour();
    }
    else if(count===3){
        goToFive();
    }
    else{
        goToSix();
    }
}
function ballingBudget(){
    price =1;
    if(count === 1){
        gotToThree();
    }
    if(count ===2){
        goToFour();
    }
    if(count===3){
        goToFive();
    }
    if(count ===4){
        goToSix();
    }

}


