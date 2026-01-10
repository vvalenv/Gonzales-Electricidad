import 'swiper/css/bundle';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
export function initSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    centeredSlides: true,

    slidesPerView: 1, // Empieza con 1 para probar
    spaceBetween: 20,
    // Si quieres que se vean varios slides:
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
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