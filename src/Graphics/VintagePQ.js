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
        title:"Change this",
        cost:5
    },
    {
        title:"Change this also",
        cost:10
    },
    {
        title: "Fix This",
        cost:22
    }
];
let VintageHigh =[
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
    }
];


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
