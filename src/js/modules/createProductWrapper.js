export const productBlock = (id, name, price) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("products-product");
  productDiv.setAttribute("id", "product" + id);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("products-product__img");

  const imgElement = document.createElement("img");
  imgElement.src = "";
  imgElement.alt = "";

  const usedDiv = document.createElement("div");
  usedDiv.classList.add("products-used");
  usedDiv.textContent = "used";

  imgDiv.appendChild(imgElement);
  imgDiv.appendChild(usedDiv);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("products-product__info");

  const infoLeftDiv = document.createElement("div");
  infoLeftDiv.classList.add("products__info-left");

  const productNameDiv = document.createElement("div");
  productNameDiv.textContent = name;
  const productPriceDiv = document.createElement("div");
  productPriceDiv.textContent = price;
  infoLeftDiv.appendChild(productNameDiv);
  infoLeftDiv.appendChild(productPriceDiv);

  const infoRightDiv = document.createElement("div");
  infoRightDiv.classList.add("products__info-right");

  const conditionTitleDiv = document.createElement("div");
  conditionTitleDiv.textContent = "Condition";
  const conditionValueDiv = document.createElement("div");
  conditionValueDiv.textContent = "Slightly used";
  infoRightDiv.appendChild(conditionTitleDiv);
  infoRightDiv.appendChild(conditionValueDiv);

  infoDiv.appendChild(infoLeftDiv);
  infoDiv.appendChild(infoRightDiv);

  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "add to cart";

  productDiv.appendChild(imgDiv);
  productDiv.appendChild(infoDiv);
  productDiv.appendChild(addToCartButton);

  return productDiv;
  //   document.body.appendChild(productDiv);
};
