const calc = document.querySelector('.calculator');
const invalidPlaceholder = document.querySelector('#invalid-placeholder');
const keys = document.querySelector(".calculator-keys");
const display = document.querySelector('.calculator-screen');
const equal = document.querySelector('.equal-sign');
const ac = document.querySelector('.all-clear');
//remder clicks to the display
keys.addEventListener('click', (click) => {
    if (click.target.nodeName === 'BUTTON') {
        const buttonValue = click.target.value;
        if (buttonValue !== 'AC' && buttonValue !== '=') {
            display.value += buttonValue;
        } else if (display.value == "undefined") {
            display.value = "";
        }
    }
})
//clear display
ac.addEventListener('click', () => {
    display.value = "";
})

//calculate
equal.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        const div = document.createElement('div');
        div.setAttribute('id', 'error-msg');
        div.textContent = "Invalid Input";
        calc.removeChild(invalidPlaceholder);
        calc.prepend(div);
        setTimeout(() => {
            calc.removeChild(div);
            calc.prepend(invalidPlaceholder);
        }, 2000);
    }
})