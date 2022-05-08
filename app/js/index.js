const slider = document.querySelector(".slider");
const sliderContent = slider.querySelector(".slider-content");
const slidePrev = slider.querySelector(".slide-prev");
const slideNext = slider.querySelector(".slide-next");
const dotContainer = slider.querySelector(".dot-container");
const sliderData = [1, 2, 3, 4];

slider.addEventListener("mouseenter", () => {
  slidePrev.classList.add("prev-active");
  slideNext.classList.add("next-active");
});
slider.addEventListener("mouseleave", () => {
  slidePrev.classList.remove("prev-active");
  slideNext.classList.remove("next-active");
});

dotContainer.innerHTML = sliderData
  .map((slider, index) => {
    return `<div class="dot dot${index}"></div>`;
  })
  .join("");
const dots = slider.querySelectorAll(".dot");

let slideIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    resetDot();
    carousel();
  });
});
const resetDot = () => {
  dots.forEach((dot) => {
    dot.classList.remove("dot-current");
  });
  const dotCurrent = slider.querySelector(`.dot${slideIndex}`);
  dotCurrent.classList.add("dot-current");
};
resetDot();

const carousel = () => {
  sliderContent.style.transform = `translateX(-${slideIndex * 100}%)`;
};

const autoShow = () => {
  if (slideIndex < sliderData.length) {
    slideIndex++;
  }
  if (slideIndex === sliderData.length) {
    slideIndex = 0;
  }
  carousel();
  resetDot();
};
setInterval(autoShow, 4000);

slidePrev.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderData.length - 1;
  }
  carousel();
  resetDot();
});

slideNext.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > sliderData.length - 1) {
    slideIndex = 0;
  }
  carousel();
  resetDot();
});
