const TELEGRAM_USERNAME = "YOUR_TELEGRAM_USERNAME";
const TELEGRAM_LINK = "#";
const INSTAGRAM_LINK = "#";

const products = [
  {
    id: 1, brand: "DIOR", name: "Miss Dior Blooming Bouquet",
    image: "IMG_7465.jpeg", price: 8000,
    volumes: [30, 50, 100, 150], category: "women",
    description: "Ніжна квіткова композиція з витонченим, романтичним характером."
  },
  {
    id: 2, brand: "LATTAFA", name: "Yara",
    image: "IMG_7466.jpeg", price: 1000,
    volumes: [100], category: "women",
    description: "М'який солодкий аромат із кремовими та фруктовими відтінками."
  },
  {
    id: 3, brand: "SABRINA CARPENTER", name: "Sweet Tooth",
    image: "IMG_7467.jpeg", price: 1650,
    volumes: [30, 75], category: "women",
    description: "Грайлива гурманська композиція з солодким характером."
  },
  {
    id: 4, brand: "SABRINA CARPENTER", name: "Caramel Dream",
    image: "IMG_7469.jpeg", price: 1650,
    volumes: [30, 75], category: "women",
    description: "Теплий солодкий аромат із карамельними акцентами."
  },
  {
    id: 5, brand: "SABRINA CARPENTER", name: "Lemon Pie",
    image: "IMG_7470.jpeg", price: 1650,
    volumes: [30, 75], category: "women",
    description: "Яскрава композиція з десертним настроєм."
  },
  {
    id: 6, brand: "SABRINA CARPENTER", name: "Cherry Baby",
    image: "IMG_7471.jpeg", price: 1650,
    volumes: [30, 75], category: "women",
    description: "Насичений фруктовий аромат із виразним характером."
  },
  {
    id: 7, brand: "SABRINA CARPENTER", name: "Me Espresso",
    image: "IMG_7472.jpeg", price: 1650,
    volumes: [75], category: "women",
    description: "Гурманський аромат із кавовим настроєм."
  },
  {
    id: 8, brand: "ARIANA GRANDE", name: "Cloud",
    image: "IMG_7474.jpeg", price: 2500,
    volumes: [30, 50, 100], category: "women",
    description: "М'який, повітряний аромат із солодкими кремовими нотами."
  },
  {
    id: 9, brand: "MOSCHINO", name: "Toy 2 Bubble Gum",
    image: "IMG_7476.jpeg", price: 3000,
    volumes: [30, 50], category: "women",
    description: "Яскрава фруктово-солодка композиція."
  },
  {
    id: 10, brand: "MOSCHINO", name: "Toy 2",
    image: "IMG_7477.jpeg", price: 3000,
    volumes: [30, 50, 100], category: "women",
    description: "Свіжий квітково-фруктовий аромат із сучасним звучанням."
  },
  {
    id: 11, brand: "CAROLINA HERRERA", name: "Good Girl",
    image: "IMG_7478.jpeg", price: 4800,
    volumes: [30, 50, 80], category: "women",
    description: "Виразна композиція з контрастом ніжних і насичених нот."
  },
  {
    id: 12, brand: "CAROLINA HERRERA", name: "Good Girl Blush",
    image: "IMG_7479.jpeg", price: 2950,
    volumes: [30, 50, 80], category: "women",
    description: "Елегантний квітковий аромат із м'яким звучанням."
  },
  {
    id: 13, brand: "CAROLINA HERRERA", name: "Good Girl Supreme",
    image: "IMG_7480.jpeg", price: 2950,
    volumes: [30, 50, 80], category: "women",
    description: "Насичений аромат із яскравим характером."
  },
  {
    id: 14, brand: "CHANEL", name: "Chance Eau Tendre",
    image: "IMG_7483.jpeg", price: 5000,
    volumes: [35, 50, 100], category: "women",
    description: "Легкий квітково-фруктовий аромат."
  },
  {
    id: 15, brand: "CHANEL", name: "Chance Eau Fraîche",
    image: "IMG_7484.jpeg", price: 4000,
    volumes: [35, 50, 100], category: "women",
    description: "Свіжа, елегантна композиція з виразним характером."
  },
  {
    id: 16, brand: "SOL DE JANEIRO", name: "Cheirosa 68",
    image: "IMG_7485.jpeg", price: 1300,
    volumes: [90, 240], category: "women",
    description: "Яскравий квітково-фруктовий ароматний міст."
  },
  {
    id: 17, brand: "SOL DE JANEIRO", name: "Cheirosa 59",
    image: "IMG_7486.jpeg", price: 1300,
    volumes: [90, 240], category: "women",
    description: "М'який, теплий ароматний міст."
  },
  {
    id: 18, brand: "SOL DE JANEIRO", name: "Cheirosa 48",
    image: "IMG_7487.jpeg", price: 1300,
    volumes: [90, 240], category: "women",
    description: "Солодка композиція з тропічним настроєм."
  },
  {
    id: 19, brand: "SOL DE JANEIRO", name: "Cheirosa 62",
    image: "IMG_7488.jpeg", price: 1300,
    volumes: [90, 240], category: "women",
    description: "Теплий гурманський ароматний міст."
  },
  {
    id: 20, brand: "SOL DE JANEIRO", name: "Cheirosa 71",
    image: "IMG_7489.jpeg", price: 1300,
    volumes: [90, 240], category: "women",
    description: "Солодка композиція з десертними відтінками."
  },
  {
    id: 21, brand: "SOL DE JANEIRO", name: "Cheirosa 76",
    image: "IMG_7490.jpeg", price: 1300,
    volumes: [90, 240], category: "women",
    description: "Виразний ароматний міст із вечірнім настроєм."
  },
  {
    id: 22, brand: "VALENTINO", name: "Born in Roma",
    image: "IMG_7492.jpeg", price: 4500,
    volumes: [30, 50, 100], category: "women",
    description: "Сучасна квіткова композиція з виразним характером."
  },
  {
    id: 23, brand: "VALENTINO", name: "Born in Roma Intense",
    image: "IMG_7493.jpeg", price: 4500,
    volumes: [30, 50, 100], category: "women",
    description: "Більш насичене та глибоке звучання культової композиції."
  },
  {
    id: 24, brand: "MAISON FRANCIS KURKDJIAN", name: "Baccarat Rouge 540",
    image: "IMG_7495.jpeg", price: 15000,
    volumes: [35, 70, 200], category: "unisex",
    description: "Впізнавана амброво-деревна композиція."
  },
  {
    id: 25, brand: "MAISON FRANCIS KURKDJIAN", name: "Baccarat Rouge 540 Extrait",
    image: "IMG_7496.jpeg", price: 17900,
    volumes: [35, 70, 200], category: "unisex",
    description: "Більш насичена інтерпретація культового аромату."
  },
  {
    id: 26, brand: "LATTAFA", name: "Yara Moi",
    image: "IMG_7498.jpeg", price: 1050,
    volumes: [100], category: "women",
    description: "М'який солодкий аромат із теплим характером."
  },
  {
    id: 27, brand: "ATTAR COLLECTION", name: "Crystal Love Her",
    image: "IMG_7499.jpeg", price: 4100,
    volumes: [100], category: "women",
    description: "Вишукана композиція з теплим, чуттєвим звучанням."
  },
  {
    id: 28, brand: "LATTAFA", name: "Hayaati",
    image: "IMG_7500.jpeg", price: 925,
    volumes: [100], category: "unisex",
    description: "Виразний аромат із насиченим характером."
  },
  {
    id: 29, brand: "BILLIE EILISH", name: "Eilish",
    image: "IMG_7501.jpeg", price: 1850,
    volumes: [30, 50, 100], category: "women",
    description: "Тепла гурманська композиція з ванільним характером."
  },
  {
    id: 30, brand: "YVES SAINT LAURENT", name: "Libre Eau de Parfum",
    image: "IMG_7502.jpeg", price: 3650,
    volumes: [30, 50, 90], category: "women",
    description: "Контрастна квіткова композиція з виразним характером."
  },
  {
    id: 31, brand: "TOM FORD", name: "Lost Cherry",
    image: "IMG_7503.jpeg", price: 7000,
    volumes: [30, 50, 100], category: "unisex",
    description: "Насичена композиція з вишневими та теплими нотами."
  },
  {
    id: 32, brand: "VICTORIA'S SECRET", name: "Pure Seduction",
    image: "IMG_7504.jpeg", price: 600,
    volumes: [75, 250], category: "women",
    description: "Фруктовий ароматний міст із солодким характером."
  }
];

const $ = id => document.getElementById(id);

let currentFilter = "all";
let currentProduct = null;
let selectedVolume = null;
let cart = [];
let favorites = new Set();
let showingFavorites = false;

const money = value =>
  new Intl.NumberFormat("uk-UA").format(value) + " ₴";

function renderProducts() {
  const query = $("searchInput").value.trim().toLowerCase();
  const sort = $("sortSelect").value;

  let list = products.filter(product => {
    const matchesSearch =
      `${product.brand} ${product.name}`.toLowerCase().includes(query);

    const matchesFilter =
      currentFilter === "all" || product.category === currentFilter;

    const matchesFavorites =
      !showingFavorites || favorites.has(product.id);

    return matchesSearch && matchesFilter && matchesFavorites;
  });

  if (sort === "cheap") list.sort((a, b) => a.price - b.price);
  if (sort === "expensive") list.sort((a, b) => b.price - a.price);
  if (sort === "az") list.sort((a, b) => a.name.localeCompare(b.name));

  $("productCounter").textContent = `${list.length} товарів`;
  $("emptyState").hidden = list.length !== 0;

  $("productGrid").innerHTML = list.map(product => `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="favorite-button ${favorites.has(product.id) ? "active" : ""}"
          data-favorite="${product.id}" aria-label="Додати в обране">
          ${favorites.has(product.id) ? "♥" : "♡"}
        </button>
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-bottom">
          <span class="product-price">від ${money(product.price)}</span>
          <button class="product-buy" data-open="${product.id}">Детальніше →</button>
        </div>
      </div>
    </article>
  `).join("");
}

function openProduct(id) {
  currentProduct = products.find(product => product.id === Number(id));
  if (!currentProduct) return;

  selectedVolume = currentProduct.volumes[0];

  $("detailImage").src = currentProduct.image;
  $("detailImage").alt = currentProduct.name;
  $("detailBrand").textContent = currentProduct.brand;
  $("detailName").textContent = currentProduct.name;
  $("detailDescription").textContent = currentProduct.description;
  $("detailPrice").textContent = `від ${money(currentProduct.price)}`;

  $("volumeOptions").innerHTML = currentProduct.volumes.map(volume => `
    <button class="volume-button ${volume === selectedVolume ? "active" : ""}"
      data-volume="${volume}">
      ${volume} мл
    </button>
  `).join("");

  $("productOverlay").classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeProduct() {
  $("productOverlay").classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function addToCart() {
  if (!currentProduct || !selectedVolume) return;

  const existing = cart.find(item =>
    item.id === currentProduct.id && item.volume === selectedVolume
  );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: currentProduct.id,
      volume: selectedVolume,
      quantity: 1
    });
  }

  renderCart();
  closeProduct();
  openCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  $("cartCount").textContent = count;

  if (!cart.length) {
    $("cartItems").innerHTML =
      `<div class="cart-empty">Ваш кошик поки порожній</div>`;
    $("cartTotal").textContent = money(0);
    return;
  }

  let total = 0;

  $("cartItems").innerHTML = cart.map((item, index) => {
    const product = products.find(p => p.id === item.id);
    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p>${item.volume} мл · Кількість: ${item.quantity}</p>
          <strong>${money(itemTotal)}</strong>
        </div>
        <button class="remove-item" data-remove="${index}" aria-label="Видалити">×</button>
      </div>
    `;
  }).join("");

  $("cartTotal").textContent = money(total);
}

function openCart() {
  $("cartOverlay").classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  $("cartOverlay").classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function openOrder() {
  if (!cart.length) return;
  closeCart();
  $("orderOverlay").classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeOrder() {
  $("orderOverlay").classList.remove("open");
  document.body.classList.remove("no-scroll");
}

$("productGrid").addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");
  const openButton = event.target.closest("[data-open]");
  const card = event.target.closest(".product-card");

  if (favoriteButton) {
    const id = Number(favoriteButton.dataset.favorite);

    if (favorites.has(id)) favorites.delete(id);
    else favorites.add(id);

    renderProducts();
    return;
  }

  if (openButton) {
    openProduct(openButton.dataset.open);
    return;
  }

  if (card) openProduct(card.dataset.id);
});

$("volumeOptions").addEventListener("click", event => {
  const button = event.target.closest("[data-volume]");
  if (!button) return;

  selectedVolume = Number(button.dataset.volume);

  document.querySelectorAll(".volume-button").forEach(item => {
    item.classList.toggle("active", item === button);
  });
});

$("addToCart").addEventListener("click", addToCart);

$("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;

  cart.splice(Number(button.dataset.remove), 1);
  renderCart();
});

$("openCart").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("closeProduct").addEventListener("click", closeProduct);
$("closeOrder").addEventListener("click", closeOrder);

$("checkoutButton").addEventListener("click", openOrder);

$("productOverlay").addEventListener("click", event => {
  if (event.target === $("productOverlay")) closeProduct();
});

$("cartOverlay").addEventListener("click", event => {
  if (event.target === $("cartOverlay")) closeCart();
});

$("orderOverlay").addEventListener("click", event => {
  if (event.target === $("orderOverlay")) closeOrder();
});

$("searchToggle").addEventListener("click", () => {
  $("searchPanel").classList.toggle("visible");
  if ($("searchPanel").classList.contains("visible")) {
    $("searchInput").focus();
  }
});

$("searchInput").addEventListener("input", renderProducts);
$("sortSelect").addEventListener("change", renderProducts);

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    document.querySelectorAll(".filter-button").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderProducts();
  });
});

$("favoritesToggle").addEventListener("click", () => {
  showingFavorites = !showingFavorites;
  $("favoritesToggle").classList.toggle("selected", showingFavorites);
  $("catalog").scrollIntoView({ behavior: "smooth" });
  renderProducts();
});

$("orderForm").addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const comment = formData.get("comment");

  const lines = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `• ${product.name} — ${item.volume} мл × ${item.quantity}`;
  });

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  const message = [
    "НОВЕ ЗАМОВЛЕННЯ VELORA",
    "",
    `Ім'я: ${name}`,
    `Телефон: ${phone}`,
    "",
    "Товари:",
    ...lines,
    "",
    `Орієнтовна сума: ${money(total)}`,
    `Коментар: ${comment || "Немає"}`
  ].join("\n");

  if (TELEGRAM_USERNAME === "YOUR_TELEGRAM_USERNAME" || TELEGRAM_LINK === "#") {
    navigator.clipboard?.writeText(message)
      .then(() => alert("Текст замовлення скопійовано. Додайте свій Telegram для надсилання замовлень."))
      .catch(() => alert("Додайте свій Telegram у налаштуваннях сайту, щоб надсилати замовлення."));
    return;
  }

  const telegramUrl =
    `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;

  window.open(telegramUrl, "_blank");

  cart = [];
  renderCart();
  event.target.reset();
  closeOrder();
});

if (TELEGRAM_LINK !== "#") $("telegramLink").href = TELEGRAM_LINK;
if (INSTAGRAM_LINK !== "#") $("instagramLink").href = INSTAGRAM_LINK;

renderProducts();
renderCart();
