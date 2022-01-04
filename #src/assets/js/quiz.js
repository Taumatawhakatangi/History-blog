const DATA = [
    {
        question: 'В каком году крестили Русь?',
        answers: [
            {
                id: '1',
                value: 'в 988 г',
                correct: true,
            },
            {
                id: '2',
                value: 'в 978 г',
                correct: false,
            },
            {
                id: '3',
                value: 'в 1028 г',
                correct: false,
            },
        ]
    },
    {
        question: 'Кто является автором фразы <br> "Киев - мать городов русских" ?',
        answers: [
            {
                id: '4',
                value: 'Княгина Ольга',
                correct: false,
            },
            {
                id: '5',
                value: 'Александр Невский',
                correct: false,
            },
            {
                id: '6',
                value: 'Вещий Олег',
                correct: true,
            },
        ]
    },

    {
        question: 'В каком году отменили крепостное право?',
        answers: [
            {
                id: '7',
                value: 'в 1838 г',
                correct: false,
            },
            {
                id: '8',
                value: 'в 1861 г',
                correct: true,
            },
            {
                id: '9',
                value: 'в 1871 г',
                correct: false,
            },
        ]
    },

    {
        question: 'В каком году Русь разделилась на княжества?',
        answers: [
            {
                id: '10',
                value: 'в 1200 г',
                correct: false,
            },
            {
                id: '11',
                value: 'в 1174 г',
                correct: false,
            },
            {
                id: '12',
                value: 'в 1132 г',
                correct: true,
            },
        ]
    },

    {
        question: 'Кто был последним царем в России?',
        answers: [
            {
                id: '13',
                value: 'Николай 2',
                correct: false,
            },
            {
                id: '14',
                value: 'Иван Грозный',
                correct: false,
            },
            {
                id: '15',
                value: 'Петр 1',
                correct: true,
            },
        ]
    },

    
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const quizRestartBtn = document.getElementById('quizRestartBtn');
const quizNextBtn = document.getElementById('quizNextBtn');

const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index; 

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
                <li>
                    <label class="radio">
                        <input class="radio__real answer-input" type="radio" name=${index} value=${answer.id}>
                        <span class="radio__fake"></span>
                        <span class="radio__title">
                            ${answer.value}
                        </span>   
                    </label>
                </li>
        `)
        .join('');

    questions.innerHTML = `
        <div class="questions__item" id="questions">
           
            <h2 class="questions__title">
               ${DATA[index].question}
            </h2>
            <ul class="questions__answers">
              ${renderAnswers()}
            </ul>
        </div>
    `;
};

const renderResults = () => {
    let content = '';

    const getClassName = (answer, questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname ='invalid';
        }  else if (answer.correct) {
            classname ='valid';
        }

        return classname;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => ` <li class=${getClassName(answer, questionIndex)}> ${answer.value} 
        <span class="true-answer"></span> <span class="false-answer">Вы выбрали неправильный ответ</span></li> `)
        .join('');       
   

    DATA.forEach((question, index) => {
        content += `
            <div class="results__item">
                <h2 class="results__title">
                    ${question.question}
                </h2>
                <ul class="results__answers"> 
                    ${getAnswers(index)}
                </ul>
            </div>
        `;
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep} / ${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;
        quizNextBtn.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('quiz__btn-next')) {
        const nextQuestionsIndex = Number (questions.dataset.currentStep) + 1;
        
        if (DATA.length === nextQuestionsIndex) {
            questions.classList.add('hidden')
            indicator.classList.add('hidden')
            results.classList.add('visible')
            quizRestartBtn.classList.add('visible')
            quizNextBtn.classList.add('hidden')

            renderResults();
        }   else {
            renderQuestions(nextQuestionsIndex);
        }

        quizNextBtn.disabled = true;
    }

    if (event.target.classList.contains('quiz__restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('hidden')
        indicator.classList.remove('hidden')
        results.classList.remove('visible')
        quizRestartBtn.classList.remove('visible')
        quizNextBtn.classList.remove('hidden')

        renderQuestions(0);
    }
});

renderQuestions(0);






      