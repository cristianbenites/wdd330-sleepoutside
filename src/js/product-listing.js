import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const productList = new ProductList(
  category,
  dataSource,
  document.querySelector(".product-list"),
);
productList.init();

document.querySelector(".products h2").textContent =
  `Top Products: ${category}`;
