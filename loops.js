// // for(let count = 1; count <= 5; count++){
// //     console.log("aritra biswas");
// // }

// // calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log("sum = ",sum);

// let i = 1;
// while(i<=5){
//     console.log("i=", i);
//     i++;
// }

// let a = 1;
// while(a<=5){
//     console.log("aritra");
//     a++;
// }

// //DO WHILE LOOP RUNS AT LEAST one time

// let q = 20;
// do{
//     console.log("Apna College");
//     q++;
// }while(q <= 10);


// //for of loop

// let str = "ARITRA";
// let size = 0;
// for (let t of str){ 
//     //iterator -> characters
//     console.log("i=", t);
//     size++;
// }
// console.log("string size = ", size);

// //for in loop

// let student = {
//     name:"Aritra Biswas",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };
// for(let key in student){
//     console.log("key=", key, "value=", student[key]);
// }

// //EVEN AND ODD NUMBER

// let f = 0;
//  for(let count = 0; count <= 10; count++){
//     if(count%2 !==0){
//      console.log(count+f);}
//  }

 //GUSSING NUMBER GAME Q
 
 let gameNumber=3;
 let userNumber=prompt("Guess the game numner:");

 while(userNumber != gameNumber){
    userNumber=prompt("You entered wrong number guess again :");
 }
 console.log("congrats u entered right number");

  

