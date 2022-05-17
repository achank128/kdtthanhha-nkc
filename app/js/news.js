import { NewsListData } from "./data.js";

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
      <div class="news-content-item">
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
