import {
  ZALO,
  FACEBOOK,
  PHONE,
  PHONECALL,
  MAIL,
  MAP,
  COMPANY,
  ADDRESS,
} from "./data.js";

const footer = document.getElementById("footer");

footer.innerHTML = `
<div class="container">
  <div class="footer-content">
    <div class="about">
      <div class="title" id="company-name">
        ${COMPANY}
      </div>
      <ul>
        <li>Tiên Phong Trong Sự Phát Triển Nhà Và Đô Thị</li>
        <li>Tài Sản Thực - Giá Trị Thực</li>
        <li>Nơi Đặt Niền Tin-Tỏa Sáng Muôn Nơi Vươn Tầm Cao Mới</li>
      </ul>
    </div>
    <div class="contact">
      <div class="title">Thông tin liên hệ</div>
      <ul>
        <li class="address" id="address-footer">
          VPGD: ${ADDRESS}
        </li>
        <li class="hotline" id="phone-footer">Hotline: <a href="tel:"${PHONECALL}">${PHONE}</a></li>
        <li class="website" id="website">Website: <a href="www.kdtthanhha.com">www.kdtthanhha.com</a></li>
      </ul>
    </div>
    <div class="social">
      <div class="title">Tài Khoản Xã Hội CIENCO 5</div>
      <ul>
        <li class="facebook" id="facebook-footer">
          Faccbook:
          <a href=${FACEBOOK}><b>Nguyễn Văn Hùng</b></a>
        </li>
        <li class="zalo" id="zalo-footer">
          Zalo: <a href="${ZALO}"><b>${PHONE}</b></a>
        </li>
        <li class="mail" id="mail-footer">
          Mail: <a><b>${MAIL}</b></a>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="footer-bottom">
  <div class="container footer-bottom-content">
    <div class="left">
      <span><a href="./index.html">TRANG CHỦ</a></span>
      <span><a href="./gioi-thieu.html">GIỚI THIỆU</a></span>
      <span><a href="./du-an.html">DỰ ÁN</a></span>
      <span><a href="./tin-tuc.html">TIN TỨC</a></span>
      <span><a href="./lien-he.html">LIÊN HỆ</a></span>
    </div>
    <div class="right">
      Copyright 2022 © KDT Thanh Hà | Thiết kế bởi NKC
    </div>
  </div>
</div>
`;
