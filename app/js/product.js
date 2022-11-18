import { API_URL } from "./data.js";

const getProduct = async () => {
  try {
    const res = await axios.get(API_URL + "/products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const setProduct = async () => {
  const productListData = await getProduct();
  const productList = document.querySelector(".product-list");
  productList.innerHTML = productListData
    .reverse()
    .map((p) => {
      return `
      <div class="product-item">
        <div class="img">
          <img
            src="${p.anh}"
            alt="bds"
          />
        </div>
        <div class="content">
          <div class="name">
            ${p.ten}
          </div>
          <div class="desc">
            <ul>
              <li><b>Phân khu:</b> ${p.phan_khu}</li>
              <li><b>Mặt đường:</b> ${p.mat_duong}</li>
              <li><b>Giá bán:</b> ${
                p.gia_ban ? p.gia_ban + "Triệu/m2" : "Liên hệ"
              }</li>
            </ul>
            <ul>
              <li><b>Phân lô:</b> ${p.phan_lo}</li>
              <li><b>Diện tích:</b> ${p.dien_tich}</li>
              <li><b>Tổng giá trị HĐ:</b> ${
                p.tong ? p.tong + "Tỷ" : "Liên hệ"
              } </li>
            </ul>
            <ul>
              <li><b>Ô số:</b> ${p.o_so}</li>
              <li><b>Ưu điểm:</b> ${p.uu_diem}</li>
              <li><b>Điện thoại liên hệ:</b> <a href="tel:${
                p.sdt
              }" style="color: red;">${p.sdt}</a></li>
            </ul>
          </div>
        </div>
      </div>`;
    })
    .join("");
};

setProduct();
