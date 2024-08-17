// script.js

document.querySelectorAll('.video1').forEach(video => {
    video.addEventListener('mouseover', () => video.play());
    video.addEventListener('mouseout', () => video.pause());
});