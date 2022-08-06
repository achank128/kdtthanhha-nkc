import { NewsListData } from "./data.js";

var swiper = new Swiper(".swiperNews", {
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperWrapper = document.querySelector(".swiper-wrapper");
swiperWrapper.innerHTML = NewsListData.map((newItem) => {
  return `
  <div class="swiper-slide">
    <a
      href="./7-tip-dau-tu-bat-dong-san-khu-do-thi-thanh-ha-khong-lo.html"
    >
      <div class="new-img">
        <img
          src="${newItem.img}"
          alt=""
        />
      </div>
      <div class="title">
        <h4>
        ${newItem.title}
        </h4>
      </div>
    </a>
  </div>
  `;
}).join("");

//news
const NewsList = document.querySelector(".news-list");
NewsList.innerHTML = NewsListData.map((news) => {
  return `
  <div class="news-item">
    <a href="${news.link}">
      <div class="news-img">
        <img
          src="${news.img}"
          alt="news"
        />
      </div>
      <div class="news-content">
        <span>TIN TỨC</span>
        <div class="news-title">
          ${news.title}
        </div>
        <p class="news-desc">
          ${news.desc}
        </p>
      </div>
    </a>
  </div>`;
}).join("");
//news-event
const NewsEvent = document.querySelector(".news-event-list");
NewsEvent.innerHTML = NewsListData.map((news) => {
  return `
  <a href=${news.link}>
  <div class="news-event-item">
    <div class="news-event-img">
      <img
        src=${news.img}
        alt="news"
      />
    </div>
    <div class="news-content-item">
      <div class="news-title">
        ${news.title}
      </div>
      <span>TIN TỨC</span>
    </div>
  </div>
</a>
  `;
}).join("");
