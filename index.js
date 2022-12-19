const title = document.querySelector('h1')
const p = document.querySelector('p')
/** @type {HTMLParagraphElement | null} */
const tempValue = document.querySelector('#tempValue')
const buttons = document.querySelectorAll('button')

// console.log('title:', title?.textContent)
//console.log('tempValue:', tempValue?.textContent)
//console.log('buttons:', buttons)

let result = null
let lastSign = null;
/**
 * type {String}
 */
//let screen = '0'

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

buttons.forEach(button => {
    // console.log('button:', button.className)
    const type = button.className
    if (type === 'digit') button.addEventListener('click',  (ev) => handleChangeDigit(ev?.target?.value))
    if (type === 'symbol') button.addEventListener('click', (ev) => handleChangeDigit(ev?.target?.value))
    lastSign = '='
});

document.addEventListener('keydown', handleKeyDown)