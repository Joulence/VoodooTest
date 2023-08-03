import { createProduct, updateProduct } from "./createProductInCart.js";

const openCartButton = document.getElementById("openCart");
const cartElement = document.getElementById("cart");
const cartCloseButton = document.getElementById("cart-close-btn");

const cartProducts = document.querySelector(".cart-products");

const products = document.getElementById("products");

const cart = [];

const showInCart = (cart) => {
  return createProduct(cart);
};

export const openCart = () => {
  openCartButton.addEventListener("click", () => {
    if (cartElement.classList.contains("cart-is-open")) {
      cartElement.classList.remove("cart-is-open");
      document.body.style.overflow = "auto";
    } else {
      cartElement.classList.add("cart-is-open");
      document.body.style.overflow = "hidden";
    }
  });

  cartCloseButton.addEventListener("click", () => {
    cartElement.classList.remove("cart-is-open");
    document.body.style.overflow = "auto";
  });
};

export const addToCart = () => {
  products.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() == "button") {
      if (cart.length < 1) {
        cart.push({
          id: event.target.parentElement.id,
          name: event.target.parentElement.children[1].children[0].children[0]
            .textContent,
          amount: 1,
          price: parseFloat(
            event.target.parentElement.children[1].children[0].children[1]
              .textContent
          ),
        });
      } else {
        const existedCart = cart.find(
          (el) => el.id === event.target.parentElement.id
        );
        if (existedCart) {
          existedCart.amount++;
        } else {
          cart.push({
            id: event.target.parentElement.id,
            name: event.target.parentElement.children[1].children[0].children[0]
              .textContent,
            amount: 1,
            price: parseFloat(
              event.target.parentElement.children[1].children[0].children[1]
                .textContent
            ),
          });
        }
      }
      console.log(cart);
      updateCart(cart);
      /* cart.forEach((product) => {
        const itemEl = cartProducts;
        cartProducts.appendChild(showInCart(product));
      }); */
    }
  });
};

const updateCart = (cart) => {
  cart.forEach((product) => {
    const productEl = cartProducts.querySelector(`[data-id="${product.id}"]`);
    if (productEl) {
      updateProduct(productEl, product);
    } else {
      cartProducts.appendChild(showInCart(product));
    }
  });
};

export const cartAmountButton = (dataId) => {
  const product = document.querySelector(`[data-id="${dataId}"]`);
  console.log(product);
};
