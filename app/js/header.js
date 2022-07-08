const ZALO = "https://zalo.me/562398999";
const FACEBOOK = "https://www.facebook.com/profile.php?id=100064734504163";
const PHONE = "0562398999";
const MAIL = "nguyenvanhung28686@gmail.com";

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

//contact
const zalo = document.getElementById("zalo");
const facebook = document.getElementById("facebook");
const phone = document.getElementById("phone");
const website = document.getElementById("website");
//footer
const facebookFooter = document.getElementById("facebook-footer");
const zaloFooter = document.getElementById("zalo-footer");
const mailFooter = document.getElementById("mail-footer");
const phoneFooter = document.getElementById("phone-footer");
//
website.innerHTML = `Website: <a href="#">https://kdtthanhha.com</a>`;
facebookFooter.innerHTML = ` Faccbook: <a href=${FACEBOOK}><b>Nguyễn Văn Hùng</b></a>`;
zaloFooter.innerHTML = `Zalo: <a href="${ZALO}"><b>${PHONE}</b></a>`;
mailFooter.innerHTML = `Mail: <a ><b>nguyenvanhung28686@gmail.com</b></a>`;
phoneFooter.innerHTML = `Hotline: ${PHONE}`;
//Lienhe
// const facebooklh = document.getElementById("facebook-lh");
// const zalolh = document.getElementById("zalo-lh");
// const maillh = document.getElementById("mail-lh");
// const phonelh = document.getElementById("phone-lh");
// //
// //facebooklh.innerHTML = `Facebook: <a href=${FACEBOOK} class="facebook">Nguyễn Văn Hùng</a>`;
// console.log(facebooklh);
// phonelh.innerHTML = `Hotline: <a href="" class="hotline">${PHONE} </a>`;
// maillh.innerHTML = `Email: <a href="" class="mail">${MAIL}</a>`;

zalo.innerHTML = `<a href=${ZALO}>Chat Zalo</a>`;
facebook.innerHTML = `<a href=${FACEBOOK}>Chat Facebook</a>`;
phone.innerHTML = `<a>Hotline: ${PHONE}</a>`;

//header
const header = document.getElementById("header");
const introduce = header.querySelector(".introduce");
const introduceBox = header.querySelector(".introduce-box");

const project = header.querySelector(".project");
const projectBox = header.querySelector(".project-box");

introduce.addEventListener("mouseenter", () => {
  introduceBox.classList.add("active");
});
introduce.addEventListener("mouseleave", () => {
  introduceBox.classList.remove("active");
});

project.addEventListener("mouseenter", () => {
  projectBox.classList.add("active");
});
project.addEventListener("mouseleave", () => {
  projectBox.classList.remove("active");
});

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
