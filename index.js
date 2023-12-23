const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", function () {
    navList.classList.toggle("drop-down");
    if (navList.classList.contains("drop-down")) {
        document.body.style.overflowY = "hidden"
    } else {
        document.body.style.overflowY = "scroll"

    }
})