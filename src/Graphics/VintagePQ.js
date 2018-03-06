//Creates PQ
const toops = 0;
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
        return this._heap[toops];
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
        if (bottom > toops) {
            this._swap(toops, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    replace(value) {
        const replacedValue = this.peek();
        this._heap[toops] = value;
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
        while (node > toops && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }

    _siftDown() {
        let node = toops;
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


//functions for Array to Q and Q to array
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
//arrays for vintage Date
let VintageCheap =[
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

    },
    {
        title:"Take a walk around a pond",
        cost:5
    },
    {
        title:"Go Fishing",
        cost:10
    },
    {
        title: "Go to a local play",
        cost:22
    }
];
let VintageHigh =[
    {
        title:"Rent an old convertible",
        cost: 150
    },
    {
        title:"Find a field to go picnicking in",
        cost: 50
    },
    {
        title:"Rent out a Lake House",
        cost: 129
    },
    {
        title:"Go hit the lake",
        cost: 75
    },
    {
        title:"Go to an observatory",
        cost: 80
    },
    {
        title: "Laser Tag",
        cost: 66
    },
    {
        title:"Boat Tour",
        cost: 89
    }
];
let VintageMiddle =[
    {
        title: "Drive-In",
        cost:30
    },
    {
        title: "Go dancing in the Caves",
        cost: 36
    },
    {
        title:"Bowling Alley",
        cost: 28
    },
    {
        title:"Go for snowcones",
        cost: 22
    },
    {
        title: "Go to a rally",
        cost:15
    },
    {
        title:"Lay out and watch the stars",
        cost:34
    }
];

//puts objects in PQ and then array
const VintageCheapPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(VintageCheapPQ,VintageCheap);
let sortedVintageCheap = [];
addAll(VintageCheapPQ,sortedVintageCheap);

const VintageHighPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(VintageHighPQ,VintageHigh);
let sortedVintageHigh = [];
addAll(VintageHighPQ,sortedVintageHigh);

const VintageMiddlePQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(VintageMiddlePQ,VintageMiddle);
let sortedVintageMiddle = [];
addAll(VintageMiddlePQ,sortedVintageMiddle);

//adds up the cost for two objects
function allCost(entry1,entry2){
    return entry1.cost + entry2.cost;

}
//Cheap Totals
let totalCost = allCost(sortedVintageCheap[0],sortedVintageCheap[5]);
let totalCost2 = allCost(sortedVintageCheap[1],sortedVintageCheap[4]);
let totalCost3 = allCost(sortedVintageCheap[2],sortedVintageCheap[3]);
//Middle Totals
let totalCost4 = allCost(sortedVintageMiddle[0],sortedVintageMiddle[5]);
let totalCost5 = allCost(sortedVintageMiddle[1],sortedVintageMiddle[4]);
let totalCost6 = allCost(sortedVintageMiddle[2],sortedVintageMiddle[3]);
//High Totals
let totalCost7 = allCost(sortedVintageHigh[0],sortedVintageHigh[5]);
let totalCost8 = allCost(sortedVintageHigh[1],sortedVintageHigh[4]);
let totalCost9 = allCost(sortedVintageHigh[2],sortedVintageHigh[3]);

console.log(totalCost6);


