// Каталог можна редагувати прямо тут. Ціни та позиції — демонстраційні.
const TELEGRAM_USERNAME = "YOUR_TELEGRAM_USERNAME"; // замініть на username магазину без @

const products = [
  {id:1,brand:"DIOR",name:"Miss Dior Blooming Bouquet",description:"Ніжний квітковий аромат",price:4890,category:"floral",tag:"BESTSELLER",image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=85"},
  {id:2,brand:"CAROLINA HERRERA",name:"Good Girl",description:"Чуттєвий, виразний та сміливий",price:5290,category:"sweet",tag:"ICONIC",image:"https://images.unsplash.com/photo-1615634260167-c8cdade054de?auto=format&fit=crop&w=700&q=85"},
  {id:3,brand:"YVES SAINT LAURENT",name:"Libre Eau de Parfum",description:"Теплий аромат свободи",price:4590,category:"floral",tag:"FAVORITE",image:"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=85"},
  {id:4,brand:"CHANEL",name:"Chance Eau Tendre",description:"Свіжий фруктово-квітковий аромат",price:5650,category:"fresh",tag:"ELEGANT",image:"https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=700&q=85"},
  {id:5,brand:"VALENTINO",name:"Donna Born in Roma",description:"Солодкий та сучасний характер",price:4980,category:"sweet",tag:"NEW MOOD",image:"https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=700&q=85"},
  {id:6,brand:"LANCÔME",name:"Idôle Eau de Parfum",description:"Легкий, чистий квітковий шлейф",price:4250,category:"fresh",tag:"SOFT",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=85"}
];

let cart = [];
const grid = document.getElementById("productGrid");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const orderModal = document.getElementById("orderModal");
const toast = document.getElementById("toast");

function money(value){ return new Intl.NumberFormat("uk-UA").format(value) + " ₴"; }
function renderProducts(filter="all"){
  const shown = filter === "all" ? products : products.filter(p=>p.category===filter);
  grid.innerHTML = shown.map(p=>`
    <article class="product-card">
      <div class="product-photo"><img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span></div>
      <div class="product-info"><p class="product-brand">${p.brand}</p><h3 class="product-name">${p.name}</h3><p class="product-description">${p.description}</p>
      <div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-button" data-add="${p.id}" aria-label="Додати ${p.name} до кошика">+</button></div></div>
    </article>`).join("");
}
function showToast(message){
  toast.textContent=message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.classList.remove("show"),2200);
}
function addToCart(id){
  const item=cart.find(p=>p.id===id);
  if(item)item.qty++; else cart.push({...products.find(p=>p.id===id),qty:1});
  renderCart(); showToast("Аромат додано до кошика ✦");
}
function renderCart(){
  document.getElementById("cartCount").textContent=cart.reduce((s,p)=>s+p.qty,0);
  document.getElementById("cartTotal").textContent=money(cart.reduce((s,p)=>s+p.price*p.qty,0));
  const items=document.getElementById("cartItems");
  if(!cart.length){items.innerHTML='<p class="empty-cart">Тут поки порожньо. Час знайти свій аромат ✦</p>';return;}
  items.innerHTML=cart.map(p=>`<div class="cart-row"><img src="${p.image}" alt=""><div><h4>${p.name}</h4><p>${p.qty} × ${money(p.price)}</p></div><button class="remove-item" data-remove="${p.id}" aria-label="Видалити">×</button></div>`).join("");
}
function openCart(){cartDrawer.classList.add("show");overlay.classList.add("show");}
function closePanels(){cartDrawer.classList.remove("show");orderModal.classList.remove("show");overlay.classList.remove("show");}
document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]"); if(add)addToCart(Number(add.dataset.add));
  const remove=e.target.closest("[data-remove]"); if(remove){cart=cart.filter(p=>p.id!==Number(remove.dataset.remove));renderCart();}
  const filter=e.target.closest("[data-filter]"); if(filter){document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));filter.classList.add("active");renderProducts(filter.dataset.filter);}
});
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closePanels);
overlay.addEventListener("click",closePanels);
document.getElementById("checkout").addEventListener("click",()=>{
  if(!cart.length){showToast("Спочатку додайте аромат до кошика");return;}
  cartDrawer.classList.remove("show");orderModal.classList.add("show");overlay.classList.add("show");
});
document.getElementById("closeModal").addEventListener("click",closePanels);
document.getElementById("orderForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const lines=cart.map(p=>`• ${p.name} — ${p.qty} шт. (${money(p.price*p.qty)})`).join("\n");
  const message=`Замовлення з PERFUMES FROM VELORA\n\n${lines}\n\nРазом: ${money(cart.reduce((s,p)=>s+p.price*p.qty,0))}\n\nІм'я: ${data.get("name")}\nТелефон: ${data.get("phone")}\nКоментар: ${data.get("comment")||"—"}`;
  if(TELEGRAM_USERNAME==="YOUR_TELEGRAM_USERNAME"){
    navigator.clipboard?.writeText(message);
    showToast("Додайте Telegram username у script.js. Текст замовлення скопійовано.");
    return;
  }
  window.open(`https://t.me/${TELEGRAM_USERNAME.replace("@","")}?text=${encodeURIComponent(message)}`,"_blank");
});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
renderProducts(); renderCart();
