import { productServices } from "../services/product-services.js";

const form = document.querySelector("#edit-product");

// load details

const loadInfo = async () => {
    const url = new URL(location);
    const id = url.searchParams.get("id");

    if (id === null) {
        alert("Error al cargar el producto");
        window.location.href = "admin-products.html";
    }

    const image = document.querySelector("#url-image");
    const name = document.querySelector("#name-product");
    const price = document.querySelector("#price-product");
    const categorie = document.querySelector("#category");
    const description = document.querySelector("#description");

    try {
        const response = await fetch(`https://64b461990efb99d86268ff0c.mockapi.io/products/${id}`);
        if (!response.ok) {
            throw new Error("Error al cargar el producto");
        }
        const data = await response.json();
        image.value = data.imageUrl;
        name.value = data.name;
        price.value = data.price;
        categorie.value = data.categorie;
        description.value = data.description;
    } catch (error) {
        console.error(error);
        alert("Error al cargar el producto");
        window.location.href = "admin-products.html";
    }
}

loadInfo();

// update product

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = new URL(location);
    const id = url.searchParams.get("id");

    const imageUrl = document.querySelector("#url-image").value;
    const name = document.querySelector("#name-product").value;
    const price = document.querySelector("#price-product").value;
    const categorie = document.querySelector("#category").value;
    const description = document.querySelector("#description").value;

    if (imageUrl === "" || name === "" || price === "" || categorie === "" || description === "") {
        alert("Todos los campos son obligatorios");
    }

    productServices.updateProduct(id, imageUrl, name, price, categorie, description).then(() => {
        window.location.href = "admin-products.html";
        alert("Producto actualizado");
    })
})