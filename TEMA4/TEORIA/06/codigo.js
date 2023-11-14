const cambiarDiseño = () => {
    const navTexto = document.querySelector("header .nav_texto");
    const navBurguer = document.querySelector("header .nav_burguer");

    if(navTexto.getAttribute("display")) {
        navTexto.setAttribute("display", "none");
        navBurguer.removeAttribute("display");
    } else {
        navBurguer.setAttribute("display", "none");
        navTexto.removeAttribute("display");
    }
}