// forEach loop in array
let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val)
})

//ARROW
let arra = ["Pune","bombay","goa"];

arra.forEach((val,idx,arr) =>{
    console.log(val.toUpperCase(),idx,arr);
});

// HIGHER ORDER FUNCTION/METHOD { example(forEach) }
//  this type of functions use as a parameters or return it



//value squre Question
let arrr = [1,2,3,4,5];

arrr.forEach(function printVal(val){
    console.log(val*val)//num**2
})

let nums = [54 , 34, 23];

let calcsquare /*function*/ =(num) => {
    console.log(num * num);
};
nums.forEach(calcsquare);





//SOME MORE ARRAY METHODS

//   MAP Method    ///
//MAP give us new array but forEACH give us same array
let numss = [53 , 3, 83];

let newaRR = numss.map((val)=>{
    return val**3;
});
console.log(newaRR);


//   FILTER Method    ///
//filterising the values
let arrw =  [1,2,3,4,5,6,7,8];

let evenArr = arrw.filter((val,arr) =>{
    return val % 2 === 0;
});
console.log(evenArr);

//   REDUCE Method    ///
//avg calculate or sum calculate

// sum using REDUCE method
let arre = [1,2,3,4];

const output = arre.reduce((prev , curr) =>{
    return prev + curr;
});
console.log(output);

//greater number
let arret = [1,2,3,4];

const outputt = arret.reduce((prev , curr) =>{
    return prev > curr ? prev : curr;
});
console.log(outputt);