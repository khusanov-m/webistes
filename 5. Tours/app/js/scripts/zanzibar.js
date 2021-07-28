const zanSlider = document.getElementById("zan-slider"),
  zanLeftBtn = document.querySelector(".zan-left"),
  zanRightBtn = document.querySelector(".zan-right");

let x = 0;

zanRightBtn.addEventListener("click", () => {
  zanSlider.style.transform = `translateX(${x - 300}px)`;
});

zanLeftBtn.addEventListener("click", () => {
  zanSlider.style.transform = `translateX(${x}px)`;
});

const formBtn = document.getElementById("submit");

formBtn.addEventListener("click", (e) => e.preventDefault());
