import { productServices } from "../services/product-services.js";

const createCategorie = (categorie) => {
    const div = document.createElement("div");
    div.classList.add("category");

    const content = `
    <div class="head">
        <h2>${categorie}</h2>
        <a href="./screens/all-products.html?=${categorie}" class="see-all" >Ver todos<i class='bx bx-right-arrow-alt'></i></a>
    </div>
    <div class="products" id="${categorie}">
    </div>
    `
    div.innerHTML = content;
    return div;
}

const createProduct = (imageUrl, name, price, categorie, description, id) => {
    const div = document.createElement("div");
    div.classList.add("card");
    const content = `
    <div class="product-image" style="background-image: url(${imageUrl});" id="${id}"></div>
    <div class="card-details">
        <p class="text-title" id="product-name" maxlength="10">${name}</p>
        <p class="text-body">${price}</p>
    </div>
    <a href="./screens/product-details.html?id=${id}" class="card-button">Ver producto</a>
    `
    categorie;
    description;
    div.innerHTML = content;
    return div;
}

const showProducts =  async () => {
    const products = await productServices.productList();
    const categories = await productServices.categoriesList();

    for (let i = 0; i < categories.length; i++) {
        const div = createCategorie(categories[i].name);
        document.querySelector(".categories").appendChild(div);
        for (let j = 0; j < products.length; j++) {
            if (products[j].categorie === categories[i].name) {
                const div = createProduct(products[j].imageUrl, products[j].name, products[j].price, products[j].categorie, products[j].description, products[j].id);
                document.querySelector("#" + categories[i].name + "").appendChild(div);
            }
        }
    }
}

showProducts();


