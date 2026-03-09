/* ============================================
   SPORT SHOP — App Logic
   ============================================ */

// ——— PRODUCT DATA ———
const products = [
  {
    id: 1,
    name: 'Air Phantom Running Shoes',
    category: 'running',
    price: 189,
    oldPrice: 249,
    badge: 'sale',
    emoji: '👟',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    desc: 'Ultra-lightweight running shoes with carbon fiber plate for maximum energy return. Breathable mesh upper, cloud-like cushioning.'
  },
  {
    id: 2,
    name: 'Stealth Training Shorts',
    category: 'training',
    price: 59,
    oldPrice: null,
    badge: 'new',
    emoji: '🩳',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    desc: 'Moisture-wicking, 4-way stretch fabric. Built-in compression liner. Zippered pocket for essentials.'
  },
  {
    id: 3,
    name: 'Zen Flow Yoga Mat',
    category: 'yoga',
    price: 79,
    oldPrice: null,
    badge: null,
    emoji: '🧘',
    sizes: ['Standard', 'XL'],
    desc: '6mm eco-friendly natural rubber. Superior grip in wet and dry conditions. Alignment markers built-in.'
  },
  {
    id: 4,
    name: 'Summit Pro Hiking Jacket',
    category: 'outdoor',
    price: 299,
    oldPrice: 399,
    badge: 'sale',
    emoji: '🧥',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: '3-layer waterproof shell. Sealed seams, adjustable hood. Packs into its own pocket. 15K/15K waterproof/breathability.'
  },
  {
    id: 5,
    name: 'Pulse Heart Rate Band',
    category: 'training',
    price: 129,
    oldPrice: null,
    badge: 'hot',
    emoji: '⌚',
    sizes: ['S/M', 'L/XL'],
    desc: '24/7 heart rate monitoring. GPS tracking, sleep analysis, 7-day battery life. Water resistant to 50m.'
  },
  {
    id: 6,
    name: 'Velocity Pro Compression Tights',
    category: 'running',
    price: 89,
    oldPrice: null,
    badge: 'new',
    emoji: '👖',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Graduated compression for faster recovery. Reflective details, phone pocket. Flatlock seams prevent chafing.'
  },
  {
    id: 7,
    name: 'Balance Cork Yoga Block',
    category: 'yoga',
    price: 29,
    oldPrice: 39,
    badge: 'sale',
    emoji: '🧱',
    sizes: ['Standard'],
    desc: 'Premium Portuguese cork. Beveled edges for comfort. Naturally antimicrobial and eco-friendly.'
  },
  {
    id: 8,
    name: 'Trail Beast Running Pack',
    category: 'outdoor',
    price: 149,
    oldPrice: null,
    badge: null,
    emoji: '🎒',
    sizes: ['S/M', 'L/XL'],
    desc: '12L capacity hydration vest. Dual 500ml soft flasks included. Magnetic sternum strap, bounce-free fit.'
  },
  {
    id: 9,
    name: 'Power Grip Training Gloves',
    category: 'training',
    price: 45,
    oldPrice: null,
    badge: null,
    emoji: '🧤',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Full palm silicone grip. Wrist wrap support, ventilated back. Pull-tab for easy removal.'
  },
  {
    id: 10,
    name: 'Carbon Sprint Racing Flats',
    category: 'running',
    price: 219,
    oldPrice: null,
    badge: 'hot',
    emoji: '👟',
    sizes: ['39', '40', '41', '42', '43', '44'],
    desc: 'Race-day carbon plate shoes. 40% energy return, ultra-responsive foam. Sub-200g per shoe.'
  },
  {
    id: 11,
    name: 'Serenity Meditation Cushion',
    category: 'yoga',
    price: 49,
    oldPrice: null,
    badge: null,
    emoji: '🪷',
    sizes: ['Standard'],
    desc: 'Buckwheat hull filling, organic cotton cover. Ergonomic design supports proper alignment during meditation.'
  },
  {
    id: 12,
    name: 'Alpine Trekking Poles',
    category: 'outdoor',
    price: 109,
    oldPrice: 139,
    badge: 'sale',
    emoji: '🏔️',
    sizes: ['100-120cm', '110-130cm', '120-140cm'],
    desc: 'Carbon fiber construction, 195g each. Cork grips, fast-lock adjustment. Tungsten carbide tips.'
  },
];

// ——— STATE ———
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let activeFilter = 'all';

// ——— DOM ELEMENTS ———
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ——— INIT ———
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  initNavbar();
  initFilters();
  initScrollAnimations();
  initMobileMenu();
});

// ——— NAVBAR SCROLL ———
function initNavbar() {
  const navbar = $('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ——— MOBILE MENU ———
function initMobileMenu() {
  const toggle = $('.menu-toggle');
  const links = $('.nav-links');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('mobile-open');
    const spans = toggle.querySelectorAll('span');
    if (links.classList.contains('mobile-open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
}

// ——— FILTERS ———
function initFilters() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProducts();
    });
  });
}

// ——— RENDER PRODUCTS ———
function renderProducts() {
  const grid = $('.products-grid');
  if (!grid) return;

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="transition-delay: ${i * 0.05}s">
      <div class="product-image" onclick="openModal(${p.id})">
        <span class="product-image-placeholder">${p.emoji}</span>
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge}</span>` : ''}
        <button class="product-wishlist" onclick="event.stopPropagation()">♡</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-bottom">
          <div class="product-price">
            $${p.price}
            ${p.oldPrice ? `<span class="product-price-old">$${p.oldPrice}</span>` : ''}
          </div>
          <button class="product-add-btn" onclick="event.stopPropagation(); addToCart(${p.id})" title="Add to cart">+</button>
        </div>
      </div>
    </div>
  `).join('');

  // Animate cards in
  requestAnimationFrame(() => {
    grid.querySelectorAll('.product-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 60);
    });
  });
}

// ——— CART ———
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: productId, qty: 1, size: product.sizes[0] });
  }

  saveCart();
  updateCartUI();

  // Button animation
  const btn = document.querySelector(`.product-card[data-id="${productId}"] .product-add-btn`);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✓';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = '+';
    }, 1200);
  }

  showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const countEl = $('.cart-count');
  if (countEl) {
    countEl.textContent = count;
    countEl.classList.toggle('show', count > 0);
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

// ——— CART SIDEBAR ———
function openCart() {
  renderCartItems();
  $('.cart-overlay').classList.add('open');
  $('.cart-sidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('.cart-overlay').classList.remove('open');
  $('.cart-sidebar').classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartItems() {
  const container = $('.cart-items');
  const totalEl = $('.cart-total-value');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty</p>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return '';
      return `
        <div class="cart-item">
          <div class="cart-item-image">${product.emoji}</div>
          <div class="cart-item-details">
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-price">$${product.price}</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
        </div>
      `;
    }).join('');
  }

  if (totalEl) {
    totalEl.textContent = `$${getCartTotal()}`;
  }
}

// ——— PRODUCT MODAL ———
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = $('.modal-overlay');
  const content = modal.querySelector('.modal');

  content.innerHTML = `
    <div class="modal-image">${product.emoji}</div>
    <div class="modal-content">
      <div class="modal-category">${product.category}</div>
      <div class="modal-title">${product.name}</div>
      <div class="modal-desc">${product.desc}</div>
      <div class="modal-price">
        $${product.price}
        ${product.oldPrice ? `<span class="modal-price-old">$${product.oldPrice}</span>` : ''}
      </div>
      <div class="modal-sizes">
        <label>Select Size</label>
        <div class="size-options">
          ${product.sizes.map((s, i) => `
            <button class="size-btn ${i === 0 ? 'selected' : ''}" onclick="selectSize(this)">${s}</button>
          `).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();">Add to Cart — $${product.price}</button>
        <button class="btn-icon" onclick="closeModal()">♡</button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('.modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function selectSize(el) {
  el.parentElement.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
}

// ——— TOAST NOTIFICATIONS ———
function showToast(message) {
  let toast = $('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `✓ ${message}`;
  toast.classList.remove('show');
  void toast.offsetWidth; // reflow
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ——— SCROLL ANIMATIONS ———
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  $$('.fade-in').forEach(el => observer.observe(el));
}

// ——— SMOOTH SCROLL FOR NAV LINKS ———
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  e.preventDefault();
  const target = document.querySelector(anchor.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    $('.nav-links')?.classList.remove('mobile-open');
  }
});

// ——— CLOSE OVERLAYS ON CLICK OUTSIDE ———
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-overlay')) closeCart();
  if (e.target.classList.contains('modal-overlay')) closeModal();
});

// ——— ESCAPE KEY ———
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    closeModal();
  }
});

// ——— NEWSLETTER ———
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input.value) {
    showToast('Thanks for subscribing!');
    input.value = '';
  }
}
