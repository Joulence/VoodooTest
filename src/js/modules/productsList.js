import * as createDiv from "./createProductWrapper.js";

async function fetchProductsList() {
  const numberOfProjects = 24;
  const productsInner = document.getElementById("products");
  const response = await fetch(
    `https://voodoo-sandbox.myshopify.com/products.json?limit=${numberOfProjects}`
  );
  const products = await response.json();
  console.log(products);

  const paginationElement = document.getElementById("pagination");

  let currentPage = 1;

  for (let i = 0; i < numberOfProjects; i++) {
    productsInner.append(
      createDiv.productBlock(
        products.products[i].id,
        products.products[i].title,
        products.products[i].variants[0].price + " KR."
      )
    );
  }

  paginationElement.addEventListener("click", () => {
    for (
      let i = 0;
      i < document.querySelectorAll(".tui-page-btn").length;
      i++
    ) {
      if (
        document
          .querySelectorAll(".tui-page-btn")
          [i].classList.contains("tui-is-selected")
      ) {
        currentPage = document.querySelectorAll(".tui-page-btn")[i].textContent;
      }
    }
    console.log(`Current Page: ${currentPage}`);
  });
}

export const getProductsList = () => {
  fetchProductsList();
};
