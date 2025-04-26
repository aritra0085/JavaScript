const student ={
    fullName : "aritra biswas",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

student["age"]=student["age"]+1;
student["name"]="subhasree Majumder";

console.log(student["age"]);
console.log(student.cgpa);
console.log(student["name"]);
// LET update possible
//CONST variable cant update
//CONST object KEY will be updated