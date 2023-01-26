const container = document.querySelector('.container');
const hamburgerButton = document.getElementById('hamburgerButton');

hamburgerButton.addEventListener('click', () => {
    container.classList.toggle('active');
})