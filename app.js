/* =============================================
   QUICKCART PRO — app.js
   Render · Filter · Search · Sort · Quick View
   Contact · Newsletter · Mobile Nav · Animations
   ============================================= */

let curCat    = "all";
let curFilter = "all";
let curSort   = "def";

/* ── HERO EMOJI ROTATOR ── */
const EMOJIS = ["🛍️","🍔","👗","📱","💄","👟","⚽","📚","🧸","🏠","🛒","💊","🐾","🚗","💎","📝"];
let eIdx = 0;
setInterval(() => {
  eIdx = (eIdx + 1) % EMOJIS.length;
  const el = document.getElementById("heroEmoji");
  if (!el) return;
  el.style.transform = "scale(0)";
  setTimeout(() => {
    el.textContent = EMOJIS[eIdx];
    el.style.transform = "scale(1)";
    el.style.transition = "transform .3s";
  }, 200);
}, 2500);

/* ── BUILD CATEGORY CARDS ── */
function buildCatCards() {
  const wrap = document.getElementById("catGrid");
  if (!wrap) return;
  wrap.innerHTML = "";
  CATS.forEach(c => {
    const d = document.createElement("div");
    d.className = "cat-card" + (c.id === curCat ? " active" : "");
    d.innerHTML = `
      <span class="cat-card-emoji">${c.emoji}</span>
      <div class="cat-card-name">${c.name}</div>
      <div class="cat-card-count">${c.count} items</div>`;
    d.onclick = () => filterByCat(c.id);
    wrap.appendChild(d);
  });
}

/* ── FILTER BY CATEGORY ── */
function filterByCat(cat) {
  curCat    = cat;
  curFilter = "all";
  curSort   = "def";
  document.getElementById("sortSel").value = "def";
  document.querySelectorAll(".fchip").forEach(c =>
    c.classList.toggle("active", c.dataset.f === "all")
  );
  buildCatCards();
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ── FILTER CHIPS ── */
function setFilter(f, el) {
  curFilter = f;
  document.querySelectorAll(".fchip").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  renderProducts();
}

/* ── SORT ── */
function doSort() {
  curSort = document.getElementById("sortSel").value;
  renderProducts();
}

/* ── SEARCH ── */
function doSearch() {
  const term = document.getElementById("searchInput").value.trim();
  if (term) {
    curCat = "all";
    buildCatCards();
    document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  renderProducts();
}

/* ── RENDER PRODUCTS ── */
function renderProducts() {
  const term   = document.getElementById("searchInput").value.toLowerCase().trim();
  const kicker = document.getElementById("prodKicker");
  const title  = document.getElementById("prodTitle");
  const grid   = document.getElementById("prodGrid");
  const empty  = document.getElementById("emptyState");

  const LABELS = {
    all:"All Products", food:"Food & Drinks", fashion:"Fashion",
    clothing:"Clothing", electronics:"Electronics", beauty:"Beauty & Care",
    footwear:"Footwear", books:"Books & Media", sports:"Sports & Fitness",
    home:"Home & Living", toys:"Toys & Kids", grocery:"Grocery",
    pharmacy:"Pharmacy", stationery:"Stationery", pets:"Pet Care",
    automotive:"Automotive", jewelry:"Jewelry"
  };

  let list = [...PRODUCTS];

  // Category filter
  if (curCat !== "all") list = list.filter(p => p.cat === curCat);

  // Search filter
  if (term) list = list.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.desc.toLowerCase().includes(term) ||
    p.cat.toLowerCase().includes(term)
  );

  // Badge filter
  if (curFilter !== "all") list = list.filter(p => p.bt === curFilter);

  // Sort
  if (curSort === "asc")  list.sort((a, b) => a.price - b.price);
  if (curSort === "desc") list.sort((a, b) => b.price - a.price);
  if (curSort === "rate") list.sort((a, b) => b.rating - a.rating);
  if (curSort === "az")   list.sort((a, b) => a.name.localeCompare(b.name));

  // Update heading
  const label = term ? `"${term}"` : LABELS[curCat] || "All";
  if (kicker) kicker.textContent = label;
  if (title)  title.innerHTML = term
    ? `Results for <em>${term}</em>`
    : `Explore Our <em>${LABELS[curCat] || "Collection"}</em>`;

  document.getElementById("resCount").textContent = list.length + " products";

  // Empty state
  if (!list.length) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  grid.innerHTML = "";

  const BT_LABELS = {
    hot:"🔥 Trending", new:"✨ New", sale:"💸 Sale",
    best:"⭐ Best", deal:"🏷️ Deal", lim:"⏰ Limited"
  };

  list.forEach((p, i) => {
    const inCart  = cart[p.id] ? cart[p.id].qty : 0;
    const isWish  = !!wishlist[p.id];
    const disc    = p.op ? Math.round((1 - p.price / p.op) * 100) : 0;
    const oldHtml = p.op ? `<span class="prod-oldp">Rs.${p.op.toLocaleString()}</span>` : "";
    const discHtml= disc ? `<div class="prod-disc">-${disc}%</div>` : "";

    const card = document.createElement("div");
    card.className = "prod-card reveal";
    card.style.transitionDelay = Math.min(i * 0.04, 0.5) + "s";

    card.innerHTML = `
      <div class="prod-img pi-${p.cat}">
        <span class="prod-emoji">${p.emoji}</span>
        <span class="prod-badge pb-${p.bt}">${BT_LABELS[p.bt] || p.bt}</span>
        <button class="prod-fav${isWish ? " wishlisted" : ""}" id="fav${p.id}" onclick="toggleWishlist(${p.id})" title="Wishlist">
          ${isWish ? "❤️" : "🤍"}
        </button>
        <span class="prod-catbadge">${p.cat}</span>
        ${discHtml}
      </div>
      <div class="prod-info">
        <div class="prod-name">${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        <div class="prod-meta">
          <div>
            <span class="prod-price">Rs.${p.price.toLocaleString()}</span>
            ${oldHtml}
          </div>
          <span class="prod-rating">
            <span class="star">★</span> ${p.rating} (${p.rv})
          </span>
        </div>
        <div class="prod-actions">
          <button class="add-btn${inCart ? " added" : ""}" id="btn${p.id}" onclick="addCart(${p.id})">
            ${inCart ? "✓ In Cart (" + inCart + ")" : "+ Add to Cart"}
          </button>
          <button class="qv-btn" onclick="openQV(${p.id})" title="Quick View">👁</button>
        </div>
      </div>`;

    grid.appendChild(card);
  });

  observeReveal();
}

/* ── FLASH DEALS ── */
function buildFlash() {
  const deals = PRODUCTS.filter(p => p.bt === "deal" || p.bt === "sale").slice(0, 8);
  const grid  = document.getElementById("flashGrid");
  if (!grid) return;
  grid.innerHTML = "";
  deals.forEach(p => {
    const disc = p.op ? Math.round((1 - p.price / p.op) * 100) : 0;
    const sold = Math.floor(Math.random() * 65) + 20;
    const d    = document.createElement("div");
    d.className = "flash-card";
    d.innerHTML = `
      <span class="flash-emoji">${p.emoji}</span>
      <div class="flash-name">${p.name}</div>
      <div class="flash-prices">
        <span class="flash-new">Rs.${p.price.toLocaleString()}</span>
        ${p.op ? `<span class="flash-oldp">Rs.${p.op.toLocaleString()}</span>` : ""}
      </div>
      <div class="flash-bar-wrap"><div class="flash-bar" style="width:${sold}%"></div></div>
      <span class="flash-sold">${sold}% sold · ${disc}% OFF</span>
      <button class="flash-add" onclick="addCart(${p.id})">Add to Cart</button>`;
    grid.appendChild(d);
  });
}

/* ── COUNTDOWN TIMER ── */
function startTimer() {
  const end = new Date();
  end.setHours(23, 59, 59, 0);
  function tick() {
    const diff = end - new Date();
    if (diff <= 0) { end.setDate(end.getDate() + 1); return; }
    document.getElementById("th").textContent = String(Math.floor(diff / 3600000)).padStart(2, "0");
    document.getElementById("tm").textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    document.getElementById("ts").textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

/* ── QUICK VIEW ── */
function openQV(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const disc = p.op ? Math.round((1 - p.price / p.op) * 100) : 0;
  document.getElementById("qvImg").className = "qv-img-side pi-" + p.cat;
  document.getElementById("qvImg").innerHTML = `<span style="font-size:7rem">${p.emoji}</span>`;
  document.getElementById("qvInfo").innerHTML = `
    <div class="qv-cat">${p.cat}</div>
    <div class="qv-name">${p.name}</div>
    <div class="qv-desc">${p.desc}</div>
    <div class="qv-price-row">
      <span class="qv-price">Rs.${p.price.toLocaleString()}</span>
      ${p.op ? `<span class="qv-oldp">Rs.${p.op.toLocaleString()}</span><span class="qv-disc">-${disc}% OFF</span>` : ""}
    </div>
    <div class="qv-rating">
      <span style="color:#F59E0B">★★★★★</span>&nbsp;${p.rating} (${p.rv} reviews)
    </div>
    <button class="qv-add" onclick="addCart(${p.id}); closeQV()">+ Add to Cart</button>`;
  document.getElementById("qvWrap").classList.add("on");
}

function closeQV() {
  document.getElementById("qvWrap").classList.remove("on");
}

/* ── CONTACT FORM ── */
function sendMsg() {
  const n = document.getElementById("cfFirst").value.trim();
  const e = document.getElementById("cfEmail").value.trim();
  const m = document.getElementById("cfMsg").value.trim();
  if (!n || !e || !m) {
    showToast("⚠️ Please fill Name, Email & Message!", "t-warn");
    return;
  }
  document.getElementById("cfSuccess").style.display = "block";
  showToast("✅ Message sent! We'll reply in 2 hours.", "t-ok");
  ["cfFirst", "cfLast", "cfEmail", "cfPhone", "cfMsg"].forEach(id => {
    document.getElementById(id).value = "";
  });
}

/* ── NEWSLETTER ── */
function subscribeNL() {
  const e = document.getElementById("nlEmail").value.trim();
  if (!e || !e.includes("@")) {
    showToast("⚠️ Please enter a valid email!", "t-warn");
    return;
  }
  document.getElementById("nlSuccess").style.display = "block";
  showToast("🎁 Subscribed! Check your email for 10% OFF!", "t-ok");
  document.getElementById("nlEmail").value = "";
}

/* ── MOBILE NAV ── */
function toggleMob() {
  const links = document.getElementById("navLinks");
  if (links.style.display === "flex") {
    closeMob();
  } else {
    links.style.cssText = `
      display:flex; flex-direction:column; gap:1.1rem;
      position:absolute; top:72px; left:0; right:0;
      background:rgba(250,250,248,.98); padding:1.5rem 5%;
      border-bottom:1px solid rgba(109,40,217,.1);
      backdrop-filter:blur(20px); z-index:999; list-style:none;`;
  }
}
function closeMob() {
  const links = document.getElementById("navLinks");
  if (links) links.style.display = "";
}

/* ── TOAST ── */
function showToast(msg, type = "") {
  const wrap = document.getElementById("toastWrap");
  const t    = document.createElement("div");
  t.className   = "toast " + type;
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = "0"; t.style.transform = "translateY(10px)"; t.style.transition = ".3s"; }, 2800);
  setTimeout(() => t.remove(), 3200);
}

/* ── SCROLL REVEAL ── */
function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("on");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll(".reveal:not(.on)").forEach(el => obs.observe(el));
}

/* ── ESC KEY ── */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closePanels();
    closeCheckout();
    closeQV();
  }
});

/* ── INIT ── */
function init() {
  // Set data-f on filter chips for easy targeting
  document.querySelectorAll(".fchip").forEach(chip => {
    const onclick = chip.getAttribute("onclick") || "";
    const match   = onclick.match(/setFilter\('(\w+)'/);
    if (match) chip.dataset.f = match[1];
  });
  buildCatCards();
  renderProducts();
  buildFlash();
  startTimer();
  observeReveal();
}

init();
