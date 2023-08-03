import { deleteIcon } from "./icons.js";

export const createProduct = (product) => {
  const cartProduct = document.createElement("div");
  cartProduct.setAttribute("data-id", product.id);
  cartProduct.classList.add("cart-product");

  const wrapper = document.createElement("div");
  wrapper.classList.add("cart-product__wrapper");

  const photo = document.createElement("div");
  photo.classList.add("cart-product__photo");

  const block = document.createElement("div");
  block.classList.add("cart-product__block");

  const info = document.createElement("div");
  info.classList.add("cart-product__info");

  const name = document.createElement("div");
  name.classList.add("cart-product__info-name");
  name.textContent = product.name;

  const price = document.createElement("div");
  price.classList.add("cart-product__info-price");
  price.textContent = product.price + " KR.";

  const amount = document.createElement("div");
  amount.classList.add("cart-product__info-amount");

  const buttonMinus = document.createElement("button");
  buttonMinus.textContent = "-";
  buttonMinus.classList.add("decrease");

  const input = document.createElement("input");
  input.type = "number";
  input.value = product.amount;

  const buttonPlus = document.createElement("button");
  buttonPlus.textContent = "+";
  buttonPlus.classList.add("increase");

  amount.appendChild(buttonMinus);
  amount.appendChild(input);
  amount.appendChild(buttonPlus);

  block.appendChild(info);
  block.appendChild(name);
  block.appendChild(price);
  block.appendChild(amount);

  wrapper.appendChild(photo);
  wrapper.appendChild(block);

  cartProduct.appendChild(wrapper);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = deleteIcon;
  deleteButton.classList.add("cart-product__delete");

  cartProduct.appendChild(deleteButton);

  return cartProduct;
};

export const updateProduct = (element, product) => {
  // cart-product__info-price
  // cart-product__info-amount
  const priceEl = element.querySelector(".cart-product__info-price");
  const amountInputEl = element.querySelector(
    ".cart-product__info-amount > input"
  );

  priceEl.textContent = product.amount * product.price + " .KR";
  amountInputEl.value = product.amount;
};
