const tempValue = document.querySelector('#tempValue')
const buttons = document.querySelectorAll('.button')
const clearButton = document.querySelector('.clear-button')


const handleChange = (value) => { console.log("%c Start function", "color: red")
    if (value === '*') value = 'x' // corrige le signe multiplier *
    if (value === '/') value = '÷' // corrige le signe diviser /
    let operationString = tempValue.textContent
    let startWithZeroReg = /^[0\+\-\x\÷]/
    let doubleSymbolRegex = /[\+\-\x\÷]{2}$/
    let symbolRegex = /[\+\-\x\÷]$/
    let diviseByZeroRegex = /[\÷]$/
    const validCaractereReg = /[0-9]|\+|\-|\x|\÷|Enter/
    const isValidCaractere = validCaractereReg.test(value);
    const isFinishedWithSymbol = symbolRegex.test(operationString)
    const isFinishedWithDoubleSymbol = doubleSymbolRegex.test(operationString+value) // pour modifier le symbol
    const isFinishedWithDiviseSymbol = diviseByZeroRegex.test(operationString) // pour verifier division par 0
    if (isFinishedWithDiviseSymbol && value === '0') {
        ErrorMessage('Impossible de diviser par 0');
        return
    }; // impossible diviser par 0
    if (value === 'Backspace') tempValue.textContent = "0"; // reset
    if ((value ===  '=' || value === 'Enter') && !isFinishedWithSymbol) {
        tempValue.textContent = solve(operationString)
    } else {
        if (tempValue && isValidCaractere && !isFinishedWithDoubleSymbol) {
        tempValue.textContent = operationString.match(startWithZeroReg) ? value : operationString + value
    }
        // evite d'avoir 2 symbols consécutifs
        if (isFinishedWithDoubleSymbol) tempValue.textContent = operationString.replace(/.$/, value)

    }  
}

// Les evenements 
document.addEventListener('keydown', (ev) => {ev.preventDefault(); handleChange(ev.key)})
clearButton.addEventListener("click", () => tempValue.textContent = "0")

buttons.forEach(button => {
    const type = button.className
    button.addEventListener('click',  (ev) => handleChange(ev.target.value))
});

const ErrorMessage = (message) => {
    let modal = document.createElement('p')
    modal.setAttribute('class', 'modal')
    modal.textContent = message;
    const mainDiv = document.querySelector('.calculatrice')
    mainDiv?.append(modal)
    setTimeout(() => {
        const modalToRemove = document.querySelector('.modal')
        modalToRemove.remove()
      }, 3000)
      
}

