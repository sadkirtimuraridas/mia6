document.addEventListener("DOMContentLoaded", async () => {
    const placeholder = document.getElementById("footer-placeholder");

    if (!placeholder) return;

    try {
        const response = await fetch("../component/footer.html");

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        placeholder.innerHTML = await response.text();
    } catch (error) {
        console.error("Footer loading failed:", error);
    }
});