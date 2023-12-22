function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');
    const darkModeButton = document.querySelector('.dark-mode-button');
    const footer = document.querySelector('.footer');
    const logo = document.getElementById('logo');

    const isDarkMode = body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode', isDarkMode);
    navLinks.forEach(link => link.classList.toggle('dark-mode', isDarkMode));
    darkModeButton.classList.toggle('dark-mode', isDarkMode);
    footer.classList.toggle('dark-mode', isDarkMode);

    if (isDarkMode) {
        logo.src="./images/logowit.jpg";
    } else {
        logo.src="./images/nxtmuseum.com.png";
    }
}
