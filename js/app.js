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
