function showPopup(server) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');

    if (server === 'hostallow') {
        title.textContent = 'Hostallow';
        description.textContent = 'פתרונות ענן מתקדמים ושירותי טכנולוגיה.';
    } else if (server === 'liadt-shop') {
        title.textContent = 'Liadt Development';
        description.textContent = 'מערכות פייבאם ובוטים לדיסקורד.';
    }

    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}
