var product_name = document.querySelector('#title-container')?.textContent
var product_price = document.querySelector('#price-container')?.textContent

if (product_name && product_price) {
  console.log("Product Name:", product_name);
  console.log("Product Price:", product_price);
}