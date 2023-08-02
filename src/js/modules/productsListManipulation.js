/* import * as createDiv from "./createProductWrapper.js";

async function getProductsList() {
  const numberOfProjects = 24;
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
        products.products[i].variants[0].price + " KR."
      )
    );
  }
}

export const getProductsList = () => {
  getProductsList();
};
 */