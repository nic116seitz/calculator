const calNums = document.querySelector("calNums");
let numNum = 1;
const num = document.createElement("div");



function numListener(){
  const numSelect = document.querySelectorAll(".num");
  numSelect.forEach((numb) => {
    sqr.addEventListener("click", (event) => {

    })
  })
}

let calculator = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
  operation: [ "add", "subtract", "multiply", "divide", "equals", "removLast", "clear" ]
}

function operate(numA, numB, operation){
  if (operation == "add" || equals == true) {
    const sum = numA + numB;
    return sum;
  }
  else if (operation == "subtract") {
    const diff = numA - numB;
    return diff;
  }
  else if (operation == "multiply") {
    const prod = numA * numB;
    return prod;
  }
  else if (operation == "divide") {
    const quot = numA / numB;
    return quot;
  }

}
