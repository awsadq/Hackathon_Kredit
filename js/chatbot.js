document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openChat");
    const chatWindow = document.getElementById("chatWindow");
    const userInput = document.getElementById("userInput");
    const chatMessages = document.getElementById("chatMessages");
  
    if (openBtn) {
      openBtn.addEventListener("click", () => {
        chatWindow.classList.toggle("hidden");
      });
    }
  
    if (userInput) {
      userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          const userMsg = userInput.value.trim();
          if (userMsg) {
            const userBubble = document.createElement("p");
            userBubble.textContent = "Вы: " + userMsg;
            chatMessages.appendChild(userBubble);
  
            const botReply = document.createElement("p");
            botReply.textContent = "AI: Спасибо за вопрос! Ответ скоро появится здесь.";
            chatMessages.appendChild(botReply);
  
            userInput.value = "";
          }
        }
      });
    }
  });
  