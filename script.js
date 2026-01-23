document.addEventListener('DOMContentLoaded', () => {
    
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    const welcomeTxt = document.querySelector('.glitch-text');
    const originalText = welcomeTxt.innerText;
    welcomeTxt.innerText = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            welcomeTxt.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-nav');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.background = 'rgba(27, 26, 26, 0.9)';
            header.style.padding = '1rem 0';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('reveal-container');
    const revealLayer = document.getElementById('reveal-layer');

    if (!container || !revealLayer) return;

    let mouseX = 0;
    let mouseY = 0;
    let isInside = false;

    // Track mouse position
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        // Calculate percentages
        mouseX = ((e.clientX - rect.left) / rect.width) * 100;
        mouseY = ((e.clientY - rect.top) / rect.height) * 100;
        
        if (!isInside) {
            isInside = true;
            // Set the size when mouse enters
            container.style.setProperty('--mask-size', '25%');
        }
    });

    // Use RequestAnimationFrame for high-performance updates
    function updateMask() {
        if (isInside) {
            container.style.setProperty('--mouse-x', `${mouseX}%`);
            container.style.setProperty('--mouse-y', `${mouseY}%`);
        }
        requestAnimationFrame(updateMask);
    }

    // Start the loop
    requestAnimationFrame(updateMask);

    // Reset when leaving
    container.addEventListener('mouseleave', () => {
        isInside = false;
        container.style.setProperty('--mask-size', '0%');
    });
});