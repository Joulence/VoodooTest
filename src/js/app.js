import * as shrink from "./modules/wordShrink.js";
import * as products from "./modules/productsList.js";
import * as pagination from "./modules/pagination.js";

pagination.pagination();
products.getProductsList();
shrink.wordShrinkOn();
