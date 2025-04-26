let marks = [67 , 45 , 34 ,23 , 39];
marks[2]=50;//change the value 
console.log(marks);
console.log(marks.length);//property


let heroes = ["ironman","ultron","thanos"];
console.log(heroes);
console.log(heroes[1]);
let aritra = "biswas";
console.log(aritra);

//STRINGS = IMMUTABLE(no change) **********
//ARRAYS = MUTABLE(change) **********

//LOOPING OVER AN ARRAY

//ITERABLES in JS = STRING , OBJECTS , ARRAYS .

let hero = ["ironman","ultron","thanos" , "spiderman" , "antman"];
for(let idx=0; idx<hero.length; idx++){
console.log(hero[idx]);
}

//for of

let heroe = ["shaktiman","ultron","thanos" , "spiderman" , "antman"];
for(let hera of heroe){
    console.log(hera);
}
let cities = ["delhi","kolkata","mumbai","pune","kerala"];
for(let city of cities){
    console.log(city.toUpperCase());
}

//ARRAY METHODS

// let fooditems = ["potato","apple", "mango", "lichi"];
// fooditems.push("chips","burger","pizza");
// console.log(fooditems);
// fooditems.pop();
// console.log(fooditems);
// let deleteditems=fooditems.pop();
// console.log("deleteditems",deleteditems);

let food =["potato","apple", "mango", "lichi"];
food.push("chips","burger","pizza");
console.log(food);
let deleted = food.pop();
console.log(food);
console.log("deleted",deleted);
console.log(food.toString());

//CONCATINATION

let marvelHeroes = ["thor","spiderman", "ironman"];
let dcHeroes = ["superman","batman"];
let indianHeros = ["shaktiman"];

let heros = marvelHeroes.concat(dcHeroes,indianHeros);
console.log(heros);

//unshift

let car =["suzuki","honda","bajaj"];
car.unshift("mazada");
console.log(car);

//shift

let bike = ["heroHonda","yamaha"];
let vul = bike.shift();
console.log("the deleted one is :",vul);

//SLICE(ORIGINAL ARRAY NOT CHANGE)

let alcohol = ["red level","blue level","old monk","magic moment","sula"];
console.log(alcohol);
console.log(alcohol.slice(1,3));

//SPLICE(ORIGINAL ARRAY CHANGE)
let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);

// Element add
// arr.splice(2,0,101);

//DELETE ELEMENT
// arr.splice(3,1)

//REPLACE ELEMENT
arr.splice(3, 1, 101);