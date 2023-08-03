import * as createDiv from "./createProductWrapper.js";

const paginationElement = document.getElementById("pagination");
let currentPage = 1;

async function fetchProductsList(page) {
  const numberOfProjects = 24;
  const productsInner = document.getElementById("products");
  const response = await fetch(
    `https://voodoo-sandbox.myshopify.com/products.json?limit=${numberOfProjects}&page=${page}`
  );
  const responseProducts = await response.json();

  productsInner.innerHTML = "";

  if (responseProducts?.products?.length) {
    responseProducts.products.forEach((product) => {
      productsInner.append(
        createDiv.productBlock(
          product.id,
          product.title,
          product.variants[0].price + " KR."
        )
      );
    });
  } else {
    productsInner.innerHTML = "Nothing to fetch!";
  }

  return Promise.resolve(true);
}

const initPaginatorListener = () => {
  paginationElement.addEventListener("click", () => {
    const selectedPageBtn = paginationElement.querySelector(
      ".tui-page-btn.tui-is-selected"
    );
    if (selectedPageBtn) {
      const pageNumber = parseInt(selectedPageBtn.textContent);
      if (pageNumber !== currentPage) {
        currentPage = pageNumber;
        fetchProductsList(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
};

export const getProductsList = () => {
  fetchProductsList(currentPage).then(
    () => {
      initPaginatorListener();
    },
    () => {
      alert("UNEXPECTED ERROR HAPPENED!!!");
    }
  );
};
