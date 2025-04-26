//string
let str = "Aritra Biswas";
let str2 = "arindam";
str.length ; //to define length of string IN COMPILER
console.log(str[1]);// to define the particular string value
console.log(str2.length);//to define length of string 

// TEMPLATE LITERALS IN JS
let specialString = `THis is a template literal`;
console.log(specialString);
console.log(typeof specialString);

// WHY THIS `` is use ?
let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;

console.log(output);

console.log("the cost of",obj.item,"is",obj.price);

// TO MAKE 
// ("the cost of",obj.item,"is",obj.price); THIS EASIER WE USE
//TEMPLATE LITERALS

let sum = `This is a template literal ${1 +2 +3}`;
console.log(sum);

//ESCAPE CHARACTERES
let strinGh = "aritra\nBiswas";
console.log(strinGh);
console.log(strinGh.length);
console.log("aritra\tBiswas");

// strings are immutable(no change) in JS
// UPPER CASE
let stre = "AritraBiswas";
ctrenk = str.toUpperCase();
console.log(ctrenk);  

// LOWER CASE

let strek = "AritraBiswas";
ctrenk = str.toLowerCase();
console.log(ctrenk); 

// TRIM method
let strh = "     AritraBiswas        ";
console.log(strh.trim());

// start / end method

let ste ="0123456";
console.log(ste.slice(1, 6));

let stq ="ARITRA";
console.log(stq.slice(0, 3));

// string concat
let str1 = "aritra";
let str3 = "Biswas";

// Concatination

let res = str3.concat(str1);
console.log(res);

let res1 = "My name is "+ str1 + str3;
console.log(res1);

// REPLACEMENT

let str4 = "calcutta";
console.log(str4.replace("ca","m"));

// CHARACTER
let str6 = "binod";
console.log(str6.charAt(0));

let str7 = "binod";
str7 = str7.replace("bin", "rit");
console.log(str7);

let str8 = "helololo";
console.log(str8.replaceAll("lo", "p"));


//CHARACTER AT 
let str9 = "iloveJS";
str9 = str9.replace('i' , 's');
console.log(str9.charAt(0));