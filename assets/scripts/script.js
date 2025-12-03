const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Optional: close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});



// Theme Switching
const themeButtons = document.querySelectorAll('.theme-btn');
const html = document.documentElement;

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;

        // remove all theme classes before applying a new one
        html.classList.remove('light-theme', 'dark-theme', 'hacker-theme', 'webdev-theme');
        html.classList.add(theme);
    });
});
