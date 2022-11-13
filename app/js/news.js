import { NewsListData, API_URL } from "./data.js";

const getNews = async () => {
  try {
    const res = await axios.get(API_URL + "/news");
    console.log(res.data);
    NewsListData.push(...res.data);
    console.log(NewsListData);
  } catch (error) {
    console.log(error);
  }
};

const setNews = async () => {
  await getNews();
  const NewsList = document.querySelector(".news-list");
  NewsList.innerHTML = NewsListData.reverse()
    .map((news) => {
      return `
    <div class="news-item">
      <a href=${news.link}>
        <div class="news-img">
          <img
            src=${news.img}
            alt="news"
          />
        </div>
        <div class="news-content-item">
          <span>TIN TỨC</span>
          <div class="news-title">
            ${news.title}
          </div>
          <p class="news-desc">
            ${news.desc}
          </p>
        </div>
      </a>
    </div>`;
    })
    .join("");
};

setNews();
