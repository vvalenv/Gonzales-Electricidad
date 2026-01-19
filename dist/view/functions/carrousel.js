import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.mjs';
export function initSwiper() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,

    slidesPerView: 1, // Empieza con 1 para probar
    spaceBetween: 20,
    // Si quieres que se vean varios slides:
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3, spaceBetween: 10 }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}