//Example of FUNCTIONS
console.log("hello!");
console.log("abc".toUpperCase());

function myFunction(){
    console.log("welcome to biswas");
    console.log("we are learning js :)");
}
myFunction();

function myFUnction(msg){
    //parameter --> input
    console.log(msg);
}
myFUnction("i love subhasree"); //argument

//function -> 2numbers , sum
function sum(x,y){
    console.log(x+y);
}
sum(23,45);

//multiplication function
function mul(a,b){
    return a * b;
}

//sum function
function sum(a, b){
    return a + b;
}

//RETURN VALUE

function sum1 (x,y){
    //local variables of functions --> block scope
    s=x+y;
    return s;
}
let val = sum1(34 , 2);
console.log(val);

//ARROW FUNCTION (Compact way of eriting a function)

//MODERN JS
const arrowSum = (a,b) => {
    console.log(a+b);
};

const arrowMul = (a,b) => {
    console.log(a*b);
    //return a*b;
};

const printHello = () => {
    console.log("hello")
};