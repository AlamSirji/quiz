const quizData = [{
        question: `Your attitude to life is so simple, direct, and aboveboard, every decision you made is based on the answer to one question: What's in it for me?`,
        a: 'Altruist',
        b: 'Cardiologist',
        c: 'Egoist',
        d: 'Introvert',
        correct: 'c'
    }, {
        question: `Have you heard about all the money I am making? Did I tell you about my latest gaming PC? Let me give you my opinion, because I am an expert at practically everything!`,
        a: 'Egotist',
        b: 'Egoist',
        c: 'Ambivert',
        d: 'Extrovert',
        correct: 'a'
    }, {
        question: `You have discovered the secret of true happiness - concerning yourself with the welfare of others.`,
        a: 'Ascetic',
        b: 'Introvert',
        c: 'Extrovert',
        d: 'Misogamist',
        correct: 'a'
    }, {
        question: `You minutely examine your every thought, feeling, and action. Probing futile question like what do other people think of me? How do I look? or May be I should haven't said that?`,
        a: 'Ambivert',
        b: 'Introvert',
        c: 'Extrovert',
        d: 'Monk',
        correct: 'b'
    },
    {
        question: `You love to be with people. Your thoughts, your interests, your whole personality are turned outwards.`,
        a: 'Neurologist',
        b: 'Psychiatrist',
        c: 'Extrovert',
        d: 'Ambivert',
        correct: 'c'
    }
];

const questionEl = document.getElementById("question");
const option1El = document.getElementById("aText");
const option2El = document.getElementById("bText");
const option3El = document.getElementById("cText");
const option4El = document.getElementById("dText");
const submitBtnEl = document.getElementById("submitBtn");

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML = currentQuizData.question;
    option1El.innerHTML = currentQuizData.a;
    option2El.innerHTML = currentQuizData.b;
    option3El.innerHTML = currentQuizData.c;
    option4El.innerHTML = currentQuizData.d;
}
submitBtnEl.addEventListener("click", (e) => {
    let answer = getSelected();
    if (answer && answer === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        deselectAnswers();
        loadQuiz();
    } else {
        document.getElementById("quiz").innerHTML = `<h1>Your score is <strong> ${score}</strong> out of ${quizData.length}</h1><button onClick="location.reload()">Reload</button>`;
    }

})

function getSelected() {
    let answer;
    const radioEls = document.getElementsByName("options");
    radioEls.forEach(el => {
        if (el.checked === true) {
            answer = el.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    const radioEls = document.getElementsByName("options");
    radioEls.forEach(el => {
        el.checked = false;
    });
}