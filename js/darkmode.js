        const myInput = document.getElementById('myInput')

        //dark-mode bootstrap
        const themeToggler = document.getElementById("theme-toggler");
        const themeButtons = document.querySelectorAll("[data-bs-theme-value]");
        const htmlElement = document.documentElement;

        // Carregar tema salvo
        const savedTheme = localStorage.getItem("theme") || "dark";
        htmlElement.setAttribute("data-bs-theme", savedTheme);

        // Atualiza o botão conforme o tema
        function updateButtonIcon(theme) {
            if(themeToggler !== null){
                themeToggler.textContent = (theme === "dark") ? "dark_mode" : "light_mode";
            }
            
        }
        updateButtonIcon(savedTheme);

        // Evento de clique nos botões do dropdown
        themeButtons.forEach(button => {
            button.addEventListener("click", () => {
                const selectedTheme = button.getAttribute("data-bs-theme-value");

                // Aplicar o tema
                if (selectedTheme === "auto") {
                    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    htmlElement.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
                    localStorage.setItem("theme", prefersDark ? "dark" : "light");
                } else {
                    htmlElement.setAttribute("data-bs-theme", selectedTheme);
                    localStorage.setItem("theme", selectedTheme);
                }

                // Atualizar o ícone do botão
                updateButtonIcon(selectedTheme);
            });
        });
