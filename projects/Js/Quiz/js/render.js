import { listOfQuestions, demoQuestions, Question } from "./questions.js";
import { quiz } from "./quiz.js";
const startBtn = document.getElementById('start');
// const loadBtn = document.getElementById('load');
const clearBtn = document.getElementById("clear");
const domQuiz = document.getElementById("quiz");
const domPresets = document.querySelector('.presets');
const questionsDisplay = document.getElementById("questions-list");
const demoBtn = document.getElementById("demo");


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

demoBtn.addEventListener("click", demoQuestions)