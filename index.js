const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

window.onload = () => {
    if (menuIcon) {
        menuIcon.addEventListener("click", function () {
            showMenuHamburger();
        });
    }
}

function showMenuHamburger() {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}