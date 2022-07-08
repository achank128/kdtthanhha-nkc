const ZALO = "https://zalo.me/562398999";
const FACEBOOK = "https://www.facebook.com/profile.php?id=100064734504163";
const PHONE = "0562.398.999";
const PHONECALL = "0562398999";
const MAIL = "nguyenvanhung28686@gmail.com";
const MAP = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14906.05517069742!2d105.77527041626236!3d20.931872211441487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad494e8f8521%3A0x9d70aa1dd7ac2e54!2zVGhhbmggSMOgIE3GsOG7nW5nIFRoYW5oIENpZW5jbyA1!5e0!3m2!1svi!2s!4v1657262025127!5m2!1svi!2s" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

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

//contact button
const zalo = document.getElementById("zalo");
const facebook = document.getElementById("facebook");
const phone = document.getElementById("phone");
zalo.innerHTML = `<a href=${ZALO}>Chat Zalo</a>`;
facebook.innerHTML = `<a href=${FACEBOOK}>Chat Facebook</a>`;
phone.innerHTML = `<a href="tel:${PHONECALL}">Hotline: ${PHONE}</a>`;

//footer
const website = document.getElementById("website");
const facebookFooter = document.getElementById("facebook-footer");
const zaloFooter = document.getElementById("zalo-footer");
const mailFooter = document.getElementById("mail-footer");
const phoneFooter = document.getElementById("phone-footer");
website.innerHTML = `Website: <a href="#">https://kdtthanhha.com</a>`;
facebookFooter.innerHTML = ` Faccbook: <a href=${FACEBOOK}><b>Nguyễn Văn Hùng</b></a>`;
zaloFooter.innerHTML = `Zalo: <a href="${ZALO}"><b>${PHONE}</b></a>`;
mailFooter.innerHTML = `Mail: <a ><b>nguyenvanhung28686@gmail.com</b></a>`;
phoneFooter.innerHTML = `Hotline: <a href="tel:"${PHONECALL}">${PHONE}</a>`;

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
//Du an
const addressda = document.getElementById("address-da");
const mailda = document.getElementById("mail-da");
const phoneda = document.getElementById("phone-da");
if (phoneda) {
  phoneda.innerHTML = `<b>Hotline: <a href="tel:${PHONECALL}" class="hotline">${PHONE} </a></b>`;
  mailda.innerHTML = `<b>Email:</b> <a href="${MAIL}" class="mail">${MAIL}</a>`;
  addressda.innerHTML = `<b>Địa chỉ:</b> Khu B1.4, Liền kề 09 VT 23, Khu đô thị Thanh Hà Mường
  Thanh Cienco 5`;
}

//map
const mapIframe = document.querySelector(".map-iframe");
if (mapIframe) mapIframe.innerHTML = MAP;

//hotline-intro
const hotlineIntro = document.querySelector(".hotline-intro");
if (hotlineIntro) hotlineIntro.innerHTML = `Hotline: ${PHONE}`;
