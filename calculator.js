// calculator.js

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
}


function displayKeyPad() {
  key("Sqrt", 1);
  key("Square", 1);
  key("%", 1);
  key("/", 1);

  key("7", 2);
  key("8", 2);
  key("9", 2);
  key("x", 2);

  key("4", 3);
  key("5", 3);
  key("6", 3);
  key("-", 3);

  key("1", 4);
  key("2", 4);
  key("3", 4);
  key("+", 4);

  key("C", 5);
  key("0", 5);
  key(".", 5);
  key("=", 5);
}

displayKeyPad();
