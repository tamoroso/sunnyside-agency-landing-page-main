const icon = document.getElementById("nav-menu-responsive__hamburger");

function showResponsiveMenu() {
    var menu = document.getElementById("nav-menu-responsive");
    var heroBanner = document.getElementById("hero-banner");
    var iconPath = document.getElementById("icon-path");
    if(menu.className === "nav-menu-responsive") {
        menu.classList.add("nav-menu-responsive--open");
        heroBanner.style.overflowY = "hidden";
        iconPath.style.fill = "hsla(0, 100%, 100%, 0.64)";
    } else {
        menu.classList = "nav-menu-responsive";
        heroBanner.style.overflowY = "";
        iconPath.style.fill = "";
    }
}

icon.addEventListener('click', showResponsiveMenu)