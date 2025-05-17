function appendToDisplay(value) {
  const display = document.getElementById("display");
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  let input = display.value;

  // Validate characters (digits, operators, parentheses, decimal point, spaces)
  if (!/^[0-9+\-*/().\s]+$/.test(input)) {
    display.value = "Error";
    return;
  }

  try {
    const result = eval(input);
    if (result === undefined || Number.isNaN(result) || !isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

function displayError() {
  document.getElementById("display").value = "Error";
}

// Optional utility functions (not used in UI directly, but kept for potential expansion)
function evaluateExpression(expression) {
  expression = expression.replace(/\s+/g, "");

  const match = expression.match(/^(-?\d+(\.\d+)?)([+\-*/])(-?\d+(\.\d+)?)$/);
  if (!match) throw new Error("Invalid format");

  const num1 = parseFloat(match[1]);
  const operator = match[3];
  const num2 = parseFloat(match[4]);

  switch (operator) {
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case '*': return multiply(num1, num2);
    case '/': return divide(num1, num2);
    default: throw new Error("Unknown operator");
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
