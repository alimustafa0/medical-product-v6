document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const themeStyle = document.getElementById("theme-style");
    const form = document.querySelector("form");
    const successMessage = document.getElementById("success-message");
    const contentWrapper = document.getElementById("content-wrapper");


    // Check local storage for the current theme
    const currentTheme = localStorage.getItem("theme");

    // Set the initial theme based on local storage or the default (light) theme
    if (currentTheme === "dark") {
        themeStyle.href = "dark-theme.css"; // Use your dark theme stylesheet
        document.body.classList.add("dark-mode");
    } else {
        themeStyle.href = "style.css"; // Use your light theme stylesheet
        document.body.classList.remove("dark-mode");
    }

    // Toggle between light and dark themes
    darkModeToggle.addEventListener("click", function() {
        if (document.body.classList.contains("dark-mode")) {
            themeStyle.href = "style.css"; // Use your light theme stylesheet
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        } else {
            themeStyle.href = "dark-theme.css"; // Use your dark theme stylesheet
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        }
    });
    form.addEventListener("submit", function(event) {        
    });    
});
