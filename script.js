let numA = '';
let numB = '';

const num = document.querySelectorAll('.num');
const operator = document.querySelector('.oper');
const calc = document.querySelector('#calViewPort');
const para = document.createElement('p');
const operAll = document.querySelectorAll('.oper');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

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
}


clear.addEventListener('click', clearView);

let currentOper = '';

operAll.forEach(e => {
  e.addEventListener('click', event => {
    numA = Number(para.textContent);
    currentOper = event.target.id;
    console.log(`this is currentOper ${currentOper}`);
    console.log(`this is numA ${numA}`);
    clearView();
  });
})


// This is a possible way to create an operate function
 function operate(num1, num2, operation){
   if (operation == "add") {
     const sum = num1 + num2;
     return sum;
   }
   else if (operation == "subtract") {
     const diff = num1 - num2;
     return diff;
   }
   else if (operation == "multiply") {
     const prod = num1 * num2;
     return prod;
   }
   else if (operation == "divide") {
     const quot = num1 / num2;
     return quot;
   }
 }

equals.addEventListener('click', () => {
  numB = Number(para.textContent);
  console.log(operate(numA, numB, currentOper));
  clearView();
  para.textContent =
  operate(numA, numB, currentOper);
  calc.appendChild(para)
})


