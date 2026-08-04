let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

let quizQuestions = [];


const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");


const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");


const questionText = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const answersBox = document.getElementById("answers");


const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedback-title");
const explanation = document.getElementById("explanation");


const scoreText = document.getElementById("score");
const progress = document.getElementById("progress");


const finalScore = document.getElementById("final-score");
const percentage = document.getElementById("percentage");
const rank = document.getElementById("rank");

const correctCount = document.getElementById("correct-count");
const wrongCount = document.getElementById("wrong-count");



// Start quiz

startBtn.onclick = () => {

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    startQuiz();

};


// Restart quiz

restartBtn.onclick = () => {

    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    startQuiz();

};



// Prepare quiz

function startQuiz(){

    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    quizQuestions = [...questions];

    shuffle(quizQuestions);

    scoreText.textContent = score;

    loadQuestion();

}



// Randomize questions

function shuffle(array){

    for(let i = array.length - 1; i > 0; i--){

        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
        [array[j], array[i]];

    }

}



// Load question

function loadQuestion(){

    feedback.classList.add("hidden");

    let q = quizQuestions[currentQuestion];


    questionNumber.textContent =
    `Question ${currentQuestion + 1} / ${quizQuestions.length}`;


    questionText.textContent = q.question;


    answersBox.innerHTML = "";


    progress.style.width =
    `${(currentQuestion / quizQuestions.length) * 100}%`;



    q.answers.forEach((answer,index)=>{


        let button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = answer;


        button.onclick = () => {

            checkAnswer(index, button);

        };


        answersBox.appendChild(button);


    });


}



// Check answer

function checkAnswer(selected, button){

    let q = quizQuestions[currentQuestion];


    let buttons =
    document.querySelectorAll(".answer-btn");


    buttons.forEach(btn=>{
        btn.disabled = true;
    });



    if(selected === q.correct){

        button.classList.add("correct");

        score += 10;

        correctAnswers++;

        scoreText.textContent = score;


        feedbackTitle.textContent =
        "✅ Correct!";

        explanation.textContent =
        "Great job! You got this one right.";

    }

    else{

        button.classList.add("wrong");

        buttons[q.correct].classList.add("correct");


        wrongAnswers++;


        feedbackTitle.textContent =
        "❌ Incorrect";


        explanation.textContent =
        q.explanation;

    }


    feedback.classList.remove("hidden");

}



// Next question

nextBtn.onclick = () => {


    currentQuestion++;


    if(currentQuestion >= quizQuestions.length){

        showResults();

    }

    else{

        loadQuestion();

    }


};



// Results

function showResults(){

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    let total =
    quizQuestions.length;


    let percent =
    Math.round((correctAnswers / total) * 100);



    finalScore.textContent =
    `${correctAnswers} / ${total}`;


    percentage.textContent =
    `${percent}%`;


    correctCount.textContent =
    correctAnswers;


    wrongCount.textContent =
    wrongAnswers;



    if(percent >= 90){

        rank.textContent =
        "🏆 Computer Engineering Master";

    }

    else if(percent >= 75){

        rank.textContent =
        "🥇 Hardware Expert";

    }

    else if(percent >= 50){

        rank.textContent =
        "🥈 Future Engineer";

    }

    else{

        rank.textContent =
        "📚 Keep Practicing";

    }

}
