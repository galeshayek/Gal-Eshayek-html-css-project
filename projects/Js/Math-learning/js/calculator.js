const button = document.getElementById("checkAnswer");
const numRange = document.getElementById("numRange");
const operatorRange = document.getElementById("operatorRange");
const userInput = document.getElementById("userInput");
let firstNum = document.getElementById("num1");
let operator = document.getElementById("operator");
let secondNum = document.getElementById("num2");
const table = document.getElementById("list");
let pointsCalc = 0
let pointsSum = 0;

numRange.addEventListener('change', () => {
    let value = numRange.value;
    switch (value) {
        case '1-10':
            num1 = Math.floor(Math.random() * 10) + 1;
            do {
                num2 = Math.floor(Math.random() * 10) + 1;
            } while (num2 >= num1);
            firstNum.innerHTML = num1
            secondNum.innerHTML = num2
            break;
        case '1-100':
            num1 = Math.floor(Math.random() * 100) + 1;
            do {
                num2 = Math.floor(Math.random() * 100) + 1;
            } while (num2 >= num1);
            firstNum.innerHTML = num1
            secondNum.innerHTML = num2
            break;
        case '1-1000':
            num1 = Math.floor(Math.random() * 1000) + 1;
            do {
                num2 = Math.floor(Math.random() * 1000) + 1;
            } while (num2 >= num1);
            firstNum.innerHTML = num1
            secondNum.innerHTML = num2
            break;
    }
})
operatorRange.addEventListener('change', () => {
    let value = operatorRange.value;
    switch (value) {
        case '+':
            operator.innerHTML = "+";
            break;
        case '-':
            operator.innerHTML = "-";
            break;
        case '*':
            operator.innerHTML = "*";
            break;
        case '/':
            operator.innerHTML = "/";
            break;
    }
    numRange.removeAttribute("disabled")
})

button.addEventListener("click", () => {
    // let pointsSum = 0;
    currectAns = +(firstNum.textContent) + +(secondNum.textContent);
    switch (true) {
        case operator.textContent == '-':
            currectAns = +(firstNum.textContent) - +(secondNum.textContent);
            break;
        case operator.textContent == '*':
            currectAns = +(firstNum.textContent) * +(secondNum.textContent);
            break;
        case operator.textContent == '/':
            currectAns = +(firstNum.textContent) / +(secondNum.textContent);
            break;
        default:
            currectAns = +(firstNum.textContent) + +(secondNum.textContent);
    }

    if (+(userInput.value) == currectAns) {
        pointsCalc = 5
        pointsSum += pointsCalc
    }

    let div = document.createElement("div");

    let targil = document.createElement("p")
    targil.innerHTML = `${firstNum.textContent} ${operator.textContent} ${secondNum.textContent}`;
    div.appendChild(targil);

    let p2 = document.createElement("p");
    p2.innerHTML = currectAns;
    div.appendChild(p2);

    let userAns = document.createElement("p");
    userAns.innerHTML = userInput.value;
    div.appendChild(userAns);

    let points = document.createElement('p');
    points.innerHTML = pointsSum;
    div.appendChild(points);



    table.appendChild(div);
    let event = new Event('change');
    numRange.dispatchEvent(event);
})

