// Подождем, пока весь DOM загрузится
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loanForm");
  
    if (!form) return;
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const amount = parseFloat(document.getElementById("amount").value);
      const term = parseInt(document.getElementById("term").value);
      const purpose = document.getElementById("purpose").value;
  
      // Имитация пользователя (в реальности — брать из авторизации)
      const currentUser = "Тестовый пользователь";
  
      // Имитация данных из госуслуг (как будто уже получили)
      const userData = {
        utilityPaymentsGood: true,
        hasStableJob: true,
        noLoanDelays: false,
        badHistory: false
      };
  
      // Создаем заявку и рассчитываем
      const request = createLoanRequest(currentUser, amount, term, purpose, userData);
  
      // Сохраняем результат для отображения на другой странице
      saveLoanResult(request);
  
      // Переход к результату
      window.location.href = "loan-result.html";
    });
  });
  