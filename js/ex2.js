/* Tutorial 4
 Example 2 JavaScript code
*/
console.log("Jeffry's Output from Tutorial 4 Example 2");

const numbers = [1,2,3,4,5,6,7,8,9,10];

let oddNumbers = numbers.filter(function(item) {
    return (item % 2 !== 0);
 });

 let multBy3 = numbers.map(function(item) {
    return (item * 3);
 });

console.log(oddNumbers);
console.log(multBy3);

