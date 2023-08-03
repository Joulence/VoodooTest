import * as shrink from "./modules/wordShrink.js";
import * as products from "./modules/productsList.js";
import * as pagination from "./modules/pagination.js";
import * as cart from "./modules/cart.js";
import * as collapse from "./modules/collapseImportantMenu.js";
import * as scroll from "./modules/scrollHeader.js";

scroll.initScrollListener();
pagination.pagination();
products.getProductsList();
shrink.wordShrinkOn();
cart.openCart();
cart.addToCart();
cart.initCartListener();
collapse.collapseMenu();
