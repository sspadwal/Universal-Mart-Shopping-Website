
async function getData() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
            throw new Error("error");
        }
        const data = await res.json();
        console.log(data);

        const main = document.querySelector('.main-container');
        const cartcontainer = document.querySelector('.cart-container');

        data.forEach((item) => {
            const productDiv = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const price = document.createElement('p');
            const btn = document.createElement('button');

            image.setAttribute("class", "img-container");
            productDiv.setAttribute("class", "card-container");
            title.setAttribute("class", "card-title")
            btn.setAttribute("class", "cardbtn")
            price.setAttribute("class", "card-price")

            image.src = item.image;
            title.textContent = item.title;
            price.textContent = `$ ${item.price}`;
            btn.textContent = "AddToCart";

            productDiv.appendChild(image);
            productDiv.appendChild(title);
            productDiv.appendChild(price);
            productDiv.appendChild(btn);
            main.appendChild(productDiv);

            btn.addEventListener('click', () => {
                const cartItem = document.createElement('div');
                const titlecon = document.createElement('p');
                const imagecon = document.createElement('img');
                const price = document.createElement('span');
                const dbtn = document.createElement("button")

                titlecon.setAttribute('class', "cart-title");
                imagecon.setAttribute('class', "cart-image");
                dbtn.innerHTML = "Delete"
                cartItem.setAttribute('class', 'cartItem');
                price.setAttribute("class","cart-price");

                titlecon.textContent = item.title;
                imagecon.src = item.image;
                price.textContent = `$${item.price}`;

                cartItem.appendChild(titlecon);
                cartItem.appendChild(imagecon);
                cartItem.appendChild(price);
                cartItem.appendChild(dbtn);

                dbtn.addEventListener('click', () => {
                    cartItem.remove();
                });

                cartcontainer.appendChild(cartItem);

                // Make cart container visible
                cartcontainer.style.display = "block";
            });
        });

        // Append cart container outside the loop
        main.appendChild(cartcontainer);

    } catch (error) {
        console.log(error);
    }
}

getData();
