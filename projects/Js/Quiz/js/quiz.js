import { listOfQuestions } from "./questions.js";

class Quiz {
    #score = 0;
    questions = [];
    currentQuestionIndex = 0;

    constructor(questions) {
        this.questions = questions;
    }

    get score() {
        return this.#score;
    }

    guess(answer) {
        if (this.questions[this.currentQuestionIndex].checkAnswer(answer)) {
            this.#score++;
        }
        this.currentQuestionIndex++;
    }

    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }

    static initializeQuiz() {
        const questions = [...listOfQuestions];
        return new Quiz(questions);
    }
}
export let quiz = Quiz.initializeQuiz();

