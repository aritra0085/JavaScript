//ARITHMETIC OPERATORS
let a = 5;
let b = 2;
// let c = a+b;
console.log("a+b = ", a+b);
console.log("a+b = ", a-b);
console.log("a =",a," & b =",b);
console.log("a*b = ", a*b);
console.log("a/b = ", a/b);
console.log("a%b = ", a%b);
console.log("a**b = ", a**b);
// a++(post) post increment
// ++a(pre) pre increment
// a--(post) post decrement
// --a(pre) pre predecrement

++a;
console.log("++a = ", a);
a++;
console.log("a++ = ", a);
console.log("a =", a);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a);
b++;
console.log("b++ = ", b);

//ASSIGHNMENT OPERATORS
let x =4;
x+=4;
console.log("x+= ", x);
x-=3;
console.log("x-= ", x);
x*=3;
console.log("x*= ", x);
x/=3;
console.log("x/= ", x);

//COMPARISON OPERATORS
 let r = 3;
 let t = 4;
 x-=3;
console.log("r==t = ", r == t);
x-=3;
console.log("r!=t", r!=t);

let j = 5; //number
let k = "5" //string-> number
console.log(" j !== k", j !== k);

let o = 5;
let p = 4;

console.log("o <= p = ", o <= p);
console.log("o <= p = ", o >= p);

// LOGICAL OPERATOR
let c = 9;
let v = 7;

let cond1 = c>v;
let cond2 = v===7;
console.log("cond1 && cond2 = ",cond1 && cond2);// logical and

let n = 9;
let m = 7;

let cond3 = n>m;
let cond4 = m===7;
console.log("cond1 || cond2 = ",cond1 || cond2);//logical or

let h = 6;
let w = 7;

console.log("!(0>6) = ", !(h>w)); //false

let hr= 7;
let wf = 8;
console.log("!(7>8) = ",!(a===7));//false