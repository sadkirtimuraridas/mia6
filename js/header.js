const headerPath = document.body.dataset.header || "header.html";

fetch(headerPath)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load header");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => console.error(error));