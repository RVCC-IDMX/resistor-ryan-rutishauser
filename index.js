import { getResistorOhms } from './resistor.js';

const calc = document.querySelector('.calculator');
const ceramic = document.querySelector('.ceramic');
const answer = document.querySelector('.answer');
//

calc.addEventListener('click', (evt) => {
  if (!evt.path[1].id.includes("color")) {
    return;
  }
  const colorPosition = evt.path[1].id[5];
  const cl = ceramic.children[colorPosition]
  cl.classList.replace(cl.classList[1], evt.path[0].innerHTML)
  const colors = [
    ceramic.children[0].classList[1], ceramic.children[1].classList[1],
    ceramic.children[2].classList[1], ceramic.children[3].classList[1]
  ]
  answer.innerText = getResistorOhms(colors);
});