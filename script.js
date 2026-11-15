const products = [
 {id:1,name:"Rose Water Cleanser",category:"skincare",categoryName:"Догляд",description:"Ніжне очищення для щоденного ритуалу.",price:390,image:"https://noya.ma/cdn/shop/collections/no-me-gusta.png?v=1767387736",tag:"BESTSELLER"},
 {id:2,name:"Velvet Lip Tint",category:"makeup",categoryName:"Макіяж",description:"Легкий відтінок і комфортне покриття.",price:320,image:"https://www.elilbeauty.com/cdn/shop/collections/elil-beauty-cosmetic-collection.png?v=1757274077",tag:"NEW"},
 {id:3,name:"Cloud Cream",category:"skincare",categoryName:"Догляд",description:"Комфортний крем для м’якого зволоження.",price:560,image:"https://lushe-beauty.com/cdn/shop/files/beauty-and-skincare-products.png?v=1760409499&width=1600",tag:"DAILY CARE"},
 {id:4,name:"Petal Eau de Parfum",category:"fragrance",categoryName:"Парфумерія",description:"Ніжний квітковий настрій на кожен день.",price:890,image:"https://resource.myaiart.io/myaiart/generated/image/02ff9933835e4dcc9e6e0503aeb8a8af.jpg",tag:"EDITOR'S PICK"},
 {id:5,name:"Blush Touch",category:"makeup",categoryName:"Макіяж",description:"Природний рум’янець із делікатним сяйвом.",price:450,image:"https://assets.promptbase.com/DALLE_IMAGES/3Krk5gUJsrYTslCgKccsraYXNJd2/resized/1732600609707y_800x800.webp?alt=media&token=f9465adb-c015-4154-a3ab-1c3b344283b2",tag:"SOFT GLOW"},
 {id:6,name:"Silk Hair Elixir",category:"skincare",categoryName:"Догляд",description:"Доглядовий еліксир для гладкості волосся.",price:490,image:"https://www.dollface-ulm.de/assets/hero-beauty-DvlioU6f.webp",tag:"SELF-CARE"}
];
let cart = [];
let activeCategory = "all";
const $ = id => document.getElementById(id);
const money = n => `${n.toLocaleString("uk-UA")} ₴`;

function renderProducts(){
 const term = $("searchInput").value.trim().toLowerCase();
 const shown = products.filter(p => (activeCategory==="all" || p.category===activeCategory) && (p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term) || p.categoryName.toLowerCase().includes(term)));
 $("productGrid").innerHTML = shown.length ? shown.map(p=>`
  <article class="product-card">
   <div class="product-photo"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span></div>
   <div class="product-info"><span class="product-category">${p.categoryName}</span><h3 class="product-name">${p.name}</h3><p class="product-description">${p.description}</p>
    <div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-btn" data-add="${p.id}" aria-label="Додати ${p.name} до кошика">+</button></div>
   </div>
  </article>`).join("") : '<p class="empty-cart">Нічого не знайдено. Спробуй інший запит ♡</p>';
}
function renderCart(){
 $("cartCount").textContent = cart.reduce((s,i)=>s+i.qty,0);
 $("cartTotal").textContent = money(cart.reduce((s,i)=>s+i.price*i.qty,0));
 $("cartItems").innerHTML = cart.length ? cart.map(i=>`
  <div class="cart-row"><img src="${i.image}" alt=""><div><strong>${i.name}</strong><small>${money(i.price)}</small><div class="qty"><button data-minus="${i.id}" aria-label="Менше">−</button><span>${i.qty}</span><button data-plus="${i.id}" aria-label="Більше">+</button></div></div><button class="remove" data-remove="${i.id}">Видалити</button></div>`).join("") : '<p class="empty-cart">Тут поки затишно й порожньо ♡</p>';
}
function toast(message){const t=$("toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2100)}
function openCart(){ $("cartPanel").classList.add("open");$("overlay").classList.add("show");$("cartPanel").setAttribute("aria-hidden","false");}
function closeCart(){ $("cartPanel").classList.remove("open");$("overlay").classList.remove("show");$("cartPanel").setAttribute("aria-hidden","true");}
$("productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.add));const found=cart.find(x=>x.id===p.id);found?found.qty++:cart.push({...p,qty:1});renderCart();toast("Додано до кошика ♡")});
$("cartItems").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const id=Number(b.dataset.plus||b.dataset.minus||b.dataset.remove);const item=cart.find(x=>x.id===id);if(!item)return;if(b.dataset.plus)item.qty++;else if(b.dataset.minus){item.qty--;if(item.qty<1)cart=cart.filter(x=>x.id!==id)}else cart=cart.filter(x=>x.id!==id);renderCart()});
$("filters").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;activeCategory=b.dataset.category;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
$("searchInput").addEventListener("input",renderProducts);
$("openCart").addEventListener("click",openCart);$("closeCart").addEventListener("click",closeCart);$("overlay").addEventListener("click",closeCart);
$("menuToggle").addEventListener("click",()=>$("nav").classList.toggle("open"));
$("nav").addEventListener("click",e=>{if(e.target.tagName==="A")$("nav").classList.remove("open")});
$("checkoutBtn").addEventListener("click",()=>{if(!cart.length){toast("Спочатку додай товари до кошика");return}closeCart();$("checkoutModal").classList.add("show");$("checkoutModal").setAttribute("aria-hidden","false")});
function closeModal(){$("checkoutModal").classList.remove("show");$("checkoutModal").setAttribute("aria-hidden","true")}
$("closeModal").addEventListener("click",closeModal);
$("checkoutModal").addEventListener("click",e=>{if(e.target===$("checkoutModal"))closeModal()});
$("checkoutForm").addEventListener("submit",e=>{e.preventDefault();const data=new FormData(e.target);const name=data.get("name");const contact=data.get("contact");toast(`Дякуємо, ${name}! Це демо — заявку не надіслано.`);e.target.reset();closeModal();cart=[];renderCart();});
renderProducts();renderCart();
