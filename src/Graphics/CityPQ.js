
//PQ Class
const topss = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this._heap[topss];
    }

    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }

    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > topss) {
            this._swap(topss, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    replace(value) {
        const replacedValue = this.peek();
        this._heap[topss] = value;
        this._siftDown();
        return replacedValue;
    }

    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }

    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    _siftUp() {
        let node = this.size() - 1;
        while (node > topss && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }

    _siftDown() {
        let node = topss;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
            ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}
//functions for array to Q and Q to array
function pushAll(pq,array) {
    for (let i=0; i<array.length;i++){
        pq.push(array[i]);
    }

}
function addAll(pq,array){
    while(!pq.isEmpty()){
        let entry = pq.pop();
        array.push(entry);
    }
}
//Arrays for City
let CityMiddle = [
    {
        title:"T-Wolves Game",
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
let CityHigh =[
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
        title:"Food tour",
        cost: 60
    },
    {
        title:"Casino",
        cost:55
    },
    {
        title:"Go to a Wild Game",
        cost:66
    }
];
let CityCheap =[
    {
        title:"The World Market",
        cost: 20
    },
    {
        title:"Check out a Museum",
        cost: 15
    },
    {
        title:"Ride Bike's on the Green Way",
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
//City Cheap
const cityCheapPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(cityCheapPQ,CityCheap);
let sortedCityCheap =[];
addAll(cityCheapPQ,sortedCityCheap);
//City Mid
const cityMidPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(cityMidPQ,CityMiddle);
let sortedCityMid =[];
addAll(cityMidPQ,sortedCityMid);
// City HI
const cityHiPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(cityHiPQ,CityHigh);
let sortedCityHi =[];
addAll(cityHiPQ,sortedCityHi);


//adds up the cost for two objects
function allCost(entry1,entry2){
    return entry1.cost +entry2.cost;

}

let dateCost1 = allCost(sortedCityCheap[0],sortedCityCheap[5]);
let dateCost2 = allCost(sortedCityCheap[1],sortedCityCheap[4]);
let dateCost3 = allCost(sortedCityCheap[2],sortedCityCheap[3]);

let dateCost4 = allCost(sortedCityMid[0],sortedCityMid[5]);
let dateCost5 = allCost(sortedCityMid[1],sortedCityMid[4]);
let dateCost6 = allCost(sortedCityMid[2],sortedCityMid[3]);

let dateCost7 = allCost(sortedCityHi[0],sortedCityHi[5]);
let dateCost8 = allCost(sortedCityHi[1],sortedCityHi[4]);
let dateCost9 = allCost(sortedCityHi[2],sortedCityHi[3]);

console.log(sortedCityCheap[1].cost);
console.log(sortedCityCheap[4].cost);