import { ProjectData } from "./data.js";

const ProjectList = document.querySelector(".project-list");

ProjectList.innerHTML = ProjectData.map((proj) => {
  return `
  <div class="project-item">
    <a href=${proj.link}>
      <div class="project-img">
        <img
          src=${proj.img}
          alt="project"
        />
      </div>
      <div class="project-content-item">
        <span>DỰ ÁN</span>
        <div class="project-title">
          ${proj.title}
        </div>
        <p class="project-desc">
          ${proj.desc}
        </p>
      </div>
    </a>
  </div>`;
}).join("");
