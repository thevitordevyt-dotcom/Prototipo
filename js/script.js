const botao = document.getElementById("dark")

botao.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        botao.textContent = "☀️ Modo Light"; 
    } else {
        botao.textContent = "🌙 Modo Dark"; 
    }
});