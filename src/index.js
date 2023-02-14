// import "./styles.css";
// document.getElementById("app").innerHTML = ``;

var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    var text = display.textContent.trim();
    if (value === "AC") {
      display.innerText = 0;
    } else if (value === "+/-") {
      display.innerText = -display.innerText;
    } else if (value === "%") {
      operand1 = parseFloat(display.textContent);
      operator = "%";
      display.textContent = null;
    } else if (value === "/") {
      operand1 = parseFloat(display.textContent);
      operator = "/";
      display.textContent = null;
    } else if (value === "*") {
      operand1 = parseFloat(display.textContent);
      operator = "*";
      display.textContent = null;
    } else if (value === "-") {
      operand1 = parseFloat(display.textContent);
      operator = "-";
      display.textContent = null;
    } else if (value === ".") {
      if (text.length && !text.includes(".")) {
        display.textContent += value;
      } else if (text.length === 0) {
        display.textContent = 0 + value;
      }

      // } else if (value == ".") {
      //   operand1 = parseFloat(display.textContent);
      //   operator = ".";
      //   display.innerText += value;
    } else if (value === "+") {
      operand1 = parseFloat(display.textContent);
      operator = "+";
      display.textContent = null;
    } else if (value === "0") {
      if (text.length === 0) {
        display.textContent = 0;
      } else if (text.length === 1 && text === "0") {
        display.textContent = 0;
      } else {
        display.textContent += value;
      }
    } else if (value === "=") {
      operand2 = parseFloat(display.textContent);
      if (operator === "/" && operand2 === "0") {
        display.textContent = "Error";
      } else {
        var result = eval(operand1 + "" + operator + "" + operand2);
        display.textContent = result;
      }
    } else if (text.length === 1 && text === "0") {
      display.textContent = value;
    } else {
      display.innerText += value;
    }
  });
}
