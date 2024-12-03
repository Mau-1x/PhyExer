document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        alert('You clicked on an image!');
    });
});