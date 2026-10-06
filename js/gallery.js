// XC24 Diagnostics — carrusel de capturas (de a 2) + lightbox para agrandarlas.
// Nada de frameworks, mismo criterio que i18n.js.

function initScreenshotCarousel() {
  const track = document.querySelector('.screenshot-track');
  const pages = document.querySelectorAll('.screenshot-page');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dots = document.querySelectorAll('.carousel-dots .dot');

  if (!track || pages.length === 0 || !prevBtn || !nextBtn) return;

  let current = 0;
  const total = pages.length;

  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  function goPrev() {
    if (current > 0) {
      current -= 1;
      update();
    }
  }

  function goNext() {
    if (current < total - 1) {
      current += 1;
      update();
    }
  }

  prevBtn.addEventListener('click', goPrev);
  nextBtn.addEventListener('click', goNext);

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const page = parseInt(dot.getAttribute('data-page'), 10);
      if (!Number.isNaN(page)) {
        current = page;
        update();
      }
    });
  });

  // Flechas del teclado para avanzar/retroceder — no interfiere si el
  // lightbox está abierto (ahí Escape ya cierra la imagen agrandada).
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('screenshot-lightbox');
    if (lightbox && !lightbox.hidden) return;
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  });

  update();
}

function initScreenshotLightbox() {
  const lightbox = document.getElementById('screenshot-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const images = Array.from(document.querySelectorAll('.screenshot-card img'));

  if (!lightbox || !lightboxImg || !closeBtn || images.length === 0) return;

  let currentIndex = 0;

  function show(index) {
    // módulo "positivo" para que cicle en los dos sentidos (de la última a
    // la primera y viceversa) sin importar cuántas capturas haya.
    currentIndex = (index + images.length) % images.length;
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  function openLightbox(index) {
    show(index);
    lightbox.hidden = false;
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
  }

  function showPrev() { show(currentIndex - 1); }
  function showNext() { show(currentIndex + 1); }

  images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (nextBtn) nextBtn.addEventListener('click', showNext);

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}

function initGallery() {
  initScreenshotCarousel();
  initScreenshotLightbox();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  initGallery();
}
