// Accordion Logic
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const wasActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

        // Toggle current item
        if (!wasActive) {
            item.classList.add('active');
        }
    });
});

// Form Submission
const leadForm = document.getElementById('leadForm');
if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(leadForm);
        const data = {
            name: formData.get('name'),
            company: formData.get('company'),
            phone: formData.get('phone')
        };

        console.log('Lead Submitted:', data);

        // Track conversion (example for GTM/GA4)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'lead_submit', {
                'event_category': 'conversion',
                'event_label': 'hero_form'
            });
        }

        // Track for Meta Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
        }

        // Show success message based on language
        const isArabic = document.documentElement.lang === 'ar';
        alert(isArabic ? 'شكراً لك! سنتواصل معك قريباً.' : 'Thank you! We will contact you soon.');
        leadForm.reset();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(15, 63, 58, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Track WhatsApp clicks
const waFloat = document.querySelector('.whatsapp-float');
if (waFloat) {
    waFloat.addEventListener('click', () => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
                'event_category': 'engagement',
                'event_label': 'floating_button'
            });
        }
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact');
        }
    });
}

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'call_click', {
                'event_category': 'engagement',
                'event_label': 'phone_link'
            });
        }
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact');
        }
    });
});

// Add animation on scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate cards on scroll
document.querySelectorAll('.pain-card, .why-card, .industry-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
