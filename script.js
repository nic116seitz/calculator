const calNums = document.querySelector("calNums");
let numNum = 1;
const num = document.createElement("div");

function numGen(){
  for (i = 1; i < 9; i++) {
    num.setAttribute("id", `${numNum}`);
    num.classList.add("num");
    calNums.appendChild(num);
  }
  const zero = document.createElement("div");
  zero.setAttribute("id", "0");
  zero.classList.add("num");
}

function numListener(){
  const numSelect = document.querySelectorAll(".num");
  numSelect.forEach((numb) => {
    sqr.addEventListener("click", (event) => {

    })
  })
}
