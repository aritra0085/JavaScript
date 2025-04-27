let divs = document.querySelectorAll(".box");
console.log(divs[0]);
// to change the property

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

//alternetive by loops

let idx = 1;
for (div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}