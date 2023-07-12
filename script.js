
const operand1Element = document.getElementById('first__operand');
const operand2Element = document.getElementById('second__operand');
const operatorElement = document.getElementById('operator');
const inputElement = document.getElementById('answer')
const winElement = document.getElementById('win');

const calculateOperators = (operand1, operand2, operator) => {
  if (operator === "+") {
    return operand1 + operand2;
  } else if (operator === "-") {
    return operand1 - operand2;
  } else if (operator === "*") {
    return operand1 * operand2;
  } else if (operator === "/") {
    return operand1 / operand2;
  } else {
    return "JOK tuura emes";
  }
}

const generateExample = () => {
  const operand1 = Math.floor(Math.random() * 10);
  const operand2 = Math.floor(Math.random() * 10);
  const operators = ["+", "-", "/", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const answer = calculateOperators(operand1, operand2, operator);
  

  return { operand1, operand2, operator, answer };
}

const renderExample = (data) => {
  operand1Element.innerText = data.operand1;
  operand2Element.innerText = data.operand2;
  operatorElement.innerText = data.operator;
}

// Win
const checkBtn = document.querySelector('#submit');
let win = 0;
let example = generateExample();
renderExample(example);

checkBtn.addEventListener('click', () => {
  const inputValue = inputElement.value;
  if (!inputValue && inputValue !== "0") return;
  win += inputValue == example.answer ? 1 : -1;
  winElement.textContent = win;
  inputElement.value = "";
  example = generateExample();
  renderExample(example);
  inputElement.focus()
});


window.addEventListener('keydown', function(event) {
   if (event.key === 'Enter' && document.activeElement === inputElement) {
     const inputValue = inputElement.value;
     if (!inputValue && inputValue !== "0") return;
     win += inputValue == example.answer ? 1 : -1;
     winElement.textContent = win;
     inputElement.value = "";
     example = generateExample();
     renderExample(example);
     inputElement.focus()

   }
 });
 