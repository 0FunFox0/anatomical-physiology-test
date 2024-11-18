const quizData = [
  {
    question: "Anatomy에서 'Cranium'의 뜻은?",
    options: ["두개골", "심장", "폐", "간"],
    answer: 0,
  },
  {
    question: "'Femur'는 무엇을 의미할까요?",
    options: ["팔꿈치뼈", "넓적다리뼈", "척추뼈", "갈비뼈"],
    answer: 1,
  },
  {
    question: "'Hepatology'는 어떤 기관과 관련이 있나요?",
    options: ["간", "폐", "심장", "뇌"],
    answer: 0,
  },
  {
    question: "'Nephron'은 무엇과 관련이 있을까요?",
    options: ["폐", "간", "신장", "심장"],
    answer: 2,
  },
  {
    question: "'Alveoli'는 무엇과 관련이 있을까요?",
    options: ["폐", "심장", "위", "간"],
    answer: 0,
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = ""; // 기존 선택지 초기화

  currentQuiz.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectAnswer(index));
    optionsEl.appendChild(li);
  });
}

function selectAnswer(selectedIndex) {
  const currentQuiz = quizData[currentQuestion];
  if (selectedIndex === currentQuiz.answer) {
    score++;
  }
  nextBtn.disabled = false; // 다음 버튼 활성화
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.disabled = true; // 다시 비활성화
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.textContent = `퀴즈 완료! 당신의 점수는 ${score}/${quizData.length}입니다.`;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none"; // 다음 버튼 숨기기
}

loadQuestion();
nextBtn.disabled = true; // 초기 상태에서 버튼 비활성화
