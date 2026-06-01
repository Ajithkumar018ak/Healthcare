// Navbar Background Scroll

window.addEventListener("scroll", function(){

    let navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";

    }else{

        navbar.style.boxShadow = "none";

    }

});

const navbarCollapse = document.getElementById("navbarNav");

navbarCollapse.addEventListener("shown.bs.collapse", function () {
    document.body.style.overflow = "hidden";
});

navbarCollapse.addEventListener("hidden.bs.collapse", function () {
    document.body.style.overflow = "auto";
});