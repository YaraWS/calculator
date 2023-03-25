const buttons = document.querySelectorAll('button')
const calculationInput = document.getElementById('calculationInput')

let calculation = []
let acumulativeCalculation


function calculate(button) {
  const value = button.textContent
  if(value === "C") {
    calculation = []
    calculationInput.textContent = "."
  }else if (value === "=") {
    calculationInput.textContent = eval(acumulativeCalculation) 
  }else {
    calculation.push(value)
    acumulativeCalculation = calculation.join('')
    calculationInput.textContent = acumulativeCalculation
  }
  
  
 

}

console.log(calculation)

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))