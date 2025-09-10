import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource){
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    document.getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }
  addProductToCart() {
    const items = getLocalStorage("so-cart") || [];
    items.push(this.product);
    setLocalStorage("so-cart", items);
  }
  renderProductDetails() {
    document.querySelector("h3").textContent = this.product.Name;
    document.querySelector("h2").textContent = this.product.NameWithoutBrand;
    const img = document.querySelector("main img");
    img.setAttribute('src', this.product.Image);
    img.setAttribute('alt', this.product.NameWithoutBrand);

    document.querySelector(".product-card__price").textContent = `$${this.product.FinalPrice}`;
    document.querySelector(".product__color").textContent = this.product.Colors[0].ColorName;
    document.querySelector(".product__description").innerHTML = this.product.DescriptionHtmlSimple;

    document.getElementById('addToCart').dataset.id = this.product.Id;
  }
}
