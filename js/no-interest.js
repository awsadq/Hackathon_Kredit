document.addEventListener("DOMContentLoaded", function () {
    const offerBox = document.getElementById("noInterestOffer");
    const acceptBtn = document.getElementById("acceptNoInterest");
    const statusBox = document.getElementById("noInterestStatus");
  
    const currentUser = "Тестовый пользователь"; // заглушка
  
    // Проверяем, брал ли пользователь ранее кредит
    const history = JSON.parse(localStorage.getItem("creditHistory")) || [];
    const activeLoan = JSON.parse(localStorage.getItem("activeLoan"));
  
    const alreadyUsedNoInterest = localStorage.getItem("usedNoInterest");
  
    if (!alreadyUsedNoInterest && !activeLoan) {
      // Предложить беспроцентный кредит
      if (offerBox) {
        offerBox.innerHTML = `
          <h3>🎁 Беспроцентный кредит</h3>
          <p>Вы можете получить один беспроцентный кредит сроком 7–14 дней. Предложение действительно только один раз!</p>
          <button id="acceptNoInterest">Получить сейчас</button>
        `;
      }
    } else {
      if (statusBox) {
        statusBox.innerHTML = `<p style="color:gray;">Вы уже воспользовались предложением или у вас есть активный кредит.</p>`;
      }
    }
  
    // Обработка принятия предложения
    document.addEventListener("click", function (e) {
      if (e.target && e.target.id === "acceptNoInterest") {
        // Генерируем беспроцентный кредит
        const loan = {
          amount: 10000,
          remaining: 10000,
          term: 14, // дней
          rate: 0,
          startDate: new Date().toISOString(),
          noInterest: true
        };
  
        // Сохраняем
        localStorage.setItem("activeLoan", JSON.stringify(loan));
        localStorage.setItem("usedNoInterest", "true");
  
        // Добавим в историю
        history.push({
          user: currentUser,
          type: "no-interest",
          date: new Date().toISOString()
        });
        localStorage.setItem("creditHistory", JSON.stringify(history));
  
        // Обновление UI
        if (offerBox) offerBox.innerHTML = `<p style="color:green;">Поздравляем! Вы получили беспроцентный кредит на 14 дней.</p>`;
      }
    });
  });
  