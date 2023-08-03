import * as shrink from "./modules/wordShrink.js";
import * as products from "./modules/productsList.js";
import * as pagination from "./modules/pagination.js";
import * as cart from "./modules/cart.js";

pagination.pagination();
products.getProductsList();
shrink.wordShrinkOn();
cart.openCart();
cart.addToCart();
