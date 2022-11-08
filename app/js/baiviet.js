import { NewsListData } from "./data.js";

const getNews = async () => {
  try {
    const res = await axios.get("https://kdtthanhha.herokuapp.com/api/news");
    console.log(res.data);
    NewsListData.push(...res.data);
  } catch (error) {
    console.log(error);
  }
};

const setNews = async () => {
  await getNews();
  const sodolink = window.location.search.slice(
    1,
    window.location.search.length
  );
  const content = NewsListData.find((p) => p.name === sodolink);

  const newsContent = document.querySelector(".news-content");
  newsContent.innerHTML = content.html;
  document.title = content.title;

  const NewsListDataFilter = NewsListData.filter(
    (p) => p.name !== content.name
  );
  const duAnKhac =
    NewsListDataFilter[Math.floor(Math.random() * NewsListDataFilter.length)];
  const nextPost = document.querySelector(".next-post");
  nextPost.innerHTML = `
    <i class="fa-solid fa-arrow-right"></i>BÀI VIẾT KHÁC:
    <a href="${duAnKhac.link}">
      ${duAnKhac.title}
    </a>
  `;
};

setNews();
