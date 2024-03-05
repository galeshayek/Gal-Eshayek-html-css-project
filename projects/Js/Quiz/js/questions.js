
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
if (localStorage.getItem("questionList")) {
    const list = JSON.parse(localStorage.getItem("questionList"));
    questionData.push(...list)
}

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
    console.log(userOptions)
    // if input is valid, push it to the questionsData
    if (!userOptions.includes(userCorrectAns)) {
        alert('correct asnwer must be one of the options');
        return
    }
    if (userOptions.length === 4 && userOptions[3] !== "") {
        questionData.push({
            text: userText,
            options: userOptions,
            correctAnswer: userCorrectAns
        })

        //add question to local storage
        const tempList = questionData.map(q => new Question(q.text, q.options, q.correctAnswer));
        localStorage.removeItem('questionList');
        localStorage.setItem('questionList', JSON.stringify(tempList));
        text.value = "";
        options.value = "";
        correctAns.value = "";
        location.reload();
    } else {
        alert('must write 4 options and divide them with: ,')
    }

});


export function demoQuestions() {
    const demoQuestions = [
        { text: 'What is 2 + 2?', options: ['2', '6', '4', '8'], correctAnswer: '4' },
        { text: 'What is the capital of France?', options: ['London', 'Berlin', 'Paris', 'Madrid'], correctAnswer: 'Paris' },
        { text: 'Which language is primarily used for web development?', options: ['Python', 'JavaScript', 'C++', 'Java'], correctAnswer: 'JavaScript' },
        { text: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language'], correctAnswer: 'Hyper Text Markup Language' },
        { text: 'What year was JavaScript created?', options: ['1990', '1995', '2000', '2005'], correctAnswer: '1995' },
        { text: 'Which symbol is used for comments in JavaScript?', options: ['//', '/* */', '#', '<!-- -->'], correctAnswer: '//' },
        { text: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets'], correctAnswer: 'Cascading Style Sheets' },
        { text: 'Which method is used to round a number to the nearest integer in JavaScript?', options: ['Math.round()', 'Math.floor()', 'Math.ceil()', 'Math.random()'], correctAnswer: 'Math.round()' },
        { text: 'How do you declare a JavaScript variable?', options: ['varName', 'var varName', 'variable varName', 'v varName'], correctAnswer: 'var varName' },
        { text: 'Which HTML tag is used to define an internal style sheet?', options: ['<script>', '<css>', '<style>', '<link>'], correctAnswer: '<style>' }
    ]
    const tempList = demoQuestions.map(q => new Question(q.text, q.options, q.correctAnswer));
    localStorage.setItem('questionList', JSON.stringify(tempList));
    location.reload();
}