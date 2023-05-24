const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const amplitude = 100; // height of the wave
const frequency = 0.01; // speed of the wave
const offset = 200; // distance between the dots

function moveDots(e) {
    const y1 = amplitude * Math.sin(frequency * e.clientX) + window.innerHeight / 2;
    const y2 = amplitude * Math.sin(frequency * e.clientX + offset) + window.innerHeight / 2;

    dot1.style.transform = `translate(${e.clientX - dot1.offsetWidth / 2}px, ${y1 - dot1.offsetHeight / 2}px)`;
    dot2.style.transform = `translate(${e.clientX - dot2.offsetWidth / 2}px, ${y2 - dot2.offsetHeight / 2}px)`;
}

window.addEventListener('mousemove', moveDots);

const sections = document.querySelectorAll('.section');

function scrollHandler() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const bg = section.querySelector('.bg');
        const depth = bg.dataset.depth || 0.5;
        const movement = -(scrollY * depth);

        bg.style.transform = `translate3d(0, ${movement}px, 0)`;
    });
}

window.addEventListener('scroll', scrollHandler);