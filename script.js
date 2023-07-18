window.onload = () => {
  userName.innerText = localStorage.getItem("name")
}
const operand1Element = document.getElementById('first__operand');
const operand2Element = document.getElementById('second__operand');
const operatorElement = document.getElementById('operator');
const inputElement = document.getElementById('answer')
const winElement = document.getElementById('win');
const action = document.getElementById('action')
const userName = document.getElementById("username")
const nameInput = document.getElementById('nameInput')
const practiceButton = document.getElementById("practice")
const timeAttackButton = document.getElementById('time-attack')
const  timerElement = document.getElementById('timer')

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

const updateProblems = () => {
  state.currentProblem = generateExample()
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
console.log(example);
renderExample(example);

function checkAnswer() {
  const inputValue = inputElement.value;
  if (!inputValue && inputValue !== "0") return;
  if (inputValue == example.answer) {
    win += 1;
    action.innerHTML = "+1";
  } else {
    win -= 1;
    action.innerHTML = "-1";
  }
  winElement.textContent = win;
  inputElement.value = "";
  example = generateExample();
  renderExample(example);
  inputElement.focus();

  action.style.display = "block";
  setTimeout(() => {
    action.style.display = "none";
  }, 1000);
}

checkBtn.addEventListener('click', checkAnswer);

window.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && document.activeElement === inputElement) {
    checkAnswer();
  }
});



window.addEventListener('keydown', (event) => {
  if(event.key === "Enter" && nameInput.value !== "" ) {
    const nameUser = nameInput.value
  localStorage.setItem("name",nameUser)
   userName.innerText = localStorage.getItem("name")
   nameInput.value = ""
  }
})

// Rejim
let timer;
let timeLeft = 90
const stopButton = document.getElementById('stop')
practiceButton.addEventListener('click', () => {

stopButton.style.display = "block"
timerElement.style.display ="none"
})

timeAttackButton.addEventListener('click', () => {
  stopButton.style.display = "none"
  timerElement.style.display ="block"
  startTimer()
})

const startTimer = () =>{
  timer = setInterval (() => {
    timeLeft--;
    timerElement.innerText = formatTime(timeLeft);
    if(timeLeft <= 0){
      endGame()
    }
  },1000)
}

const endGame = () => {
  clearInterval(timer)
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}