document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sidebar a");
    const contentArea = document.getElementById("content-area");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita la recarga de página

            const contentUrl = this.getAttribute("data-content");

            if (contentUrl) {
                fetch(contentUrl)
                    .then(response => {
                        if (!response.ok) throw new Error("No se pudo cargar el contenido.");
                        return response.text();
                    })
                    .then(data => {
                        contentArea.innerHTML = data; // Inserta el contenido en el área central
                    })
                    .catch(error => {
                        contentArea.innerHTML = "<p>Error al cargar el contenido. Verifica que el archivo existe.</p>";
                        console.error(error);
                    });
            }
        });
    });
});
