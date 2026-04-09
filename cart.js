/* =============================================
   QUICKCART PRO — cart.js
   Cart · Wishlist · Checkout Logic
   ============================================= */

let cart     = {};   // { id: { ...product, qty } }
let wishlist = {};   // { id: { ...product } }
const FREE_DEL = 1500;

/* ── ADD TO CART ── */
function addCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  cart[id] ? cart[id].qty++ : (cart[id] = { ...p, qty: 1 });
  updateCartUI();
  const btn = document.getElementById("btn" + id);
  if (btn) {
    btn.classList.add("added");
    btn.textContent = "✓ In Cart (" + cart[id].qty + ")";
  }
  showToast("🛒 " + p.name + " added to cart!", "t-ok");
}

/* ── REMOVE FROM CART ── */
function removeCart(id) {
  delete cart[id];
  updateCartUI();
  renderProducts();
}

/* ── CHANGE QUANTITY ── */
function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
  renderProducts();
}

/* ── UPDATE CART UI ── */
function updateCartUI() {
  const items    = Object.values(cart);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count    = items.reduce((s, i) => s + i.qty, 0);
  const delivery = subtotal > 0 && subtotal < FREE_DEL ? 150 : 0;
  const total    = subtotal + delivery;

  document.getElementById("cartBadge").textContent     = count;
  document.getElementById("cartSub").textContent       = "Rs. " + subtotal.toLocaleString();
  document.getElementById("cartDel").textContent       = delivery === 0 && subtotal > 0 ? "FREE 🎉" : (subtotal === 0 ? "Free" : "Rs. 150");
  document.getElementById("cartTotalVal").textContent  = "Rs. " + total.toLocaleString();

  const body  = document.getElementById("cartBody");
  const empty = document.getElementById("cartEmpty");

  if (!items.length) {
    body.innerHTML = "";
    body.appendChild(empty);
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  body.innerHTML = "";

  items.forEach(item => {
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <div class="ci-thumb">${item.emoji}</div>
      <div class="ci-body">
        <div class="ci-name">${item.name}</div>
        <div class="ci-cat">${item.cat}</div>
        <div class="ci-price">Rs. ${(item.price * item.qty).toLocaleString()}</div>
        <div class="ci-qty">
          <button class="qty-b" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-n">${item.qty}</span>
          <button class="qty-b" onclick="changeQty(${item.id}, +1)">+</button>
        </div>
      </div>
      <button class="ci-del" onclick="removeCart(${item.id})" title="Remove">✕</button>`;
    body.appendChild(el);
  });
}

/* ── OPEN / CLOSE CART ── */
function openCart() {
  document.getElementById("cartPanel").classList.add("on");
  document.getElementById("overlay").classList.add("on");
  document.getElementById("wishPanel").classList.remove("on");
}

/* ── WISHLIST TOGGLE ── */
function toggleWishlist(id) {
  const p   = PRODUCTS.find(x => x.id === id);
  const btn = document.getElementById("fav" + id);
  if (!p || !btn) return;

  if (wishlist[id]) {
    delete wishlist[id];
    btn.textContent = "🤍";
    btn.classList.remove("wishlisted");
    showToast("Removed from wishlist");
  } else {
    wishlist[id] = { ...p };
    btn.textContent = "❤️";
    btn.classList.add("wishlisted");
    showToast("❤️ Saved to wishlist!", "t-ok");
  }

  const wc = Object.keys(wishlist).length;
  const wb = document.getElementById("wishCount");
  wb.textContent  = wc;
  wb.style.display = wc > 0 ? "flex" : "none";
  updateWishUI();
}

/* ── UPDATE WISHLIST UI ── */
function updateWishUI() {
  const items = Object.values(wishlist);
  const body  = document.getElementById("wishBody");
  const empty = document.getElementById("wishEmpty");

  if (!items.length) {
    body.innerHTML = "";
    body.appendChild(empty);
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  body.innerHTML = "";

  items.forEach(item => {
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <div class="ci-thumb">${item.emoji}</div>
      <div class="ci-body">
        <div class="ci-name">${item.name}</div>
        <div class="ci-cat">${item.cat}</div>
        <div class="ci-price">Rs. ${item.price.toLocaleString()}</div>
        <button class="add-btn" onclick="addCart(${item.id})" style="margin-top:.5rem;padding:.4rem;font-size:.76rem;border-radius:8px;">Add to Cart</button>
      </div>
      <button class="ci-del" onclick="toggleWishlist(${item.id})">✕</button>`;
    body.appendChild(el);
  });
}

/* ── OPEN WISHLIST ── */
function openWish() {
  document.getElementById("wishPanel").classList.add("on");
  document.getElementById("overlay").classList.add("on");
  document.getElementById("cartPanel").classList.remove("on");
}

/* ── CLOSE ALL PANELS ── */
function closePanels() {
  ["cartPanel", "wishPanel"].forEach(id =>
    document.getElementById(id).classList.remove("on")
  );
  document.getElementById("overlay").classList.remove("on");
}

/* ── OPEN CHECKOUT ── */
function openCheckout() {
  const items = Object.values(cart);
  if (!items.length) { showToast("⚠️ Your cart is empty!", "t-warn"); return; }

  const sub  = items.reduce((s, i) => s + i.price * i.qty, 0);
  const del  = sub < FREE_DEL ? 150 : 0;
  const total = sub + del;

  document.getElementById("orderTotal").textContent = "Rs. " + total.toLocaleString();
  document.getElementById("orderItems").innerHTML =
    items.map(i =>
      `<div class="order-item-row">
        <span>${i.emoji} ${i.name} ×${i.qty}</span>
        <span>Rs. ${(i.price * i.qty).toLocaleString()}</span>
      </div>`
    ).join("") +
    `<div class="order-item-row"><span>Delivery</span><span>${del ? "Rs. 150" : "FREE"}</span></div>`;

  closePanels();
  document.getElementById("checkModal").classList.add("on");
}

/* ── CLOSE CHECKOUT ── */
function closeCheckout() {
  document.getElementById("checkModal").classList.remove("on");
}

/* ── PLACE ORDER ── */
function placeOrder() {
  const fn   = document.getElementById("coFirst").value.trim();
  const ph   = document.getElementById("coPhone").value.trim();
  const addr = document.getElementById("coAddr").value.trim();

  if (!fn || !ph || !addr) {
    showToast("⚠️ Please fill all required (*) fields!", "t-warn");
    return;
  }

  const oid = "QC" + Date.now().toString(36).toUpperCase().slice(-8);
  document.getElementById("successOid").textContent = "Order ID: " + oid;

  closeCheckout();
  cart = {};
  updateCartUI();
  document.getElementById("successWrap").classList.add("on");
}

/* ── CLOSE SUCCESS ── */
function closeSuccess() {
  document.getElementById("successWrap").classList.remove("on");
  renderProducts();
}
