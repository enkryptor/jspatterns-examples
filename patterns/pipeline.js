// пример из Фаулера "Replace Loop with Pipeline"

const names = [];
for (const i of input) {
    if (i.job === "programmer") {
        names.push(i.name);
    }
}


const names2 = input
    .filter(i => i.job === "programmer")
    .map(i => i.name);



    

function filter() {}

function map() {}

console.log(map(filter(input)))




const pipe = (...fns) => x => {
    return fns.reduce((v, f) => f(v), x);
};

const add = x => x + 1;
const multiply = x => x * 2;
const subtract = x => x - 3;

const processValue = pipe(add, multiply, subtract);
const result = processValue(5);

console.log(result); // 9

