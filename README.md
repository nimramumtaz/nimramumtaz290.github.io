
| File | Live Demo |
|------|-----------|
| [QuickCart Pro](quickcart_pro/index.html) | [Open Website](https://nimramumtaz.github.io/NimraMumtaz29.github.io/quickcart_pro/index.html) |
# 🛍️ QuickCart Pro — Pakistan's Mega Mall
### Web Technologies Project — HTML + CSS + JavaScript

---

## 📁 Project Structure
```
quickcart_pro/
├── index.html          ← Main HTML (all sections & modals)
├── css/
│   └── style.css       ← Complete styles + animations + responsive
├── js/
│   ├── products.js     ← 72 products, 16 categories data
│   ├── cart.js         ← Cart, Wishlist, Checkout logic
│   └── app.js          ← Render, Filter, Search, Sort, Animations
└── README.md           ← This file
```

---

## ▶️ HOW TO RUN IN VS CODE

### Method 1 — Live Server (Recommended)
1. Extract the ZIP folder
2. Open the `quickcart_pro/` folder in **VS Code**
3. Install **Live Server** extension by Ritwick Dey
4. Right-click on `index.html`
5. Click **"Open with Live Server"**
6. Opens at `http://127.0.0.1:5500` ✅

### Method 2 — Direct Browser
1. Extract the ZIP
2. Double-click `index.html`
3. Opens directly in your browser ✅

---

## 🏪 16 Categories · 72 Products

| Category     | Items | Category     | Items |
|-------------|-------|-------------|-------|
| 🍔 Food     | 8     | 🏠 Home     | 5     |
| 👗 Fashion  | 5     | 🧸 Toys     | 5     |
| 👕 Clothing | 6     | 🛒 Grocery  | 4     |
| 📱 Electronics | 7  | 💊 Pharmacy | 3     |
| 💄 Beauty   | 6     | 📝 Stationery | 2   |
| 👟 Footwear | 5     | 🐾 Pets     | 2     |
| 📚 Books    | 5     | 🚗 Automotive | 2   |
| ⚽ Sports   | 5     | 💎 Jewelry  | 2     |

---

## ✨ All Features

### Navigation & Layout
- 📢 Scrolling marquee ticker with promotions
- 🌐 Topbar with contact info
- 🔍 Live search bar in navbar
- 📌 Sticky navbar with blur effect
- 📱 Hamburger menu for mobile
- 🌈 Animated hero with morphing blob shape
- 🏷️ Brand logos strip
- 🦶 Full footer with 4 columns

### Shopping Features
- 🗂️ 16 category cards with click-to-filter
- 🔧 Filter chips (New / Sale / Best Sellers / Deals / Trending)
- 📊 Sort by Price / Rating / Name A-Z
- 🛒 Add to Cart with quantity controls
- ❤️ Wishlist save/remove with sidebar
- 👁️ Quick View product modal
- 💵 Live price calculation
- 🚚 Free delivery above Rs.1,500 logic
- 📦 Full checkout form
- ✅ Order confirmation with unique Order ID
- ⚡ Flash Deals section with countdown timer
- 📊 Stock sold progress bars

### Content Sections
- 🖼️ Promo banner grid (5 clickable banners)
- 🖼️ Image gallery with hover effects
- 🏆 Why QuickCart — 8 feature cards
- ⭐ Customer testimonials — 4 verified reviews
- 📧 Newsletter subscription with 10% OFF
- 📬 Contact form with validation

### Technical
- 🎞️ Scroll reveal animations
- 🔔 Toast notifications (right-bottom)
- ⌨️ ESC key closes all modals
- 📱 Fully responsive (mobile/tablet/desktop)
- 🎨 Custom scrollbar
- 🌈 Per-category color themes on product cards

---

## 📚 Viva Questions & Answers

**Q: What is the project about?**
A: QuickCart Pro is a multi-category e-commerce website (mega mall) built with pure HTML, CSS, and JavaScript — no frameworks. It has 72 products across 16 departments.

**Q: How many files are there?**
A: 5 files — index.html, css/style.css, js/products.js, js/cart.js, js/app.js

**Q: What are CSS Custom Properties?**
A: Values defined in `:root{}` using `--name: value` syntax and used with `var(--name)`. Example: `--p:#6D28D9` used as `color: var(--p)`.

**Q: How does the cart work?**
A: Cart is a JavaScript object `{}`. Products stored by ID with qty. `addCart()` adds/increments. `updateCartUI()` re-renders sidebar. Total calculated using `.reduce()`.

**Q: How does filtering work?**
A: `filterByCat()` sets `curCat` variable. `renderProducts()` uses `.filter()` array method to show matching products. Sort uses `.sort()`.

**Q: What is IntersectionObserver?**
A: Browser API that watches when elements appear on screen. Used here for scroll-reveal animations — elements fade up when they become visible.

**Q: What is responsive design?**
A: Using CSS `@media` queries to change layout at different screen widths. E.g. 4-column grid → 2-column → 1-column on mobile.

**Q: What JavaScript array methods did you use?**
A: `.find()`, `.filter()`, `.sort()`, `.map()`, `.reduce()`, `.forEach()`, `.slice()`

**Q: What is the spread operator?**
A: `{ ...product }` copies all properties of an object. Used when adding to cart so cart has its own copy.

**Q: What is template literals?**
A: Backtick strings `` `Hello ${name}` `` for embedding variables. Used throughout for dynamic HTML generation.

---

## 👩‍💻 Developer Info
- **Developer:** Nimra Mumtaz
- **Email:** nimramumtaz29@gmail.com
- **Phone:** 03194854924
- **Project:** QuickCart Pro — Web Technologies Assignment
- **Stack:** HTML5 + CSS3 + JavaScript (Pure — no frameworks)
- **City:** Faisalabad, Punjab 🇵🇰
