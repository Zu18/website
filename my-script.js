window.addEventListener("scroll", function scrollNavbar() {
    var nav = document.querySelector("#myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.classList.add("topNavbar-scrolled");
    } else {
        nav.classList.remove("topNavbar-scrolled");
    }
});

