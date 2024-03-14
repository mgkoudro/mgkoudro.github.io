document.addEventListener('DOMContentLoaded', () => {
    const themeToggleImg = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggleImg.src = currentTheme === 'dark' ? 'lightbulb-on.png' : 'lightbulb-off.png';
    }

    themeToggleImg.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');

        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleImg.src = 'lightbulb-off.png';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleImg.src = 'lightbulb-on.png';
        }
    });
});
