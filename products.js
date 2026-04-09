/* =============================================
   QUICKCART PRO — products.js
   72 Products · 16 Categories
   ============================================= */

const PRODUCTS = [
  // ── FOOD ──
  { id:1,  name:"Smash Burger Combo",        desc:"Double smash patty, caramelized onions, special sauce, fries & drink", price:650,  op:900,   cat:"food",       emoji:"🍔", bt:"best", rating:4.9, rv:312 },
  { id:2,  name:"Chicken Dum Biryani",        desc:"Fragrant basmati rice slow-cooked with spiced tender chicken pieces",   price:480,  op:600,   cat:"food",       emoji:"🍛", bt:"best", rating:4.9, rv:445 },
  { id:3,  name:"Wood-Fired Pizza",           desc:"Fresh dough, premium mozzarella, grilled chicken & jalapeños",          price:890,  op:1100,  cat:"food",       emoji:"🍕", bt:"sale", rating:4.7, rv:223 },
  { id:4,  name:"Mango Shake Large",          desc:"Anwar Ratol mangoes blended with fresh cream & ice cream",              price:280,  op:null,  cat:"food",       emoji:"🥭", bt:"new",  rating:4.8, rv:189 },
  { id:5,  name:"Gulab Jamun 12 pcs",         desc:"Soft milk-solid dumplings in rose-cardamom syrup — handmade",           price:220,  op:280,   cat:"food",       emoji:"🍮", bt:"deal", rating:4.9, rv:567 },
  { id:6,  name:"Seekh Kebab Platter",        desc:"8 charcoal-grilled minced beef skewers with raita & naan",              price:420,  op:550,   cat:"food",       emoji:"🍢", bt:"sale", rating:4.8, rv:198 },
  { id:7,  name:"Nutella Waffle",             desc:"Crispy Belgian waffle, Nutella drizzle, fresh berries & whipped cream", price:350,  op:null,  cat:"food",       emoji:"🧇", bt:"new",  rating:4.7, rv:134 },
  { id:8,  name:"Chicken Karahi",             desc:"Spicy tomato-base with tender chicken, ginger & fresh coriander",       price:680,  op:850,   cat:"food",       emoji:"🫕", bt:"hot",  rating:4.8, rv:278 },
  // ── FASHION ──
  { id:9,  name:"Floral Summer Dress",        desc:"Lightweight breathable fabric with vibrant floral print, free size",    price:1850, op:3200,  cat:"fashion",    emoji:"👗", bt:"sale", rating:4.6, rv:112 },
  { id:10, name:"Silk Evening Gown",          desc:"Premium silk gown with delicate embroidery — perfect for events",       price:4500, op:6800,  cat:"fashion",    emoji:"👘", bt:"best", rating:4.8, rv:67  },
  { id:11, name:"Designer Denim Jacket",      desc:"Premium blue denim jacket with distressed finish — street style",       price:2200, op:2900,  cat:"fashion",    emoji:"🧥", bt:"hot",  rating:4.5, rv:93  },
  { id:12, name:"Office Formal Blazer",       desc:"Slim fit Italian-cut blazer in navy — perfect for corporate wear",      price:3800, op:5500,  cat:"fashion",    emoji:"🥻", bt:"new",  rating:4.7, rv:55  },
  { id:13, name:"Casual Linen Jumpsuit",      desc:"Breathable linen with relaxed fit — available in 5 colors",            price:1600, op:2200,  cat:"fashion",    emoji:"👔", bt:"sale", rating:4.4, rv:78  },
  // ── CLOTHING ──
  { id:14, name:"Men's Shalwar Kameez",       desc:"Premium cotton lawn with hand-embroidery — sizes S to 3XL",            price:1500, op:2000,  cat:"clothing",   emoji:"👕", bt:"best", rating:4.9, rv:445 },
  { id:15, name:"Sports Dry-Fit T-Shirt",     desc:"Moisture-wicking polyester blend — ideal for gym, running & outdoor",  price:680,  op:950,   cat:"clothing",   emoji:"👕", bt:"sale", rating:4.6, rv:234 },
  { id:16, name:"Slim Fit Stretch Jeans",     desc:"4-way stretch denim with comfort waistband — slim fit",                price:1800, op:2600,  cat:"clothing",   emoji:"👖", bt:"hot",  rating:4.5, rv:189 },
  { id:17, name:"Premium Fleece Hoodie",      desc:"Heavyweight 380gsm fleece, kangaroo pocket, lined hood",               price:1400, op:1900,  cat:"clothing",   emoji:"🧥", bt:"deal", rating:4.7, rv:167 },
  { id:18, name:"Eid Kurta Pajama Set",       desc:"Finest lawn cotton with machine embroidery border — festive edition",  price:1200, op:1600,  cat:"clothing",   emoji:"🩴", bt:"new",  rating:4.9, rv:389 },
  { id:19, name:"Women's Luxury Abaya",       desc:"Premium chiffon abaya with lace trim and stone work",                  price:2800, op:3800,  cat:"clothing",   emoji:"🧕", bt:"best", rating:4.8, rv:201 },
  // ── ELECTRONICS ──
  { id:20, name:"Wireless ANC Earbuds",       desc:"Active noise cancellation, 40hr battery, Bluetooth 5.3, IPX5",        price:3500, op:5200,  cat:"electronics",emoji:"🎧", bt:"sale", rating:4.7, rv:678 },
  { id:21, name:"Smart Watch Pro",            desc:"AMOLED 1.8\" display, heart rate, SpO2, GPS, 7-day battery life",     price:8500, op:12000, cat:"electronics",emoji:"⌚", bt:"best", rating:4.8, rv:345 },
  { id:22, name:"Portable Bluetooth Speaker", desc:"360° surround sound, 24hr battery, IP67 waterproof, NFC pairing",    price:4200, op:6000,  cat:"electronics",emoji:"🔊", bt:"hot",  rating:4.6, rv:234 },
  { id:23, name:"20000mAh Power Bank",        desc:"65W PD fast charge, dual USB-A + USB-C, LED display",                 price:2800, op:3800,  cat:"electronics",emoji:"🔋", bt:"deal", rating:4.5, rv:456 },
  { id:24, name:"RGB Gaming Mouse",           desc:"16000 DPI laser, 11 buttons, RGB lighting, ergonomic design",         price:1800, op:2600,  cat:"electronics",emoji:"🖱", bt:"new",  rating:4.7, rv:289 },
  { id:25, name:"Mechanical Keyboard",        desc:"Cherry MX switches, per-key RGB, aluminum frame, USB-C",              price:4500, op:6500,  cat:"electronics",emoji:"⌨", bt:"sale", rating:4.8, rv:178 },
  { id:26, name:"4K Webcam",                  desc:"4K 30fps, auto-focus, built-in dual mic with noise cancellation",     price:3200, op:4500,  cat:"electronics",emoji:"📷", bt:"new",  rating:4.6, rv:123 },
  // ── BEAUTY ──
  { id:27, name:"Vitamin C Glow Serum",       desc:"20% stabilized Vitamin C, hyaluronic acid, niacinamide — 30ml",       price:1200, op:1800,  cat:"beauty",     emoji:"✨", bt:"best", rating:4.8, rv:345 },
  { id:28, name:"12-Shade Matte Lipstick",    desc:"12 curated nude to bold shades, 12hr wear, cruelty-free formula",     price:850,  op:1200,  cat:"beauty",     emoji:"💋", bt:"sale", rating:4.7, rv:456 },
  { id:29, name:"Rose Oud Perfume 100ml",     desc:"Oriental fragrance: top rose, heart oud, base musk — long-lasting",   price:2500, op:3500,  cat:"beauty",     emoji:"🌹", bt:"best", rating:4.9, rv:234 },
  { id:30, name:"Complete Hair Care Kit",     desc:"Argan oil shampoo, conditioner, hair mask + serum — full set",        price:1600, op:2400,  cat:"beauty",     emoji:"💇", bt:"deal", rating:4.6, rv:167 },
  { id:31, name:"SPF 60 Sunscreen Gel",       desc:"Lightweight non-greasy, UVA/UVB broad spectrum, PA++++",              price:680,  op:950,   cat:"beauty",     emoji:"🧴", bt:"new",  rating:4.5, rv:198 },
  { id:32, name:"Retinol Night Cream",        desc:"0.5% retinol, ceramides & peptides — anti-aging overnight repair",    price:1800, op:2600,  cat:"beauty",     emoji:"🌙", bt:"hot",  rating:4.7, rv:145 },
  // ── FOOTWEAR ──
  { id:33, name:"Pro Running Sneakers",       desc:"React foam cushioning, mesh upper, carbon fiber plate",               price:2800, op:4800,  cat:"footwear",   emoji:"👟", bt:"sale", rating:4.7, rv:456 },
  { id:34, name:"Premium Leather Loafers",    desc:"Full-grain leather, Goodyear welt construction, leather sole",        price:3500, op:4800,  cat:"footwear",   emoji:"👞", bt:"best", rating:4.8, rv:234 },
  { id:35, name:"Handcrafted Khussa",         desc:"Pure leather handmade khussa with Multani mirror work embroidery",    price:1200, op:1800,  cat:"footwear",   emoji:"👡", bt:"new",  rating:4.9, rv:345 },
  { id:36, name:"Trekking Sports Sandals",    desc:"Vibram rubber sole, quick-dry straps, adjustable fit",                price:950,  op:1400,  cat:"footwear",   emoji:"🩴", bt:"deal", rating:4.4, rv:123 },
  { id:37, name:"Formal Oxford Shoes",        desc:"Hand-stitched Oxford in black, genuine leather upper & lining",       price:4200, op:5800,  cat:"footwear",   emoji:"👟", bt:"hot",  rating:4.8, rv:167 },
  // ── BOOKS ──
  { id:38, name:"Rich Dad Poor Dad",          desc:"Robert Kiyosaki's classic — financial freedom & wealth mindset",      price:850,  op:1200,  cat:"books",      emoji:"📘", bt:"best", rating:4.9, rv:890 },
  { id:39, name:"Urdu Poetry Kulliyat",       desc:"Complete works of Ghalib, Iqbal, Faiz, Mir in one premium volume",   price:750,  op:1000,  cat:"books",      emoji:"📖", bt:"best", rating:4.8, rv:456 },
  { id:40, name:"CSS/PMS Exam Guide 2026",    desc:"Complete subject-wise guide with past papers and MCQ practice",       price:1200, op:1600,  cat:"books",      emoji:"📚", bt:"new",  rating:4.7, rv:234 },
  { id:41, name:"Pakistani Cooking Bible",    desc:"600+ authentic recipes from all four provinces — hardcover",          price:950,  op:1400,  cat:"books",      emoji:"📗", bt:"deal", rating:4.6, rv:178 },
  { id:42, name:"Atomic Habits",              desc:"James Clear's bestseller on building good habits — English edition",  price:800,  op:1100,  cat:"books",      emoji:"📙", bt:"best", rating:4.9, rv:567 },
  // ── SPORTS ──
  { id:43, name:"FIFA Match Football",        desc:"FIFA Approved thermobonded match ball, size 5, official weight",      price:1800, op:2600,  cat:"sports",     emoji:"⚽", bt:"best", rating:4.8, rv:345 },
  { id:44, name:"Grade A Cricket Bat",        desc:"English willow, 6-inch spine, oiled & prepared, stickers included",  price:4500, op:6500,  cat:"sports",     emoji:"🏏", bt:"best", rating:4.9, rv:267 },
  { id:45, name:"Premium Yoga Mat 6mm",       desc:"Non-slip natural rubber, 183x61cm, alignment lines, carry strap",    price:1200, op:1800,  cat:"sports",     emoji:"🧘", bt:"sale", rating:4.7, rv:189 },
  { id:46, name:"Adjustable Dumbbell Set",    desc:"5-25kg per dumbbell, chrome finish, quick-change collar system",      price:3500, op:4800,  cat:"sports",     emoji:"🏋", bt:"deal", rating:4.6, rv:134 },
  { id:47, name:"Badminton Racket Pro",       desc:"Carbon fiber frame, 85g lightweight, 3U grip, with full cover",      price:1600, op:2200,  cat:"sports",     emoji:"🏸", bt:"new",  rating:4.5, rv:98  },
  // ── HOME ──
  { id:48, name:"Aromatherapy Candle Set",    desc:"3-piece set: lavender, vanilla & sandalwood — 45hr burn each",       price:950,  op:1400,  cat:"home",       emoji:"🕯", bt:"best", rating:4.8, rv:234 },
  { id:49, name:"Premium Ceramic Mug",        desc:"400ml double-wall ceramic with custom grip — keeps hot 3hrs",         price:450,  op:680,   cat:"home",       emoji:"☕", bt:"new",  rating:4.7, rv:345 },
  { id:50, name:"Velvet Cushion Cover Set",   desc:"Set of 4, 45x45cm, premium velvet in earthy tones with zipper",      price:1100, op:1600,  cat:"home",       emoji:"🛋", bt:"sale", rating:4.5, rv:167 },
  { id:51, name:"Smart RGB LED Strip 10m",    desc:"App-controlled, music sync, 16M colors, works with Alexa & Google",  price:2200, op:3200,  cat:"home",       emoji:"💡", bt:"hot",  rating:4.6, rv:289 },
  { id:52, name:"HEPA Air Purifier",          desc:"True HEPA + carbon filter, covers 300sqft, 99.97% dust removal",    price:8500, op:12000, cat:"home",       emoji:"🌬", bt:"deal", rating:4.8, rv:123 },
  // ── TOYS ──
  { id:53, name:"LEGO Classic Creative",      desc:"1000-piece classic brick set — open-ended creative building",        price:2800, op:3800,  cat:"toys",       emoji:"🧩", bt:"best", rating:4.9, rv:456 },
  { id:54, name:"RC Racing Car 1:16",         desc:"4WD off-road, 40km/h, 2.4GHz remote, 30min battery — ages 8+",      price:1800, op:2600,  cat:"toys",       emoji:"🏎", bt:"hot",  rating:4.7, rv:234 },
  { id:55, name:"Soft Teddy Bear 45cm",       desc:"Ultra-soft premium plush, machine washable, hypoallergenic",         price:950,  op:1400,  cat:"toys",       emoji:"🧸", bt:"new",  rating:4.8, rv:345 },
  { id:56, name:"Premium Wooden Ludo",        desc:"Handcrafted solid wood Ludo board, 4-6 players, with dice & coins",  price:780,  op:1100,  cat:"toys",       emoji:"🎲", bt:"deal", rating:4.6, rv:189 },
  { id:57, name:"Kids Drawing Tablet",        desc:"LCD e-writing board 12in, pressure sensitive, erasable, no mess",   price:1200, op:1800,  cat:"toys",       emoji:"🎨", bt:"sale", rating:4.5, rv:123 },
  // ── GROCERY ──
  { id:58, name:"Premium Basmati Rice 5kg",   desc:"1121 Extra Long Grain Basmati — aged 2 years, vacuum packed",        price:850,  op:1100,  cat:"grocery",    emoji:"🍚", bt:"best", rating:4.8, rv:678 },
  { id:59, name:"Extra Virgin Olive Oil 1L",  desc:"Cold-pressed, 100% natural, imported from Spain — premium quality", price:1600, op:2200,  cat:"grocery",    emoji:"🫒", bt:"sale", rating:4.7, rv:234 },
  { id:60, name:"Organic Sidr Honey 500g",    desc:"Pure sidr honey from Swat valley — unprocessed, raw, certified",    price:1200, op:1600,  cat:"grocery",    emoji:"🍯", bt:"new",  rating:4.9, rv:445 },
  { id:61, name:"Dry Fruit Gift Box 1kg",     desc:"Premium mix: almonds, cashews, walnuts, pistachios — luxury box",   price:2200, op:3000,  cat:"grocery",    emoji:"🥜", bt:"deal", rating:4.8, rv:289 },
  // ── PHARMACY ──
  { id:62, name:"Multivitamin Daily Pack",    desc:"30-day supply, 23 essential vitamins & minerals, once-daily tablet", price:680,  op:950,   cat:"pharmacy",   emoji:"💊", bt:"best", rating:4.7, rv:456 },
  { id:63, name:"Digital Thermometer",        desc:"1-second reading, fever alert, memory recall, 10-year battery",     price:450,  op:650,   cat:"pharmacy",   emoji:"🌡", bt:"new",  rating:4.8, rv:345 },
  { id:64, name:"First Aid Kit Complete",     desc:"85-piece kit, OSHA-approved, waterproof case, wall-mountable",       price:1200, op:1800,  cat:"pharmacy",   emoji:"🩺", bt:"deal", rating:4.6, rv:234 },
  // ── STATIONERY ──
  { id:65, name:"Premium Notebook A5",        desc:"160 pages, 100gsm ivory paper, lay-flat binding, pen holder",        price:380,  op:520,   cat:"stationery", emoji:"📓", bt:"best", rating:4.7, rv:289 },
  { id:66, name:"Artist Sketch Set 30pcs",    desc:"Professional set: pencils H1-H9, charcoal, erasers, blender",        price:950,  op:1400,  cat:"stationery", emoji:"✏", bt:"sale", rating:4.8, rv:167 },
  // ── PETS ──
  { id:67, name:"Premium Dog Food 2kg",       desc:"Royal Canin Adult formula — complete balanced nutrition for dogs",   price:1800, op:2400,  cat:"pets",       emoji:"🐾", bt:"best", rating:4.9, rv:234 },
  { id:68, name:"Cat Comfort Memory Bed",     desc:"Orthopedic memory foam, machine washable cover, non-slip base",      price:1200, op:1800,  cat:"pets",       emoji:"🐱", bt:"new",  rating:4.7, rv:145 },
  // ── AUTOMOTIVE ──
  { id:69, name:"Magnetic Phone Mount",       desc:"360° rotation, universal fit, MagSafe-compatible, no scratch",       price:680,  op:950,   cat:"automotive", emoji:"🚗", bt:"hot",  rating:4.6, rv:345 },
  { id:70, name:"Car Perfume Oud Premium",    desc:"120-day long-lasting, vent clip, rich oriental oud fragrance",       price:450,  op:650,   cat:"automotive", emoji:"🌸", bt:"sale", rating:4.5, rv:234 },
  // ── JEWELRY ──
  { id:71, name:"Sterling Silver Bracelet",   desc:"925 sterling silver, adjustable, anti-tarnish coating, gift box",   price:1500, op:2200,  cat:"jewelry",    emoji:"💎", bt:"best", rating:4.8, rv:189 },
  { id:72, name:"Gold-Plated Earrings Set",   desc:"18K gold plating, 3-pair set: studs, hoops & drops — nickel-free",  price:1200, op:1800,  cat:"jewelry",    emoji:"✨", bt:"new",  rating:4.7, rv:145 },
];

const CATS = [
  { id:"all",        name:"All",          emoji:"🛍️", count: PRODUCTS.length },
  { id:"food",       name:"Food",         emoji:"🍔", count:8  },
  { id:"fashion",    name:"Fashion",      emoji:"👗", count:5  },
  { id:"clothing",   name:"Clothing",     emoji:"👕", count:6  },
  { id:"electronics",name:"Electronics",  emoji:"📱", count:7  },
  { id:"beauty",     name:"Beauty",       emoji:"💄", count:6  },
  { id:"footwear",   name:"Footwear",     emoji:"👟", count:5  },
  { id:"books",      name:"Books",        emoji:"📚", count:5  },
  { id:"sports",     name:"Sports",       emoji:"⚽", count:5  },
  { id:"home",       name:"Home",         emoji:"🏠", count:5  },
  { id:"toys",       name:"Toys",         emoji:"🧸", count:5  },
  { id:"grocery",    name:"Grocery",      emoji:"🛒", count:4  },
  { id:"pharmacy",   name:"Pharmacy",     emoji:"💊", count:3  },
  { id:"stationery", name:"Stationery",   emoji:"📝", count:2  },
  { id:"pets",       name:"Pets",         emoji:"🐾", count:2  },
  { id:"automotive", name:"Automotive",   emoji:"🚗", count:2  },
  { id:"jewelry",    name:"Jewelry",      emoji:"💎", count:2  },
];
