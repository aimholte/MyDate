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


let FreshHigh =[
    {
        title: "Try relaxing at a Spa",

    },
    {
        title: "Try Skydiving",

    },
    {
        title:"Go see the Ice Castles",

    },
    {
        title:"Wine and Pallet"
    }
];
let FreshMiddle =[
    {
        title:"Go see the Ice Castles",
    },
    {
        title:"Aquarium"
    },
    {
        title:"Look at open houses"
    },
    {
        title:"Change This",
        cost: 10
    },
    {
        title:"Chang This one Too",
        cost: 14
    },
    {
        title:"Fix THis",
        cost : 12
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
        title:"Change This",
        cost: 10
    },
    {
        title:"Chang This one Too",
        cost: 14
    },
    {
        title:"Fix THis",
        cost : 12
    }
];

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
