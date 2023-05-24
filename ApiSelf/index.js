//  getText("text.txt");

//    async function getText(file) {
//     let x = await fetch(file);
//      let y = await x.text();
//      document.getElementById("demo").innerHTML = y;
//    }

document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector(".products");

  async function fetchProduct(file) {
    try {
      let response = await fetch(file);
      let data = await response.json();
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        let sname = data[i].sname;
        let title = data[i].title;

        products.innerHTML += `
                <div class="product">
                  <img src="${data[i].imgsrc}" alt="${sname}" class="product-img">
                  <h2 class = "title">${title}</h2>
                  <p class = "name">${sname}</p>
                </div>
              `;
      }
    } catch (error) {
      console.log(error);
    }
  }

  fetchProduct("text.txt");
});
