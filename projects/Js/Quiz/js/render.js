import { listOfQuestions, demoQuestions, Question } from "./questions.js";
import { quiz } from "./quiz.js";
const startBtn = document.getElementById('start');
const loadBtn = document.getElementById('load');
const clearBtn = document.getElementById("clear");
const demoBtn = document.getElementById("demo");
const domQuiz = document.getElementById("quiz");
const domPresets = document.querySelector('.presets');
const questionsDisplay = document.getElementById("questions-list");
const text = document.getElementById("text-input");
const options = document.getElementById("options-input");
const correctAns = document.getElementById("correct-ans-input");
const add = document.getElementById("subnit-inputs");


function displayQuestion() {
    if (quiz.hasEnded()) {
        showScores();
    } else {
        let question = quiz.questions[quiz.currentQuestionIndex];
        document.getElementById("question").textContent = question.text;
        question.options.forEach((option, index) => {
            let optionElement = document.getElementById(`choice${index}`);
            optionElement.innerText = option;
            optionElement.onclick = () => handleGuess(option)
        });
    }
}

function handleGuess(selectedOption) {
    quiz.guess(selectedOption);
    displayQuestion();
}

function showScores() {
    domQuiz.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = "Result";
    const h2 = document.createElement('h2');
    h2.textContent = `Your score: ${quiz.score}`;
    const reload = document.createElement('button');
    reload.classList.add('reload-button');
    reload.textContent = "Reload";
    domQuiz.append(h1, h2, reload);
    reload.addEventListener("click", () => {
        location.reload();
    })
}



if (listOfQuestions.length > 0) {
    startBtn.removeAttribute('disabled');
}

startBtn.addEventListener('click', () => {
    domQuiz.style.display = 'flex';
    domPresets.style.display = 'none';
    displayQuestion();
})

loadBtn.addEventListener('click', () => {
    location.reload();
})

let num = 0
listOfQuestions.forEach(q => {
    num++
    const p = document.createElement("p");
    p.textContent = `${num}. ${q.text}`;
    questionsDisplay.append(p);
});

clearBtn.addEventListener("click", () => {
    localStorage.clear('questionList');
    questionsDisplay.remove("p");
    startBtn.setAttribute('disabled', '');
})



demoBtn.addEventListener("click", demoQuestions
);
console.log(listOfQuestions);


const questionData = [];

const tempList = questionData.map(q => new Question(q.text, q.options, q.correctAnswer));
if (!localStorage.getItem('questionList')) {
    localStorage.setItem('questionList', JSON.stringify(tempList));
}



add.addEventListener('click', () => {
    //getting user input
    const userText = text.value;
    const userOptions = options.value.split(",");
    const userCorrectAns = correctAns.value;
    //if input is valid, push it to the questionsData
    if (userOptions.length === 4 && userOptions[3] !== "") {
        questionData.push({
            text: userText,
            options: userOptions,
            correctAnswer: userCorrectAns
        })
        //clear user input
        text.value = ""
        options.value = ""
        correctAns.value = ""

        //add question to local storage
        const tempList = questionData.map(q => new Question(q.text, q.options, q.correctAnswer));
        localStorage.clear('questionList');
        localStorage.setItem('questionList', JSON.stringify(tempList));
    } else {
        alert('must write 4 options and divide them with: ,')
    }
});