/* https://www.falconmasters.com/web-design/boton-ir-arriba-javascript/ */ 

function ocultarVolverArriba() {
    document.getElementById("volverArriba").style.display = "none";
}

function controlScroll() {
    if (window.pageYOffset > 10) {
        document.getElementById("volverArriba").style.display = "block";
    } else {
        document.getElementById("volverArriba").style.display = "none";
    }
}

function volverArriba() {
    document.documentElement.scrollTop = 0;
}

ocultarVolverArriba();
window.addEventListener("scroll", controlScroll);