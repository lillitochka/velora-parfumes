
const TELEGRAM_USERNAME = "YOUR_TELEGRAM_USERNAME";

// id, brand, name, description, price, category, tag, image
const rawProducts = [
[1,"DIOR","Miss Dior Blooming Bouquet","Нежный цветочный аромат",8000,"floral","BESTSELLER","IMG_7465.jpeg"],
[2,"LATTAFA","Yara","Мягкий сладкий аромат",1000,"sweet","POPULAR","IMG_7466.jpeg"],
[3,"SABRINA CARPENTER","Sweet Tooth","Сладкий гурманский аромат",1650,"sweet","FAVORITE","IMG_7467.jpeg"],
[4,"SABRINA CARPENTER","Caramel Dream","Тёплый карамельный аромат",1650,"sweet","SWEET","IMG_7469.jpeg"],
[5,"SABRINA CARPENTER","Lemon Pie","Сладкий аромат з лимонними нотами",1650,"fresh","FRESH","IMG_7470.jpeg"],
[6,"SABRINA CARPENTER","Caramel Dream","Ніжний солодкий аромат",1650,"sweet","SWEET","IMG_7471.jpeg"],
[7,"SABRINA CARPENTER","Me Espresso","Насичений кавовий аромат",1650,"sweet","COZY","IMG_7472.jpeg"],
[8,"ARIANA GRANDE","Cloud","Мягкий воздушный аромат",2500,"sweet","POPULAR","IMG_7474.jpeg"],
[9,"MOSCHINO","Toy 2 Bubble Gum","Яркий сладкий аромат",3000,"sweet","PLAYFUL","IMG_7476.jpeg"],
[10,"MOSCHINO","Toy 2","Свежий цветочный аромат",3000,"fresh","ELEGANT","IMG_7477.jpeg"],
[11,"CAROLINA HERRERA","Good Girl","Выразительный женственный аромат",4800,"sweet","ICONIC","IMG_7478.jpeg"],
[12,"CAROLINA HERRERA","Good Girl","Сладкий и чувственный аромат",2950,"sweet","FAVORITE","IMG_7479.jpeg"],
[13,"CAROLINA HERRERA","Good Girl","Глубокий выразительный аромат",2950,"sweet","ICONIC","IMG_7480.jpeg"],
[14,"CHANEL","Chance Eau Tendre","Лёгкий фруктово-цветочный аромат",5000,"floral","ELEGANT","IMG_7483.jpeg"],
[15,"CHANEL","Chance Eau Fraîche","Свежий цитрусовый аромат",4000,"fresh","FRESH","IMG_7484.jpeg"],
[16,"SOL DE JANEIRO","Cheirosa 68","Яркий фруктово-цветочный аромат",1300,"floral","MIST","IMG_7485.jpeg"],
[17,"SOL DE JANEIRO","Cheirosa 59","Мягкий сладкий аромат",1300,"sweet","MIST","IMG_7486.jpeg"],
[18,"SOL DE JANEIRO","Cheirosa 48","Сочный фруктовый аромат",1300,"sweet","MIST","IMG_7487.jpeg"],
[19,"SOL DE JANEIRO","Cheirosa 62","Тёплый карамельно-ореховый аромат",1300,"sweet","BESTSELLER","IMG_7488.jpeg"],
[20,"SOL DE JANEIRO","Cheirosa 71","Сладкий гурманский аромат",1300,"sweet","MIST","IMG_7489.jpeg"],
[21,"SOL DE JANEIRO","Cheirosa 76","Тёплый вечерний аромат",1300,"sweet","MIST","IMG_7490.jpeg"],
[22,"VALENTINO","Valentino","Женственный выразительный аромат",4500,"floral","ELEGANT","IMG_7492.jpeg"],
[23,"VALENTINO","Valentino","Насыщенный тёплый аромат",4500,"sweet","EXCLUSIVE","IMG_7493.jpeg"],
[24,"MAISON FRANCIS KURKDJIAN","Baccarat Rouge 540","Узнаваемый насыщенный аромат",15000,"sweet","LUXURY","IMG_7495.jpeg"],
[25,"MAISON FRANCIS KURKDJIAN","Baccarat Rouge 540 Extrait","Глубокий и насыщенный аромат",17900,"sweet","EXCLUSIVE","IMG_7496.jpeg"],
[26,"LATTAFA","24 Carat White Gold","Тёплый восточный аромат",1050,"sweet","ORIENTAL","IMG_7498.jpeg"],
[27,"ATTAR COLLECTION","Crystal Love Her","Сладкий женственный аромат",4100,"sweet","LUXURY","IMG_7499.jpeg"],
[28,"LATTAFA","Hayaati","Восточный аромат",925,"sweet","POPULAR","IMG_7500.jpeg"],
[29,"BILLIE EILISH","Eilish","Тёплый ванильно-гурманский аромат",1850,"sweet","FAVORITE","IMG_7501.jpeg"],
[30,"YVES SAINT LAURENT","Libre Eau de Parfum","Элегантный цветочный аромат",3650,"floral","ICONIC","IMG_7502.jpeg"],
[31,"TOM FORD","Lost Cherry","Насыщенный вишнёвый аромат",7000,"sweet","LUXURY","IMG_7503.jpeg"],
[32,"VICTORIA'S SECRET","Pure Seduction","Сладкий фруктовый мист",600,"sweet","MIST","IMG_7504.jpeg"]
];

const products = rawProducts.map(p => ({
  id:p[0], brand:p[1], name:p[2], description:p[3],
  price:p[4], category:p[5], tag:p[6], image:p[7]
}));

// Временные ориентировочные цены для демонстрации.
// Перед публикацией замени их на подтверждённые цены
// и реальные доступные объёмы каждого товара.
function getSizes(product) {
  return [
    {ml:30,price:Math.round(product.price*.55)},
    {ml:50,price:Math.round(product.price*.78)},
    {ml:100,price:product.price}
  ];
}

const sabrinaIds = [3,4,5,6,7];

let cart = [];
let selectedProduct = null;
let selectedSize = null;
let currentPhoto = 0;

const $ = id => document.getElementById(id);
const grid = $("productGrid");
const overlay = $("overlay");
const cartDrawer = $("cartDrawer");
const productModal = $("productModal");
const orderModal = $("orderModal");

function money(value) {
  return new Intl.NumberFormat("uk-UA").format(value)+" ₴";
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(()=>toast.classList.remove("show"),2400);
}

// П'ЯТЬ ФОТОГРАФІЙ SABRINA CARPENTER
function getGallery(product) {
  if (sabrinaIds.includes(product.id)) {
    return sabrinaIds.map(id => products.find(p=>p.id===id).image);
  }
  return [product.image];
}

// КАТАЛОГ
function renderProducts(filter="all") {
  const shown = filter==="all"
    ? products
    : products.filter(p=>p.category===filter);

  grid.innerHTML = shown.map(p=>`
    <article class="product-card" data-open="${p.id}">
      <div class="product-photo">
        <img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy">
        <span class="product-tag">${p.tag}</span>
      </div>
      <div class="product-info">
        <p class="product-brand">${p.brand}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-description">${p.description}</p>
        <div class="product-bottom">
          <span class="price">Від ${money(getSizes(p)[0].price)}</span>
          <button class="add-button" data-add="${p.id}" aria-label="Переглянути товар">+</button>
        </div>
      </div>
    </article>
  `).join("");
}

// ВІДКРИТТЯ ТОВАРУ
function openProduct(id) {
  const product = products.find(p=>p.id===id);
  if(!product) return;

  selectedProduct = product;
  selectedSize = getSizes(product)[0];
  currentPhoto = 0;

  renderProductDetails();
  productModal.classList.add("show");
  overlay.classList.add("show");
}

function renderProductDetails() {
  const p = selectedProduct;
  const gallery = getGallery(p);

  $("productDetails").innerHTML = `
    <div class="product-detail-layout">
      <div>
        <div class="detail-main-image">
          <img id="detailMainImage" src="${gallery[currentPhoto]}" alt="${p.name}">
        </div>
        <div class="detail-thumbs">
          ${gallery.map((img,i)=>`
            <button class="detail-thumb ${i===currentPhoto?"active":""}" data-photo="${i}">
              <img src="${img}" alt="Фото ${i+1}">
            </button>
          `).join("")}
        </div>
        ${sabrinaIds.includes(p.id)?`
          <p class="detail-description">Колекція Sabrina Carpenter — оберіть свій аромат серед п'яти варіантів.</p>
        `:""}
      </div>

      <div>
        <p class="detail-brand">${p.brand}</p>
        <h2 class="detail-title">${p.name}</h2>
        <p class="detail-description">${p.description}</p>

        <p class="detail-label">ОБЕРІТЬ ОБ'ЄМ</p>
        <div class="size-options">
          ${getSizes(p).map(s=>`
            <button class="size-option ${s.ml===selectedSize.ml?"active":""}" data-size="${s.ml}">
              ${s.ml} мл
            </button>
          `).join("")}
        </div>

        <p class="detail-price" id="detailPrice">${money(selectedSize.price)}</p>

        <button class="button button-dark detail-add" id="detailAdd">
          ДОДАТИ ДО КОШИКА ↗
        </button>

        <div class="reviews">
          <h3>Відгуки покупців</h3>
          <div class="review">
            <div class="review-stars">★★★★★</div>
            <strong>Олена</strong>
            <p>Дуже приємний аромат. Гарне враження від вибору!</p>
          </div>
          <div class="review">
            <div class="review-stars">★★★★★</div>
            <strong>Марія</strong>
            <p>Саме той аромат, який хотілося знайти.</p>
          </div>
          <div class="review">
            <div class="review-stars">★★★★★</div>
            <strong>Анна</strong>
            <p>Дуже подобається аромат, із задоволенням обрала б ще раз.</p>
          </div>
          <p class="detail-description">Демонстраційні відгуки — замініть на реальні відгуки покупців.</p>
        </div>
      </div>
    </div>
  `;
}

// КОШИК
function addToCart(id, size) {
  const product = products.find(p=>p.id===id);
  if(!product || !size) return;

  const existing = cart.find(item=>item.id===id && item.ml===size.ml);

  if(existing) existing.qty++;
  else cart.push({...product,ml:size.ml,price:size.price,qty:1});

  renderCart();
  showToast("Аромат додано до кошика");
}

function renderCart() {
  const count = cart.reduce((s,p)=>s+p.qty,0);
  const total = cart.reduce((s,p)=>s+p.price*p.qty,0);

  $("cartCount").textContent = count;
  $("cartTotal").textContent = money(total);

  if(!cart.length) {
    $("cartItems").innerHTML='<p class="empty-cart">Тут поки порожньо.</p>';
    return;
  }

  $("cartItems").innerHTML = cart.map(p=>`
    <div class="cart-row">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <h4>${p.name}</h4>
        <p>${p.ml} мл · ${p.qty} × ${money(p.price)}</p>
        <p>${money(p.price*p.qty)}</p>
      </div>
      <button class="remove-item" data-remove="${p.id}" data-ml="${p.ml}">×</button>
    </div>
  `).join("");
}

function closePanels() {
  cartDrawer.classList.remove("show");
  productModal.classList.remove("show");
  orderModal.classList.remove("show");
  overlay.classList.remove("show");
}

function openCart() {
  cartDrawer.classList.add("show");
  overlay.classList.add("show");
}

// УСІ КЛІКИ
document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]");
  if(add) {
    const p=products.find(x=>x.id===Number(add.dataset.add));
    if(p) openProduct(p.id);
    return;
  }

  const card=e.target.closest("[data-open]");
  if(card) {
    openProduct(Number(card.dataset.open));
    return;
  }

  const photo=e.target.closest("[data-photo]");
  if(photo) {
    currentPhoto=Number(photo.dataset.photo);
    renderProductDetails();
    return;
  }

  const size=e.target.closest("[data-size]");
  if(size) {
    selectedSize=getSizes(selectedProduct).find(s=>s.ml===Number(size.dataset.size));
    renderProductDetails();
    return;
  }

  const remove=e.target.closest("[data-remove]");
  if(remove) {
    cart=cart.filter(p=>!(p.id===Number(remove.dataset.remove)&&p.ml===Number(remove.dataset.ml)));
    renderCart();
    return;
  }

  const filter=e.target.closest("[data-filter]");
  if(filter) {
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    filter.classList.add("active");
    renderProducts(filter.dataset.filter);
  }
});

// ДОДАВАННЯ З КАРТКИ
$("productDetails").addEventListener("click",e=>{
  if(e.target.closest("#detailAdd")) {
    addToCart(selectedProduct.id,selectedSize);
    closePanels();
  }
});

// КНОПКИ
$("openCart").addEventListener("click",openCart);
$("closeCart").addEventListener("click",closePanels);
$("closeProduct").addEventListener("click",closePanels);
$("closeModal").addEventListener("click",closePanels);
overlay.addEventListener("click",closePanels);

$("checkout").addEventListener("click",()=>{
  if(!cart.length) {
    showToast("Спочатку оберіть аромат");
    return;
  }
  cartDrawer.classList.remove("show");
  orderModal.classList.add("show");
  overlay.classList.add("show");
});

// ЗАМОВЛЕННЯ
$("orderForm").addEventListener("submit",e=>{
  e.preventDefault();

  if(!cart.length) return;

  const data=new FormData(e.currentTarget);
  const lines=cart.map(p=>
    `• ${p.brand} — ${p.name} — ${p.ml} мл — ${p.qty} шт. — ${money(p.price*p.qty)}`
  ).join("\n");

  const total=cart.reduce((s,p)=>s+p.price*p.qty,0);

  const message=`
Замовлення з VELORA

${lines}

Разом: ${money(total)}

Ім'я: ${data.get("name")}
Телефон: ${data.get("phone")}
Коментар: ${data.get("comment")||"—"}
  `.trim();

  if(TELEGRAM_USERNAME==="YOUR_TELEGRAM_USERNAME") {
    if(navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(message)
        .then(()=>showToast("Замовлення скопійовано"))
        .catch(()=>showToast("Не вдалося скопіювати"));
    } else {
      showToast("Додай Telegram username у script.js");
    }
    return;
  }

  window.open(
    `https://t.me/${TELEGRAM_USERNAME.replace("@","")}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
});

// МОБІЛЬНЕ МЕНЮ
$("menuToggle").addEventListener("click",()=>{
  $("nav").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(a=>{
  a.addEventListener("click",()=>$("nav").classList.remove("open"));
});

// СТАРТ
renderProducts();
renderCart();
