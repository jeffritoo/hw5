/* Tutorial 4
 Example 2 JavaScript code
*/
console.log("Jeffry's Output from Tutorial 4 Example 2");

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

let oddNumbers = numbers.filter(function(item) {
    return (item % 2 !== 0);
 });

 let divBy3or5 = numbers.filter(function(item) {
    return (item % 3 == 0 || item % 5 == 0 );
 });

let multBy3 = numbers.map(function(item) {
    return (item * 3);
 });

 let divBy4 = numbers.filter(function(item) {
    return (item % 4 == 0);
 });

 let divBy4multby3 = divBy4.map(function(item) {
    return (item * 3);
 });

const arraySum = numbers.reduce((acc,value)=>acc+value,0);

/*
let arraySquaredSum = sum.map(function(item){
    return(item **2);
});
*/

console.log(oddNumbers);
console.log(multBy3);
console.log(divBy3or5);
console.log(divBy4multby3);
console.log(arraySum);

