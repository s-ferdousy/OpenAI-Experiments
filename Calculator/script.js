let display = document.getElementById('display');
let operator = '';
let operand1 = null;
let operand2 = null;
let result = null;

function clearDisplay() {
  display.value = '';
}

function setOperand(value) {
  if (display.value === '' && value === '.') {
    display.value = '0.';
  } else if (display.value.indexOf('.') > -1 && value === '.') {
    // Do nothing
  } else {
    display.value += value;
  }
}

function setOperator(value) {
  operand1 = parseFloat(display.value);
  operator = value;
  clearDisplay();
}

function calculate() {
  operand2 = parseFloat(display.value);
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
  }
  display.value = result;
  operand1 = result;
  operand2 = null;
  operator = '';
}

document.getElementById('zero').addEventListener('click', function() {
  setOperand('0');
});

document.getElementById('one').addEventListener('click', function() {
  setOperand('1');
});

document.getElementById('two').addEventListener('click', function() {
  setOperand('2');
});

document.getElementById('three').addEventListener('click', function() {
  setOperand('3');
});

document.getElementById('four').addEventListener('click', function() {
  setOperand('4');
});

document.getElementById('five').addEventListener('click', function() {
  setOperand('5');
});

document.getElementById('six').addEventListener('click', function() {
  setOperand('6');
});

document.getElementById('seven').addEventListener('click', function() {
  setOperand('7');
});

document.getElementById('eight').addEventListener('click', function() {
  setOperand('8');
});

document.getElementById('nine').addEventListener('click', function() {
  setOperand('9');
});

document.getElementById('decimal').addEventListener('click', function() {
  setOperand('.');
});

document.getElementById('add').addEventListener('click', function() {
  setOperator('+');
});

document.getElementById('subtract').addEventListener('click', function() {
  setOperator('-');
});

document.getElementById('multiply').addEventListener('click', function() {
  setOperator('*');
});

document.getElementById('divide').addEventListener('click', function() {
  setOperator('/');
});

document.getElementById('clear').addEventListener('click', function() {
  clearDisplay();
  operand1 = null;
  operand2 = null;
  operator = '';
});

document.getElementById('equals').addEventListener('click', function() {
  calculate();
});
