const canvas = document.querySelector('.hero__canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let randoSpeed = 2
class Particle{
    constructor(){
        this.coordinates = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
        }
        this.speedY = Math.random() > .5 ? (Math.random() * randoSpeed) * -1  : (Math.random() * randoSpeed);
        this.speedX = Math.random() > .5 ? (Math.random() * randoSpeed) * -1  : (Math.random() * randoSpeed);
    }

    reset(){
        this.coordinates = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
        }
    }

    move(){
        let maxDistanceX = window.innerWidth < 468 ? 150 : 120;
        let maxDistanceY = window.innerWidth < 468 ? 180 : 120;

        // Bounce off edges
        if(this.coordinates.x >= canvas.width){
            this.speedX = this.speedX * -1
        }
        if(this.coordinates.y >= canvas.height){
            this.speedY = this.speedY * -1
        }
        if(this.coordinates.y <= 0){
            this.speedY = this.speedY * -1
        }
        if(this.coordinates.x <= 0){
            this.speedX = this.speedX * -1
        }

        for(let i = 0; i < particles.length; i++ ){
            let {x, y} = this.coordinates;
            if(Math.abs(x - particles[i].coordinates.x) <= maxDistanceX && Math.abs(y - particles[i].coordinates.y) <= maxDistanceY){
                ctx.strokeStyle = `#03c0ff25`

                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(particles[i].coordinates.x, particles[i].coordinates.y)
                ctx.stroke();
            }
        }

        this.coordinates.x += this.speedX;
        this.coordinates.y += this.speedY;
    }

}

function setDimensions(){
    particles = []

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;

    particles.forEach(particle => {
        particle.reset();
    });

    let randoSpeed = window.innerWidth < 468 ? 1 : 2;

    let w = window.innerWidth;
    let particleTotal = w > 1000 ? 250 : (w < 468 ? 300 : 150); // Reduce to 200 on mobile

    for(let i = 0; i < particleTotal; i++){
        let particle = new Particle();
        particles.push(particle);
    }
}


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < particles.length; i++){
        let {x, y} = particles[i].coordinates;
        particles[i].move()
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.stroke();
    }
    requestAnimationFrame(animate)
}

export {
    setDimensions,
    animate,
    particles
}
