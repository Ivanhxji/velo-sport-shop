/* ============================================
   SPORT SHOP — App Logic
   ============================================ */

// ——— PRODUCT DATA ———
const products = [
  // === RUNNING ===
  {
    id: 1,
    name: 'Air Phantom Running Shoes',
    category: 'running',
    collection: ['bestseller', 'sale'],
    price: 189,
    oldPrice: 249,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    desc: 'Ultra-lightweight running shoes with carbon fiber plate for maximum energy return. Breathable mesh upper, cloud-like cushioning.',
    rating: 4.9,
    reviews: 342
  },
  {
    id: 2,
    name: 'Velocity Pro Compression Tights',
    category: 'running',
    collection: ['new'],
    price: 89,
    oldPrice: null,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Graduated compression for faster recovery. Reflective details for night runs. Phone pocket with secure zip. Flatlock seams prevent chafing.',
    rating: 4.7,
    reviews: 128
  },
  {
    id: 3,
    name: 'Carbon Sprint Racing Flats',
    category: 'running',
    collection: ['bestseller'],
    price: 219,
    oldPrice: null,
    badge: 'hot',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
    sizes: ['39', '40', '41', '42', '43', '44'],
    desc: 'Race-day carbon plate shoes. 40% energy return, ultra-responsive ZoomX foam. Sub-200g per shoe. Built for PRs.',
    rating: 4.8,
    reviews: 89
  },
  {
    id: 4,
    name: 'CloudStride Daily Trainer',
    category: 'running',
    collection: ['new'],
    price: 159,
    oldPrice: null,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    desc: 'Everyday running shoe with plush cushioning for long miles. Engineered mesh for breathability. Durable rubber outsole.',
    rating: 4.6,
    reviews: 215
  },
  {
    id: 5,
    name: 'AeroLite Running Singlet',
    category: 'running',
    collection: [],
    price: 45,
    oldPrice: 65,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    desc: 'Featherweight race singlet. Laser-cut ventilation, anti-odor treatment. Weighs only 68g.',
    rating: 4.5,
    reviews: 67
  },

  // === TRAINING ===
  {
    id: 6,
    name: 'Stealth Training Shorts',
    category: 'training',
    collection: ['bestseller'],
    price: 59,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=600&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    desc: 'Moisture-wicking, 4-way stretch fabric. Built-in compression liner. Zippered pocket for essentials.',
    rating: 4.8,
    reviews: 456
  },
  {
    id: 7,
    name: 'Pulse Heart Rate Band',
    category: 'training',
    collection: ['new', 'bestseller'],
    price: 129,
    oldPrice: null,
    badge: 'hot',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop',
    sizes: ['S/M', 'L/XL'],
    desc: '24/7 heart rate monitoring. GPS tracking, sleep analysis, 7-day battery life. Water resistant to 50m. Smart notifications.',
    rating: 4.7,
    reviews: 312
  },
  {
    id: 8,
    name: 'Power Grip Training Gloves',
    category: 'training',
    collection: [],
    price: 45,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Full palm silicone grip pads. Wrist wrap support for heavy lifts. Ventilated back. Pull-tab for easy removal.',
    rating: 4.4,
    reviews: 198
  },
  {
    id: 9,
    name: 'Titan Resistance Bands Set',
    category: 'training',
    collection: ['sale'],
    price: 39,
    oldPrice: 59,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=600&fit=crop',
    sizes: ['Light', 'Medium', 'Heavy', 'Full Set'],
    desc: '5-band set from 10 to 50 lbs. Natural latex, anti-snap technology. Includes door anchor, ankle straps, and carry bag.',
    rating: 4.6,
    reviews: 534
  },
  {
    id: 10,
    name: 'Pro Gym Duffel Bag',
    category: 'training',
    collection: ['new'],
    price: 79,
    oldPrice: null,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    sizes: ['40L', '55L'],
    desc: 'Waterproof base, ventilated shoe compartment. Padded laptop sleeve. YKK zippers. Lifetime warranty.',
    rating: 4.8,
    reviews: 176
  },
  {
    id: 11,
    name: 'Flex Performance Tank',
    category: 'training',
    collection: [],
    price: 35,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    desc: 'Quick-dry fabric, muscle-fit cut. Dropped armholes for full range of motion. Anti-stink treatment lasts 30+ washes.',
    rating: 4.3,
    reviews: 89
  },

  // === YOGA ===
  {
    id: 12,
    name: 'Zen Flow Yoga Mat',
    category: 'yoga',
    collection: ['bestseller'],
    price: 79,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop',
    sizes: ['Standard 68"', 'XL 72"'],
    desc: '6mm eco-friendly natural rubber. Superior grip wet and dry. Alignment markers built-in. Comes with carrying strap.',
    rating: 4.9,
    reviews: 621
  },
  {
    id: 13,
    name: 'Balance Cork Yoga Block',
    category: 'yoga',
    collection: ['sale'],
    price: 29,
    oldPrice: 39,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop',
    sizes: ['Single', 'Set of 2'],
    desc: 'Premium Portuguese cork. Beveled edges for comfort grip. Naturally antimicrobial. Supports up to 250 lbs.',
    rating: 4.7,
    reviews: 287
  },
  {
    id: 14,
    name: 'Serenity Meditation Cushion',
    category: 'yoga',
    collection: [],
    price: 49,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop',
    sizes: ['Standard'],
    desc: 'Buckwheat hull filling for perfect support. Organic cotton cover, removable and washable. 5" height for proper alignment.',
    rating: 4.6,
    reviews: 143
  },
  {
    id: 15,
    name: 'Flow Yoga Leggings',
    category: 'yoga',
    collection: ['new', 'bestseller'],
    price: 69,
    oldPrice: null,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    desc: 'Buttery soft, squat-proof fabric. High waist with hidden pocket. 4-way stretch. Available in 8 colors.',
    rating: 4.8,
    reviews: 892
  },
  {
    id: 16,
    name: 'Eco Yoga Strap',
    category: 'yoga',
    collection: [],
    price: 19,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=600&fit=crop',
    sizes: ['6 ft', '8 ft', '10 ft'],
    desc: 'Organic cotton with D-ring buckle. Extra wide 1.5" for grip comfort. Machine washable.',
    rating: 4.5,
    reviews: 76
  },

  // === OUTDOOR ===
  {
    id: 17,
    name: 'Summit Pro Hiking Jacket',
    category: 'outdoor',
    collection: ['bestseller', 'sale'],
    price: 299,
    oldPrice: 399,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: '3-layer waterproof shell, 15K/15K rating. Sealed seams, adjustable hood. Packs into its own pocket. Only 380g.',
    rating: 4.9,
    reviews: 234
  },
  {
    id: 18,
    name: 'Trail Beast Hydration Pack',
    category: 'outdoor',
    collection: ['bestseller'],
    price: 149,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600&h=600&fit=crop',
    sizes: ['S/M', 'L/XL'],
    desc: '12L capacity trail vest. Dual 500ml soft flasks included. Magnetic sternum strap, bounce-free fit. Whistle buckle.',
    rating: 4.7,
    reviews: 167
  },
  {
    id: 19,
    name: 'Alpine Carbon Trekking Poles',
    category: 'outdoor',
    collection: ['sale'],
    price: 109,
    oldPrice: 139,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=600&fit=crop',
    sizes: ['100-120cm', '110-130cm', '120-140cm'],
    desc: 'Full carbon fiber, only 195g each. Natural cork grips, fast-lock adjustment. Tungsten carbide tips with removable baskets.',
    rating: 4.6,
    reviews: 98
  },
  {
    id: 20,
    name: 'Trailbreaker Hiking Boots',
    category: 'outdoor',
    collection: ['new'],
    price: 199,
    oldPrice: null,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    desc: 'Vibram Megagrip outsole. Gore-Tex waterproof lining. Ankle support with flex zones. Break-in time: zero.',
    rating: 4.8,
    reviews: 312
  },
  {
    id: 21,
    name: 'UltraLight Down Vest',
    category: 'outdoor',
    collection: ['new'],
    price: 139,
    oldPrice: null,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: '800-fill premium goose down. Weighs only 180g. Packs into chest pocket. Wind-resistant Pertex shell.',
    rating: 4.7,
    reviews: 145
  },
  {
    id: 22,
    name: 'Adventure Headlamp Pro',
    category: 'outdoor',
    collection: ['bestseller'],
    price: 59,
    oldPrice: null,
    badge: 'hot',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=600&fit=crop',
    sizes: ['Standard'],
    desc: '350 lumens, 8 modes including red night vision. Rechargeable USB-C, 40h runtime on low. IPX6 waterproof. Only 65g.',
    rating: 4.8,
    reviews: 423
  },
  {
    id: 23,
    name: 'Merino Wool Base Layer',
    category: 'outdoor',
    collection: [],
    price: 89,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: '100% New Zealand merino wool, 200gsm. Naturally temperature-regulating, odor-resistant. Flatlock seams.',
    rating: 4.6,
    reviews: 189
  },
  {
    id: 24,
    name: 'Summit Insulated Water Bottle',
    category: 'outdoor',
    collection: [],
    price: 35,
    oldPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop',
    sizes: ['500ml', '750ml', '1L'],
    desc: 'Triple-wall vacuum insulation. Hot 12h, cold 24h. Leak-proof, BPA-free. Powder-coated finish.',
    rating: 4.5,
    reviews: 567
  },
];

// ——— COLLECTIONS DATA ———
const collections = [
  {
    id: 'new',
    name: 'New Arrivals',
    subtitle: 'Just dropped — fresh gear for the new season',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'bestseller',
    name: 'Best Sellers',
    subtitle: 'Top-rated by 50K+ athletes worldwide',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'sale',
    name: 'On Sale',
    subtitle: 'Limited time deals — up to 35% off',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

// ——— STATE ———
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let activeFilter = 'all';

// ——— DOM ELEMENTS ———
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ——— INIT ———
document.addEventListener('DOMContentLoaded', () => {
  renderCollections();
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

// ——— RENDER COLLECTIONS ———
function renderCollections() {
  const container = $('.collections-scroll');
  if (!container) return;

  container.innerHTML = collections.map(col => {
    const colProducts = products.filter(p => p.collection.includes(col.id));
    return `
      <div class="collection-card fade-in" onclick="showCollection('${col.id}')">
        <div class="collection-bg" style="background: ${col.gradient}"></div>
        <div class="collection-info">
          <h3>${col.name}</h3>
          <span>${colProducts.length} items</span>
        </div>
      </div>
    `;
  }).join('');
}

// ——— SHOW COLLECTION ———
function showCollection(collectionId) {
  // Set filter to all first
  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  $$('.filter-btn')[0].classList.add('active');
  activeFilter = 'all';

  // Filter by collection
  const grid = $('.products-grid');
  if (!grid) return;

  const filtered = products.filter(p => p.collection.includes(collectionId));
  renderProductCards(grid, filtered);

  // Update header
  const col = collections.find(c => c.id === collectionId);
  const header = $('#shop .section-header h2');
  const subtitle = $('#shop .section-header p');
  if (header && col) {
    header.textContent = col.name;
    subtitle.textContent = col.subtitle;
  }

  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// ——— RENDER PRODUCTS ———
function renderProducts() {
  const grid = $('.products-grid');
  if (!grid) return;

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  // Reset header if was changed by collection
  const header = $('#shop .section-header h2');
  const subtitle = $('#shop .section-header p');
  if (header) header.textContent = 'All Products';
  if (subtitle) subtitle.textContent = `${filtered.length} items — handpicked gear for peak performance`;

  renderProductCards(grid, filtered);
}

function renderProductCards(grid, items) {
  grid.innerHTML = items.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="transition-delay: ${i * 0.04}s">
      <div class="product-image" onclick="openModal(${p.id})">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge}</span>` : ''}
        <button class="product-wishlist" onclick="event.stopPropagation()">♡</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '½' : ''}</span>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
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
      setTimeout(() => card.classList.add('visible'), i * 50);
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
        <button class="btn btn-outline btn-sm" onclick="closeCart()" style="margin-top:16px">Continue Shopping</button>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return '';
      return `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
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
    <div class="modal-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal-content">
      <div class="modal-category">${product.category}</div>
      <div class="modal-title">${product.name}</div>
      <div class="modal-rating">
        <span class="stars">${'★'.repeat(Math.floor(product.rating))}</span>
        <span>${product.rating} · ${product.reviews} reviews</span>
      </div>
      <div class="modal-desc">${product.desc}</div>
      <div class="modal-price">
        $${product.price}
        ${product.oldPrice ? `<span class="modal-price-old">$${product.oldPrice}</span>` : ''}
        ${product.oldPrice ? `<span class="modal-save">Save $${product.oldPrice - product.price}</span>` : ''}
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
        <button class="btn btn-primary" style="flex:1" onclick="addToCart(${product.id}); closeModal();">Add to Cart — $${product.price}</button>
        <button class="btn-icon">♡</button>
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
