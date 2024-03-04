import { quiz } from "./quiz.js";
const startBtn = document.getElementById('start');
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


startBtn.onclick = () => displayQuestion()