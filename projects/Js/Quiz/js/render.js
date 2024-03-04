import { listOfQuestions } from "./questions.js";
import { quiz } from "./quiz.js";
const startBtn = document.getElementById('start');
const loadBtn = document.getElementById('load');
const clearBtn = document.getElementById("clear");

function displayQuestion() {
    if (quiz.hasEnded()) {
        showScores();
    } else {
        let question = quiz.questions[quiz.currentQuestionIndex];
        document.getElementById("question").innerText = question.text;
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
    const gameOverHTML = `<h1>Result</h1><h2>Your score: ${quiz.score}</h2>`;
    document.getElementById("quiz").innerHTML = gameOverHTML;
}

if (listOfQuestions.length > 0) {
    startBtn.removeAttribute('disabled')
}

startBtn.addEventListener('click', () => {
    displayQuestion();
})

loadBtn.addEventListener('click', () => {
    location.reload();
})

clearBtn.addEventListener("click", () => {
    localStorage.clear('questionList');
})

