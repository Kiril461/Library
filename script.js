// Плавне прокручування при кліку на меню
document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetID = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

// Пошук по каталогу книг
const searchInput = document.getElementById("searchInput");
const booksList = document.getElementById("booksList");
searchInput.addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const books = booksList.getElementsByTagName("li");
  for (let book of books) {
    const text = book.textContent.toLowerCase();
    book.style.display = text.includes(filter) ? "" : "none";
  }
});

// Валідація контактної форми
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    showMessage("Будь ласка, введіть ваше ім’я.", "red");
    return;
  }
  if (!validateEmail(email)) {
    showMessage("Будь ласка, введіть коректний email.", "red");
    return;
  }
  if (!message) {
    showMessage("Будь ласка, напишіть повідомлення.", "red");
    return;
  }

  // Тут можна додати реальну відправку на сервер або на email через бекенд
  showMessage("Дякуємо! Ваше повідомлення надіслано.", "green");
  form.reset();
});

function showMessage(msg, color) {
  formMessage.textContent = msg;
  formMessage.style.color = color;
}

function validateEmail(email) {
  // Простий регекс для перевірки email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
