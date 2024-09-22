const myIterator = {
    done: false,
    next() {
        const result = this.done ? { done: true } : { value: "Hello!", done: false };
        this.done = true;
        return result;
    },
    [Symbol.iterator]() {
        return this;
    },
};


// можно вызвать next() напрямую:
[1, 2, 3][Symbol.iterator]().next()





let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let num of range) {
    alert(num); // 1, 2, 3, 4, 5
}


// генератор как вариант реализации

