const tempValue = document.querySelector('#tempValue')
const buttons = document.querySelectorAll('.button')
const clearButton = document.querySelector('.clear-button')


// let lastSign = null;

const testSolve = solve("2+2x3x4")
console.log('testSolve:', testSolve)

const handleKeyDown = (ev) => {
    //console.log('ev handleKeyDown:', ev)
    const validCaractereReg = /[0-9]|\+|\-|\*|\÷/
    const isValid = ev.key.match(validCaractereReg)
    console.log('isValid keydown:', isValid)
    if (isValid) tempValue.textContent += ev.key
    if (ev.key === '=') tempValue.textContent = solve(tempValue.textContent)
}

const handleChangeDigit = (value) => {

    let regex = /^[0\+\-\x\÷]/
    let SymbolRegex = /[\+\-\x\÷\=]$/
    if (value ===  '=') {
        tempValue.textContent = solve(tempValue.textContent)
    } else {
        if (tempValue) {
        tempValue.textContent = tempValue.textContent.match(regex) ? value : tempValue.textContent + value
    }
    }
    
    
    
}

// Les evenements 
document.addEventListener('keydown', handleKeyDown)
clearButton.addEventListener("click", () => tempValue.textContent = "0")
buttons.forEach(button => {
    const type = button.className
    button.addEventListener('click',  (ev) => handleChangeDigit(ev.target.value))
});