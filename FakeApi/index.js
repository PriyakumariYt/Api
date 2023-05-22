document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector(".products");
  async function fetchProduct(url) {
    try {
      let data = await fetch(url);
      let response = await data.json();
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        let description = response[i].description;
        let title = response[i].title;
        products.innerHTML += `  
         <div class="product">
            <img src="${response[i].images[1]}}" alt="${
          response[i].category.name
        }
          "  class = "product-img"/>
          <div class="product-content">
                    <h2 class = "product-title">${
                      title.length > 18
                        ? title.substring(0, 18).concat("...more")
                        : title
                    }</h2>
            <h4 class = "product-category">${response[i].category.name}</h4>
            <p class = "product-description">${
              description.length > 80
                ? description.substring(0, 80).concat("...more")
                : description
            }</p>
            <div class="product-price-container">
         <h3 class = "product-price">$${response[i].price}</h3>
             <a href="#!" data-productId="${
               response[i].id
             }" class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>

    </div>

        </div>
     `;
      }
    } catch (error) {
      console.log(error);
    }
  }
  fetchProduct("https://api.escuelajs.co/api/v1/products");
  // fetchProduct("https://fakestoreapi.com/products/category/jewelery");
});