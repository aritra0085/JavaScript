function countVowels(str){
    let count = 0;
    for(const char of str){
        if(
            char==="a" ||
            char==="e" ||
            char==="i" ||
            char==="o" ||
            char==="u" 
        ){
            count++;
        }
    }

console.log(count);
}

const arrowMul = (str) => {
    let count = 0;
    for(const char of str){
        if(
            char==="a" ||
            char==="e" ||
            char==="i" ||
            char==="o" ||
            char==="u" 
        ){
            count++;
        }
    }

console.log(count);
}


//Question
let arret = [100,22,39,94];
let newArr = arret.filter((val)=>{
    return val>90;
});
console.log(newArr);

//Question
let n = prompt("enter a number : ");

let arr = [];

for(let i = 1; i <= n;i++){
    arr[i-1] = i;

}
console.log(arr);

let netarr = arr.reduce((prev, curr)=>{
    return prev + curr;
})
console.log("sum =" ,netarr);

let netarrR = arr.reduce((prev, curr)=>{
    return prev * curr;
})
console.log("product =" ,netarrR);
