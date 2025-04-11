// Пример пользователей (можно расширить)
let users = JSON.parse(localStorage.getItem("users")) || [];

// Список заявок на кредит
let loanRequests = JSON.parse(localStorage.getItem("loanRequests")) || [];

// Добавить нового пользователя (после регистрации и идентификации)
function addUser(user) {
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

// Получить балл скоринга от 1 до 10 (на основе простых правил)
function calculateScore(userData) {
  let score = 5;

  if (userData.utilityPaymentsGood) score += 2;
  if (userData.hasStableJob) score += 2;
  if (userData.noLoanDelays) score += 1;
  if (userData.badHistory) score -= 2;

  return Math.min(10, Math.max(1, score));
}

// Создать заявку на кредит
function createLoanRequest(userName, amount, term, purpose, userData) {
  const score = calculateScore(userData);
  let status = "Ожидает";
  let rate = 25; // базовая ставка

  if (score >= 8) {
    status = "Одобрено";
    rate = 12;
  } else if (score >= 5) {
    status = "Одобрено";
    rate = 18;
  } else {
    status = "Отклонено";
  }

  const request = {
    username: userName,
    score,
    status,
    amount,
    term,
    purpose,
    rate,
    guarantors: []
  };

  loanRequests.push(request);
  localStorage.setItem("loanRequests", JSON.stringify(loanRequests));

  // Сохраняем активный кредит для личного кабинета
  if (status === "Одобрено") {
    const activeLoan = {
      amount,
      remaining: amount,
      term,
      rate
    };
    localStorage.setItem("activeLoan", JSON.stringify(activeLoan));
  }

  return request;
}

// Добавить поручителя в заявку
function addGuarantor(username, guarantorName) {
  loanRequests = loanRequests.map(req => {
    if (req.username === username && req.guarantors.length < 2) {
      req.guarantors.push(guarantorName);
    }
    return req;
  });

  localStorage.setItem("loanRequests", JSON.stringify(loanRequests));
}

// Сохранить результат заявки для вывода
function saveLoanResult(request) {
  const result = {
    approved: request.status === "Одобрено",
    amount: request.amount,
    term: request.term,
    rate: request.rate,
    message: request.status === "Одобрено"
      ? "Вы можете перейти в личный кабинет и следить за кредитом."
      : "Увы, вы не прошли по условиям. Попробуйте добавить поручителя или выбрать меньшую сумму."
  };

  localStorage.setItem("loanResult", JSON.stringify(result));
}
