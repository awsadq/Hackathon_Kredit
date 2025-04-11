document.addEventListener("DOMContentLoaded", () => {
    const reminderBox = document.getElementById("reminderBox");
    const loanData = {
      dueDate: "2025-05-15"
    };
  
    if (reminderBox && loanData.dueDate) {
      const due = new Date(loanData.dueDate);
      const today = new Date();
      const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
  
      reminderBox.textContent = diff <= 3
        ? `⚠️ До платежа осталось ${diff} дня(ей).`
        : "У вас пока нет напоминаний.";
    }
  });
  