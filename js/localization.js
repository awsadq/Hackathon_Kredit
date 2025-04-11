function setLang(lang) {
    alert("Язык переключён на: " + (lang === "ru" ? "Русский" : "Кыргызча"));
  
    // Базовая имитация смены языка
    const headings = {
      ru: {
        title: "Ускорим процесс получения кредита",
        subtitle: "Простой, прозрачный и безопасный способ получить онлайн-кредит в Кыргызстане."
      },
      kg: {
        title: "Кредит алуу процессин ылдамдатабыз",
        subtitle: "Кыргызстанда онлайн кредит алуу - жөнөкөй жана коопсуз."
      }
    };
  
    const h2 = document.querySelector(".hero h2");
    const p = document.querySelector(".hero p");
  
    if (h2 && p) {
      h2.textContent = headings[lang].title;
      p.textContent = headings[lang].subtitle;
    }
  }
  