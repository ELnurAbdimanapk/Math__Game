let operand1 = Math.floor(Math.random()*10)
let operand2 = Math.floor(Math.random()*10)
const  operators = ["+" ,"-", "/", " *"]
const index = Math.floor(Math.random() * operators.length)
const operator = operators[index]

const calculateOperators = (operand1,operand2,operator) => {
 if(operator == "+") {
    return operand1 + operand2
 }
 else if(operator === "-") {
    return operand1 + operand2
 }
 else if(operator === "*") {
    return operand1 * operand2
 }
 else if(operator === "/") {
    return operand1 / operand2
 }else{
    return "JOK tuura emes"
 }
}

const answer = calculateOperators(operand1,operand2,operator)
document.getElementById('first__operand').innerText =operand1
document.getElementById('second__operand').innerText= operand2
document.getElementById('operator').innerText=operator
let inputElement = document.getElementById('answer');
inputElement.addEventListener('input',function () {
    let inputValue = inputElement.value
})

document.getElementById('submit').addEventListener('click',function() {
    console.log(inputValue);
   if(answer === inputValue) {
    console.log("tuuram");
   }else{
    console.log("tuurames");
   }
})
