const icon = document.getElementById("nav-menu-responsive__hamburger");

function showResponsiveMenu() {
    var menu = document.getElementById("nav-menu-responsive");
    var heroBanner = document.getElementById("hero-banner");
    if(menu.className === "nav-menu-responsive") {
        menu.classList.add("nav-menu-responsive--open");
        heroBanner.style.overflowY = "hidden";
    } else {
        menu.classList = "nav-menu-responsive";
        heroBanner.style.overflowY = "";
    }
}

icon.addEventListener('click', showResponsiveMenu)