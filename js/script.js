const menuToggle = document.querySelector(".menu-toggle");
const wrapper = document.querySelector(".wrapper");
const navigation = document.querySelector(".menu-area");
const collapse = document.querySelector(".collapse");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  collapse.classList.toggle("active");
  navigation.classList.toggle("active");
  wrapper.classList.toggle("menu--is-revealed");
  header.classList.toggle("bg-color");
  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};

const header = document.querySelector(".header");
const headerHeight = parseInt(window.getComputedStyle(header).height);

document.addEventListener("scroll", function () {
  if (window.scrollY > headerHeight) {
    header.classList.add("header_scroll");
  } else {
    header.classList.remove("header_scroll");
  }
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

$(document).ready(function () {

  $(".slider")
    .on("initialized.owl.carousel changed.owl.carousel", function (e) {
      if (!e.namespace) {
        return;
      }
      var carousel = e.relatedTarget;
      $(".start-count").text(carousel.relative(carousel.current()) +
        1)
      $(".counter-length").text(
        carousel.items().length
      );
    })
    .owlCarousel({
      items: 4,
      loop: true,
      margin: 20,
      navText: [`<div class='nav-button owl-prev'><img src="../img/left.png" class="img-fluid" alt="owl-rigth" /></div>`, `<div class='nav-button owl-next'><img src="../img/right.png" class="img-fluid" alt="owl-rigth" /></div>`],
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: true,
        },
        1400: {
          items: 4,
          nav: true,
          loop: true,
        },
      },
    });
});


var swiperBanner = new Swiper(".mySwiperBanner", {});

var swiper = new Swiper(".mySwiperLastPosts", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 5,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

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
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1366: {
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
      fraction.innerHTML = `<span class="start-count">${swiperServices.realIndex + 1
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
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
  },
  on: {
    slideChange: () => {
      fraction2.innerHTML = `<span class="start-count">${swiperBlog.realIndex + 1
        }</span> <span class="counter-length">${slideCount2}</span>`;
    },
  },
});

