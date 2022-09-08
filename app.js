/* Calculation screen elements */
const calculate = document.querySelector(".calculate");
const recentNumber = document.querySelector(".calculate");
const operatorsSpan = document.querySelector(".operatorsSpan");
/* Operators and other */
const AC = document.querySelector("#AC");
const backspace = document.querySelector("#backspace");
const percentage = document.querySelector("#percent");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const equalsTo = document.querySelector("#equalsTo");
/* Number elements */
const buttonDot = document.querySelector("#buttonDot");
const button0 = document.querySelector("#button0");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const numbers = document.querySelectorAll(".numbers");

let num1;
let num2;
let result;

for (elem of numbers) {
  elem.addEventListener('click', (e) => {
    if (total.innerText === "0") {
      total.innerText = e.target.innerText;
    } else {
      if (total.innerText.length < 14) {
        total.innerText += e.target.innerText;
      }
    }
    checkScreen();
  });
};
// Keyboard event to type numbers from 0 to 9
function pressKey(integer) {
  if (total.innerText === "0") {
    total.innerText = numbers[integer].innerText;
  } else {
    if (total.innerText.length < 14) {
      total.innerText += numbers[integer].innerText;
    }
  }
  checkScreen();
}
// function that makes sure every digit is visible on screen
function checkScreen() {
  if (total.innerText.length < 9) {
    total.style.fontSize = "1em";
  }
  if (total.innerText.length > 8) {
    total.style.fontSize = "0.8em";
  }
  if (total.innerText.length > 10) {
    total.style.fontSize = "0.6em";
  }
  if (total.innerText.length > 14) {
    total.style.fontSize = "0.45em";
  }
}

function typeDot() {
  if (!total.innerText.includes(".") && !total.innerText == "") {
    total.innerText += buttonDot.innerText
  }
}
buttonDot.addEventListener('click', typeDot);

// function that clears calculator screen after clicking the AC button
function clear() {
  total.innerText = "0";
  recentNumber.innerText = "";
  operatorsSpan.innerText = "";
  checkScreen();
}
AC.addEventListener('click', clear);

function sum() {
  num1 = Number(recentNumber.innerText);
  num2 = Number(total.innerText);
  total.innerText = 0;
  result = num1 + num2;
  recentNumber.innerText = result;
  operatorsSpan.innerText = "+";
  operatorsSpan.style.color = "#99d98c";
  checkScreen();
}
addition.addEventListener('click', sum);

function subtract() {
  num1 = Number(recentNumber.innerText);
  num2 = Number(total.innerText);
  if (recentNumber.innerText.length === 0) {
    recentNumber.innerText = total.innerText;
  } else {
    result = num1 - num2;
    recentNumber.innerText = result;
  }
  total.innerText = "0";
  operatorsSpan.innerText = "-";
  operatorsSpan.style.color = "#d1495b";
  checkScreen();
}
subtraction.addEventListener('click', subtract);

function multiply() {
  num1 = Number(recentNumber.innerText);
  num2 = Number(total.innerText);
  if (recentNumber.innerText.length === 0) {
    recentNumber.innerText = total.innerText;
  } else {
    result = num1 * num2;
    recentNumber.innerText = result;
  }
  total.innerText = "0";
  operatorsSpan.innerText = "*";
  operatorsSpan.style.color = "#00bbf9";
  checkScreen();
}
multiplication.addEventListener('click', multiply);

function divide() {
  num1 = Number(recentNumber.innerText);
  num2 = Number(total.innerText);
  if (recentNumber.innerText.length === 0) {
    recentNumber.innerText = total.innerText;
  } else {
    result = num1 / num2;
    recentNumber.innerText = result;
  }
  total.innerText = "0";
  operatorsSpan.innerText = "/";
  operatorsSpan.style.color = "#db00b6";
  checkScreen();
}
division.addEventListener('click', divide);

function percent() {
  num1 = Number(recentNumber.innerText);
  num2 = Number(total.innerText);
  if (recentNumber.innerText.length === 0) {
    recentNumber.innerText = total.innerText;
  } else {
    result = num1 / 100 * num2;
    recentNumber.innerText = result;
  }
  total.innerText = "0";
  operatorsSpan.innerText = "%";
  operatorsSpan.style.color = "#fdc500";
  checkScreen();
}
percentage.addEventListener('click', percent);

// function for Backspace button
function removeLastDigit() {
  total.innerText = total.innerText.slice(0, -1);
  checkScreen();
}
backspace.addEventListener('click', removeLastDigit);

function equalize() {
  // Animation after clicking the button
  total.style.marginTop = "-0.5em";
  total.style.position = "absolute";
  total.style.opacity = "0.6";
  if (total.innerText.length < 9) {
    total.style.fontSize = "1.2em";
  }
  total.style.marginRight = "0.2em";
  setTimeout(() => {
    total.style.marginTop = "0";
    total.style.position = "";
    total.style.opacity = "1";
    if (total.innerText.length < 9) {
      total.style.fontSize = "";
    }
    total.style.marginRight = "";
  }, 200);

  if (operatorsSpan.innerText === "+") {
    num1 = Number(recentNumber.innerText);
    num2 = Number(total.innerText);
    total.innerText = num1 + num2;
    operatorsSpan.innerText = "";
    recentNumber.innerText = "";
  }
  if (operatorsSpan.innerText === "-") {
    num1 = Number(recentNumber.innerText);
    num2 = Number(total.innerText);
    total.innerText = num1 - num2;
    operatorsSpan.innerText = "";
    recentNumber.innerText = "";
  }
  if (operatorsSpan.innerText === "*") {
    num1 = Number(recentNumber.innerText);
    num2 = Number(total.innerText);
    result = num1 * num2;
    total.innerText = result;
    operatorsSpan.innerText = "";
    recentNumber.innerText = "";
  }
  if (operatorsSpan.innerText === "/") {
    num1 = Number(recentNumber.innerText);
    num2 = Number(total.innerText);
    result = num1 / num2;
    total.innerText = result;
    operatorsSpan.innerText = "";
    recentNumber.innerText = "";
  }
  if (operatorsSpan.innerText === "%") {
    num1 = Number(recentNumber.innerText);
    num2 = Number(total.innerText);
    result = num1 / 100 * num2;
    total.innerText = result;
    operatorsSpan.innerText = "";
    recentNumber.innerText = "";
  }
  checkScreen();
}
equalsTo.addEventListener('click', equalize);
// Keyboard events
window.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') removeLastDigit();
  if (e.key === 'Escape') clear();
  if (e.key === '.') typeDot();
  if (e.key === '+') sum();
  if (e.key === '-') subtract();
  if (e.key === '*') multiply();
  if (e.key === '/') divide();
  if (e.key === '=' || e.key === 'Enter') equalize();
  if (e.key === "%") percent();
  if (e.key === '0') pressKey(9);
  if (e.key === '1') pressKey(6);
  if (e.key === '2') pressKey(7);
  if (e.key === '3') pressKey(8);
  if (e.key === '4') pressKey(3);
  if (e.key === '5') pressKey(4);
  if (e.key === '6') pressKey(5);
  if (e.key === '7') pressKey(0);
  if (e.key === '8') pressKey(1);
  if (e.key === '9') pressKey(2);
});