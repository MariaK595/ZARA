document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const article = this.closest("article"); // Знаходимо картку товару
            const title = article.querySelector("h3").innerText;
            const price = article.querySelector("p").innerText;
            const imgSrc = article.querySelector("img").src;

            const product = { title, price, imgSrc };
            
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));

            alert("Товар додано в кошик!");

            location.reload(); // Оновлення сторінки після додавання товару
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const clearCartButton = document.getElementById("clear-cart");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Кошик порожній</p>";
    } else {
        cart.forEach(item => {
            let itemElement = document.createElement("div");
            itemElement.innerHTML = `
                <img src="${item.imgSrc}" width="100">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
            `;
            cartItems.appendChild(itemElement);
        });
    }

    clearCartButton.addEventListener("click", function () {
        localStorage.removeItem("cart");
        location.reload();
    });
});
