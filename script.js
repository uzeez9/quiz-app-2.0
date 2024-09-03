let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = 5;

function startQuiz() {
    currentQuestionIndex = 1;
    score = 0;
    showSection('question-1');
}

function showSection(sectionClass) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector('.' + sectionClass).classList.add('active');
}

function checkAnswer(questionClass, isCorrect) {
    if (isCorrect) {
        score++;
    }

    if (currentQuestionIndex < totalQuestions) {
        currentQuestionIndex++;
        showSection('question-' + currentQuestionIndex);
    } else {
        
        showResult();
    }
}

function showResult() {
    if (score === totalQuestions) {
        showSection('win-screen');
    } else {
        showSection('lose-screen');
    }
}
function showResult() {
    if (score === totalQuestions) {
        document.getElementById('score-display').textContent = score;
        showSection('win-screen');
    } else {
        document.getElementById('score-display-lose').textContent = score;
        showSection('lose-screen');
    }
}
