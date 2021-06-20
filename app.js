screen = document.querySelector('.screen');
let currNumber = '0';
let nextNumber = '';
let currOperator = '';

(function addEventForAllNumsAndOperators() {
    let allNumKeys = document.querySelectorAll('.number');
    let allOperatorKeys = document.querySelectorAll('.operator');

    allNumKeys.forEach(button => {
        button.addEventListener('click', (event) => {
            numKeyPressed(event);
        });
    });

    allOperatorKeys.forEach(button => {
        button.addEventListener('click', (event) => {
            operatorKeyPressed(event);
        })
    })

})()

function numKeyPressed(event) {
    let numPressed = event.target.innerText;
    if (currOperator === '') { //If the operator has not been pressed yet
        currNumber = changeNumberAfterPressed(currNumber, numPressed);
        displayOnScreen(currNumber);
    }
    else {
        nextNumber = changeNumberAfterPressed(nextNumber, numPressed);
        displayOnScreen(nextNumber);
    }
}

function changeNumberAfterPressed(number, numPressed) {
    if (number.includes('.') && numPressed === '.') {
        return number;
    }
    if (number === '0') {
        return numPressed;
    }
    return number + numPressed;
}

function operatorKeyPressed(event) {
    let newOperator = event.target.innerText;
    if (newOperator !== '=') {
        currOperator = newOperator; //only change current operator if it's not the '='
    }
    calculateResult(currNumber, nextNumber, currOperator);
}

function displayOnScreen(number) {
    if (number.length <= 10) {
        screen.innerText = number;
    }
    else {
        screen.innerText = number.slice(number.length - 10, number.length);
    }
}

function calculateResult(firstNum, secondNum, operator) {
    if (nextNumber !== '') {
        if (operator === '+') { currNumber = (parseFloat(firstNum) + parseFloat(secondNum)).toString(); }
        if (operator === '-') { currNumber = (parseFloat(firstNum) - parseFloat(secondNum)).toString(); }
        if (operator === 'X') { currNumber = (parseFloat(firstNum) * parseFloat(secondNum)).toString(); }
        if (operator === '/') { currNumber = (parseFloat(firstNum) / parseFloat(secondNum)).toString(); }
        displayOnScreen(currNumber);
        nextNumber = '';
        currOperator = '';
    }
}

// Clear and Delete
(function addEventForClearAndDelete() {
    let clearButton = document.querySelector('.clear');
    let deleteButton = document.querySelector('.remove');
    clearButton.addEventListener('click', (event) => {
        currOperator = '';
        currNumber = '0';
        nextNumber = '';
        displayOnScreen(currNumber);
    });
    deleteButton.addEventListener('click', (event) => {
        if (currOperator !== '') { // if it's the 2nd number
            nextNumber = nextNumber.substr(0, nextNumber.length - 1);
            displayOnScreen(nextNumber);
        }
        else {
            currNumber = currNumber.substr(0, nextNumber.length - 1);
            displayOnScreen(currNumber);
        }
    });
})()


