"use strict";

/* ==========================================
   MATTE BEAUTY — DEMO STORE
   نسخه آزمایشی فروشگاه لوازم آرایشی
   ========================================== */

const CONFIG = {
  storeName: "MATTE BEAUTY",
  currency: "تومان",
  shippingCost: 0,
  adminDemoPassword: "demo123"
};

const STORAGE_KEYS = {
  products: "matte_beauty_products_v1",
  cart: "matte_beauty_cart_v1",
  orders: "matte_beauty_orders_v1",
  account: "matte_beauty_account_v1"
};

const DEFAULT_PRODUCTS = [
  {
    id: "MB1001",
    name: "رژ لب مات مخملی",
    brand: "MATTE COLLECTION",
    category: "آرایش لب",
    price: 249000,
    oldPrice: 320000,
    stock: 20,
    sold: 12,
    tag: "پرفروش",
    description: "رژ لب مات با جلوه مخملی؛ مناسب استفاده روزمره. این محصول در این نسخه صرفاً نمونه آزمایشی است.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1002",
    name: "ریمل حجم‌دهنده مشکی",
    brand: "BEAUTY LINE",
    category: "آرایش چشم",
    price: 189000,
    oldPrice: 229000,
    stock: 15,
    sold: 8,
    tag: "محبوب",
    description: "ریمل مشکی برای تکمیل آرایش چشم. اطلاعات و مشخصات محصول در این نسخه آزمایشی هستند.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1003",
    name: "کرم پودر روزانه",
    brand: "SKIN TOUCH",
    category: "آرایش صورت",
    price: 399000,
    oldPrice: 450000,
    stock: 12,
    sold: 6,
    tag: "تخفیف",
    description: "کرم پودر نمونه برای نمایش محصولات آرایش صورت در فروشگاه آزمایشی.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1004",
    name: "ضدآفتاب روزانه",
    brand: "SKIN CARE",
    category: "مراقبت پوست",
    price: 329000,
    oldPrice: 379000,
    stock: 18,
    sold: 15,
    tag: "پرفروش",
    description: "محصول آزمایشی مراقبت پوست. مشخصات واقعی مانند SPF و ترکیبات باید پیش از فروش بررسی شوند.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1005",
    name: "مرطوب‌کننده پوست",
    brand: "DAILY CARE",
    category: "مراقبت پوست",
    price: 219000,
    oldPrice: 259000,
    stock: 25,
    sold: 10,
    tag: "پیشنهادی",
    description: "نمونه مرطوب‌کننده برای نمایش بخش مراقبت پوست فروشگاه.",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1006",
    name: "شامپو تقویتی",
    brand: "HAIR STUDIO",
    category: "مراقبت مو",
    price: 179000,
    oldPrice: 0,
    stock: 14,
    sold: 5,
    tag: "",
    description: "شامپوی نمونه در دسته‌بندی مراقبت مو.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1007",
    name: "خط چشم مشکی",
    brand: "BEAUTY LINE",
    category: "آرایش چشم",
    price: 149000,
    oldPrice: 179000,
    stock: 30,
    sold: 11,
    tag: "تخفیف",
    description: "خط چشم مشکی نمونه برای تکمیل آرایش چشم.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1008",
    name: "بالم لب نرم‌کننده",
    brand: "LIP CARE",
    category: "آرایش لب",
    price: 99000,
    oldPrice: 0,
    stock: 40,
    sold: 19,
    tag: "اقتصادی",
    description: "محصول نمونه برای نمایش گزینه‌های اقتصادی آرایش لب.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1009",
    name: "پنکک آرایشی",
    brand: "MATTE COLLECTION",
    category: "آرایش صورت",
    price: 279000,
    oldPrice: 310000,
    stock: 9,
    sold: 4,
    tag: "",
    description: "پنکک نمونه برای دسته‌بندی آرایش صورت.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1010",
    name: "عطر روزانه",
    brand: "SIGNATURE",
    category: "عطر",
    price: 499000,
    oldPrice: 0,
    stock: 7,
    sold: 3,
    tag: "جدید",
    description: "عطر نمونه برای نمایش دسته‌بندی عطر. رایحه و حجم واقعی باید در نسخه نهایی مشخص شوند.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1011",
    name: "ماسک مراقبت مو",
    brand: "HAIR STUDIO",
    category: "مراقبت مو",
    price: 259000,
    oldPrice: 299000,
    stock: 11,
    sold: 7,
    tag: "تخفیف",
    description: "ماسک مو نمونه برای نمایش محصولات مراقبت مو.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "MB1012",
    name: "رژ لب نود",
    brand: "LIP STUDIO",
    category: "آرایش لب",
    price: 229000,
    oldPrice: 0,
    stock: 16,
    sold: 9,
    tag: "جدید",
    description: "رژ لب با رنگ نود، نمونه آزمایشی برای نمایش فروشگاه.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80"
  }
];

/* ==========================================
   ابزارهای عمومی
   ========================================== */

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $$(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (error) {
    console.warn("خطا در خواندن اطلاعات ذخیره‌شده:", error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("ذخیره‌سازی ناموفق بود:", error);
    toast("ذخیره‌سازی ناموفق بود. فضای مرورگر یا تنظیمات آن را بررسی کن.");
    return false;
  }
}

function money(value) {
  return new Intl.NumberFormat("fa-IR").format(
    Math.max(0, Number(value) || 0)
  ) + " تومان";
}

function digitsToEnglish(value) {
  return String(value)
    .replace(/[۰-۹]/g, digit => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    .replace(/[٠-٩]/g, digit => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));
}

function normalizeText(value) {
  return digitsToEnglish(String(value || ""))
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/‌/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function safeImage(url) {
  const value = String(url || "");

  if (/^https:\/\/[^\s"'<>]+$/i.test(value)) {
    return value;
  }

  return "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80";
}

function createId(prefix = "MB") {
  return prefix + Date.now().toString(36).toUpperCase() +
    Math.random().toString(36).slice(2, 6).toUpperCase();
}

function toast(message) {
  const container = $("#toastContainer");

  if (!container) {
    alert(message);
    return;
  }

  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;

  container.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 3200);
}

function showModal(id) {
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function hideModal(id) {
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.remove("show");
  }

  if (!$(".modal-wrap.show") && !$("#cartDrawer").classList.contains("show")) {
    document.body.style.overflow = "";
  }
}

function getDiscount(product) {
  const oldPrice = Number(product.oldPrice) || 0;
  const price = Number(product.price) || 0;

  if (oldPrice <= price || oldPrice <= 0) {
    return 0;
  }

  return Math.round((oldPrice - price) / oldPrice * 100);
}

/* ==========================================
   وضعیت فروشگاه
   ========================================== */

let products = readStorage(STORAGE_KEYS.products, null);
let cart = readStorage(STORAGE_KEYS.cart, []);
let orders = readStorage(STORAGE_KEYS.orders, []);
let account = readStorage(STORAGE_KEYS.account, null);

if (!Array.isArray(products)) {
  products = DEFAULT_PRODUCTS.map(product => ({ ...product }));
  writeStorage(STORAGE_KEYS.products, products);
}

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(orders)) orders = [];

let activeCategory = "همه";
let currentSearch = "";
let currentProductId = null;
let adminLoggedIn = false;

/* ==========================================
   محصولات
   ========================================== */

function getProduct(id) {
  return products.find(product => product.id === id);
}

function saveProducts() {
  return writeStorage(STORAGE_KEYS.products, products);
}

function saveCart() {
  return writeStorage(STORAGE_KEYS.cart, cart);
}

function saveOrders() {
  return writeStorage(STORAGE_KEYS.orders, orders);
}

function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;

  let list = products.filter(product => {
    const matchesCategory =
      activeCategory === "همه" || product.category === activeCategory;

    const text = normalizeText([
      product.name,
      product.brand,
      product.category,
      product.description,
      product.tag
    ].join(" "));

    const matchesSearch =
      !currentSearch || text.includes(normalizeText(currentSearch));

    return matchesCategory && matchesSearch;
  });

  const sort = $("#sortProducts")?.value || "default";

  if (sort === "low") {
    list.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    list.sort((a, b) => b.price - a.price);
  } else if (sort === "discount") {
    list.sort((a, b) => getDiscount(b) - getDiscount(a));
  } else if (sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name, "fa"));
  }

  $("#productsTitle").textContent =
    currentSearch ? "نتایج جست‌وجو" :
    activeCategory === "همه" ? "محصولات فروشگاه" : activeCategory;

  $("#productsSubtitle").textContent =
    `${new Intl.NumberFormat("fa-IR").format(list.length)} محصول`;

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div style="font-size:32px;margin-bottom:10px">⌕</div>
        محصولی با این مشخصات پیدا نشد.
        <br><br>
        <button class="dark-button" id="resetProductSearch">نمایش همه محصولات</button>
      </div>
    `;

    $("#resetProductSearch")?.addEventListener("click", () => {
      currentSearch = "";
      activeCategory = "همه";
      $("#mainSearch").value = "";
      renderProducts();
      setActiveFilter("همه");
    });

    return;
  }

  grid.innerHTML = list.map(product => {
    const discount = getDiscount(product);
    const unavailable = Number(product.stock) <= 0;

    return `
      <article class="product-card">

        <div
          class="product-image"
          data-product-detail="${escapeHTML(product.id)}"
          role="button"
          tabindex="0"
          aria-label="مشاهده ${escapeHTML(product.name)}"
        >

          ${product.tag ? `
            <span class="product-tag ${discount ? "sale" : ""}">
              ${escapeHTML(product.tag)}
            </span>
          ` : ""}

          ${discount ? `
            <span
              class="product-tag sale"
              style="top:45px"
            >${new Intl.NumberFormat("fa-IR").format(discount)}٪ تخفیف</span>
          ` : ""}

          <img
            src="${escapeHTML(safeImage(product.image))}"
            alt="${escapeHTML(product.name)}"
            loading="lazy"
          >
        </div>

        <div class="product-info">
          <div class="product-brand">${escapeHTML(product.brand || CONFIG.storeName)}</div>

          <div
            class="product-name"
            data-product-detail="${escapeHTML(product.id)}"
            role="button"
            tabindex="0"
          >${escapeHTML(product.name)}</div>

          <div class="product-description">
            ${escapeHTML(product.description || "محصول آزمایشی فروشگاه")}
          </div>

          <div class="product-bottom">
            <div class="product-price">
              ${money(product.price)}
              ${discount ? `<span class="old-price">${money(product.oldPrice)}</span>` : ""}
            </div>

            <button
              class="add-button"
              data-add-cart="${escapeHTML(product.id)}"
              aria-label="افزودن ${escapeHTML(product.name)} به سبد"
              ${unavailable ? "disabled" : ""}
              title="${unavailable ? "ناموجود" : "افزودن به سبد خرید"}"
            >${unavailable ? "−" : "+"}</button>
          </div>

          <div class="stock-text ${unavailable ? "out-of-stock" : ""}">
            ${unavailable ? "ناموجود" :
              `موجودی: ${new Intl.NumberFormat("fa-IR").format(product.stock)} عدد`}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function setActiveFilter(category) {
  $$(".filter-button").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === category);
  });
}

function selectCategory(category) {
  activeCategory = category;
  currentSearch = "";

  if ($("#mainSearch")) {
    $("#mainSearch").value = "";
  }

  setActiveFilter(category);
  renderProducts();

  $("#products").scrollIntoView({ behavior: "smooth" });
}

$("#filterButtons").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  selectCategory(button.dataset.filter);
});

$$(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    selectCategory(card.dataset.category);
  });
});

$("#sortProducts").addEventListener("change", renderProducts);

$("#mainSearch").addEventListener("input", event => {
  currentSearch = event.target.value.trim();

  $("#clearSearch").classList.toggle("hidden", !currentSearch);

  activeCategory = "همه";
  setActiveFilter("همه");
  renderProducts();
});

$("#clearSearch").addEventListener("click", () => {
  $("#mainSearch").value = "";
  currentSearch = "";
  $("#clearSearch").classList.add("hidden");
  renderProducts();
});

/* ==========================================
   جزئیات محصول
   ========================================== */

function openProductDetails(id) {
  const product = getProduct(id);

  if (!product) {
    toast("این محصول پیدا نشد.");
    return;
  }

  currentProductId = id;

  const discount = getDiscount(product);

  $("#productDetails").innerHTML = `
    <div class="detail-layout">

      <div class="detail-image">
        <img
          src="${escapeHTML(safeImage(product.image))}"
          alt="${escapeHTML(product.name)}"
        >
      </div>

      <div class="detail-info">

        <div class="product-brand">${escapeHTML(product.brand || CONFIG.storeName)}</div>

        <h2>${escapeHTML(product.name)}</h2>

        <div style="font-size:11px;color:#888">
          دسته‌بندی: ${escapeHTML(product.category)}
        </div>

        <p>${escapeHTML(product.description || "توضیحات محصول در دسترس نیست.")}</p>

        <div class="detail-price">
          ${money(product.price)}
          ${discount ? `<div class="old-price">${money(product.oldPrice)}</div>` : ""}
        </div>

        <div class="${product.stock > 0 ? "stock-text" : "stock-text out-of-stock"}">
          ${product.stock > 0
            ? `موجودی: ${new Intl.NumberFormat("fa-IR").format(product.stock)} عدد`
            : "این محصول موجود نیست."}
        </div>

        <button
          class="full-button"
          id="detailAddButton"
          ${product.stock <= 0 ? "disabled" : ""}
        >
          افزودن به سبد خرید
        </button>

      </div>
    </div>
  `;

  showModal("productModal");

  $("#detailAddButton").addEventListener("click", () => {
    addToCart(id);
    hideModal("productModal");
  });
}

$("#productGrid").addEventListener("click", event => {
  const detail = event.target.closest("[data-product-detail]");
  const add = event.target.closest("[data-add-cart]");

  if (add) {
    addToCart(add.dataset.addCart);
    return;
  }

  if (detail) {
    openProductDetails(detail.dataset.productDetail);
  }
});

$("#productGrid").addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const element = event.target.closest("[data-product-detail]");
  if (!element) return;

  event.preventDefault();
  openProductDetails(element.dataset.productDetail);
});

/* ==========================================
   سبد خرید
   ========================================== */

function normalizeCart() {
  cart = cart.filter(item => {
    return getProduct(item.id) && Number(item.quantity) > 0;
  });

  cart.forEach(item => {
    item.quantity = Math.max(1, Math.floor(Number(item.quantity) || 1));
  });

  saveCart();
}

function cartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function cartSubtotal() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    if (!product) return total;

    return total + Number(product.price) * item.quantity;
  }, 0);
}

function renderCart() {
  normalizeCart();

  $("#cartCount").textContent = new Intl.NumberFormat("fa-IR").format(cartQuantity());

  const itemsContainer = $("#cartItems");

  if (!cart.length) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:40px;margin-bottom:12px">🛍</div>
        سبد خریدت هنوز خالی است.
        <br><br>
        محصولات موردنظرت را انتخاب کن.
      </div>
    `;
  } else {
    itemsContainer.innerHTML = cart.map(item => {
      const product = getProduct(item.id);

      return `
        <div class="cart-item">

          <img
            src="${escapeHTML(safeImage(product.image))}"
            alt="${escapeHTML(product.name)}"
          >

          <div>
            <h4>${escapeHTML(product.name)}</h4>

            <div class="cart-item-price">
              ${money(product.price * item.quantity)}
            </div>

            <div class="quantity-control">
              <button data-quantity-plus="${escapeHTML(item.id)}" aria-label="افزایش تعداد">+</button>

              <span>${new Intl.NumberFormat("fa-IR").format(item.quantity)}</span>

              <button data-quantity-minus="${escapeHTML(item.id)}" aria-label="کاهش تعداد">−</button>

              <button class="remove-item" data-remove-cart="${escapeHTML(item.id)}">
                حذف
              </button>
            </div>
          </div>

        </div>
      `;
    }).join("");
  }

  const subtotal = cartSubtotal();
  const shipping = cart.length ? CONFIG.shippingCost : 0;

  $("#subtotal").textContent = money(subtotal);
  $("#shippingCost").textContent = shipping ? money(shipping) : "رایگان";
  $("#finalTotal").textContent = money(subtotal + shipping);

  $("#checkoutButton").disabled = cart.length === 0;
}

function addToCart(id) {
  const product = getProduct(id);

  if (!product) {
    toast("محصول پیدا نشد.");
    return;
  }

  if (product.stock <= 0) {
    toast("این محصول موجود نیست.");
    return;
  }

  const existing = cart.find(item => item.id === id);
  const currentQuantity = existing ? existing.quantity : 0;

  if (currentQuantity >= product.stock) {
    toast("بیشتر از موجودی محصول نمی‌توانی انتخاب کنی.");
    return;
  }

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
  toast("محصول به سبد خرید اضافه شد.");
}

function changeCartQuantity(id, delta) {
  const item = cart.find(entry => entry.id === id);
  const product = getProduct(id);

  if (!item || !product) return;

  const next = item.quantity + delta;

  if (next <= 0) {
    cart = cart.filter(entry => entry.id !== id);
  } else if (next > product.stock) {
    toast("تعداد انتخابی از موجودی بیشتر است.");
    return;
  } else {
    item.quantity = next;
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  toast("محصول از سبد خرید حذف شد.");
}

function openCart() {
  $("#cartDrawer").classList.add("show");
  $("#drawerOverlay").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  $("#cartDrawer").classList.remove("show");
  $("#drawerOverlay").classList.remove("show");

  if (!$(".modal-wrap.show")) {
    document.body.style.overflow = "";
  }
}

$("#cartButton").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#drawerOverlay").addEventListener("click", closeCart);
$("#continueShopping").addEventListener("click", closeCart);

$("#cartItems").addEventListener("click", event => {
  const plus = event.target.closest("[data-quantity-plus]");
  const minus = event.target.closest("[data-quantity-minus]");
  const remove = event.target.closest("[data-remove-cart]");

  if (plus) changeCartQuantity(plus.dataset.quantityPlus, 1);
  if (minus) changeCartQuantity(minus.dataset.quantityMinus, -1);
  if (remove) removeFromCart(remove.dataset.removeCart);
});

/* ==========================================
   ثبت سفارش آزمایشی
   ========================================== */

$("#checkoutButton").addEventListener("click", () => {
  if (!cart.length) {
    toast("سبد خرید خالی است.");
    return;
  }

  $("#checkoutSummary").textContent =
    `مبلغ سفارش: ${money(cartSubtotal() + CONFIG.shippingCost)}`;

  closeCart();

  if (account) {
    $("#customerName").value = account.name || "";
    $("#customerPhone").value = account.phone || "";
  }

  showModal("checkoutModal");
});

function isValidIranianMobile(value) {
  const normalized = digitsToEnglish(value).replace(/[\s-]/g, "");
  return /^09\d{9}$/.test(normalized);
}

$("#checkoutForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!cart.length) {
    toast("سبد خرید خالی است.");
    hideModal("checkoutModal");
    return;
  }

  const form = event.currentTarget;
  const formData = new FormData(form);

  const name = String(formData.get("customerName") || "").trim();
  const phone = digitsToEnglish(formData.get("customerPhone") || "").trim();
  const province = String(formData.get("province") || "").trim();
  const city = String(formData.get("city") || "").trim();
  const addressText = String(formData.get("address") || "").trim();
  const postal = digitsToEnglish(formData.get("postal") || "").trim();
  const notes = String(formData.get("notes") || "").trim();

  if (!isValidIranianMobile(phone)) {
    toast("شماره موبایل باید با 09 شروع شود و ۱۱ رقم داشته باشد.");
    $("#customerPhone").focus();
    return;
  }

  if (!/^\d{10}$/.test(postal)) {
    toast("کد پستی باید دقیقاً ۱۰ رقم باشد.");
    $("#customerPostal").focus();
    return;
  }

  if (!name || !province || !city || !addressText) {
    toast("لطفاً تمام اطلاعات ضروری را وارد کن.");
    return;
  }

  const orderItems = [];

  for (const item of cart) {
    const product = getProduct(item.id);

    if (!product || product.stock < item.quantity) {
      toast(`موجودی ${product?.name || "یکی از محصولات"} کافی نیست.`);
      renderCart();
      return;
    }

    orderItems.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      quantity: item.quantity
    });
  }

  const subtotal = orderItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const order = {
    id: createId("ORD-"),
    createdAt: new Date().toISOString(),
    customer: {
      name,
      phone,
      province,
      city,
      address: addressText,
      postal,
      notes
    },
    items: orderItems,
    subtotal,
    shipping: CONFIG.shippingCost,
    total: subtotal + CONFIG.shippingCost,
    status: "ثبت‌شده",
    demo: true
  };

  /*
    نسخه دمو است.
    اطلاعات آدرس و تلفن در مرورگر ذخیره می‌شوند.
    این روش برای اطلاعات واقعی مشتری مناسب نیست.
  */

  const newOrders = [...orders, order];

  if (!writeStorage(STORAGE_KEYS.orders, newOrders)) {
    toast("سفارش ذخیره نشد. فضای مرورگر را بررسی کن.");
    return;
  }

  orders = newOrders;

  orderItems.forEach(item => {
    const product = getProduct(item.id);

    if (product) {
      product.stock -= item.quantity;
    }
  });

  if (!saveProducts()) {
    toast("سفارش ثبت شد، اما ذخیره موجودی ناموفق بود.");
  }

  cart = [];
  saveCart();

  if (account) {
    account.name = name;
    account.phone = phone;
    writeStorage(STORAGE_KEYS.account, account);
  }

  form.reset();

  renderProducts();
  renderCart();
  renderAdmin();

  hideModal("checkoutModal");

  toast(`سفارش آزمایشی ${order.id} ثبت شد.`);

  alert(
    "سفارش آزمایشی با موفقیت ثبت شد.\n\n" +
    "شماره سفارش: " + order.id + "\n" +
    "مبلغ: " + money(order.total) + "\n\n" +
    "هیچ پرداخت واقعی انجام نشده است."
  );
});

/* ==========================================
   حساب کاربری آزمایشی
   ========================================== */

function renderAccountStatus() {
  const status = $("#accountStatus");

  if (!status) return;

  if (!account) {
    status.classList.add("hidden");
    return;
  }

  status.classList.remove("hidden");
  status.textContent =
    `حساب آزمایشی فعال است: ${account.name} — ${account.phone}`;
}

$("#accountButton").addEventListener("click", () => {
  if (account) {
    $("#accountName").value = account.name || "";
    $("#accountPhone").value = account.phone || "";
  }

  renderAccountStatus();
  showModal("accountModal");
});

$("#accountForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#accountName").value.trim();
  const phone = digitsToEnglish($("#accountPhone").value).trim();

  if (!name) {
    toast("نام را وارد کن.");
    return;
  }

  if (!isValidIranianMobile(phone)) {
    toast("شماره موبایل معتبر نیست.");
    return;
  }

  account = {
    name,
    phone,
    demo: true
  };

  if (!writeStorage(STORAGE_KEYS.account, account)) return;

  renderAccountStatus();
  toast("اطلاعات حساب آزمایشی ذخیره شد.");
});

$("#logoutButton").addEventListener("click", () => {
  account = null;

  try {
    localStorage.removeItem(STORAGE_KEYS.account);
  } catch (error) {
    toast("پاک کردن اطلاعات حساب ممکن نشد.");
    return;
  }

  $("#accountForm").reset();
  renderAccountStatus();
  toast("حساب آزمایشی پاک شد.");
});

/* ==========================================
   جست‌وجوی هوشمند آزمایشی
   ========================================== */

const CATEGORY_KEYWORDS = {
  "آرایش صورت": [
    "آرایش صورت", "کرم پودر", "پنکک", "کانسیلر",
    "رژگونه", "پرایمر", "صورت", "فوندیشن"
  ],
  "آرایش چشم": [
    "آرایش چشم", "ریمل", "خط چشم", "سایه",
    "ابرو", "چشم", "مژه"
  ],
  "آرایش لب": [
    "آرایش لب", "رژ لب", "رژ", "بالم لب",
    "لب", "لیپ", "lipstick"
  ],
  "مراقبت پوست": [
    "مراقبت پوست", "پوست", "ضدآفتاب",
    "مرطوب کننده", "مرطوب‌کننده", "کرم",
    "پاک کننده", "آبرسان", "سرم"
  ],
  "مراقبت مو": [
    "مراقبت مو", "مو", "شامپو", "ماسک مو",
    "نرم کننده", "نرم‌کننده", "موها"
  ],
  "عطر": [
    "عطر", "ادکلن", "خوشبوکننده", "رایحه", "بو"
  ]
};

function extractMaxPrice(query) {
  const text = normalizeText(query);

  const match = text.match(
    /(?:زیر|کمتر از|تا سقف|حداکثر|زیر قیمت)\s*(\d+(?:\.\d+)?)\s*(میلیون|میلیارد|هزار)?/
  );

  if (!match) return null;

  let value = Number(match[1]);
  const unit = match[2] || "";

  if (unit === "میلیون") value *= 1000000;
  else if (unit === "میلیارد") value *= 1000000000;
  else if (unit === "هزار") value *= 1000;

  /*
    اگر کاربر عددی مانند 300 را بدون واحد وارد کند،
    آن را 300 تومان تفسیر می‌کنیم.
    برای قیمت‌های هزار تومانی، واحد «هزار» را بنویسید.
  */

  return Number.isFinite(value) ? value : null;
}

function detectCategory(query) {
  const text = normalizeText(query);
  let bestCategory = null;
  let bestScore = 0;

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    let score = 0;

    for (const keyword of keywords) {
      if (text.includes(normalizeText(keyword))) {
        score += normalizeText(keyword).length > 4 ? 2 : 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}

function smartSearch(query) {
  const text = normalizeText(query);

  if (!text) {
    return {
      products: [],
      explanation: "درخواستت را وارد کن."
    };
  }

  const category = detectCategory(text);
  const maxPrice = extractMaxPrice(text);

  const wantsCheap =
    /ارزان|ارزانترین|ارزان ترین|کم قیمت|اقتصادی/.test(text);

  const wantsDiscount =
    /تخفیف|تخفیف دار|حراج|ارزان شده/.test(text);

  const wantsPopular =
    /پرفروش|محبوب|پرطرفدار|پیشنهاد ویژه/.test(text);

  let result = products.filter(product => {
    const productText = normalizeText([
      product.name,
      product.brand,
      product.category,
      product.description,
      product.tag
    ].join(" "));

    const categoryMatch = !category || product.category === category;
    const priceMatch = maxPrice === null || product.price <= maxPrice;
    const available = product.stock > 0;

    let textMatch = true;

    const usefulTerms = text
      .split(" ")
      .filter(word =>
        word.length > 2 &&
        ![
          "برای", "میخوام", "میخواهم", "پیدا", "کن",
          "بده", "نشان", "بدهید", "محصولات", "محصول",
          "قیمت", "تومان", "هزار", "زیر", "کمتر",
          "ارزان", "ترین", "لطفا", "لطفاً"
        ].includes(word)
      );

    if (!category && usefulTerms.length) {
      textMatch = usefulTerms.some(term => productText.includes(term));
    }

    if (wantsCheap || wantsDiscount || wantsPopular) {
      textMatch = true;
    }

    return categoryMatch && priceMatch && available && textMatch;
  });

  if (wantsCheap) {
    result.sort((a, b) => a.price - b.price);
  } else if (wantsDiscount) {
    result = result.filter(product => getDiscount(product) > 0);
    result.sort((a, b) => getDiscount(b) - getDiscount(a));
  } else if (wantsPopular) {
    result.sort((a, b) => (b.sold || 0) - (a.sold || 0));
  } else if (maxPrice !== null) {
    result.sort((a, b) => a.price - b.price);
  }

  if (result.length > 9) result = result.slice(0, 9);

  const explanations = [];

  if (category) explanations.push(`دسته‌بندی: ${category}`);
  if (maxPrice !== null) explanations.push(`حداکثر قیمت: ${money(maxPrice)}`);
  if (wantsDiscount) explanations.push("محصولات دارای تخفیف");
  if (wantsCheap) explanations.push("مرتب‌شده از ارزان‌ترین");
  if (wantsPopular) explanations.push("محصولات محبوب‌تر");

  return {
    products: result,
    explanation: explanations.length
      ? explanations.join(" • ")
      : "نتایج بر اساس اطلاعات و مشخصات محصولات فعلی فروشگاه پیدا شده‌اند."
  };
}

function runSmartSearch(query) {
  const response = $("#aiResponse");
  const title = $("#aiResponseTitle");
  const description = $("#aiResponseDescription");
  const results = $("#aiResults");

  const result = smartSearch(query);

  response.classList.add("show");

  title.textContent = result.products.length
    ? `${new Intl.NumberFormat("fa-IR").format(result.products.length)} محصول پیدا شد`
    : "محصولی پیدا نشد";

  description.textContent = result.explanation;

  if (!result.products.length) {
    results.innerHTML = `
      <div class="empty-state">
        محصولی با این مشخصات پیدا نشد.
        <br>
        نام دسته‌بندی یا بودجه را تغییر بده.
      </div>
    `;
  } else {
    results.innerHTML = result.products.map(product => `
      <div class="ai-result-item">

        <strong>${escapeHTML(product.name)}</strong>

        <span>${escapeHTML(product.category)}</span>

        <div style="font-weight:800;margin-top:8px">
          ${money(product.price)}
        </div>

        <button
          class="small-button"
          style="margin-top:10px"
          data-ai-product="${escapeHTML(product.id)}"
        >
          مشاهده محصول
        </button>

      </div>
    `).join("");
  }

  response.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

$("#aiSearchForm").addEventListener("submit", event => {
  event.preventDefault();
  runSmartSearch($("#aiSearchInput").value);
});

$$(".ai-example").forEach(button => {
  button.addEventListener("click", () => {
    $("#aiSearchInput").value = button.dataset.query;
    runSmartSearch(button.dataset.query);
  });
});

$("#aiResults").addEventListener("click", event => {
  const button = event.target.closest("[data-ai-product]");
  if (!button) return;

  openProductDetails(button.dataset.aiProduct);
});

$("#aiSearchInput").addEventListener("keydown", event => {
  if (event.key === "Escape") {
    $("#aiResponse").classList.remove("show");
  }
});

/* ==========================================
   مدیریت محصولات و سفارش‌ها
   ========================================== */

function adminSwitchTab(tabId) {
  $$(".admin-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === tabId);
  });

  $$(".admin-sidebar [data-admin-tab]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.adminTab === tabId
    );
  });
}

$$(".admin-sidebar [data-admin-tab]").forEach(button => {
  button.addEventListener("click", () => {
    adminSwitchTab(button.dataset.adminTab);
  });
});

$("#goAddProduct").addEventListener("click", () => {
  resetProductForm();
  adminSwitchTab("addProductPanel");
});

function renderAdmin() {
  $("#statProducts").textContent =
    new Intl.NumberFormat("fa-IR").format(products.length);

  $("#statOrders").textContent =
    new Intl.NumberFormat("fa-IR").format(orders.length);

  const revenue = orders.reduce((total, order) => {
    return total + Number(order.total || 0);
  }, 0);

  $("#statRevenue").textContent = money(revenue);

  renderAdminProducts();
  renderAdminOrders();
}

function renderAdminProducts() {
  const tbody = $("#adminProductsTable");

  if (!products.length) {
    tbody.innerHTML = `
      <tr><td colspan="5">محصولی وجود ندارد.</td></tr>
    `;
    return;
  }

  tbody.innerHTML = products.map(product => `
    <tr>
      <td>${escapeHTML(product.name)}</td>
      <td>${escapeHTML(product.category)}</td>
      <td>${money(product.price)}</td>
      <td>${new Intl.NumberFormat("fa-IR").format(product.stock)}</td>
      <td>
        <div class="table-actions">

          <button
            class="small-button"
            data-edit-product="${escapeHTML(product.id)}"
          >ویرایش</button>

          <button
            class="small-button danger"
            data-delete-product="${escapeHTML(product.id)}"
          >حذف</button>

        </div>
      </td>
    </tr>
  `).join("");
}

function renderAdminOrders() {
  const tbody = $("#adminOrdersTable");

  if (!orders.length) {
    tbody.innerHTML = `
      <tr><td colspan="5">هنوز سفارشی ثبت نشده است.</td></tr>
    `;
    return;
  }

  tbody.innerHTML = [...orders].reverse().map(order => {
    let statusClass = "status-new";

    if (order.status === "ارسال‌شده") statusClass = "status-shipped";
    if (order.status === "تحویل‌شده") statusClass = "status-delivered";

    return `
      <tr>
        <td>${escapeHTML(order.id)}</td>
        <td>${escapeHTML(order.customer?.name || "—")}</td>
        <td>${money(order.total)}</td>
        <td>
          <span class="admin-status ${statusClass}">
            ${escapeHTML(order.status)}
          </span>
        </td>
        <td>
          <div class="table-actions">

            <button
              class="small-button"
              data-view-order="${escapeHTML(order.id)}"
            >جزئیات</button>

            <button
              class="small-button"
              data-next-status="${escapeHTML(order.id)}"
            >تغییر وضعیت</button>

          </div>
        </td>
      </tr>
    `;
  }).join("");
}

$("#adminProductsTable").addEventListener("click", event => {
  const editButton = event.target.closest("[data-edit-product]");
  const deleteButton = event.target.closest("[data-delete-product]");

  if (editButton) {
    editProduct(editButton.dataset.editProduct);
  }

  if (deleteButton) {
    deleteProduct(deleteButton.dataset.deleteProduct);
  }
});

function editProduct(id) {
  const product = getProduct(id);
  if (!product) return;

  $("#editProductId").value = product.id;
  $("#adminProductName").value = product.name;
  $("#adminProductBrand").value = product.brand || "";
  $("#adminProductCategory").value = product.category;
  $("#adminProductPrice").value = product.price;
  $("#adminProductOldPrice").value = product.oldPrice || "";
  $("#adminProductStock").value = product.stock;
  $("#adminProductImage").value = product.image || "";
  $("#adminProductDescription").value = product.description || "";

  $("#productFormTitle").textContent = "ویرایش محصول";

  adminSwitchTab("addProductPanel");
}

function resetProductForm() {
  $("#adminProductForm").reset();
  $("#editProductId").value = "";
  $("#adminProductStock").value = "10";
  $("#productFormTitle").textContent = "افزودن محصول جدید";
}

$("#cancelEditProduct").addEventListener("click", resetProductForm);

function deleteProduct(id) {
  const product = getProduct(id);
  if (!product) return;

  const confirmed = confirm(
    `آیا از حذف محصول «${product.name}» مطمئنی؟`
  );

  if (!confirmed) return;

  products = products.filter(item => item.id !== id);
  cart = cart.filter(item => item.id !== id);

  if (!saveProducts()) return;

  saveCart();

  renderProducts();
  renderCart();
  renderAdmin();

  toast("محصول حذف شد.");
}

$("#adminProductForm").addEventListener("submit", event => {
  event.preventDefault();

  const id = $("#editProductId").value;

  const name = $("#adminProductName").value.trim();
  const brand = $("#adminProductBrand").value.trim();
  const category = $("#adminProductCategory").value;
  const price = Number($("#adminProductPrice").value);
  const oldPrice = Number($("#adminProductOldPrice").value) || 0;
  const stock = Number($("#adminProductStock").value);
  const image = $("#adminProductImage").value.trim();
  const description = $("#adminProductDescription").value.trim();

  if (!name || !category) {
    toast("نام و دسته‌بندی محصول ضروری است.");
    return;
  }

  if (!Number.isFinite(price) || price < 0 || price > 100000000000) {
    toast("قیمت واردشده معتبر نیست.");
    return;
  }

  if (!Number.isInteger(stock) || stock < 0 || stock > 1000000) {
    toast("موجودی باید یک عدد صحیح و غیرمنفی باشد.");
    return;
  }

  if (oldPrice > 0 && oldPrice < price) {
    toast("قیمت قبلی نباید از قیمت فعلی کمتر باشد.");
    return;
  }

  if (image && !/^https:\/\/[^\s"'<>]+$/i.test(image)) {
    toast("آدرس تصویر باید با https:// شروع شود.");
    return;
  }

  const product = {
    id: id || createId(),
    name,
    brand,
    category,
    price,
    oldPrice,
    stock,
    sold: id ? (getProduct(id)?.sold || 0) : 0,
    tag: oldPrice > price && oldPrice > 0 ? "تخفیف" : "",
    description,
    image: image || DEFAULT_PRODUCTS[0].image
  };

  if (id) {
    products = products.map(item => item.id === id ? product : item);
  } else {
    products.push(product);
  }

  if (!saveProducts()) return;

  resetProductForm();

  renderProducts();
  renderCart();
  renderAdmin();

  adminSwitchTab("productsPanel");

  toast(id ? "محصول ویرایش شد." : "محصول جدید اضافه شد.");
});

$("#adminOrdersTable").addEventListener("click", event => {
  const viewButton = event.target.closest("[data-view-order]");
  const statusButton = event.target.closest("[data-next-status]");

  if (viewButton) {
    showOrderDetails(viewButton.dataset.viewOrder);
  }

  if (statusButton) {
    advanceOrderStatus(statusButton.dataset.nextStatus);
  }
});

function showOrderDetails(id) {
  const order = orders.find(item => item.id === id);
  if (!order) return;

  const itemsText = order.items.map(item =>
    `${item.name} × ${item.quantity} — ${money(item.price * item.quantity)}`
  ).join("\n");

  alert(
    `شماره سفارش: ${order.id}\n` +
    `نام: ${order.customer.name}\n` +
    `موبایل: ${order.customer.phone}\n` +
    `استان: ${order.customer.province}\n` +
    `شهر: ${order.customer.city}\n` +
    `آدرس: ${order.customer.address}\n` +
    `کد پستی: ${order.customer.postal}\n\n` +
    `محصولات:\n${itemsText}\n\n` +
    `مبلغ: ${money(order.total)}\n` +
    `وضعیت: ${order.status}\n\n` +
    `یادداشت: ${order.customer.notes || "ندارد"}`
  );
}

function advanceOrderStatus(id) {
  const order = orders.find(item => item.id === id);
  if (!order) return;

  const statuses = ["ثبت‌شده", "در حال آماده‌سازی", "ارسال‌شده", "تحویل‌شده"];
  const index = statuses.indexOf(order.status);

  order.status = statuses[(index + 1) % statuses.length];

  if (!saveOrders()) return;

  renderAdmin();
  toast("وضعیت سفارش تغییر کرد.");
}

/* ==========================================
   ورود به پنل مدیر
   ========================================== */

$("#adminLoginForm").addEventListener("submit", event => {
  event.preventDefault();

  const password = $("#adminPassword").value;

  /*
    این رمز فقط برای دموی محلی است.
    اعتبارسنجی سمت مرورگر امنیت واقعی ایجاد نمی‌کند.
  */

  if (password !== CONFIG.adminDemoPassword) {
    toast("رمز واردشده اشتباه است.");
    return;
  }

  adminLoggedIn = true;

  $("#adminLoginArea").classList.add("hidden");
  $("#adminDashboard").classList.remove("hidden");

  $("#adminPassword").value = "";

  renderAdmin();
  adminSwitchTab("dashboardPanel");

  toast("وارد پنل آزمایشی شدی.");
});

function openAdmin() {
  $("#adminLoginArea").classList.remove("hidden");
  $("#adminDashboard").classList.add("hidden");

  showModal("adminModal");
}

function logoutAdmin() {
  adminLoggedIn = false;

  $("#adminLoginArea").classList.remove("hidden");
  $("#adminDashboard").classList.add("hidden");

  hideModal("adminModal");
  toast("از پنل خارج شدی.");
}

$("#adminLogoutButton").addEventListener("click", logoutAdmin);

/* ==========================================
   میانبر مخفی برای دموی پنل مدیریت
   ========================================== */

/*
  برای باز کردن پنل:
  روی نام MATTE BEAUTY در هدر پنج بار کلیک کن.
*/

let logoClickCount = 0;
let logoClickTimer = null;

$(".logo").addEventListener("click", event => {
  event.preventDefault();

  logoClickCount++;

  clearTimeout(logoClickTimer);

  logoClickTimer = setTimeout(() => {
    logoClickCount = 0;
  }, 1800);

  if (logoClickCount >= 5) {
    logoClickCount = 0;
    openAdmin();
  }
});

/* ==========================================
   بستن پنجره‌ها
   ========================================== */

$$("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    hideModal(button.dataset.close);
  });
});

$$(".modal-wrap").forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.remove("show");

      if (!$(".modal-wrap.show") && !$("#cartDrawer").classList.contains("show")) {
        document.body.style.overflow = "";
      }
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  $$(".modal-wrap.show").forEach(modal => {
    modal.classList.remove("show");
  });

  closeCart();
  document.body.style.overflow = "";
});

/* ==========================================
   خبرنامه آزمایشی
   ========================================== */

$("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();

  const email = $("#newsletterEmail").value.trim();

  if (!email) {
    toast("ایمیل را وارد کن.");
    return;
  }

  toast("این بخش نمایشی است؛ ایمیل جایی ارسال نشد.");
  event.currentTarget.reset();
});

/* ==========================================
   پیوندهای فوتر
   ========================================== */

$("#footerAccount").addEventListener("click", event => {
  event.preventDefault();
  $("#accountButton").click();
});

$("#footerCart").addEventListener("click", event => {
  event.preventDefault();
  openCart();
});

$("#footerOrders").addEventListener("click", event => {
  event.preventDefault();

  if (!orders.length) {
    toast("هنوز سفارش آزمایشی ثبت نشده است.");
    return;
  }

  const latest = orders[orders.length - 1];

  alert(
    `آخرین سفارش آزمایشی:\n` +
    `شماره: ${latest.id}\n` +
    `وضعیت: ${latest.status}\n` +
    `مبلغ: ${money(latest.total)}`
  );
});

/* ==========================================
   آماده‌سازی اولیه
   ========================================== */

function initializeStore() {
  normalizeCart();

  renderProducts();
  renderCart();
  renderAdmin();

  if (account) {
    renderAccountStatus();
  }

  console.log("MATTE BEAUTY demo initialized.");
}

initializeStore();

/* ==========================================
   پایان فایل
   ========================================== */
