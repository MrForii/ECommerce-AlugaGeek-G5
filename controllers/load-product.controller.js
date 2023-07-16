import { productServices } from "../services/product-services.js";


// Product Details

const showDetails = (imageUrl, name, price, categorie, description, id) => {
    const div = document.createElement("div");
    div.classList.add("detail");
    const content = `
    <div class="details-img" style="background-image: url(${imageUrl});">
    </div>
    <div class="details-description">
        <span>${categorie}</span>
        <h1>${name}</h1>
        <p>${price}</p>
        <span>${description}</span>
    </div>
    `;
    div.innerHTML = content;
    return div;
}

const createRelated = (imageUrl, name, price, categorie, description, id) => {
    const div = document.createElement("div");
    div.classList.add("card");
    const content = `
    <div class="product-image" style="background-image: url(${imageUrl});" id="${id}"></div>
    <div class="card-details">
        <p class="text-title" id="product-name" maxlength="10">${name}</p>
        <p class="text-body">${price}</p>
    </div>
    <a href="../screens/product-details.html?id=${id}" class="card-button">Ver producto</a>
    `
    categorie;
    description;
    div.innerHTML = content;
    return div;
}

const showRelated = async (data) => {
    const products = await productServices.productList();

    for (let i = 0; i < products.length; i++) {
        if (products[i].categorie === data.categorie && products[i].id !== data.id) {
            const div = createRelated(products[i].imageUrl, products[i].name, products[i].price, products[i].categorie, products[i].description, products[i].id);
            document.querySelector(".products").appendChild(div);
        }
    }
}

const id = location.search.split("=")[1];

const loadElement = async () => {
    const data = await productServices.loadProduct(id);
    const element = showDetails(data.imageUrl, data.name, data.price, data.categorie, data.description, data.id);
    const container = document.querySelector(".element")
    // Add product to screen
    container.appendChild(element);

    // Add related products
    showRelated(data);
}

loadElement();