import { ZALO, FACEBOOK, PHONE, PHONECALL, MAIL, MAP } from "./data.js";

//header
const header = document.getElementById("header");

// mobile sidebar
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = sidebar.querySelector(".close-sidebar");

sidebarToggle.addEventListener("click", () => {
  overlay.classList.add("active");
  sidebar.classList.add("show-sidebar");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  sidebar.classList.remove("show-sidebar");
});
closeSidebar.addEventListener("click", () => {
  overlay.classList.remove("active");
  sidebar.classList.remove("show-sidebar");
});

//back to top
const btnBackToTop = document.getElementById("back-to-top");
const scrollFunction = () => {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
};
window.onscroll = function () {
  scrollFunction();
};
const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
btnBackToTop.addEventListener("click", backToTop);

//Lien he
const facebooklh = document.querySelector(".facebook-lh");
const zalolh = document.querySelector(".zalo-lh");
const maillh = document.querySelector(".mail-lh");
const phonelh = document.querySelector(".phone-lh");
if (facebooklh) {
  facebooklh.innerHTML = `Facebook: <a href=${FACEBOOK} class="facebook">Nguyễn Văn Hùng</a>`;
  phonelh.innerHTML = `Hotline: <a href="tel:${PHONECALL}" class="hotline">${PHONE} </a>`;
  maillh.innerHTML = `Email: <a href="${MAIL}" class="mail">${MAIL}</a>`;
  zalolh.innerHTML = `Zalo: <a href="${ZALO}" class="zalo">Mr Hùng: ${PHONE}</a>`;
}

//map
const mapIframe = document.querySelector(".map-iframe");
if (mapIframe) mapIframe.innerHTML = MAP;

//hotline-intro
const hotlineIntro = document.querySelector(".hotline-intro");
if (hotlineIntro) hotlineIntro.innerHTML = `Hotline: ${PHONE}`;

//contact button
const contactInfo = document.getElementById("contact-info");
contactInfo.innerHTML = `
<button id="zalo" class="zalo-chat"><a href=${ZALO}>Chat Zalo</a> <i class="fa-solid fa-comment"></i></i></button>
<button id="facebook" class="fb-chat"><a href=${FACEBOOK}>Chat Facebook</a> <i class="fa-brands fa-facebook"></i></button>
<button id="phone" class="hotline"><a href="tel:${PHONECALL}">Hotline: ${PHONE}</a> <i class="fa-solid fa-mobile-screen-button"></i></button>`;
