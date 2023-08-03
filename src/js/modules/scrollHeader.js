export const initScrollListener = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
      document.body.classList.add("scroll-not-top");
    } else {
      document.body.classList.remove("scroll-not-top");
    }
  });
};
