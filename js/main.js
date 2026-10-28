/* ============================================
   أوتو بارتس — فرع وسط البلد
   Main JavaScript
   ============================================ */

'use strict';

/* ==================== i18n TRANSLATIONS ==================== */
const translations = {
  ar: {
    // Hero section
    'hero-h1':        'أوتو بارتس - فرع طيبة جراند مول',
    'hero-tag':       'فرع طيبة جراند مول',
    'hero-scroll':    'التمرير للأسفل',
    'hero-img-alt':   'واجهة فرع أوتو بارتس',
    // Hero nav cards descriptions
    'hnc-details':    'مساحة، عقد، وسعر الوحدة',
    'hnc-market':     'وحدات مجاورة للمقارنة',
    'hnc-location':   'خريطة تفاعلية وعنوان تفصيلي',
    'hnc-video':      'جولة مرئية للفرع والمحيط',
    'hnc-gallery':    'داخل وخارج وتفاصيل المخزن',
    // Navbar
    'nav-details':    'تفاصيل الفرع',
    'nav-video':      'فيديو توضيحي',
    'nav-market':     'بيانات السوق',
    'nav-location':   'الموقع',
    'nav-gallery':    'عرض الصور',
    // Details section
    'details-tag':    'بيانات الوحدة',
    'details-desc':   'السادس من اكتوبر - المحور المركزي - طيبة جراند مول - بعد ميدان فودافون مباشرتا',
    'details-li1':    'وحدة تجارية رقم 5 - الواجهه الأمامية - الطابق الأرضي',
    'details-li2':    'المساحة الأجمالية 65.5 م²',
    'details-li3':    'القيمة الإيجارية السنوية 290,000 جنية (24,200 جنية شهريا)',
    'details-li4':    'مدة العقد 7 سنوات - تاريخ بدايه العقد 1/7/2020 - تاريخ انتهاء العقد 30/6/2027',
    'details-price':  'السعر المطلوب من المالك 200,000 جنية/متر حسب الاسعار الحالية لسعر المتر لوحدات الواجهة الأمامية وتم التفاوض وصولا لمبلغ 170,000 جنية/متر في حاله دفع المبلغ بالكامل كاش حسب حاجته لسرعه البيع',
    // Market section
    'market-tag':     '<i class="fa-solid fa-chart-bar"></i> الوحدات المجاورة',
    'market-title':   'الوحدات التجارية المتاحة في المنطقة',
    'market-desc':    'معلومات مستخرجة من عروض رسمية — مايو 2026 — للاطلاع والمقارنة الذاتية',
    // Prop cards
    'prop1-status':   'تحت الإنشاء',
    'prop1-name':     'وحدة تجارية في مول وسط البلد — H-GR-C-14',
    'prop1-loc':      'مول وسط البلد، قسم ثان 6 أكتوبر، محافظة الجيزة',
    'prop2-loc':      'طيبة جراند مول',
    'prop3-loc':      'سنتر المختار بجوار المرور والجوازات',
    'prop-cta':       'عرض التفاصيل',
    // Location section
    'loc-tag':        'تفاصيل الموقع',
    'loc-title':      'طيبة جراند مول والمناطق المجاورة',
    'loc-desc':       'ميدان ليلة القدر — قسم ثانٍ 6 أكتوبر، محافظة الجيزة',
    // Video section
    'vid1-title':     'فيديو توضيحي للموقع',
    'vid1-desc':      'فيديو توضيحي لتفاصيل العقار والموقع المحيط.',
    'vid2-title':     'فيديو توضيحي للفرع من الداخل',
    'vid2-desc':      'فيديو توضيحي لتفاصيل الفرع',
    // Gallery section
    'gallery-tag':    'عرض الصور',
    'gallery-desc':   'صور الفرع — من الداخل والخارج ومخزن والمنطقة المحيطة',
    'filter-all':     'الكل',
    'filter-ext':     'خارجي',
    'filter-int':     'داخلي',
    'filter-storage': 'المخزن',
    // Footer
    'footer-slogan':  'أوتو بارتس — جميع قطع الغيار لجميع أنواع السيارات',
    'footer-addr':    'طيبة جراند مول، بعد ميدان فودافون، ميدان ليلة القدر، قسم ثانٍ 6 أكتوبر، الجيزة 12563',
    'footer-maps':    'عرض موقع الفرع على خرائط جوجل',
    // Prop names
    'brand-name':     'أوتو بارتس',
    'prop2-name':     'الوحدة رقم 2',
    // Prop names
    'brand-name':     'AutoParts',
    'prop2-name':     'Unit Number 2',
    // Aria labels
    'lb-close':       'إغلاق',
    'lb-prev':        'السابق',
    'lb-next':        'التالي',
    'back-top':       'العودة للأعلى',
  },

  en: {
    // Hero section
    'hero-h1':        'AutoParts — Tiba Grand Mall Branch',
    'hero-tag':       'Tiba Grand Mall Branch',
    'hero-scroll':    'Scroll down',
    'hero-img-alt':   'AutoParts branch facade',
    // Hero nav cards descriptions
    'hnc-details':    'Area, lease terms & unit price',
    'hnc-market':     'Nearby units for comparison',
    'hnc-location':   'Interactive map & detailed address',
    'hnc-video':      'Visual tour of branch & surroundings',
    'hnc-gallery':    'Interior, exterior & storage details',
    // Navbar
    'nav-details':    'Branch Details',
    'nav-video':      'Video Tour',
    'nav-market':     'Market Data',
    'nav-location':   'Location',
    'nav-gallery':    'Photo Gallery',
    // Details section
    'details-tag':    'Unit Details',
    'details-desc':   '6th of October — Central Axis — Tiba Grand Mall — Directly after Vodafone Square',
    'details-li1':    'Commercial Unit No. 5 — Front Facade — Ground Floor',
    'details-li2':    'Total Area: 65.5 m²',
    'details-li3':    'Annual Rental Value: EGP 290,000 (EGP 24,200 / month)',
    'details-li4':    'Lease Duration: 7 years | Start: 01/07/2020 | Expiry: 30/06/2027',
    'details-price':  'Owner asking price: EGP 200,000/m² based on current market rates for front-facade units. Negotiated down to EGP 170,000/m² for full cash payment due to urgency of sale.',
    // Market section
    'market-tag':     '<i class="fa-solid fa-chart-bar"></i> Units In The Area',
    'market-title':   'Available Commercial Units in the Area',
    'market-desc':    'Information extracted from official listings — May 2026 — for reference and self-comparison',
    // Prop cards
    'prop1-status':   'Under Construction',
    'prop1-name':     'Commercial Unit in West El Balad Mall — H-GR-C-14',
    'prop1-loc':      'West El Balad Mall, District 2, 6th of October, Giza Governorate',
    'prop2-loc':      'Tiba Grand Mall',
    'prop3-loc':      'El Mokhtar Centre, next to Traffic & Passports Dept.',
    'prop-cta':       'View Details',
    // Location section
    'loc-tag':        'Location Details',
    'loc-title':      'Tiba Grand Mall & Surrounding Area',
    'loc-desc':       'Laylat Al-Qadr Square — District 2, 6th of October, Giza Governorate',
    // Video section
    'vid1-title':     'Location Walkthrough Video',
    'vid1-desc':      'Illustrative video covering the property and its surroundings.',
    'vid2-title':     'Branch Interior Video',
    'vid2-desc':      'Illustrative video showing branch interior details.',
    // Gallery section
    'gallery-tag':    'Photo Gallery',
    'gallery-desc':   'Branch photos — Interior, Exterior, Storage & Surrounding Area',
    'filter-all':     'All',
    'filter-ext':     'Exterior',
    'filter-int':     'Interior',
    'filter-storage': 'Storage',
    // Footer
    'footer-slogan':  'AutoParts — All spare parts for all vehicle types',
    'footer-addr':    'Tiba Grand Mall, after Vodafone Square, Laylat Al-Qadr Square, District 2, 6th of October, Giza 12563',
    'footer-maps':    'View branch on Google Maps',
    // Aria labels
    'lb-close':       'Close',
    'lb-prev':        'Previous',
    'lb-next':        'Next',
    'back-top':       'Back to top',
  }
};

// bilingual propData for modal
const propDataI18n = {
  ar: {
    westelbalad: {
      name: 'وحدة تجارية في مول وسط البلد— H-GR-C-14',
      loc:  'مول وسط البلد, WWX3+5P3, west el balad, قسم ثان 6 أكتوبر، محافظة الجيزة',
      status: 'قيد الإنشاء',
      metrics: [
        {label:'صافي المساحة', val:'45 م²'},
        {label:'سعر المتر', val:'336,333 ج'},
        {label:'إجمالي سعر الوحدة', val:'15,135,000 ج'},
        {label:'أقساط على 8 سنوات والتسليم بعد سنة و6 أشهر', val:'', isNeg:true},
        {label:'الدور الأرضي، الوحدة رقم 14، مبنى 2 — على بعد 450 متر من طيبة جراند مول', val:''},
        {label:'مرفق ملف PDF بعرض سعر للوحدة يشمل كافة التفاصيل', val:''}
      ]
    },
    readyparts: {
      name: '',
      loc:  'الموقع: طيبة جراند مول',
      status: 'مُشغَّل',
      metrics: [
        {label:'صافي المساحة', val:'85 م²'},
        {label:'سعر المتر', val:'200,000 ج'},
        {label:'الدور الأرضي، واجهة خارجية بجوار الفرع مباشرةً', val:''},
        {label:'إجمالي سعر الوحدة', val:'17,000,000 ج قابل للتفاوض'},
        {label:'السعر النهائي حسب إفادة ادارة المول', val:'190,000 جنيه/متر كاش'},
        {label:'ايجار الوحدة', val:'50,000 جنية نهائي'}
      ]
    },
    centralauto: {
      name: '',
      loc:  'سنتر المختار بجوار المرور والجوازات',
      status: '',
      metrics: [
        {label:'صافي المساحة', val:'44 م²'},
        {label:'سعر المتر', val:'160,000 ج'},
        {label:'إجمالي سعر الوحدة', val:'7,040,000 ج قابل للتفاوض'},
        {label:'ايجار الوحدة', val:'35,000 جنية نهائي'}
      ]
    }
  },
  en: {
    westelbalad: {
      name: 'Commercial Unit in West El Balad Mall — H-GR-C-14',
      loc:  'West El Balad Mall, WWX3+5P3, District 2, 6th of October, Giza Governorate 3225002',
      status: 'Under Construction',
      metrics: [
        {label:'Net Area', val:'45 m²'},
        {label:'Price per m²', val:'EGP 336,333'},
        {label:'Total Unit Price', val:'EGP 15,135,000'},
        {label:'Installments over 8 years — delivery in 18 months', val:'', isNeg:true},
        {label:'Ground Floor, Unit 14, Building 2 — 450 m from Tiba Grand Mall', val:''},
        {label:'Official PDF price offer attached with full details', val:''}
      ]
    },
    readyparts: {
      name: 'ReadyParts',
      loc:  'Tiba Grand Mall',
      status: 'Operating',
      metrics: [
        {label:'Net Area', val:'85 m²'},
        {label:'Price per m²', val:'EGP 200,000'},
        {label:'Ground Floor — External Facade, directly adjacent to AutoParts branch', val:''},
        {label:'Total Unit Price', val:'EGP 17,000,000 — Negotiable'},
        {label:'Final price as confirmed by mall management', val:'EGP 190,000/m² cash'},
        {label:'Net Area', val:'85 m²'},
        {label:'Unit rent (final price) ', val:'50,000 per meter'}
      ]
    },
    centralauto: {
      name: '',
      loc:  'El Mokhtar Centre, next to Traffic & Passports Dept.',
      status: '',
      metrics: [
        {label:'Net Area', val:'44 m²'},
        {label:'Price per m²', val:'EGP 160,000'},
        {label:'Total Unit Price', val:'EGP 7,040,000 — Negotiable'},
        {label:'Unit rent (final price) ', val:'35,000 per meter'}

      ]
    }
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const isAr = lang === 'ar';
  const t = translations[lang];

  // Update html element
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.body.style.direction = isAr ? 'rtl' : 'ltr';

  // Update lang toggle button label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = isAr ? 'EN' : 'عر';
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      // Use innerHTML for keys that contain HTML tags (icons etc.)
      if (key === 'market-tag') {
        el.innerHTML = t[key];
      } else if (el.tagName === 'LI') {
        // Preserve the <i> icon child if present
        const icon = el.querySelector('i');
        el.textContent = t[key];
        if (icon) el.prepend(icon);
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update alt text attributes
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.dataset.i18nAlt;
    if (t[key]) el.setAttribute('alt', t[key]);
  });

  // Update aria-label attributes
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key]) el.setAttribute('aria-label', t[key]);
  });

  // Update page title
  document.title = isAr
    ? 'فرع طيبة جراند مول | 6 أكتوبر'
    : 'Property For Sale — Tiba Grand Mall Branch | 6th of October';

  // Rebuild lightbox index to pick up any text changes
  if (typeof buildLightboxIndex === 'function') buildLightboxIndex();
}

function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(next);

    // Smooth visual feedback
    btn.style.transform = 'scale(0.92)';
    setTimeout(() => { btn.style.transform = ''; }, 200);
  });
}



document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initBackToTop();
  initGalleryFilter();
  buildLightboxIndex();
  initLangToggle();
  setLanguage('en');
});

/* ==================== NAVBAR ==================== */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ==================== SCROLL REVEAL ==================== */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children if needed
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ==================== BACK TO TOP ==================== */
function initBackToTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==================== GALLERY FILTER ==================== */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items      = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      items.forEach(item => {
        const cat = item.dataset.cat;
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });

      // Rebuild lightbox index after filter
      buildLightboxIndex();
    });
  });
}

/* ==================== LIGHTBOX ==================== */
let lbImages = [];  // { src, caption }
let lbCurrent = 0;

function buildLightboxIndex() {
  lbImages = [];
  // Collect visible gallery items
  document.querySelectorAll('.gallery-item:not(.hidden)').forEach(item => {
    const img     = item.querySelector('img');
    const caption = item.querySelector('.gallery-overlay span');
    if (img) {
      lbImages.push({
        src: img.src,
        caption: caption ? caption.textContent : (img.alt || '')
      });
    }
  });
  // Also collect price images
  document.querySelectorAll('.price-img-card').forEach(card => {
    const img   = card.querySelector('img');
    const label = card.querySelector('.price-img-label');
    if (img) {
      lbImages.push({
        src: img.src,
        caption: label ? label.textContent : (img.alt || '')
      });
    }
  });
}

// Called from inline onclick
function openLightbox(el) {
  const img     = el.querySelector('img');
  const caption = el.querySelector('.gallery-overlay span, .price-img-label');
  if (!img) return;

  buildLightboxIndex();

  const src = img.src;
  const idx = lbImages.findIndex(i => i.src === src);
  lbCurrent = idx >= 0 ? idx : 0;

  showLb(lbCurrent);

  const lb = document.getElementById('lightbox');
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showLb(idx) {
  if (!lbImages.length) return;
  idx = ((idx % lbImages.length) + lbImages.length) % lbImages.length;
  lbCurrent = idx;
  const entry = lbImages[idx];
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCaption');
  if (lbImg) lbImg.src = entry.src;
  if (lbCap) lbCap.textContent = entry.caption || '';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  document.body.style.overflow = '';
}

function lbNav(dir, e) {
  e && e.stopPropagation();
  showLb(lbCurrent + dir);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb?.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowRight')  lbNav(-1, null); // RTL: right = previous
  if (e.key === 'ArrowLeft')   lbNav(1, null);
});

// Touch swipe for lightbox
(function initSwipe() {
  let touchStartX = 0;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) lbNav(diff > 0 ? 1 : -1, null);
  });
})();

/* ==================== VIDEO TOUR ==================== */
function playVideoFullscreen() {
  const v = document.getElementById('tourVideo');
  if (!v) return;
  quality: '1080p'
  
  if (v.requestFullscreen) {
    v.requestFullscreen();
  } else if (v.webkitRequestFullscreen) {
    v.webkitRequestFullscreen();
  } else if (v.msRequestFullscreen) {
    v.msRequestFullscreen();
  }
  
  v.controls = true;
  v.play();
}

function handleExitFS() {
  const v = document.getElementById('tourVideo');
  if (!v) return;
  
  const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  if (!isFullscreen) {
    v.pause();
    v.controls = false;
  }
}

document.addEventListener('fullscreenchange', handleExitFS);
document.addEventListener('webkitfullscreenchange', handleExitFS);
document.addEventListener('msfullscreenchange', handleExitFS);

/* ==================== CUSTOM LEAFLET MAP ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('custom-map');
  if (!mapEl || typeof L === 'undefined') return;

  // الإحداثيات الدقيقة بناءً على جوجل إيرث وجوجل ماب
  const tibaCoords = [29.94951227845929, 30.908621650466603]; // AutoParts
  const wustCoords = [29.947139982420932, 30.90487347892149]; // West El Balad (الموقع الجديد)
  const readyCoords = [29.949572122522376, 30.908847626574467]; // ReadyParts
  
  // المنتصف بين أبعد نقطتين (AutoParts و West El Balad)
  const centerCoords = [29.948319593334652, 30.906882521607123]; 

  const map = L.map('custom-map').setView(centerCoords, 17);

  // طبقة الأقمار الصناعية من Esri
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri',
    maxZoom: 19
  }).addTo(map);

  // تصميم النقطة
  const customIcon = L.divIcon({
    className: 'custom-map-pin',
    html: '<i class="fa-solid fa-location-dot"></i>',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -35]
  });

  // إضافة النقاط مع أسماء تظهر باستمرار (Tooltips)
  L.marker(tibaCoords, {icon: customIcon}).addTo(map)
    .bindTooltip('<div style="text-align:center;">محل اوتوبارتس<br><span style="font-size:0.75rem;opacity:0.9;">AutoParts</span></div>', {
      permanent: true,
      direction: 'top',
      className: 'custom-map-tooltip',
      offset: [0, -35]
    });

  L.marker(wustCoords, {icon: customIcon}).addTo(map)
    .bindTooltip('<div style="text-align:center;">مول وسط البلد<br><span style="font-size:0.75rem;opacity:0.9;">West El Balad Mall</span></div>', {
      permanent: true,
      direction: 'top',
      className: 'custom-map-tooltip',
      offset: [0, -35]
    });

  L.marker(readyCoords, {icon: customIcon}).addTo(map)
    .bindTooltip('<div style="text-align:center;">الوحدة رقم 2<br><span style="font-size:0.75rem;opacity:0.9;">Unit Number 2</span></div>', {
      permanent: true,
      direction: 'top',
      className: 'custom-map-tooltip',
      offset: [0, -35]
    });
});

// ==========================================
// Modal Logic for Property Cards
// ==========================================
const propData = {
  westelbalad: {
    name: 'وحدة تجارية في مول وسط البلد— H-GR-C-14',
    loc: 'مول وسط البلد, WWX3+5P3, west el balad, قسم ثان 6 أكتوبر، محافظة الجيزة 3225002',
    images: ['images/west el balad Mall.jpg', 'images/west el balad3.jpeg'],
    doc: {
      previewUrl: 'https://drive.google.com/file/d/18_ohCKEdF6DasdnSjLG-wJuSM2orsB5g/preview',
      openUrl:    'https://drive.google.com/file/d/18_ohCKEdF6DasdnSjLG-wJuSM2orsB5g/view?usp=drive_link',
      label: 'وثيقة إثبات رسمية'
    },
    status: 'قيد الإنشاء',
    statusClass: 'prop-status--pending',
    metrics: [
      {label: 'صافي المساحة', val: '45 م²'},
      {label: ' سعر المتر ', val: '336,333 ج'},
      {label: 'اجمالي سعر الوحدة', val: '15,135,000 ج'},
      {label: 'اقساط على 8 سنوات والتسليم بعد سنة و6 أشهر', val: '', isNeg: true},
      {label: 'الدور الأرضي الوحدة رقم 14 مبنى 2 موقع المول على بعد 450 متر من طيبة جراند مول', val: ''},
      {label: 'مرفق ملف PDF بعرض سعر للوحدة المشار اليها يشمل كافة التفاصيل', val: ''}
    ]
  },
  readyparts: {
    name: '',
    loc: 'الموقع طيبة جراند مول',
    images: ['images/readyparts.jpg', 'images/readyparts 2.jpg'],
    status: 'مُشغَّل',
    metrics: [
      {label: 'صافي المساحة', val: '85 م²'},
      {label: 'سعر المتر', val: '200,000 ج'},
      {label: 'الدور الأرضي واجهة خارجية بجوار الفرع مباشرتا ', val: ''},
      {label: 'اجمالي سعر الوحدة', val: '17,000,000 ج قابل التفاوض'},
      {label: 'مرفق ملف PDF بعرض سعر للوحدة المشار اليها يشمل كافة التفاصيل', val: ''}
    ]
  },
  centralauto: {
    name: '',
    loc: 'سنتر المختار بجوار المرور والجوازات',
    images: ['images/111.jpeg', 'images/el mokhtar 2.png'],
    video: {
      previewUrl: 'https://drive.google.com/file/d/1jKSP1XeLvpBWLzSvlMegI7AtlWj0WA6I/preview',
      openUrl:    'https://drive.google.com/file/d/1jKSP1XeLvpBWLzSvlMegI7AtlWj0WA6I/view?usp=drive_link',
      label: 'فيديو الوحدة'
    },
    metrics: [
      {label: 'صافي المساحة', val: '44 م²'},
      {label: 'سعر المتر', val: '160,000 ج'},
      {label: 'اجمالي سعر الوحدة', val: '7,040,000 ج قابل للتفاوض'},
    ]
  }
};

function openPropModal(id) {
  const data = propData[id];
  if(!data) return;
  // Use bilingual version if available
  const i18nData = propDataI18n[currentLang] && propDataI18n[currentLang][id]
    ? propDataI18n[currentLang][id]
    : data;

  const mainImg     = document.getElementById('pmImgMain');
  const docViewer   = document.getElementById('pmDocViewer');
  const docOpenBtn  = document.getElementById('pmDocOpenBtn');

  // Reset to image mode
  mainImg.style.display   = 'block';
  mainImg.src             = data.images[0];
  docViewer.style.display = 'none';
  docViewer.src           = '';
  docOpenBtn.style.display = 'none';

  const thumbsContainer = document.getElementById('pmThumbs');
  thumbsContainer.innerHTML = '';

  /* ---- صور الكارت ---- */
  data.images.forEach((src, idx) => {
    const thumbWrap = document.createElement('div');
    thumbWrap.className = 'pm-thumb' + (idx === 0 ? ' active' : '');

    const img = document.createElement('img');
    img.src = src;
    img.alt = (i18nData.name || data.name) + (currentLang === 'ar' ? ' - صورة ' : ' - Image ') + (idx + 1);

    thumbWrap.appendChild(img);
    thumbWrap.onclick = () => {
      // Switch back to image view
      docViewer.src           = '';
      docViewer.style.display = 'none';
      docOpenBtn.style.display = 'none';
      mainImg.style.display   = 'block';
      mainImg.src             = src;
      thumbsContainer.querySelectorAll('.pm-thumb').forEach(t => t.classList.remove('active'));
      thumbWrap.classList.add('active');
    };
    thumbsContainer.appendChild(thumbWrap);
  });

  /* ---- ثامبنيل المستند (إن وُجد) ---- */
  if (data.doc) {
    const docThumb = document.createElement('div');
    docThumb.className = 'pm-thumb pm-thumb-doc';
    docThumb.innerHTML = `
      <div class="pm-doc-thumb-inner">
        <i class="fa-solid fa-file-lines"></i>
        <span>${data.doc.label}</span>
      </div>
    `;
    docThumb.onclick = () => {
      mainImg.style.display    = 'none';
      docViewer.src            = data.doc.previewUrl;
      docViewer.style.display  = 'block';
      docOpenBtn.href          = data.doc.openUrl;
      docOpenBtn.innerHTML     = '<i class="fa-solid fa-arrow-up-right-from-square"></i> فتح المستند';
      docOpenBtn.style.display = 'flex';
      thumbsContainer.querySelectorAll('.pm-thumb').forEach(t => t.classList.remove('active'));
      docThumb.classList.add('active');
    };
    thumbsContainer.appendChild(docThumb);
  }

  /* ---- ثامبنيل الفيديو (إن وُجد) ---- */
  if (data.video) {
    const videoThumb = document.createElement('div');
    videoThumb.className = 'pm-thumb pm-thumb-video';
    videoThumb.innerHTML = `
      <div class="pm-doc-thumb-inner">
        <i class="fa-solid fa-circle-play"></i>
        <span>${data.video.label}</span>
      </div>
    `;
    videoThumb.onclick = () => {
      mainImg.style.display    = 'none';
      docViewer.src            = data.video.previewUrl;
      docViewer.style.display  = 'block';
      docOpenBtn.href          = data.video.openUrl;
      docOpenBtn.innerHTML     = '<i class="fa-solid fa-arrow-up-right-from-square"></i> فتح الفيديو';
      docOpenBtn.style.display = 'flex';
      thumbsContainer.querySelectorAll('.pm-thumb').forEach(t => t.classList.remove('active'));
      videoThumb.classList.add('active');
    };
    thumbsContainer.appendChild(videoThumb);
  }

  const statusEl = document.getElementById('pmStatus');
  statusEl.textContent = i18nData.status || '';
  statusEl.className = 'prop-status ' + (data.statusClass || '');

  document.getElementById('pmName').textContent = i18nData.name || data.name;
  document.getElementById('pmLoc').querySelector('span').textContent = i18nData.loc || data.loc;

  const metricsContainer = document.getElementById('pmMetrics');
  metricsContainer.innerHTML = '';

  (i18nData.metrics || data.metrics).forEach(m => {
    const div = document.createElement('div');
    div.className = 'prop-metric' + (m.isNeg ? ' prop-metric--neg' : '');
    div.innerHTML = `<span class="pm-label">${m.label}</span><span class="pm-val">${m.val}</span>`;
    metricsContainer.appendChild(div);
  });

  const modal = document.getElementById('propModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePropModal(e, force = false) {
  const modal = document.getElementById('propModal');
  if (force || (e && e.target === modal)) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset iframe src to stop loading
    const docViewer = document.getElementById('pmDocViewer');
    if (docViewer) { docViewer.src = ''; docViewer.style.display = 'none'; }
    const docOpenBtn = document.getElementById('pmDocOpenBtn');
    if (docOpenBtn) docOpenBtn.style.display = 'none';
    const mainImg = document.getElementById('pmImgMain');
    if (mainImg) mainImg.style.display = 'block';
  }
}
