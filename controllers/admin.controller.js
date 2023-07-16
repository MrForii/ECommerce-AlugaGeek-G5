import { productServices } from "../services/product-services.js";

const createProduct = (imageUrl, name, price, categorie, description, id) => {
    const div = document.createElement("div");
    div.classList.add("card");

    const content = `
        <div class="product-image" style="background-image: url(${imageUrl});">
        <a href="../screens/edit-product.html?id=${id}"><i class='bx bxs-pencil' id="edit"></i></a>
        <a class="delete" id="${id}"><i class='bx bx-trash'></i></a>
    </div>
    <div class="card-details">
        <p class="text-title" id="product-name">${name}</p>
        <p class="text-body">${price}</p>
    </div>
    <a href="../screens/product-details.html?id=${id}" class="card-button">Ver producto</a>
    `

    div.innerHTML = content;
    
    // function delete
    
    const btnDelete = div.querySelector(".delete");
    
    btnDelete.addEventListener("click", () => {
        const id = btnDelete.id;
        const res = confirm("¿Desea eliminar el producto?");
        if (res) {
            productServices.deleteProduct(id);
            alert("Producto eliminado")
            location.reload();
        }
    })
    return div;
}

const showProducts = async () => {
    const products = await productServices.productList();

    for (let i = 0; i < products.length; i++) {
        const div = createProduct(products[i].imageUrl, products[i].name, products[i].price, products[i].categorie, products[i].description, products[i].id);
        document.querySelector(".products").appendChild(div);
    }
}

showProducts();

