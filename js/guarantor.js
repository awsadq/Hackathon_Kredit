document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("guarantorForm");
    const list = document.getElementById("guarantorList");
    const message = document.getElementById("guarantorMessage");
  
    // Получаем текущего пользователя (для примера — заглушка)
    const currentUser = "Тестовый пользователь";
  
    // Загружаем заявки
    let loanRequests = JSON.parse(localStorage.getItem("loanRequests")) || [];
  
    // Найдём текущую заявку по имени пользователя
    let currentRequest = loanRequests.find(req => req.username === currentUser);
  
    // Если заявки нет — выйти
    if (!currentRequest) {
      message.innerHTML = `<p style="color:red;">Нет активной заявки для добавления поручителей.</p>`;
      if (form) form.style.display = "none";
      return;
    }
  
    // Отображение уже добавленных поручителей
    function renderGuarantors() {
      list.innerHTML = "";
  
      if (currentRequest.guarantors.length === 0) {
        list.innerHTML = `<p>Нет добавленных поручителей.</p>`;
      } else {
        currentRequest.guarantors.forEach((name, index) => {
          const li = document.createElement("li");
          li.textContent = `${index + 1}. ${name}`;
          list.appendChild(li);
        });
      }
    }
  
    renderGuarantors();
  
    // Добавление поручителя
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nameInput = document.getElementById("guarantorName");
        const name = nameInput.value.trim();
  
        if (!name) return;
  
        if (currentRequest.guarantors.length >= 2) {
          message.innerHTML = `<p style="color:red;">Максимум 2 поручителя.</p>`;
          return;
        }
  
        currentRequest.guarantors.push(name);
  
        // Обновляем loanRequests
        loanRequests = loanRequests.map(req => {
          if (req.username === currentUser) {
            return currentRequest;
          }
          return req;
        });
  
        localStorage.setItem("loanRequests", JSON.stringify(loanRequests));
        renderGuarantors();
  
        message.innerHTML = `<p style="color:green;">Поручитель добавлен.</p>`;
        nameInput.value = "";
      });
    }
  });
  