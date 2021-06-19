screen = document.querySelector('.screen');
let currNumber = '0';
let firstNumber = '0';
let secondNumber = '0';
let currOperator = '';

(function addEventForAllNumsAndOperators() {
    let allNumsAndOperators = document.querySelector('.numbersandoperator').childNodes;

    allNumsAndOperators.forEach(button => {
        button.addEventListener('click', (event) => {
            numKeyorOperatorKeyPressed(event);
        });
    });
})()

function numKeyorOperatorKeyPressed(event) {

    if (currOperator === '') {
        // If a number key is pressed
        if (!isNaN(parseInt(event.target.innerText))) {
            if (currNumber === '0') {
                currNumber = event.target.innerText;
            }
            else {
                currNumber += event.target.innerText;
            }
            displayOnScreen(currNumber);
        }
        else {// If a operator key is pressed
            currOperator = event.target.innerText;
        }
    }

}

function displayOnScreen(number) {
    if (number.length <= 10) {
        screen.innerText = number;
    }
    else {
        screen.innerText = number.slice(number.length - 10, number.length);
    }
}



