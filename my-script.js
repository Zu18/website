window.addEventListener("scroll", function scrollNavbar() {
    let nav = document.querySelector("#myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.classList.add("topNavbar-scrolled");
    } else {
        nav.classList.remove("topNavbar-scrolled");
    }
});

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}