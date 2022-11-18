const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");
const elemCalcScreen2 = document.getElementById("calc-screen2");
const elemPointer = document.getElementById("pointer");
const elemPointerWeight = document.getElementById("pointer-weight");
const elemResult = document.getElementById("result");

// instead of making the pointer dissaper or move i simply made i change color.
// these functions cheeck wetther or not you have pressed weight or hight by tracking whatinput
// what inpu is 1/hight by default.

let whatinput = 1;

function hight() {
  whatinput = 1;
  elemPointerWeight.style.color = "mediumseagreen";
  elemPointer.style.color = "blue";
}

function weight() {
  whatinput = 2;
  elemPointer.style.color = "mediumseagreen";
  elemPointerWeight.style.color = "blue";
}

function solve() {
  // denna funktion tar hand om beräkningen
  /* your code here */
  let sum = parseFloat(
    elemCalcScreen2.innerHTML / (elemCalcScreen.innerHTML / 100) ** 2
  ).toFixed(1); // show the result on screen
  // elemResult.innerHTML = "Ditt BMI = " + sum;

  // This cheacks what category you fall into by using if.
  if (sum < 18.5) {
    elemResult.innerHTML = "Ditt BMI =" + sum + " Undervikt";
  } else if (sum < 25) {
    elemResult.innerHTML = "Ditt BMI =" + sum + " Normalvikt";
  } else if (sum < 30) {
    elemResult.innerHTML = "Ditt BMI =" + sum + " Övervikt";
  } else {
    elemResult.innerHTML = "Ditt BMI =" + sum + " Fetma";
  }
}

function addDigit(thisSign) {
  // lägg till siffra
  // Cheacks whatinput to see where it should place the numbers
  if (whatinput === 1) {
    elemCalcScreen.innerHTML += thisSign;
  } else {
    elemCalcScreen2.innerHTML += thisSign;
  }
}

function btnBackSpace() {
  // ta bort
  // Cheacks whatinput to see where it should remove the numbers
  if (whatinput === 1) {
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = calcScreen.slice(0, -1);
    elemCalcScreen.innerHTML = calcScreen;
  } else {
    let calcScreen2 = elemCalcScreen2.innerHTML;
    calcScreen2 = calcScreen2.slice(0, -1);
    elemCalcScreen2.innerHTML = calcScreen2;
  }
}

function btnClearAll() {
  // it clears everything in both calc screens
  elemCalcScreen.innerHTML = "";
  elemCalcScreen2.innerHTML = "";
}
