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
  nextBtn.disabled = true; // 다음 버튼 비활성화

  currentQuiz.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.classList.add("option"); // CSS 스타일 추가
    li.addEventListener("click", () => selectAnswer(index, li));
    optionsEl.appendChild(li);
  });
}

function selectAnswer(selectedIndex, element) {
  const currentQuiz = quizData[currentQuestion];
  if (selectedIndex === currentQuiz.answer) {
    element.style.backgroundColor = "#4caf50"; // 정답일 경우 초록색
    score++;
    nextBtn.disabled = false; // 다음 버튼 활성화
  } else {
    element.style.backgroundColor = "#f44336"; // 오답일 경우 빨간색
  }
  disableOptions(); // 선택지 비활성화
}

function disableOptions() {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.style.pointerEvents = "none"; // 선택지 클릭 불가
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
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

