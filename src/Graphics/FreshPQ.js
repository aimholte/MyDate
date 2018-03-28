
// Priority Queue
const tops = 0;
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
        return this._heap[tops];
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
        if (bottom > tops) {
            this._swap(tops, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    replace(value) {
        const replacedValue = this.peek();
        this._heap[tops] = value;
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
        while (node > tops && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }

    _siftDown() {
        let node = tops;
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

//Functions to go from Array to Priority Queue
// and from Queue to Array

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

//arrays holding dates for Fresh
let FreshHigh =[
    {
        title: "Try relaxing at a Spa",
        cost: 70

    },
    {
        title: "Try Skydiving",
        cost: 140

    },
    {
        title:"Go see the Ice Castles",
        cost: 30

    },
    {
        title:"Wine and Pallet",
        cost: 85
    },
    {
        title: "Aquarium",
        cost:70
    },
    {
        title:"Stay at a Resort",
        cost:125
    }
];
let FreshMiddle =[
    {
        title:"Go see the Ice Castles",
        cost: 30
    },
    {
        title:"Aquarium",
        cost: 40
    },
    {
        title:"Look at open houses",
        cost: 0
    },
    {
        title:"Pick a book out for eachother",
        cost: 30
    },
    {
        title:"Go to a Ghost Town",
        cost: 14
    },
    {
        title:"Music Festival",
        cost : 35
    }
];
let FreshCheap =[
    {
        title: "Pick a book out for eachother",
        cost: 10
    },
    {
        title: "Go look at the frozen waterfall",
        cost: 0
    },
    {
        title: "Try that new Bakery",
        cost: 15
    },
    {
        title:"Arts Festival",
        cost: 10
    },
    {
        title:"Go to a city park",
        cost: 14
    },
    {
        title:"Revist your high school",
        cost : 12
    }
];
// puts objects in a Q and then pops them to an array
const freshCheapPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(freshCheapPQ,FreshCheap);
let sortedFreshCheap = [];
addAll(freshCheapPQ,sortedFreshCheap);

const freshMiddlePQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(freshMiddlePQ,FreshMiddle);
let sortedFreshMiddle = [];
addAll(freshMiddlePQ,sortedFreshMiddle);

const freshHighPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(freshHighPQ,FreshHigh);
let sortedFreshHigh = [];
addAll(freshHighPQ,sortedFreshHigh);

//adds up the cost for two objects
function allCost(entry1,entry2){
    return entry1.cost +entry2.cost;

}
//Cheap total Cost
let dateMoney = allCost(sortedFreshCheap[0],sortedFreshCheap[5]);
let dateMoney2 = allCost(sortedFreshCheap[1],sortedFreshCheap[4]);
let dateMoney3 = allCost(sortedFreshCheap[2],sortedFreshCheap[3]);
//Middle Total Cost
let dateMoney4 = allCost(sortedFreshMiddle[0],sortedFreshMiddle[5]);
let dateMoney5 = allCost(sortedFreshMiddle[1],sortedFreshMiddle[4]);
let dateMoney6 = allCost(sortedFreshMiddle[2],sortedFreshMiddle[3]);
//High Total Cost
let dateMoney7 = allCost(sortedFreshHigh[0],sortedFreshHigh[5]);
let dateMoney8 = allCost(sortedFreshHigh[1],sortedFreshHigh[4]);
let dateMoney9 = allCost(sortedFreshHigh[2],sortedFreshHigh[3]);