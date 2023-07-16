import { productServices } from "../services/product-services.js";

const createCard = ( imageUrl, name, price, categorie, description, id ) => {
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
    div.innerHTML = content;
    return div;
}

const cat = location.search.split("=")[1];

const showAll = async (cat) => {
    const products = await productServices.productList();
    const categories = await productServices.categoriesList();

    if (cat === "all") {
        // show all
        for (let i = 0; i < products.length; i++) {
            const div = createCard(products[i].imageUrl, products[i].name, products[i].price, products[i].categorie, products[i].description, products[i].id);
            document.querySelector(".products").appendChild(div);
        }
    } else {
        // show only the products of the selected category
        for (let i = 0; i < products.length; i++) {
            if (products[i].categorie === cat) {
                const div = createCard(products[i].imageUrl, products[i].name, products[i].price, products[i].categorie, products[i].description, products[i].id);
                document.querySelector(".products").appendChild(div);
            }
        }
    }
    
}

showAll(cat);