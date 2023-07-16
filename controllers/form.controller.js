const form = document.querySelector("#contact-form");

const validMessage = () => {
    const name = document.querySelector("#contact-name");
    const message = document.querySelector("#contact-message");
    
    if (name.value === "" || message.value === "") {
        alert("Todos los campos son obligatorios");
    } else {
        alert("Mensaje enviado");
        name.value = "";
        message.value = "";
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    validMessage();
});