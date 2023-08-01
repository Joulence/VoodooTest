import * as createDiv from "./createProductWrapper.js";

async function fetchProductsList() {
  const numberOfProjects = 10;
  const productsInner = document.getElementById("products");
  const response = await fetch(
    `https://voodoo-sandbox.myshopify.com/products.json?limit=${numberOfProjects}`
  );
  const products = await response.json();

  console.log(products.products);

  for (let i = 0; i < numberOfProjects; i++) {
    productsInner.append(
      createDiv.productBlock(
        products.products[i].id,
        products.products[i].title,
        products.products[i].variants[i].price + " KR."
      )
    );
  }
}

export const getProductsList = () => {
  fetchProductsList();
};
