function abrirMenu() {
    const menu = document.getElementById("menuLateral");

    if (menu.classList.contains("aberto")) {
        menu.classList.remove("aberto");
    } else {
        menu.classList.add("aberto");
    }
}
