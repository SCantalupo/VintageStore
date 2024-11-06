document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');

    // Recupera il carrello dal local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Il tuo carrello è vuoto!</p>';
        totalElement.innerText = '';
        return;
    }

    let total = 0;

    cart.forEach((product, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="remove-item" data-index="${index}">x</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);

        // Estrai il prezzo e rimuovi l'€ per calcolare il totale
        const price = parseFloat(product.price.replace('€', '').trim());
        total += price;
    });

    totalElement.innerText = `Totale: €${total.toFixed(2)}`;

    // Aggiungi eventi per rimuovere gli articoli
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            removeFromCart(index);
        });
    });
});

function removeFromCart(index) {
    // Recupera il carrello dal local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Rimuovi l'elemento dal carrello
    cart.splice(index, 1);

    // Salva il carrello aggiornato nel local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Ricarica la pagina per aggiornare la visualizzazione
    location.reload();
}
