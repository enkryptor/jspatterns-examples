class SortedArray extends Array {
    constructor(...args) {
        super(...args);
        this.sort();
    }

    push(el) {
        super.push(el);
        this.sort();
    }
}

const sortedList = new SortedArray([8, 1, 4]);
console.log(sortedList); // 1, 4, 8
sortedList.push(3);
console.log(sortedList); // 1, 3, 4, 8

















sortedList.push(a);
const b = sortedList.pop();
expect(a).toBe(b) // fail