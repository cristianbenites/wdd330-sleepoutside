import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  const discount = product.FinalPrice < product.SuggestedRetailPrice ? `<span>$ ${product.SuggestedRetailPrice}</span>` : "";
  return `<li class="product-card">
        <a href="/product_pages/?product=${product.Id}">
          <img
            src="${product.Images.PrimaryMedium}"
            alt="Image of ${product.NameWithoutBrand}">
          <h3 class="card__brand">${product.Brand.Name}</h3>
          <h2 class="card__name">${product.NameWithoutBrand}</h2>
          <p class="product-card__price">$ ${product.FinalPrice}${discount}</p>
        </a >
      </li > `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.products = [];
  }
  async init() {
    this.products = await this.dataSource.getData(this.category);
    renderListWithTemplate(productCardTemplate, this.listElement, this.products);
  }

}
