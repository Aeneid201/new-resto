import "./style.css";

// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// importing swiper
import Swiper from "swiper";
import "swiper/swiper.min.css";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  autoHeight: true,
});
