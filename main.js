let elements = document.getElementsByTagName("a");

for (el of elements) {
    if (el.innerText === "Sair") {
        el.addEventListener("click", function (event) {
            if (!confirm("Tem certeza que deseja sair?")) {
                event.preventDefault();
            }
        });
    }
}

setInterval(() => {
    window.location.reload(true);
}, 10000);
