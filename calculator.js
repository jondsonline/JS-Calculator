// calculator.js

var currentDisplay = document.getElementById("calcDisplay");
var holdValue = true;
var valueOne;
var valueTwo;

const operator = {
  ADD: "add",
  SUBTRACT: "subtract",
  MULTIPLY: "multiply",
  DIVIDE: "divide"
};

operatorBuffer = null;


function defineButton(text) {
  var button = document.createElement('button');
  var buttonText = document.createTextNode(text);
  button.appendChild(buttonText);

  return button;
}


function addButton(button, addRow) {
  var buttonLoc;
  switch (addRow) {
    case 1:
      buttonLoc = document.getElementById("rowOne");
      break;
    case 2:
      buttonLoc = document.getElementById("rowTwo");
      break;
    case 3:
      buttonLoc = document.getElementById("rowThree");
      break;
    case 4:
      buttonLoc = document.getElementById("rowFour");
      break;
    case 5:
      buttonLoc = document.getElementById("rowFive");
      break;
  } // end switch
  buttonLoc.appendChild(button);
}


function key(keyText, keyRow) {
  keyButton = defineButton(keyText);
  addButton(keyButton, keyRow);
  return keyButton;
}

function parseDisplay() {
  return parseFloat(currentDisplay.innerHTML);
}


function clearDisplay() {
  currentDisplay.innerHTML = "0";
}


function appendDisplay(char) {
  var oldDisplay = currentDisplay.innerHTML;
  var newDisplay = oldDisplay + char;
  currentDisplay.innerHTML = newDisplay;
}


function appendNumber(num) {
  if (currentDisplay.innerHTML == "0" && num != ".") {
    currentDisplay.innerHTML = num;
  } else if (holdValue == false) {
    clearDisplay();
    holdValue = true;
    appendNumber(num);
  } else if (num == ".") {
    if (!currentDisplay.innerHTML.includes(".")) {
      appendDisplay(".");
    }
  } else {
    appendDisplay(num);
  }
}


function squareRoot() {
  var oldNumber = parseDisplay();
  var newNumber = Math.sqrt(oldNumber);
  currentDisplay.innerHTML = newNumber;
  holdValue = false;
}


function square() {
  var oldNumber = parseDisplay();
  var newNumber = Math.pow(oldNumber, 2);
  currentDisplay.innerHTML = newNumber;
  holdValue = false;
}

function percent() {
  var oldNumber = parseDisplay();
  var newNumber = oldNumber / 100;
  currentDisplay.innerHTML = newNumber;
  holdvalue = false;
}

function add() {
  valueTwo = parseDisplay();
  var newNumber = valueOne + valueTwo;
  currentDisplay.innerHTML = newNumber;
}


function subtract() {
  valueTwo = parseDisplay();
  var newNumber = valueOne - valueTwo;
  currentDisplay.innerHTML = newNumber;
}

function multiply() {
  valueTwo = parseDisplay();
  var newNumber = valueOne * valueTwo;
  currentDisplay.innerHTML = newNumber;
}


function divide() {
  valueTwo = parseDisplay();
  var newNumber = valueOne / valueTwo;
  currentDisplay.innerHTML = newNumber;
}


function equals() {
  if (operatorBuffer != null) {
    switch (operatorBuffer) {
      case operator.ADD:
        add();
        break;
      case operator.SUBTRACT:
        subtract();
        break;
      case operator.MULTIPLY:
        multiply();
        break;
      case operator.DIVIDE:
        divide();
        break;
      default:
        alert("Operator not defined!")
    }
  }
}


function evaluateOperatorEquals() {
  if (operatorBuffer != null && holdValue == true) {
    equals();
    operatorBuffer = null;
  }
}


function operatorConclude() {
  valueOne = parseDisplay();
  holdValue = false;
}

function clickAdd() {
  evaluateOperatorEquals();
  operatorBuffer = operator.ADD;
  operatorConclude();
}


function clickSubtract() {
  evaluateOperatorEquals();
  operatorBuffer = operator.SUBTRACT;
  operatorConclude();
}

function clickMultiply() {
  evaluateOperatorEquals();
  operatorBuffer = operator.MULTIPLY;
  operatorConclude();
}

function clickDivide() {
  evaluateOperatorEquals();
  operatorBuffer = operator.DIVIDE;
  operatorConclude()
}

function clickEquals() {
  equals();
  operatorBuffer = null;
  operatorConclude();
}

// Define keypad
currentDisplay.innerHTML = "0";

var buttonRoot = key("SqRt", 1);
var buttonSquare = key("Square", 1);
var buttonPercent = key("%", 1);
var buttonDivide = key("/", 1);

var button7 = key("7", 2);
var button8 = key("8", 2);
var button9 = key("9", 2);
var buttonMultiply = key("x", 2);

var button4 = key("4", 3);
var button5 = key("5", 3);
var button6 = key("6", 3);
var buttonSubtract = key("-", 3);

var button1 = key("1", 4);
var button2 = key("2", 4);
var button3 = key("3", 4);
var buttonAdd = key("+", 4);

var buttonClear = key("C", 5);
var button0 = key("0", 5);
var buttonDecimal = key(".", 5);
var buttonEquals = key("=", 5);


button1.onclick = function() {
  appendNumber("1");
}

button2.onclick = function() {
  appendNumber("2");
}

button3.onclick = function() {
  appendNumber("3");
}

button4.onclick = function() {
  appendNumber("4");
}

button5.onclick = function() {
  appendNumber("5");
}

button6.onclick = function() {
  appendNumber("6");
}

button7.onclick = function() {
  appendNumber("7");
}

button8.onclick = function() {
  appendNumber("8");
}

button9.onclick = function() {
  appendNumber("9");
}

button0.onclick = function() {
  appendNumber("0");
}

buttonDecimal.onclick = function() {
  appendNumber(".");
}

buttonClear.onclick = function() {
  clearDisplay();
}

buttonRoot.onclick = function() {
  squareRoot();
}

buttonPercent.onclick = function() {
  percent();
}

buttonSquare.onclick = function() {
  square();
}

buttonAdd.onclick = function() {
  clickAdd();
}

buttonSubtract.onclick = function() {
  clickSubtract();
}

buttonMultiply.onclick = function() {
  clickMultiply();
}

buttonDivide.onclick = function() {
  clickDivide();
}

buttonEquals.onclick = function() {
  clickEquals();
}
