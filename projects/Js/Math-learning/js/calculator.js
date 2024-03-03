const button = document.getElementById("checkAnswer");
const numRange = document.getElementById("numRange");
const operatorRange = document.getElementById("operatorRange");
const userInput = document.getElementById("userInput");
const targil = document.getElementById("targil");
const firstNum = document.getElementById("num1");
const operator = document.getElementById("operator");
const secondNum = document.getElementById("num2");
const equal = document.getElementById("equal");
const table = document.getElementById("list");
let pointsCalc = 0
let pointsSum = 0;

function updateNumbers() {
    targil.style.display = 'block'
    let value = numRange.value;
    let num1 = 0;
    let num2 = 0;
    switch (value) {
        case '1-10':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
            firstNum.innerHTML = num1;
            secondNum.innerHTML = num2;
            break;
        case '1-100':
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
            firstNum.innerHTML = num1;
            secondNum.innerHTML = num2;
            break;
        case '1-1000':
            num1 = Math.floor(Math.random() * 1000) + 1;
            num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
            firstNum.innerHTML = num1;
            secondNum.innerHTML = num2;
            break;
    }
    equal.textContent = "=";
}


numRange.addEventListener('change', () => {
    updateNumbers();
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
    //input validation
    const nptValue = userInput.value;
    console.log(+nptValue);
    if (isNaN(+nptValue)) {
        alert("Answer must be a number");
        return
    }
    // calculates the currect answer
    let currectAns = +(firstNum.textContent) + +(secondNum.textContent);
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
    }
    // updates user points
    if (+(userInput.value) === currectAns) {
        pointsCalc = 5
        pointsSum += pointsCalc
    }

    let fragment = document.createDocumentFragment();
    let div = document.createElement("div");
    let targil = document.createElement("p");
    targil.innerHTML = `${firstNum.textContent} ${operator.textContent} ${secondNum.textContent}`;
    div.appendChild(targil);
    let paraCurrectAns = document.createElement("p");
    paraCurrectAns.innerHTML = currectAns;
    div.appendChild(paraCurrectAns);
    let userAns = document.createElement("p");
    userAns.innerHTML = userInput.value;
    div.appendChild(userAns);
    let points = document.createElement('p');
    points.innerHTML = pointsSum;
    div.appendChild(points);
    fragment.appendChild(div);
    table.appendChild(fragment);

    updateNumbers();
    userInput.value = "";
})


