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