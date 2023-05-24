document.addEventListener("DOMContentLoaded", function () {
  async function urlFetch(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      //   console.log(data);

      data.forEach((elem) => {
        // console.log(elem);
        let box = document.createElement("div");
        box.setAttribute("class", "ProductBox");
        let image = document.createElement("img");
        image.setAttribute("src", elem.download_url);
        let author = document.createElement("h2");
        author.innerText = elem.author;
        let width = document.createElement("p");
        width.innerText = elem.width;
        box.append(image, author, width);
        document.querySelector("#container").append(box);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // urlFetch("https://picsum.photos/v2/list?page=2&limit=100");
  urlFetch("https://picsum.photos/v2/list");
});
