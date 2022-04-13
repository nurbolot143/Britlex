const burger = document.getElementsByClassName("header__burger")[0];
const header = document.getElementsByClassName("header")[0];
const body = document.getElementsByTagName("body")[0];
const closeBtn = document.getElementsByClassName("header__close-btn")[0];

burger.addEventListener("click", () => {
  if (
    !header.classList.contains("header-active") &&
    !body.classList.contains("body-lock")
  ) {
    header.classList.add("header-active");
    body.classList.add("body-lock");
  }
});

closeBtn.addEventListener("click", () => {
  if (
    header.classList.contains("header-active") &&
    body.classList.contains("body-lock")
  ) {
    header.classList.remove("header-active");
    body.classList.remove("body-lock");
  }
});
