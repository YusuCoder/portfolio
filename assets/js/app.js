import { setDimensions, animate } from './praticles.js';

const splashScreen = document.querySelector('.splash__screen');
const splashLeft = document.querySelector('.left');
const splashRight = document.querySelector('.right');
const progressBar = document.querySelector('.progress__bar');
const percentage = document.querySelector('.percentage');
const header = document.getElementById('header'); // Reference the header element

let loading = true;

window.addEventListener('resize', setDimensions);

setDimensions();
animate();

async function setup() {
    setTimeout(() => {
        progressBar.style.height = '40%';
    }, 2000);

    setTimeout(() => {
        progressBar.style.height = '80%';
    }, 4000);

    setTimeout(() => {
        progressBar.style.height = '100%';
    }, 5000);

    setTimeout(() => {
        splashLeft.classList.add('active');
        splashRight.classList.add('active');
        progressBar.classList.add('complete');
        splashScreen.classList.add('complete');
        loading = false;
        
        // Show the header after 2 seconds (2000ms) after the progress bar reaches 100%
        setTimeout(() => {
            header.style.visibility = 'visible';  // Show the header
            header.style.opacity = 0;             // Start with opacity 0
            header.style.transition = 'opacity 1s'; // Smooth fade-in transition
            setTimeout(() => {
                header.style.opacity = 1;         // Fade in the header
            }, 100); // Small delay to trigger opacity change
        }, 2000); // Delay header appearance by 2 seconds (2000ms)
        
    }, 6000);
}

function percentageTracker() {
    if (loading) {
        let { height, top } = progressBar.getBoundingClientRect();
        let p = Math.ceil((height / window.innerHeight) * 100);
        percentage.textContent = `${p}%`;
        percentage.style.transform = `translateY(calc(${top - window.innerHeight}px))`;
        requestAnimationFrame(percentageTracker);
    }
}

setup();

percentageTracker();
