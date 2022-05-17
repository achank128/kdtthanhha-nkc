import { NewsListData } from "./data.js";
const slider = document.querySelector(".slider");
const sliderContent = slider.querySelector(".slider-content");
const slidePrev = slider.querySelector(".slide-prev");
const slideNext = slider.querySelector(".slide-next");
const dotContainer = slider.querySelector(".dot-container");
sliderContent.innerHTML = NewsListData.map((newItem, index) => {
  return `
  <div class="slide-img-${index}">
    <a
      href="./7-tip-dau-tu-bat-dong-san-khu-do-thi-thanh-ha-khong-lo.html"
    >
      <div class="img">
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

slider.addEventListener("mouseenter", () => {
  slidePrev.classList.add("prev-active");
  slideNext.classList.add("next-active");
});
slider.addEventListener("mouseleave", () => {
  slidePrev.classList.remove("prev-active");
  slideNext.classList.remove("next-active");
});

dotContainer.innerHTML = NewsListData.map((slider, index) => {
  return `<div class="dot dot${index}"></div>`;
}).join("");
const dots = slider.querySelectorAll(".dot");

let slideIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    resetDot();
    carousel();
  });
});
const resetDot = () => {
  dots.forEach((dot) => {
    dot.classList.remove("dot-current");
  });
  const dotCurrent = slider.querySelector(`.dot${slideIndex}`);
  dotCurrent.classList.add("dot-current");
};
resetDot();

const carousel = () => {
  sliderContent.style.transform = `translateX(-${slideIndex * 100}%)`;
};

const autoShow = () => {
  if (slideIndex < NewsListData.length) {
    slideIndex++;
  }
  if (slideIndex === NewsListData.length) {
    slideIndex = 0;
  }
  carousel();
  resetDot();
};
setInterval(autoShow, 4000);

slidePrev.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = NewsListData.length - 1;
  }
  carousel();
  resetDot();
});

slideNext.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > NewsListData.length - 1) {
    slideIndex = 0;
  }
  carousel();
  resetDot();
});

//news
const NewsList = document.querySelector(".news-list");
NewsList.innerHTML = NewsListData.map((news) => {
  return `
  <div class="news-item">
    <a href=${news.link}>
      <div class="news-img">
        <img
          src=${news.img}
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
