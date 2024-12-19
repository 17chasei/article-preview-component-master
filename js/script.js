const shareButton = document.getElementById('share-button');
const shareMenu = document.getElementById('social-media');
const returnButton = document.getElementById('return-button');

shareButton.addEventListener('click', () => {
    shareMenu.classList.toggle('active');
});

returnButton.addEventListener('click', () => {
    shareMenu.classList.remove('active');
});