document.addEventListener("DOMContentLoaded", function () {
    const scoringBox = document.getElementById("scoringBox");
  
    if (!scoringBox) return;
  
    // Имитация данных, как будто пришли с госуслуг
    const userData = {
      utilityPaymentsGood: true,
      hasStableJob: true,
      noLoanDelays: false,
      badHistory: false
    };
  
    // Расчет скоринга (дублируем из backend.js)
    function calculateScore(data) {
      let score = 5;
  
      if (data.utilityPaymentsGood) score += 2;
      if (data.hasStableJob) score += 2;
      if (data.noLoanDelays) score += 1;
      if (data.badHistory) score -= 2;
  
      return Math.min(10, Math.max(1, score));
    }
  
    // Пояснения к каждому пункту
    function generateBreakdown(data) {
      const reasons = [];
  
      if (data.utilityPaymentsGood) {
        reasons.push("✅ Хорошая история коммунальных платежей (+2)");
      } else {
        reasons.push("⚠️ Были задержки по коммуналке (0)");
      }
  
      if (data.hasStableJob) {
        reasons.push("✅ Стабильный доход (+2)");
      } else {
        reasons.push("⚠️ Нет постоянного места работы (0)");
      }
  
      if (data.noLoanDelays) {
        reasons.push("✅ Нет просрочек по кредитам (+1)");
      } else {
        reasons.push("⚠️ Были просрочки по займам (0)");
      }
  
      if (data.badHistory) {
        reasons.push("❌ Наличие негативной кредитной истории (−2)");
      }
  
      return reasons;
    }
  
    // Итог
    const score = calculateScore(userData);
    const reasons = generateBreakdown(userData);
  
    scoringBox.innerHTML = `
      <h2>Ваш скоринговый балл: <span style="color:${score >= 7 ? 'green' : score >= 5 ? 'orange' : 'red'}">${score}/10</span></h2>
      <h3>Детали расчёта:</h3>
      <ul>
        ${reasons.map(r => `<li>${r}</li>`).join("")}
      </ul>
      ${score < 7 ? `<p><strong>Рекомендации:</strong> Укажите поручителя, предоставьте справку о доходах или выберите меньшую сумму/срок кредита.</p>` : ""}
    `;
  });
  