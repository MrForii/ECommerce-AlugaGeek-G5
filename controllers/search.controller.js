// Search

const search = () => {

    const search = document.querySelector("#search");
    search.addEventListener("keyup", (e) => {
        if (e.target.matches) {
            const search = e.target.value;
            const products = document.querySelectorAll(".card");
            const titles = document.querySelectorAll(".text-title");
            for (let i = 0; i < products.length; i++) {
                if (titles[i].innerHTML.toLowerCase().includes(search.toLowerCase())) {
                    products[i].classList.remove("hide");
                } else {
                    products[i].classList.add("hide");
                }
            }
        }
    })
};

search();