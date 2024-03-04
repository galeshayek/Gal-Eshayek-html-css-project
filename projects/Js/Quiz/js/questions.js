
const text = document.getElementById("text-input");
const options = document.getElementById("options-input");
const correctAns = document.getElementById("correct-ans-input");
const addQuestion = document.getElementById("subnit-inputs");

export class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

const questionData = [];

const tempList = questionData.map(q => new Question(q.text, q.options, q.correctAnswer));
if (!localStorage.getItem('questionList')) {
    localStorage.setItem('questionList', JSON.stringify(tempList));
}

let listOfObjects = JSON.parse(localStorage.getItem('questionList'));

export let listOfQuestions = listOfObjects.map(q => new Question(q.text, q.options, q.correctAnswer));



addQuestion.addEventListener('click', () => {
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

