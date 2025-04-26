
let numbers = [85,97,44,37,76,60];
let sum = 0 ;
for(let num of numbers)
    sum+=num;{
}
let avg = sum/numbers.length;
console.log(`avg marks of the class = ${avg}`);
console.log(numbers.length);


console.log(`price of the 5 items now = 250,645,300,900,50`);
console.log(`applying all items in 10% off`);
let price =[250,645,300,900,50];
let sam = 0;
for(let prac of price){
    console.log(`value at index ${sam}=${prac}`);
    let offer = prac/10;
    price[sam] = price[sam]-offer;
    console.log(`value after offer = ${price[sam]}`)
sam++;}
// for(let i=0; i<price.length;i++){}