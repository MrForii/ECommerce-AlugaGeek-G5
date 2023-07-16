import { productServices } from "../services/product-services.js";

const form = document.querySelector("#login-form");

let res;

const validUser = async (emailUser, passUser) => {
    const data = await productServices.usersList();

    data.forEach(({email, password}) => {
        if (emailUser === email && passUser === password) {
            res = true;
        }
    });
}

form.addEventListener("submit", e => { 
    e.preventDefault();

    let mailUser = document.getElementById("user").value;
    let passUser = document.getElementById("password").value;

    console.log(mailUser);
    console.log(passUser);

    validUser(mailUser, passUser).then(() => {
        if (res) {
            alert("Bienvenido");
            window.location.href = "admin-products.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    })
})

