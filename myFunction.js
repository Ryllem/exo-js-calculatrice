/**
 * Prend une operation sous forme de String et renvoie le résultat
 * @param {String} opsString - Chaine de caractere représentant l'opération à effectuer
 * @returns {String} résultat de l'opération
 */
const solve = (opsString) => {

    const multiply = (opsReg) => {
        const operation = opsReg.split('x');
        return (Number(operation[0]) * Number(operation[1]))
    }
    
    const addition = (opsReg) => {
        const operation = opsReg.split('+');
        return (Number(operation[0]) + Number(operation[1]))
    }
    
    const division = (opsReg) => {
        const operation = opsReg.split('÷');
        return (Number(operation[0]) / Number(operation[1]))
    }
    
    const soustraction = (opsReg) => {
        const operation = opsReg.split('-');
        return (Number(operation[0]) - Number(operation[1]))
    }
 
    const doMultiply = () => {
        const hasMultiplyReg = /[0-9.]{1,}x[0-9.]{1,}/g
        const foundMultiplication = opsString.match(hasMultiplyReg)
        if (foundMultiplication) {
        opsString = opsString.replace(hasMultiplyReg, multiply(foundMultiplication[0]));
        const stillHaveMultiplication = opsString.match(hasMultiplyReg)
        if (stillHaveMultiplication) doMultiply()
        }
    }

    const doDivision = () => {
        const hasDivisionReg = /[0-9.]{1,}÷[0-9.]{1,}/g
        const foundDivision = opsString.match(hasDivisionReg)
        if (foundDivision) {
            opsString = opsString.replace(hasDivisionReg, division(foundDivision[0]));
            const stillHaveDivision = hasDivisionReg.test(opsString)
            if (stillHaveDivision) doDivision()
        }
        
    }

    const doAddition = () => {
        const hasAdditionReg = /[0-9.]{1,}\+[0-9.]{1,}/g
        const foundAddition = opsString.match(hasAdditionReg)
        if (foundAddition) {
        opsString = opsString.replace(hasAdditionReg, addition(foundAddition[0]));
        const stillHaveAddition = opsString.match(hasAdditionReg)
        if (stillHaveAddition) doAddition()
        }
    }

    const doSoustraction = () => {
        const hasSoustractionReg = /[0-9.]{1,}\-[0-9.]{1,}/g
        const foundSoustraction = opsString.match(hasSoustractionReg)
        if (foundSoustraction) {
        opsString = opsString.replace(hasSoustractionReg, soustraction(foundSoustraction[0]));
        const stillHaveAddition = opsString.match(hasSoustractionReg)
        if (stillHaveAddition) doSoustraction()
        }
    }
    doMultiply() 
    doDivision()
    doAddition()
    doSoustraction()

    const result = (opsString.length <= 13) ? opsString : opsString.slice(0, 13)
    return result
}

// module.exports = solve