// === Регистрация ===
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Регистрация прошла успешно!");
    window.location.href = "login.html";
  });
}

// === Авторизация + 2FA ===
function sendCode() {
  const phone = document.getElementById("loginPhone").value;
  const password = document.getElementById("loginPassword").value;

  if (phone && password) {
    const code = "123456";
    sessionStorage.setItem("smsCode", code);
    alert("Секретный код отправлен по SMS: " + code);
    document.getElementById("smsCodeSection").style.display = "block";
  } else {
    alert("Пожалуйста, введите телефон и пароль.");
  }
}

function verifyCode() {
  const userCode = document.getElementById("smsCode").value;
  const realCode = sessionStorage.getItem("smsCode");

  if (userCode === realCode) {
    alert("Вы успешно вошли в систему!");
    window.location.href = "dashboard.html";
  } else {
    alert("Неверный код. Попробуйте снова.");
  }
}


// === СЛАЙДЕР-ФРАЗ ===
const slideText = document.getElementById('slideText');
const phrases = [
  "Добро пожаловать в KreditFast",
  "Онлайн-кредиты за 2 минуты",
  "Ваш финансовый путь начинается здесь",
  "Надёжность, прозрачность, технология"
];
let currentSlide = 0;

function updateSlide() {
  slideText.textContent = phrases[currentSlide];
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % phrases.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + phrases.length) % phrases.length;
  updateSlide();
}

setInterval(nextSlide, 3000);
