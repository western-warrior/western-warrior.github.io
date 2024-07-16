var menuOn = false;

document.getElementById("menuIcon").addEventListener("click", function () {
    var mob = document.getElementById("mobileNav");
    var icon = document.getElementById("menuIcon");
    if (menuOn) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-cross");
        mob.classList.add("hidden");
        mob.classList.remove("animate__animated animate__slideInLeft");
        console.log("no");
    } else {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-cross");
        mob.classList.remove("hidden");
        mob.classList.add("animate__animated animate__slideInLeft")
        console.log("yes");
    }
    menuOn = !menuOn;
});