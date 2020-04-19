const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("qImg");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGuage");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [{


    questions : "What does HTML stand for?",
    imgSrc : "N/A",
    choiceA : "Correct",
    choiceB : "Wrong", 
    choiceC : "Wrong", 
    choiceD : "Wrong",
    correct : "A",
}, {
    questions : "What does CSS stand for?",
    imgSrc : "N/A",
    choiceA : "Wrong",
    choiceB : "Wrong", 
    choiceC : "Wrong", 
    choiceD : "Correct",
    correct : "D",
}, {
    questions : "What does JS stand for?",
    imgSrc : "N/A",
    choiceA : "Wrong",
    choiceB : "Wrong", 
    choiceC : "Correct", 
    choiceD : "Wrong",
    correct : "C",
}
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();
TIMER = setInterval(renderCounter, 1000);

start.addEventListener("click", startQuiz);

function startQuiz (){
    start.style.display = "none";
    renderQuestion();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; index++) {
        progress.innerHTML += "<div class= 'prog' id=" + qIndex +"> </div>";
        
    }
}
let counter
const questionTime = 10;
const guageWidth = 150;
const guageUnit = guageWidth / questionTime;
let TIMER;
let score = 0;

function renderCounter(){
    if (count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * guageUnit + "px";
        count++   
    }else {
        count = 0;
        answerisWrong();
        if (runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
        
function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        score++
        answerisCorrect();
    }else {
        answerisWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else {
        clearInterval(TIMER);
        scoreRender();
    }
}
function answerisCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor= "#0f0";
}
function answerisWrong(){
    document.getElementById(runningQuestion).style.backgroundColor= "#f00";
}
}

function scoreRender();{
    scoreDiv.style.display = "block";
    const scorepercent = Math.round(100 * score/questions.length);
scoreDiv.innerHTML = "";

}
