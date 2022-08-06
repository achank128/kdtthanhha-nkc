import {
  ZALO,
  PHONE,
  PHONECALL,
  MAIL,
  ADDRESS_COMPANY,
  ProjectData,
} from "./data.js";

const sodolink = window.location.search.slice(1, window.location.search.length);
const sodoContent = ProjectData.find((p) => p.name === sodolink);

const newsItem = document.getElementById("news-item");
newsItem.innerHTML = sodoContent.html;
document.title = sodoContent.title;

const ProjectDataFilter = ProjectData.filter(
  (p) => p.name !== sodoContent.name
);
const duAnKhac =
  ProjectDataFilter[Math.floor(Math.random() * ProjectDataFilter.length)];
const nextPost = newsItem.querySelector(".next-post");
nextPost.innerHTML = `
  <i class="fa-solid fa-arrow-right"></i>DỰ ÁN KHÁC:
  <a href="${duAnKhac.link}">
    ${duAnKhac.title}
  </a>
`;

//Du an
const addressda = document.getElementById("address-da");
const zaloda = document.getElementById("zalo-da");
const mailda = document.getElementById("mail-da");
const phoneda = document.getElementById("phone-da");
phoneda.innerHTML = `<b>Hotline: <a href="tel:${PHONECALL}" class="hotline" style="color: red">${PHONE} </a></b>`;
mailda.innerHTML = `<b>Email:</b> <a href="${MAIL}" class="mail">${MAIL}</a>`;
addressda.innerHTML = `<b>Địa chỉ:</b> ${ADDRESS_COMPANY}`;
zaloda.innerHTML = `<b>Zalo:  <a href="${ZALO}" style="color: dodgerblue">Mr Hùng ${PHONE}</a></b>`;
