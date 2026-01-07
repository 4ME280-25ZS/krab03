// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill items and project items
document.querySelectorAll('.skill-item, .project-item, .contact-link').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Change header color on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Copy to clipboard for contact info
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const text = this.dataset.copy;
        if (!text) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                const original = this.textContent;
                this.textContent = 'Zkopírováno!';
                setTimeout(() => this.textContent = original, 1400);
            }).catch(() => {
                // fallback
                const el = document.createElement('textarea');
                el.value = text;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                el.remove();
            });
        } else {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            el.remove();
            const original = this.textContent;
            this.textContent = 'Zkopírováno!';
            setTimeout(() => this.textContent = original, 1400);
        }
    });
});

// Console message
console.log('👋 Vítejte na mojí osobní vizitce! Pokud máte zájem o spolupráci, neváhejte se ozvat na e-mail. Díky!');
