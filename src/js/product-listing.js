import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ExternalServices();
const productList = new ProductList(
  category,
  dataSource,
  document.querySelector(".product-list"),
);
productList.init();

document.querySelector(".products h2").textContent =
  `Top Products: ${category}`;
