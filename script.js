// Navigation scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link detection
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const fadeObserver = new IntersectionObserver(fadeObserverCallback, fadeObserverOptions);
fadeElements.forEach(element => fadeObserver.observe(element));

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing effect in hero
function typeWriter() {
    const element = document.querySelector('.typing');
    if (!element) return;

    const text = element.textContent;
    element.textContent = '';
    let index = 0;

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        } else {
            element.classList.remove('typing');
        }
    };

    type();
}

// Home button and Designer text hover interaction
const homeButton = document.querySelector('.home-button');
const designerText = document.querySelector('.designer-text');

if (homeButton && designerText) {
    homeButton.addEventListener('mouseenter', () => {
        designerText.classList.add('active');
    });

    homeButton.addEventListener('mouseleave', () => {
        designerText.classList.remove('active');
    });
}

// Initialize on page load
window.addEventListener('load', () => {
    typeWriter();
});
