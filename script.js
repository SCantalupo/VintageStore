document.addEventListener("DOMContentLoaded", function() {
    // Elementi principali del DOM
    const loginButton = document.getElementById("loginButton");
    const loginPopup = document.getElementById("loginPopup");
    const closePopup = document.getElementById("closePopup");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const hamburger = document.getElementById("hamburger");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeMenu = document.getElementById("closeMenu");
    const carouselItems = document.querySelectorAll(".carousel-item");

    // Funzione per mostrare l'immagine attuale nel carosello
    let currentIndex = 0;
    function showCurrentImage() {
        carouselItems.forEach((item, index) => {
            item.classList.toggle("active", index === currentIndex);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCurrentImage();
    }

    // Scorrimento automatico delle immagini nel carosello ogni 3 secondi
    setInterval(nextImage, 3000);

    // Apertura e chiusura popup di login
    if (loginButton) {
        loginButton.addEventListener("click", function() {
            loginPopup.style.display = "flex"; // Mostra il popup di login
        });
    }
    if (closePopup) {
        closePopup.addEventListener("click", function() {
            loginPopup.style.display = "none"; // Chiudi il popup di login
        });
    }

    // Alterna tra le form di login e registrazione
    if (showRegister) {
        showRegister.addEventListener("click", function() {
            loginForm.classList.add("hidden");
            registerForm.classList.remove("hidden");
        });
    }
    if (showLogin) {
        showLogin.addEventListener("click", function() {
            registerForm.classList.add("hidden");
            loginForm.classList.remove("hidden");
        });
    }

    // Apertura e chiusura del menu hamburger
    if (hamburger) {
        hamburger.addEventListener("click", function() {
            menuOverlay.style.display = "flex"; // Mostra il menu
        });
    }
    if (closeMenu) {
        closeMenu.addEventListener("click", function() {
            menuOverlay.style.display = "none"; // Chiudi il menu
        });
    }

    // Aggiungi eventi ai pulsanti "Aggiungi al Carrello"
    const addToCartButtons = document.querySelectorAll(".aggiungi-carrello");
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            const product = {
                name: button.parentElement.querySelector('h3').innerText,
                price: button.parentElement.querySelector('p').innerText,
                image: button.parentElement.querySelector('img').src
            };

            addToCart(product);
        });
    });
    
    function addToCart(product) {
        // Recupera il carrello dal local storage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Aggiungi il prodotto al carrello
        cart.push(product);

        // Salva il carrello aggiornato nel local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} è stato aggiunto al carrello!`);
    }
});
