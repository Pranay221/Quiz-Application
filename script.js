const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who gave Bhishma the boon that he would die only when he wished?',
    answers: [
      { text: 'Vyasa', correct: false },
      { text: 'Krishna', correct: false },
      { text: 'Dronacharya', correct: false},
      { text: 'Shantanu', correct: true}
    ]
  },
  {
    question: 'What was the name of Gandhari\'s only daughter?',
    answers: [
      { text: 'Amba', correct: false },
      { text: 'SatyaVati', correct: false},
      { text: 'Dussala', correct: true },
      { text: 'Ulupi', correct: false }
    ]
  },
  {
    question: 'At the time of his birth, in the voice of which animal did Duryodhana cry?',
    answers: [
      { text: 'Lion', correct: false },
      { text: 'Wolf', correct: false },
      { text: 'Ass', correct: true },
      { text: 'Dog', correct: false }
    ]
  },
  {
    question: 'Who taught Arjuna the \'Brahmastra\'?',
    answers: [
      { text: 'Bheeshma', correct: false },
      { text: 'Drona', correct: true },
      { text: 'Mahadev', correct: false},
      { text: 'Indra', correct: false}
    ]
  },
  {  
    question: 'Who was the mother of Ghadotkacha?',
    answers: [
      { text: 'Subhadra', correct: false },
      { text: 'Hidimba', correct: true },
      { text: 'Nala', correct: false},
      { text: 'SatyaVati', correct: false}
    ]
  },
  {
    question: 'Who killed Jarashandha?',
    answers: [
      { text: 'Bheema', correct: true },
      { text: 'Arjuna', correct: false },
      { text: 'Yudhishthira', correct: false},
      { text: 'Krishna', correct: false}
    ]

  },
  {
    question: 'Who is the father of Arjuna?',
    answers: [
      { text: 'Yama', correct: false },
      { text: 'Vaayu', correct: false},
      { text: 'Indra', correct: true},
      { text: 'Shiva', correct: false}
    ]
  },
  {
    question: 'Who died of a snake attack?',
    answers: [
      { text: 'Parikshit', correct: true },
      { text: 'Arjuna', correct: false },
      { text: 'Abhimanyu', correct: false},
      { text: 'Krishna', correct: false}
    ]
  },
  {
    question: 'Who was the father of Pradyumna?',
    answers: [
      { text: 'Balarama', correct: false },
      { text: 'Krishna', correct: true },
      { text: 'Arjuna', correct: false},
      { text: 'Nakula', correct: false}
    ]
  },
  {
    question: 'Who was the mother of Shakunthala?',
    answers: [
      { text: 'Kunti', correct: false },
      { text: 'Menaka', correct: true },
      { text: 'Gandhari', correct: false},
      { text: 'SatyaVati', correct: false}
    ]
  }
]