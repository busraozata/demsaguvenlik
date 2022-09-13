var swiperBanner = new Swiper(".mySwiperBanner", {});

const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
console.log(slideCount);
fraction.innerHTML = `<span class="start-count">1</span> <span class="counter-length">${slideCount}</span>`;

var swiperServices = new Swiper(".mySwiperServices", {
  spaceBetween: 10,
  autoHeight: true,
  navigation: {
    nextEl: "#swiper-button-next",
    prevEl: "#swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
  },
  on: {
    slideChange: () => {
      fraction.innerHTML = `<span class="start-count">${
        swiperServices.realIndex + 1
      }</span> <span class="counter-length">${slideCount}</span>`;
    },
  },
});

const fraction2 = document.getElementById("fraction2");
const slides2 = document.querySelectorAll(".slidee");
const slideCount2 = slides2.length;
console.log("iki", slideCount2);
fraction2.innerHTML = `<span class="start-count">1</span> <span class="counter-length">${slideCount2}</span>`;

var swiperBlog = new Swiper(".mySwiperBlog", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
  },
  on: {
    slideChange: () => {
      fraction2.innerHTML = `<span class="start-count">${
        swiperBlog.realIndex + 1
      }</span> <span class="counter-length">${slideCount2}</span>`;
    },
  },
});

function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html(),
    }).animate(
      {
        countNum: maxval,
      },
      {
        //duration 5 seconds
        duration: 1000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        },
      }
    );
  }
}

//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are
    //visible in the viewport
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  });
});
