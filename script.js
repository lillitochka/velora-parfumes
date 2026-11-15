
const TELEGRAM_USERNAME = "YOUR_TELEGRAM_USERNAME";
const TELEGRAM_LINK = "#";
const INSTAGRAM_LINK = "#";

const products = [
  {id:1,brand:"DIOR",name:"Miss Dior Blooming Bouquet",desc:"Ніжна квіткова композиція з півонією, трояндою та білим мускусом.",price:8000,image:"IMG_7465.jpeg",volumes:[30,50,100,150],review:"Дуже ніжний аромат. Легкий, витончений і зовсім не нав'язливий.",reviewer:"Софія"},

  {id:2,brand:"LATTAFA",name:"Yara",desc:"М'який солодкий аромат із кремовим характером.",price:1000,image:"IMG_7466.jpeg",volumes:[100],review:"Дуже приємний солодкий аромат. Особливо подобається його м'який шлейф.",reviewer:"Анастасія"},

  {id:3,brand:"SABRINA CARPENTER",name:"Sweet Tooth",desc:"Солодкий гурманський аромат із десертним настроєм.",price:1650,image:"IMG_7467.jpeg",volumes:[30,75],review:"Справжній десерт у флаконі. Аромат дуже незвичайний і затишний.",reviewer:"Вікторія"},

  {id:4,brand:"SABRINA CARPENTER",name:"Caramel Dream",desc:"Теплий карамельний аромат із солодкими гурманськими нотами.",price:1650,image:"IMG_7469.jpeg",volumes:[30,75],review:"Карамельний, теплий і дуже приємний.",reviewer:"Дарина"},

  {id:5,brand:"SABRINA CARPENTER",name:"Lemon Pie",desc:"Солодкий цитрусовий аромат із лимонним десертним характером.",price:1650,image:"IMG_7470.jpeg",volumes:[30,75],review:"Цікавий лимонний аромат.",reviewer:"Марта"},

  {id:6,brand:"SABRINA CARPENTER",name:"Cherry Baby",desc:"Соковитий фруктовий аромат із виразним вишневим характером.",price:1650,image:"IMG_7471.jpeg",volumes:[30,75],review:"Яскравий фруктовий аромат.",reviewer:"Поліна"},

  {id:7,brand:"SABRINA CARPENTER",name:"Me Espresso",desc:"Насичений кавовий гурманський аромат.",price:1650,image:"IMG_7472.jpeg",volumes:[75],review:"Кавовий аромат із характером.",reviewer:"Єва"},

  {id:8,brand:"ARIANA GRANDE",name:"Cloud",desc:"Повітряна солодка композиція з кремовим характером.",price:2500,image:"IMG_7474.jpeg",volumes:[30,50,100],review:"М'який, ніжний і комфортний аромат.",reviewer:"Аліна"},

  {id:9,brand:"MOSCHINO",name:"Toy 2 Bubble Gum",desc:"Грайливий солодкий аромат із фруктовим настроєм.",price:3000,image:"IMG_7476.jpeg",volumes:[30,50],review:"Яскравий аромат із веселим характером.",reviewer:"Кіра"},

  {id:10,brand:"MOSCHINO",name:"Toy 2",desc:"Свіжа квітково-деревна композиція.",price:3000,image:"IMG_7477.jpeg",volumes:[30,50,100],review:"Свіжий і чистий аромат.",reviewer:"Ірина"},

  {id:11,brand:"CAROLINA HERRERA",name:"Good Girl",desc:"Виразна композиція з контрастом солодких і насичених нот.",price:4800,image:"IMG_7478.jpeg",volumes:[30,50,80],review:"Дуже ефектний аромат.",reviewer:"Катерина"},

  {id:12,brand:"CAROLINA HERRERA",name:"Good Girl",desc:"Солодка та насичена інтерпретація культового аромату.",price:2950,image:"IMG_7479.jpeg",volumes:[30,50,80],review:"Красивий насичений аромат.",reviewer:"Олександра"},

  {id:13,brand:"CAROLINA HERRERA",name:"Good Girl",desc:"Глибока композиція з виразним вечірнім характером.",price:2950,image:"IMG_7480.jpeg",volumes:[30,50,80],review:"Вишуканий аромат.",reviewer:"Наталія"},

  {id:14,brand:"CHANEL",name:"Chance Eau Tendre",desc:"Легка фруктово-квіткова композиція з ніжним характером.",price:5000,image:"IMG_7483.jpeg",volumes:[35,50,100],review:"Дуже ніжний і делікатний аромат.",reviewer:"Валерія"},

  {id:15,brand:"CHANEL",name:"Chance Eau Fraîche",desc:"Свіжа цитрусова композиція з елегантним звучанням.",price:4000,image:"IMG_7484.jpeg",volumes:[35,50,100],review:"Свіжий аромат для денного настрою.",reviewer:"Юлія"},

  {id:16,brand:"SOL DE JANEIRO",name:"Cheirosa 68",desc:"Яскравий фруктово-квітковий ароматний міст.",price:1300,image:"IMG_7485.jpeg",volumes:[90,240],review:"Дуже приємний ароматний міст.",reviewer:"Мілана"},

  {id:17,brand:"SOL DE JANEIRO",name:"Cheirosa 59",desc:"М'який солодкий аромат із теплим характером.",price:1300,image:"IMG_7486.jpeg",volumes:[90,240],review:"Затишний солодкий аромат.",reviewer:"Емілія"},

  {id:18,brand:"SOL DE JANEIRO",name:"Cheirosa 48",desc:"Соковитий фруктовий ароматний міст.",price:1300,image:"IMG_7487.jpeg",volumes:[90,240],review:"Фруктовий і легкий аромат.",reviewer:"Вероніка"},

  {id:19,brand:"SOL DE JANEIRO",name:"Cheirosa 62",desc:"Теплий аромат із карамельними та горіховими відтінками.",price:1300,image:"IMG_7488.jpeg",volumes:[90,240],review:"Один із найцікавіших солодких ароматів.",reviewer:"Діана"},

  {id:20,brand:"SOL DE JANEIRO",name:"Cheirosa 71",desc:"Насичений солодкий гурманський ароматний міст.",price:1300,image:"IMG_7489.jpeg",volumes:[90,240],review:"Дуже солодкий і затишний аромат.",reviewer:"Аміна"},

  {id:21,brand:"SOL DE JANEIRO",name:"Cheirosa 76",desc:"Теплий вечірній аромат із виразним характером.",price:1300,image:"IMG_7490.jpeg",volumes:[90,240],review:"Цікавий аромат із власним характером.",reviewer:"Соломія"},

  {id:22,brand:"VALENTINO",name:"Valentino",desc:"Вишукана жіночна композиція з квітковим характером.",price:4500,image:"IMG_7492.jpeg",volumes:[30,50,90],review:"Дуже елегантний аромат.",reviewer:"Аделіна"},

  {id:23,brand:"VALENTINO",name:"Valentino",desc:"Насичена тепла композиція з виразним звучанням.",price:4500,image:"IMG_7493.jpeg",volumes:[30,50,90],review:"Глибокий аромат.",reviewer:"Лілія"},

  {id:24,brand:"MAISON FRANCIS KURKDJIAN",name:"Baccarat Rouge 540",desc:"Впізнавана бурштинова композиція з деревними та квітковими відтінками.",price:15000,image:"IMG_7495.jpeg",volumes:[35,70,200],review:"Впізнаваний аромат із виразним характером.",reviewer:"Меланія"},

  {id:25,brand:"MAISON FRANCIS KURKDJIAN",name:"Baccarat Rouge 540 Extrait",desc:"Більш насичена інтерпретація культової композиції.",price:17900,image:"IMG_7496.jpeg",volumes:[35,70,200],review:"Насичене звучання та красивий характер.",reviewer:"Злата"},

  {id:26,brand:"LATTAFA",name:"Yara Moi",desc:"М'яка солодка композиція з фруктовими та квітковими відтінками.",price:1050,image:"IMG_7498.jpeg",volumes:[100],review:"Приємний солодкий аромат.",reviewer:"Таїсія"},

  {id:27,brand:"ATTAR COLLECTION",name:"Crystal Love Her",desc:"Солодка жіночна композиція з гурманським характером.",price:4100,image:"IMG_7499.jpeg",volumes:[100],review:"Незвичайний солодкий аромат.",reviewer:"Мирослава"},

  {id:28,brand:"LATTAFA",name:"Hayaati",desc:"Східна композиція з теплим насиченим звучанням.",price:925,image:"IMG_7500.jpeg",volumes:[100],review:"Приємний східний аромат.",reviewer:"Еліна"},

  {id:29,brand:"BILLIE EILISH",name:"Eilish",desc:"Тепла ванільна композиція з гурманськими відтінками.",price:1850,image:"IMG_7501.jpeg",volumes:[30,50,100],review:"Ванільний і затишний аромат.",reviewer:"Ангеліна"},

  {id:30,brand:"YVES SAINT LAURENT",name:"Libre Eau de Parfum",desc:"Елегантна квіткова композиція з виразним характером.",price:3650,image:"IMG_7502.jpeg",volumes:[30,50,90],review:"Стильний аромат із характером.",reviewer:"Віолетта"},

  {id:31,brand:"TOM FORD",name:"Lost Cherry",desc:"Насичена вишнева композиція з теплими гурманськими відтінками.",price:7000,image:"IMG_7503.jpeg",volumes:[30,50,100],review:"Вишневий аромат із незвичайним характером.",reviewer:"Маргарита"},

  {id:32,brand:"VICTORIA'S SECRET",name:"Pure Seduction",desc:"Солодкий фруктовий ароматний міст.",price:600,image:"IMG_7504.jpeg",volumes:[75,250],review:"Легкий фруктовий аромат.",reviewer:"Ксенія"}
];

const collections = [
  {
    title:"Sabrina Carpenter",
    subtitle:"THE SWEET COLLECTION",
    image:"IMG_7468.jpeg",
    ids:[3,4,5,6,7]
  },
  {
    title:"Good Girl",
    subtitle:"CAROLINA HERRERA",
    image:"IMG_7478.jpeg",
    ids:[11,12,13]
  },
  {
    title:"Baccarat Rouge",
    subtitle:"MAISON FRANCIS KURKDJIAN",
    image:"IMG_7495.jpeg",
    ids:[24,25]
  },
  {
    title:"Sol de Janeiro",
    subtitle:"THE BODY MIST COLLECTION",
    image:"IMG_7485.jpeg",
    ids:[16,17,18,19,20,21]
  },
  {
    title:"Moschino Toy",
    subtitle:"MOSCHINO",
    image:"IMG_7476.jpeg",
    ids:[9,10]
  },
  {
    title:"Lattafa Yara",
    subtitle:"YARA COLLECTION",
    image:"IMG_7466.jpeg",
    ids:[2,26]
  },
  {
    title:"Art Collection Warm Oriental",
    subtitle:"WARM & ORIENTAL",
    image:"IMG_7499.jpeg",
    ids:[27,28]
  },
  {
    title:"Chanel",
    subtitle:"CHANCE COLLECTION",
    image:"IMG_7483.jpeg",
    ids:[14,15]
  },
  {
    title:"Valentino",
    subtitle:"VALENTINO COLLECTION",
    image:"IMG_7492.jpeg",
    ids:[22,23]
  }
];

const groupedIds = new Set(collections.flatMap(c => c.ids));
const individualProducts = products.filter(p => !groupedIds.has(p.id));

let cart = [];
let activeProduct = null;
let selectedVolume = null;

const $ = id => document.getElementById(id);

function money(value) {
  return new Intl.NumberFormat("uk-UA").format(value) + " ₴";
}

function getProduct(id) {
  return products.find(p => p.id === Number(id));
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function updateBodyLock() {
  const open =
    $("collectionModal").classList.contains("show") ||
    $("productModal").classList.contains("show") ||
    $("cartDrawer").classList.contains("show") ||
    $("orderModal").classList.contains("show");

  document.body.classList.toggle("locked", open);
}

function productCard(p) {
  return `
    <article class="product-card" data-product="${p.id}">
      <div class="product-image">
        <img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy">
      </div>

      <div class="product-info">
        <p class="product-brand">${p.brand}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-description">${p.desc}</p>

        <div class="product-bottom">
          <span class="product-price">${money(p.price)}</span>
          <button class="product-open" data-open="${p.id}" aria-label="Відкрити аромат">↗</button>
        </div>
      </div>
    </article>
  `;
}

function renderCollections() {
  $("collectionsGrid").innerHTML = collections.map((collection, index) => `
    <article class="collection-card" data-collection="${index}">
      <div class="collection-cover">
        <img src="${collection.image}" alt="${collection.title}" loading="lazy">
        <span class="collection-cover-title">${collection.title}</span>
      </div>

      <div class="collection-info">
        <h4>${collection.title}</h4>
        <span>${String(collection.ids.length).padStart(2,"0")} FRAGRANCES</span>
      </div>
    </article>
  `).join("");

  $("individualGrid").innerHTML = individualProducts.map(productCard).join("");
}

function openCollection(index) {
  const collection = collections[index];
  if (!collection) return;

  const items = collection.ids.map(getProduct).filter(Boolean);

  $("collectionDetails").innerHTML = `
    <div class="collection-modal-heading">
      <p>${collection.subtitle}</p>
      <h2>${collection.title}</h2>
      <span class="collection-count">${items.length} FRAGRANCES</span>
    </div>

    <div class="collection-products">
      ${items.map(productCard).join("")}
    </div>
  `;

  $("collectionModal").classList.add("show");
  $("overlay").classList.add("show");
  updateBodyLock();
}

function openProduct(id) {
  activeProduct = getProduct(id);
  if (!activeProduct) return;

  selectedVolume = activeProduct.volumes[0] || null;

  renderProductDetails();

  $("collectionModal").classList.remove("show");
  $("productModal").classList.add("show");
  $("overlay").classList.add("show");

  updateBodyLock();
}

function renderProductDetails() {
  const p = activeProduct;

  $("productDetails").innerHTML = `
    <div class="product-detail">
      <div class="detail-image">
        <img src="${p.image}" alt="${p.name}">
      </div>

      <div>
        <p class="detail-brand">${p.brand}</p>
        <h2 class="product-title">${p.name}</h2>
        <p class="detail-description">${p.desc}</p>

        <p class="detail-label">ОБЕРІТЬ ОБ'ЄМ</p>

        <div class="volume-options">
          ${p.volumes.map(v => `
            <button class="volume-button ${v === selectedVolume ? "active" : ""}" data-volume="${v}">
              ${v} мл
            </button>
          `).join("")}
        </div>

        <p class="detail-price">${money(p.price)}</p>

        <button class="detail-add" id="detailAdd">
          ДОДАТИ ДО КОШИКА ↗
        </button>

        <div class="review-section">
          <h3>Відгук про аромат</h3>
          <div class="review">
            <div class="review-stars">★★★★★</div>
            <strong>${p.reviewer}</strong>
            <p>${p.review}</p>
          </div>
          <p class="demo-note">
            Демонстраційний відгук.
          </p>
        </div>
      </div>
    </div>
  `;
}

function addToCart(p, volume) {
  const key = `${p.id}-${volume}`;
  const existing = cart.find(item => item.key === key);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      key,
      id: p.id,
      name: p.name,
      brand: p.brand,
      image: p.image,
      volume,
      price: p.price,
      qty: 1
    });
  }

  renderCart();
  showToast("Аромат додано до кошика");
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  $("cartCount").textContent = count;

  if (!cart.length) {
    $("cartItems").innerHTML = `
      <p class="empty-cart">Ваш кошик поки порожній.</p>
    `;
    $("cartTotal").textContent = "0 ₴";
    return;
  }

  $("cartItems").innerHTML = cart.map(item => `
    <div class="cart-row">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.brand}</p>
        <p>${item.volume} мл · ${item.qty} шт.</p>
        <p>${money(item.price * item.qty)}</p>
      </div>
      <button class="remove-item" data-remove="${item.key}" aria-label="Видалити">×</button>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  $("cartTotal").textContent = money(total);
}

function closePanels() {
  $("collectionModal").classList.remove("show");
  $("productModal").classList.remove("show");
  $("cartDrawer").classList.remove("show");
  $("orderModal").classList.remove("show");
  $("overlay").classList.remove("show");

  updateBodyLock();
}

function openCart() {
  $("cartDrawer").classList.add("show");
  $("overlay").classList.add("show");
  updateBodyLock();
}

/* COLLECTION CLICKS */

$("collectionsGrid").addEventListener("click", e => {
  const card = e.target.closest("[data-collection]");
  if (card) openCollection(card.dataset.collection);
});

/* PRODUCT CLICKS */

function handleProductClick(e) {
  const button = e.target.closest("[data-open]");
  const card = e.target.closest("[data-product]");

  const id = button
    ? button.dataset.open
    : card?.dataset.product;

  if (id) openProduct(id);
}

$("individualGrid").addEventListener("click", handleProductClick);
$("collectionDetails").addEventListener("click", handleProductClick);

/* VOLUME SELECTION */

$("productDetails").addEventListener("click", e => {
  const volume = e.target.closest("[data-volume]");

  if (volume) {
    selectedVolume = Number(volume.dataset.volume);
    renderProductDetails();
    return;
  }

  if (e.target.closest("#detailAdd")) {
    if (!selectedVolume) {
      showToast("Оберіть об'єм");
      return;
    }

    addToCart(activeProduct, selectedVolume);
    closePanels();
  }
});

/* CLOSE BUTTONS */

$("openCart").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closePanels);
$("closeProduct").addEventListener("click", closePanels);
$("closeCollection").addEventListener("click", closePanels);
$("closeOrder").addEventListener("click", closePanels);
$("overlay").addEventListener("click", closePanels);

/* CART */

$("cartItems").addEventListener("click", e => {
  const remove = e.target.closest("[data-remove]");
  if (!remove) return;

  cart = cart.filter(item => item.key !== remove.dataset.remove);
  renderCart();
});

/* ORDER */

$("checkout").addEventListener("click", () => {
  if (!cart.length) {
    showToast("Спочатку додайте аромат до кошика");
    return;
  }

  $("cartDrawer").classList.remove("show");
  $("orderModal").classList.add("show");
  $("overlay").classList.add("show");

  updateBodyLock();
});

$("orderForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!cart.length) return;

  const form = new FormData(e.currentTarget);

  const lines = cart.map(item =>
    `• ${item.brand} — ${item.name} — ${item.volume} мл — ${item.qty} шт. — ${money(item.price * item.qty)}`
  ).join("\n");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const message = `
ЗАМОВЛЕННЯ VELORA

${lines}

Разом: ${money(total)}

Ім'я: ${form.get("name")}
Телефон: ${form.get("phone")}
Коментар: ${form.get("comment") || "—"}
  `.trim();

  if (TELEGRAM_USERNAME === "YOUR_TELEGRAM_USERNAME") {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(message)
        .then(() => showToast("Текст замовлення скопійовано"))
        .catch(() => showToast("Не вдалося скопіювати замовлення"));
    } else {
      showToast("Налаштуй Telegram username у script.js");
    }
    return;
  }

  window.open(
    `https://t.me/${TELEGRAM_USERNAME.replace("@", "")}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
});

/* CONTACT LINKS */

$("telegramLink").href = TELEGRAM_LINK;
$("instagramLink").href = INSTAGRAM_LINK;

/* MOBILE MENU */

$("menuToggle").addEventListener("click", () => {
  $("nav").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    $("nav").classList.remove("open");
  });
});

/* START */

renderCollections();
renderCart();
