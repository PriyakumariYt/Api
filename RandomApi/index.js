// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
document.addEventListener("DOMContentLoaded", function () {
  async function fetchProduct(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);

      data.forEach((elem) => {
        // console.log(elem);

        let box = document.createElement("div");
        box.setAttribute("class", "ProductBox");
        let image = document.createElement("img");
        image.setAttribute("src", elem.image);
        let category = document.createElement("h1");
        category.innerText = elem.category;
        let title = document.createElement("h3");
        title.innerText = elem.title;
        let price = document.createElement("p");
        price.innerText = elem.price;

        box.append(image, category, title, price);

        document.querySelector("#container").append(box);
      });
    } catch (error) {
      console.log(error);
    }
  }

  fetchProduct("https://fakestoreapi.com/products");
});
