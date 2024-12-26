class BackgroundAnimation {
    constructor() {
        this.canvas = document.getElementById('bgAnimation');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.numberOfParticles = 50;
        this.resizeTimeout = null;
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        this.setCanvasSize();
        this.createParticles();
    }

    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 1,
                speedX: Math.random() * 2 - 1,
                speedY: Math.random() * 2 - 1,
                lastX: 0,
                lastY: 0
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update particle position
            particle.lastX = particle.x;
            particle.lastY = particle.y;
            
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.speedY *= -1;
            }

            // Draw particle
            this.ctx.beginPath();
            this.ctx.moveTo(particle.lastX, particle.lastY);
            this.ctx.lineTo(particle.x, particle.y);
            this.ctx.strokeStyle = 'rgba(75, 85, 99, 0.1)';
            this.ctx.lineWidth = particle.radius;
            this.ctx.stroke();

            // Draw connections
            this.particles.forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    const alpha = (150 - distance) / 150;
                    this.ctx.strokeStyle = `rgba(75, 85, 99, ${alpha * 0.05})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.setCanvasSize();
                this.createParticles();
            }, 250);
        });

        // Mouse interaction
        let isHovering = false;
        let mouseX = 0;
        let mouseY = 0;

        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            isHovering = true;

            // Create ripple effect
            this.particles.forEach(particle => {
                const dx = particle.x - mouseX;
                const dy = particle.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const angle = Math.atan2(dy, dx);
                    const force = (100 - distance) / 100;
                    particle.speedX += Math.cos(angle) * force * 0.2;
                    particle.speedY += Math.sin(angle) * force * 0.2;
                }
            });
        });

        this.canvas.addEventListener('mouseleave', () => {
            isHovering = false;
        });
    }
}

// Initialize animation when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BackgroundAnimation();

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in, .slide-up').forEach(element => {
        observer.observe(element);
    });
});