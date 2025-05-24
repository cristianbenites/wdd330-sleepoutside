import ShoppingCart from "./ShoppingCart.mjs";
import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

const cartItems = getLocalStorage("so-cart");
const shoppingCart = new ShoppingCart(
  cartItems,
  document.querySelector(".product-list"),
);
shoppingCart.init();

loadHeaderFooter();
