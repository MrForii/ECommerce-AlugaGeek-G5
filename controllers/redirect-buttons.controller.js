function redirect(idBoton) {
    let ruta = "";

    switch (idBoton) {
    case "login":
        ruta = "./screens/login.html";
        break;
    case "see-all":
        ruta = "./screens/all-products.html?cat=all";
        break;
    case "add-product":
        ruta = "../screens/add-product.html";
        break;
    case "admin-menu":
        ruta = "../screens/admin-products.html";
        break;
    default:
        console.log("ID de botón no válido");
        return;
    }

    window.location.href = ruta;
}
