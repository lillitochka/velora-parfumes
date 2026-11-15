
// VELORA — каталог ароматов
// Цены ориентировочные, в гривнах.
// Фотографии должны лежать в корне репозитория GitHub.

const TELEGRAM_USERNAME = "YOUR_TELEGRAM_USERNAME";
// Позже укажи username своего Telegram без @

const products = [
  {
    id: 1,
    brand: "DIOR",
    name: "Miss Dior Blooming Bouquet",
    description: "Нежный цветочный аромат",
    price: 8000,
    category: "floral",
    tag: "BESTSELLER",
    image: "IMG_7465.jpeg"
  },
  {
    id: 2,
    brand: "LATTAFA",
    name: "Yara",
    description: "Мягкий сладкий аромат",
    price: 1000,
    category: "sweet",
    tag: "POPULAR",
    image: "IMG_7466.jpeg"
  },
  {
    id: 3,
    brand: "SABRINA CARPENTER",
    name: "Sweet Tooth",
    description: "Сладкий гурманский аромат",
    price: 1650,
    category: "sweet",
    tag: "FAVORITE",
    image: "IMG_7467.jpeg"
  },
  {
    id: 4,
    brand: "SABRINA CARPENTER",
    name: "Caramel Dream",
    description: "Тёплый карамельный аромат",
    price: 1650,
    category: "sweet",
    tag: "SWEET",
    image: "IMG_7469.jpeg"
  },
  {
    id: 5,
    brand: "SABRINA CARPENTER",
    name: "Lemon Pie",
    description: "Сладкий аромат с лимонными нотами",
    price: 1650,
    category: "fresh",
    tag: "FRESH",
    image: "IMG_7470.jpeg"
  },
  {
    id: 6,
    brand: "SABRINA CARPENTER",
    name: "Caramel Dream",
    description: "Нежный сладкий аромат",
    price: 1650,
    category: "sweet",
    tag: "SWEET",
    image: "IMG_7471.jpeg"
  },
  {
    id: 7,
    brand: "SABRINA CARPENTER",
    name: "Me Espresso",
    description: "Насыщенный кофейный аромат",
    price: 1650,
    category: "sweet",
    tag: "COZY",
    image: "IMG_7472.jpeg"
  },
  {
    id: 8,
    brand: "ARIANA GRANDE",
    name: "Cloud",
    description: "Мягкий воздушный аромат",
    price: 2500,
    category: "sweet",
    tag: "POPULAR",
    image: "IMG_7474.jpeg"
  },
  {
    id: 9,
    brand: "MOSCHINO",
    name: "Toy 2 Bubble Gum",
    description: "Яркий сладкий аромат",
    price: 3000,
    category: "sweet",
    tag: "PLAYFUL",
    image: "IMG_7476.jpeg"
  },
  {
    id: 10,
    brand: "MOSCHINO",
    name: "Toy 2",
    description: "Свежий цветочный аромат",
    price: 3000,
    category: "fresh",
    tag: "ELEGANT",
    image: "IMG_7477.jpeg"
  },
  {
    id: 11,
    brand: "CAROLINA HERRERA",
    name: "Good Girl",
    description: "Выразительный женственный аромат",
    price: 4800,
    category: "sweet",
    tag: "ICONIC",
    image: "IMG_7478.jpeg"
  },
  {
    id: 12,
    brand: "CAROLINA HERRERA",
    name: "Good Girl",
    description: "Сладкий и чувственный аромат",
    price: 2950,
    category: "sweet",
    tag: "FAVORITE",
    image: "IMG_7479.jpeg"
  },
  {
    id: 13,
    brand: "CAROLINA HERRERA",
    name: "Good Girl",
    description: "Глубокий выразительный аромат",
    price: 2950,
    category: "sweet",
    tag: "ICONIC",
    image: "IMG_7480.jpeg"
  },
  {
    id: 14,
    brand: "CHANEL",
    name: "Chance Eau Tendre",
    description: "Лёгкий фруктово-цветочный аромат",
    price: 5000,
    category: "floral",
    tag: "ELEGANT",
    image: "IMG_7483.jpeg"
  },
  {
    id: 15,
    brand: "CHANEL",
    name: "Chance Eau Fraîche",
    description: "Свежий цитрусовый аромат",
    price: 4000,
    category: "fresh",
    tag: "FRESH",
    image: "IMG_7484.jpeg"
  },
  {
    id: 16,
    brand: "SOL DE JANEIRO",
    name: "Cheirosa 68",
    description: "Яркий фруктово-цветочный аромат",
    price: 1300,
    category: "floral",
    tag: "MIST",
    image: "IMG_7485.jpeg"
  },
  {
    id: 17,
    brand: "SOL DE JANEIRO",
    name: "Cheirosa 59",
    description: "Мягкий сладкий аромат",
    price: 1300,
    category: "sweet",
    tag: "MIST",
    image: "IMG_7486.jpeg"
  },
  {
    id: 18,
    brand: "SOL DE JANEIRO",
    name: "Cheirosa 48",
    description: "Сочный фруктовый аромат",
    price: 1300,
    category: "sweet",
    tag: "MIST",
    image: "IMG_7487.jpeg"
  },
  {
    id: 19,
    brand: "SOL DE JANEIRO",
    name: "Cheirosa 62",
    description: "Тёплый карамельно-ореховый аромат",
    price: 1300,
    category: "sweet",
    tag: "BESTSELLER",
    image: "IMG_7488.jpeg"
  },
  {
    id: 20,
    brand: "SOL DE JANEIRO",
    name: "Cheirosa 71",
    description: "Сладкий гурманский аромат",
    price: 1300,
    category: "sweet",
    tag: "MIST",
    image: "IMG_7489.jpeg"
  },
  {
    id: 21,
    brand: "SOL DE JANEIRO",
    name: "Cheirosa 76",
    description: "Тёплый вечерний аромат",
    price: 1300,
    category: "sweet",
    tag: "MIST",
    image: "IMG_7490.jpeg"
  },
  {
    id: 22,
    brand: "VALENTINO",
    name: "Valentino",
    description: "Женственный выразительный аромат",
    price: 4500,
    category: "floral",
    tag: "ELEGANT",
    image: "IMG_7492.jpeg"
  },
  {
    id: 23,
    brand: "VALENTINO",
    name: "Valentino",
    description: "Насыщенный тёплый аромат",
    price: 4500,
    category: "sweet",
    tag: "EXCLUSIVE",
    image: "IMG_7493.jpeg"
  },
  {
    id: 24,
    brand: "MAISON FRANCIS KURKDJIAN",
    name: "Baccarat Rouge 540",
    description: "Узнаваемый насыщенный аромат",
    price: 15000,
    category: "sweet",
    tag: "LUXURY",
    image: "IMG_7495.jpeg"
  },
  {
    id: 25,
    brand: "MAISON FRANCIS KURKDJIAN",
    name: "Baccarat Rouge 540 Extrait",
    description: "Глубокий и насыщенный аромат",
    price: 17900,
    category: "sweet",
    tag: "EXCLUSIVE",
    image: "IMG_7496.jpeg"
  },
  {
    id: 26,
    brand: "LATTAFA",
    name: "24 Carat White Gold",
    description: "Тёплый восточный аромат",
    price: 1050,
    category: "sweet",
    tag: "ORIENTAL",
    image: "IMG_7498.jpeg"
  },
  {
    id: 27,
    brand: "ATTAR COLLECTION",
    name: "Crystal Love Her",
    description: "Сладкий женственный аромат",
    price: 4100,
    category: "sweet",
    tag: "LUXURY",
    image: "IMG_7499.jpeg"
  },
  {
    id: 28,
    brand: "LATTAFA",
    name: "Hayaati",
    description: "Восточный аромат",
    price: 925,
    category: "sweet",
    tag: "POPULAR",
    image: "IMG_7500.jpeg"
  },
  {
    id: 29,
    brand: "BILLIE EILISH",
    name: "Eilish",
    description: "Тёплый ванильно-гурманский аромат",
    price: 1850,
    category: "sweet",
    tag: "FAVORITE",
    image: "IMG_7501.jpeg"
  },
  {
    id: 30,
    brand: "YVES SAINT LAURENT",
    name: "Libre Eau de Parfum",
    description: "Элегантный цветочный аромат",
    price: 3650,
    category: "floral",
    tag: "ICONIC",
    image: "IMG_7502.jpeg"
  },
  {
    id: 31,
    brand: "TOM FORD",
    name: "Lost Cherry",
    description: "Насыщенный вишнёвый аромат",
    price: 7000,
    category: "sweet",
    tag: "LUXURY",
    image: "IMG_7503.jpeg"
  },
  {
    id: 32,
    brand: "VICTORIA'S SECRET",
    name: "Pure Seduction",
    description: "Сладкий фруктовый мист",
    price: 600,
    category: "sweet",
    tag: "MIST",
    image: "IMG_7504.jpeg"
  }
];

let cart = [];

const grid = document.getElementById("productGrid");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const orderModal = document.getElementById("orderModal");
const toast = document.getElementById("toast");

// ЦЕНЫ

function money(value) {
  return new Intl.NumberFormat("uk-UA").format(value) + " ₴";
}

// КАТАЛОГ

function renderProducts(filter = "all") {
  const shown = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  grid.innerHTML = shown.map(p => `
    <article class="product-card">
      <div class="product-photo">
        <img
          src="${p.image}"
          alt="${p.brand} ${p.name}"
          loading="lazy"
        >
        <span class="product-tag">${p.tag}</span>
      </div>

      <div class="product-info">
        <p class="product-brand">${p.brand}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-description">${p.description}</p>

        <div class="product-bottom">
          <span class="price">${money(p.price)}</span>
          <button
            class="add-button"
            data-add="${p.id}"
            aria-label="Додати ${p.name} до кошика"
          >+</button>
        </div>
      </div>
    </article>
  `).join("");
}

// ПОВІДОМЛЕННЯ

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ДОДАВАННЯ В КОШИК

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const item = cart.find(p => p.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
  showToast("Аромат додано до кошика");
}

// КОШИК

function renderCart() {
  const count = cart.reduce((sum, p) => sum + p.qty, 0);
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(total);

  const items = document.getElementById("cartItems");

  if (!cart.length) {
    items.innerHTML = `
      <p class="empty-cart">
        Тут поки порожньо. Час знайти свій аромат
      </p>
    `;
    return;
  }

  items.innerHTML = cart.map(p => `
    <div class="cart-row">
      <img src="${p.image}" alt="${p.name}">

      <div>
        <h4>${p.name}</h4>
        <p>${p.qty} × ${money(p.price)}</p>
      </div>

      <button
        class="remove-item"
        data-remove="${p.id}"
        aria-label="Видалити товар"
      >×</button>
    </div>
  `).join("");
}

// ВІДКРИТТЯ ТА ЗАКРИТТЯ

function openCart() {
  cartDrawer.classList.add("show");
  overlay.classList.add("show");
}

function closePanels() {
  cartDrawer.classList.remove("show");
  orderModal.classList.remove("show");
  overlay.classList.remove("show");
}

// КНОПКИ ТА ФІЛЬТРИ

document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");

  if (add) {
    addToCart(Number(add.dataset.add));
  }

  const remove = e.target.closest("[data-remove]");

  if (remove) {
    cart = cart.filter(
      p => p.id !== Number(remove.dataset.remove)
    );
    renderCart();
  }

  const filter = e.target.closest("[data-filter]");

  if (filter) {
    document.querySelectorAll(".filter").forEach(button => {
      button.classList.remove("active");
    });

    filter.classList.add("active");
    renderProducts(filter.dataset.filter);
  }
});

// КНОПКА КОШИКА

document.getElementById("openCart")
  .addEventListener("click", openCart);

document.getElementById("closeCart")
  .addEventListener("click", closePanels);

overlay.addEventListener("click", closePanels);

// ОФОРМЛЕННЯ ЗАМОВЛЕННЯ

document.getElementById("checkout").addEventListener("click", () => {
  if (!cart.length) {
    showToast("Спочатку додайте аромат до кошика");
    return;
  }

  cartDrawer.classList.remove("show");
  orderModal.classList.add("show");
  overlay.classList.add("show");
});

document.getElementById("closeModal")
  .addEventListener("click", closePanels);

// ВІДПРАВЛЕННЯ ЗАМОВЛЕННЯ

document.getElementById("orderForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData(e.currentTarget);

  const lines = cart.map(p =>
    `• ${p.brand} — ${p.name} — ${p.qty} шт. (${money(p.price * p.qty)})`
  ).join("\n");

  const total = cart.reduce(
    (sum, p) => sum + p.price * p.qty,
    0
  );

  const message = `
Замовлення з VELORA

${lines}

Разом: ${money(total)}

Ім'я: ${data.get("name")}
Телефон: ${data.get("phone")}
Коментар: ${data.get("comment") || "—"}
  `.trim();

  if (TELEGRAM_USERNAME === "YOUR_TELEGRAM_USERNAME") {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(message)
        .then(() => showToast("Текст замовлення скопійовано"))
        .catch(() => showToast("Не вдалося скопіювати замовлення"));
    } else {
      showToast("Додай Telegram username у script.js");
    }

    return;
  }

  const url =
    `https://t.me/${TELEGRAM_USERNAME.replace("@", "")}` +
    `?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});

// МОБІЛЬНЕ МЕНЮ

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});

// ЗАПУСК

renderProducts();
renderCart();
