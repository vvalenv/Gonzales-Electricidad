function loadComponents(id, path) {
    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar el archivo");
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Error:", error));
}

loadComponents("header","../html/header.html");
loadComponents("main","../html/main.html");
loadComponents("footer","../html/footer.html");
document.addEventListener("click", function(event) {
    // Verificamos si lo que se clickeó es el botón de menú
    if (event.target.closest("#menu")) {
        const links = document.querySelector("#links");
        const menu = document.querySelector("#menu");
        if (links) {
            links.classList.toggle("mostrar");
            menu.classList.toggle("rotacion");
        }
    }
});