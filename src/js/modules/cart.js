import { createProduct, updateProduct } from "./createProductInCart.js";

const cartElement = document.getElementById("cart");
const openCartButton = document.getElementById("openCart");
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

      cart.forEach((product) => {
        updateCart(product);
      });

      updateTotal();
    }
  });
};

const updateCart = (product) => {
  const productEl = cartProducts.querySelector(`[data-id="${product.id}"]`);
  if (productEl) {
    updateProduct(productEl, product);
  } else {
    cartProducts.appendChild(showInCart(product));
  }
};

export const initCartListener = () => {
  cartElement.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("decrease") ||
      event.target.classList.contains("increase") ||
      event.target.classList.contains("cart-product__delete")
    ) {
      const productEl = event.target.closest(".cart-product");

      if (productEl) {
        const productId = productEl.dataset.id;
        if (productId) {
          const productItemIndex = cart.findIndex((el) => el.id === productId);
          if (productItemIndex > -1) {
            if (event.target.classList.contains("decrease")) {
              if (cart[productItemIndex].amount === 1) {
                productEl.parentElement.removeChild(productEl);
                cart.splice(productItemIndex, 1);
              } else {
                cart[productItemIndex].amount--;
                updateCart(cart[productItemIndex]);
              }
            }
            if (event.target.classList.contains("increase")) {
              cart[productItemIndex].amount++;
              updateCart(cart[productItemIndex]);
            }
            if (event.target.classList.contains("cart-product__delete")) {
              productEl.parentElement.removeChild(productEl);
              cart.splice(productItemIndex, 1);
            }
          }
        }
      }

      updateTotal();
    }
  });
};

const updateTotal = () => {
  const totalAmountEl = document.getElementById("total-amount");

  const totalPrice = cart.reduce((result, cartItem) => {
    result += cartItem.amount * cartItem.price;
    return result;
  }, 0);

  totalAmountEl.innerHTML = totalPrice.toFixed(2) + "KR.";
};
