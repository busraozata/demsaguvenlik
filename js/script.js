const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length - 3;
console.log(slideCount);
fraction.innerHTML = `<span class="start-count">1</span> <span class="counter-length">${slideCount}</span>`;

var swiper = new Swiper(".mySwiperServices", {
  slidesPerView: 4,
  spaceBetween: 10,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChange: () => {
      fraction.innerHTML = `<span class="start-count">${
        swiper.realIndex + 1
      }</span> <span class="counter-length">${slideCount}</span>`;
    },
  },
});

var swiperBanner = new Swiper(".mySwiperBanner", {});
