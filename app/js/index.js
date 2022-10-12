import { Experience, NewsListData } from "./data.js";

const createUser = async (data) => {
  const btn = document.querySelector(".btn-sub");
  btn.setAttribute("disabled", true);
  btn.style.opacity = "0.8";
  try {
    const res = await axios.post(
      "https://kdtthanhha.herokuapp.com/api/users",
      data
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
  btn.style.opacity = "1";
  btn.removeAttribute("disabled");
};

const formSub = document.getElementById("form-subscribe");
formSub.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const type = formSub.querySelector('input[name="type"]:checked');
  createUser({
    name: name?.value,
    phone: phone?.value,
    type: type?.value,
  });
});

const slider = document.querySelector(".slider");
const swiperWrapper = slider.querySelector(".swiper-wrapper");
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

const NewSlide = new Swiper(".swiperNews", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
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

//Experience
const experience = document.querySelector(".experience-container");
const swiperWrapperEx = experience.querySelector(".swiper-wrapper");
swiperWrapperEx.innerHTML = Experience.map(
  (e) => `
  <div class="swiper-slide">
    <img src="${e}"/>
  </div>
`
).join("");

const ExSlide = new Swiper(".swiperExperience", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

//news
// const NewsList = document.querySelector(".news-list");
// NewsList.innerHTML = NewsListData.map((news) => {
//   return `
//   <div class="news-item">
//     <a href="${news.link}">
//       <div class="news-img">
//         <img
//           src="${news.img}"
//           alt="news"
//         />
//       </div>
//       <div class="news-content">
//         <span>TIN TỨC</span>
//         <div class="news-title">
//           ${news.title}
//         </div>
//         <p class="news-desc">
//           ${news.desc}
//         </p>
//       </div>
//     </a>
//   </div>`;
// }).join("");

//news-event
const NewsEvent = document.querySelector(".news-event-list");

NewsEvent.innerHTML = NewsListData.map((news, i) => {
  if (i < 7)
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
