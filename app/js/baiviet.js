import { NewsListData } from "./data.js";

const sodolink = window.location.search.slice(1, window.location.search.length);
const content = NewsListData.find((p) => p.name === sodolink);

const newsItem = document.getElementById("news-item");
newsItem.innerHTML = content.html;
document.title = content.title;

const NewsListDataFilter = NewsListData.filter((p) => p.name !== content.name);
const duAnKhac =
  NewsListDataFilter[Math.floor(Math.random() * NewsListDataFilter.length)];
const nextPost = newsItem.querySelector(".next-post");
nextPost.innerHTML = `
  <i class="fa-solid fa-arrow-right"></i>BÀI VIẾT KHÁC:
  <a href="${duAnKhac.link}">
    ${duAnKhac.title}
  </a>
`;
