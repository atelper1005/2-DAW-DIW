const onWindowResize = () => {
    console.warn("Hola")
};

const cambiarDiseño = () => {
    const navTexto = document.querySelector("header .header__zonaNavegacion");
    const navBurguer = document.querySelector("header__zonaNavegacion-hamburguer");

    if(!navTexto.getAttribute("hidden")) {
        console.log("Mostrar nav hamburguer")
        navBurguer.removeAttribute("hidden");
        navBurguer.style.display = "flex";
        navTexto.setAttribute("hidden", "true");
        navTexto.style.display = flex;
    }
};

const cambiarDiseño2 = () => {
    const navTexto = document.querySelector("header .header__zonaNavegacion");
    const navBurguer = document.querySelector("header__zonaNavegacion-hamburguer");

    if(navTexto.getAttribute("hidden")) {
        console.log("Mostrar nav texto")
        navTexto.removeAttribute("hidden");
        navTexto.style.display = "flex";
        navBurguer.setAttribute("hidden", "true");
        navBurguer.style.display = flex;
    }
};

window.onresize = () => {
    if(window.innerWidth <= 600) {
        cambiarDiseño();
    } else {
        cambiarDiseño2();
    }
};

window.onresize = onWindowResize();
