const canvas = document.querySelector('.hero__canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let randoSpeed = 2;
let frameRate = 1000 / 60; // Target ~60 FPS

class Particle {
    constructor() {
        this.coordinates = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
        };
        this.speedY =
            Math.random() > 0.5 ? Math.random() * randoSpeed * -1 : Math.random() * randoSpeed;
        this.speedX =
            Math.random() > 0.5 ? Math.random() * randoSpeed * -1 : Math.random() * randoSpeed;
    }

    reset() {
        this.coordinates = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
        };
    }

    move() {
        let maxDistance = window.innerWidth < 468 ? 150 : 100;

        // Bounce off edges
        if (this.coordinates.x >= canvas.width) this.speedX *= -1;
        if (this.coordinates.y >= canvas.height) this.speedY *= -1;
        if (this.coordinates.y <= 0) this.speedY *= -1;
        if (this.coordinates.x <= 0) this.speedX *= -1;

        // Draw connecting lines within the range
        for (let i = 0; i < particles.length; i++) {
            let { x, y } = this.coordinates;
            let dx = x - particles[i].coordinates.x;
            let dy = y - particles[i].coordinates.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= maxDistance) {
                ctx.strokeStyle = `rgba(3, 192, 255, 0.15)`;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(particles[i].coordinates.x, particles[i].coordinates.y);
                ctx.stroke();
            }
        }

        this.coordinates.x += this.speedX;
        this.coordinates.y += this.speedY;
    }
}

function setDimensions() {
    particles = [];

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;

    // Adjust speed and particle count for screen size
    randoSpeed = window.innerWidth < 468 ? 1 : 2;
    let w = window.innerWidth;
    let particleTotal = w > 1000 ? 150 : w < 468 ? 80 : 120; // Adjusted counts

    for (let i = 0; i < particleTotal; i++) {
        let particle = new Particle();
        particles.push(particle);
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        let { x, y } = particles[i].coordinates;
        particles[i].move();
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.stroke();
    }
    setTimeout(() => requestAnimationFrame(animate), frameRate); // Throttling animation
}

export { setDimensions, animate, particles };
