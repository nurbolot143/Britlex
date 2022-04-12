const burger = document.getElementsByClassName("header__burger")[0];
const header = document.getElementsByClassName("header")[0];
const closeBtn = document.getElementsByClassName("header__close-btn")[0];

burger.addEventListener("click", () => {
  if (!header.classList.contains("header-active")) {
    header.classList.add("header-active");
  }
});

closeBtn.addEventListener("click", () => {
  if (header.classList.contains("header-active")) {
    header.classList.remove("header-active");
  }
});
