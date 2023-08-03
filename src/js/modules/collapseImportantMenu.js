export const collapseMenu = () => {
  const menu = document.getElementById("important-collapse");
  const btn = document.getElementById("important-chevron");
  const collapsibleMenu = document.querySelector("expand-menu");

  menu.addEventListener("click", () => {
    btn.classList.toggle("important-open");
    collapsibleMenu.classList.toggle("menu-expanded");
  });
};
