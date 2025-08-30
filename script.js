let numA = '';
let numB = '';

const num = document.querySelectorAll('.num');
const operator = document.querySelector('.oper');
const calc = document.querySelector('#calViewPort');
const para = document.createElement('p');



num.forEach(e => {
   e.addEventListener('click', event => {
     para.textContent += event.target.textContent
     console.log(event.target.textContent);
     calc.appendChild(para)
   })
});

function clearView(){
  calc.innerHTML = '';
  para.textContent = '';
  console.log("code reached")
}

const clear = document.querySelector('#clear');

clear.addEventListener('click', clearView);
//
// This is a possible way to create an operate function
// function operate(numA, numB, operation){
//   if (operation == "add" || equals == true) {
//     const sum = numA + numB;
//     return sum;
//   }
//   else if (operation == "subtract") {
//     const diff = numA - numB;
//     return diff;
//   }
//   else if (operation == "multiply") {
//     const prod = numA * numB;
//     return prod;
//   }
//   else if (operation == "divide") {
//     const quot = numA / numB;
//     return quot;
//   }
// }
