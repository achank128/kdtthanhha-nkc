import { ProjectData } from "./data.js";

const ProjList = document.querySelector(".news-list");

ProjList.innerHTML = ProjectData.map((proj) => {
  return `
  <div class="news-item">
    <a href=${proj.link}>
      <div class="news-img">
        <img
          src=${proj.img}
          alt="news"
        />
      </div>
      <div class="news-content-item">
        <span>DỰ ÁN</span>
        <div class="news-title">
          ${proj.title}
        </div>
        <p class="news-desc">
          ${proj.desc}
        </p>
      </div>
    </a>
  </div>`;
}).join("");
