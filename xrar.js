function randomImage() {
    return images[Math.floor(Math.random() * images.length)];
}
function changePlacard() {
    document.getElementById('placard').setAttribute('src', randomImage());
}

setInterval(changePlacard, 3000);