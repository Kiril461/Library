# Library
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Бібліотека "Читаємо разом"</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Бібліотека "Читаємо разом"</h1>
    <nav>
      <ul>
        <li><a href="#about">Про бібліотеку</a></li>
        <li><a href="#catalog">Каталог книг</a></li>
        <li><a href="#contacts">Контакти</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>Про бібліотеку</h2>
      <p>Наша бібліотека пропонує широкий вибір літератури для всіх вікових категорій. Ми допомагаємо читачам знайти цікаві книги, організовуємо культурні заходи та підтримуємо освітні проекти.</p>
    </section>

    <section id="catalog">
      <h2>Каталог книг</h2>
      <input
        type="text"
        id="searchInput"
        placeholder="Пошук книг..."
        aria-label="Пошук книг"
      />
      <ul id="booksList">
        <li><strong>Війна і мир</strong> — Лев Толстой</li>
        <li><strong>Кобзар</strong> — Тарас Шевченко</li>
        <li><strong>1984</strong> — Джордж Орвелл</li>
        <li><strong>Майстер і Маргарита</strong> — Михайло Булгаков</li>
        <li><strong>Пригоди Тома Сойєра</strong> — Марк Твен</li>
      </ul>
    </section>

    <section id="contacts">
      <h2>Контакти</h2>
      <p>Адреса: вул. Центральна, 10, Київ</p>
      <p>Телефон: +38 050 123 45 67</p>
      <p>Email: info@library.com.ua</p>

      <h3>Зв’язатися з нами</h3>
      <form id="contactForm" novalidate>
        <label for="name">Ім’я:</label><br />
        <input type="text" id="name" name="name" required /><br />

        <label for="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br />

        <label for="message">Повідомлення:</label><br />
        <textarea id="message" name="message" rows="5" required></textarea><br />

        <button type="submit">Відправити</button>
        <p id="formMessage" role="alert"></p>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Бібліотека "Читаємо разом". Всі права захищені.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
