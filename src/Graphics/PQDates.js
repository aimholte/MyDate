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

let  activeHi =[
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

// const pairwiseQueue = new PriorityQueue((a, b) => a[1] > b[1]);
// pairwiseQueue.push(['low', 0], ['medium', 8], ['high', 10]);
// console.log('\nContents:');
// while (!pairwiseQueue.isEmpty()) {
//     console.log(pairwiseQueue.pop()[0]); //=> 'high', 'medium', 'low'
// }

const PQ = new PriorityQueue((a,b)=> a[1]>b[1]);
PQ.push([activeHi[0].title,activeHi[0].cost], [activeHi[1].title, activeHi[1].cost],[activeHi[2].title,activeHi[2].cost]);
let name = "";
name+=PQ.pop()[0];

let work =[
    {
        title: name
    },
];

console.log(work[0].title);
//console.log(PQ.pop()[0]);


// const ActionHIQueue = new PriorityQueue((a, b) => a[1] > b[1]);
// ActionHIQueue.push([activeHi[0].title, activeHi[0].cost], [activeHi[1].title, activeHi[1].cost], [activeHi[2].title, activeHi[2].cost],
//     [activeHi[3].title, activeHi[3].cost], [activeHi[4].title, activeHi[4].cost], [activeHi[5].title, activeHi[5].cost]);
// console.log('\nContents:');


// while (!ActionHIQueue.isEmpty()) {
//     console.log(ActionHIQueue.pop()[0]); //=> 'high', 'medium', 'low'
//}