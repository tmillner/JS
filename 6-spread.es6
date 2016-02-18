let first = [1,2,3];
let second = [4,5,6,7,8,9];

let merged = first.push(...second); 
console.log(`first is ${first};\nmerged is ${merged}`);

let third = [3,3,3];
let threeWay = (a,b,c) => a+b+c;
console.log(`threeWay result is: ` + threeWay(...third));