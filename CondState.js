//conditional statement


// let age = 15;
// if(age>=18){
//     console.log("you can vote.");
// }
// if(age<18){
//     console.log("you can not vote.");
// }


// let mode ="dark";
// let color;

// if(mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white";
// }

// console.log(color);


// let mode ="light";
// let color;

// if( mode === "dark" ) {
//     color = "black";
// }else{
//     color = "white";
// }
// console.log(color);


//odd or even

// let num = 10;

// if( num%2 === 0 ) {
//     console.log( num,"is even");
// }else{
//     console.log(num,"is odd");
// }

// SYNTAX -> rules

// let mode = "silver";
// let color;
// if(mode==="dark"){
//     color="black";
// }else if(mode ==="blue"){
//     color="blue";
// }else if(mode==="pink"){
//     color="pink";
// }else{
//     color= "silver";
// }
// console.log(color);


//TERNARY OPERATORS


// let age = 17;
// let result = age > 18 ? "adult" : "not adult";
// console.log(result);

// let age = 27;
// age > 18 ? console.log ("adult") : console.log("not adult");


// ALERT MESSAGE

// alert("hi from calcutta university");

// PROMPT MESSAGE

// let name = prompt("what is ur name ?");
// console.log(name
// );

// QUESTION--------------->>>>>>>>

// let num = prompt("enter a number .");
// if ( num % 5 === 0 ){
//     console.log(num,"multiple of 5");
// }else{
//     console.log(num,"not multiple of 5 .");
// }

// QUESTION---------------->>>>>>>>

let num = prompt("Type your number.");

if(num>=90 && num<100){
    console.log(num,"Grade A");
}else if(num>=70 && num<=89){
    console.log(num,"Grade B");
}else if(num>=60 && num<=69){
    console.log(num,"Grade c");
}else if(num>=50 && num<=59){
    console.log(num,"Grade D");
}else if(num>=0 && num<=49){
    console.log(num,"Grade F");
}
