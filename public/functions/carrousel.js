import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.mjs';
export function initSwiper() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,

    slidesPerView: 1, // Empieza con 1 para probar
    spaceBetween: 20,
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}