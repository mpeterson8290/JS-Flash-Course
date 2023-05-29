// Run a loop through the procuts and create an HTML element ("product-item") for each of them
products.forEach(function (product, index) {

    // Create the HTML element for the individual product
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");

    // Create the product image
    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = "Image for " + product.title;

    // Create the product details section
    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    // Create product title, author, price-title and price
    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;

    let priceTitle = document.createElement("p");
    priceTitle.classList.add("price-title");
    priceTitle.textContent = "Price";

    let productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

    // Append the product details
    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(priceTitle);
    productDetails.append(productPrice);


    // Add all child HTML elements of the product
    productElm.append(productImage);
    productElm.append(productDetails);

    // Add complete individual product to the product section
    productsSection.append(productElm);

});
