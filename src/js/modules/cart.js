import * as createProduct from "./createProductInCart.js";
const openCartButton = document.getElementById("openCart");
const cartElement = document.getElementById("cart");
const cartCloseButton = document.getElementById("cart-close-btn");

const cartProducts = document.querySelector(".cart-products");

const products = document.getElementById("products");

const cart = [];

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
            amount: 1,
            price: parseFloat(
              event.target.parentElement.children[1].children[0].children[1]
                .textContent
            ),
          });
        }
      }
      console.log(cart);
    }
  });
};

const showInCart = (name, price) => {
  return createProduct.createProduct(name, price);
};

export const cartAmountButton = () => {};
