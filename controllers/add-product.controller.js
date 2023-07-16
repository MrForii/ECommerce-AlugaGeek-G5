import { productServices } from "../services/product-services.js";

const form = document.querySelector("#add-product");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const image = document.querySelector("#url-image").value;
    const name = document.querySelector("#name-product").value;
    const price = document.querySelector("#price-product").value;
    const categorie = document.querySelector("#category").value;
    const description = document.querySelector("#description").value;

    if (image === "" || name === "" || price === "" || categorie === "" || description === "") {
        alert("Todos los campos son obligatorios");
    } else {
        alert("Producto agregado");
        productServices.createProduct(image, name, price, categorie, description);
        window.location.href = "admin-products.html";
    }
})