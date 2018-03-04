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
let activeLow = [

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

const activeCheapPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(activeCheapPQ,activeLow);
let sortedActiveCheap = [];
addAll(activeCheapPQ,sortedActiveCheap);
//console.log(sortedActiveCheap[4]);

//Medium Price

let activeMiddle =[
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


let  activeEx =[
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

const activeMidPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(activeMidPQ,activeMiddle);
let sortedActiveMid =[];
addAll(activeMidPQ,sortedActiveMid);
//console.log(sortedActiveMid[0]);

//Active High

const activeHiPQ = new PriorityQueue((a,b)=> a[1]<b[1]);
pushAll(activeHiPQ,activeEx);
let sortedActiveHi = [];
addAll(activeHiPQ,sortedActiveHi);









