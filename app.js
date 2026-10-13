"use strict";

/* =========================================
   MY APP STORE
   Fonctions principales de la boutique
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // 1. Récupérer les éléments du menu
    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("navigation");

    // 2. Ouvrir et fermer le menu sur téléphone
    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", String(isOpen));

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Fermer le menu" : "Ouvrir le menu"
            );

            menuButton.textContent = isOpen ? "✕" : "☰";

        });

        // Fermer le menu après avoir sélectionné une section
        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Ouvrir le menu");
                menuButton.textContent = "☰";

            });

        });

        // Fermer le menu avec la touche Échap
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navigation.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Ouvrir le menu");
                menuButton.textContent = "☰";

            }

        });

        // Si la fenêtre s'agrandit, réinitialiser le menu mobile
        window.addEventListener("resize", function () {

            if (window.innerWidth > 700) {

                navigation.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Ouvrir le menu");
                menuButton.textContent = "☰";

            }

        });

    }

    // 3. Afficher automatiquement l'année actuelle
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // 4. Vérifier que l'icône de la boutique est chargée
    document.querySelectorAll(
        'img[src="images/my_app_store_icon.png"]'
    ).forEach(function (img) {

        img.addEventListener("error", function () {
            console.warn(
                "My App Store : impossible de charger l'icône.",
                img.src
            );
        });

    });

    // 5. Afficher un message dans la console pour les tests
    console.info("My App Store est prêt.");

});