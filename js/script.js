const dark = document.querySelector(".dark");

if (dark) {
    dark.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            dark.textContent = "Modo Light";
        } else {
            dark.textContent = "Modo Dark";
        }
    });
}