(function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .btn-primary, .btn-outline');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // update URL hash without jumping
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // contact form handling with Formspree
    const form = document.getElementById('contactForm');
    const feedbackDiv = document.getElementById('formFeedback');

    if (form) {
        form.addEventListener('submit', function(e) {
            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            const messageInput = form.querySelector('textarea[name="message"]');
            
            let nameVal = nameInput.value.trim();
            let emailVal = emailInput.value.trim();
            let messageVal = messageInput.value.trim();
            
            if (!nameVal || !emailVal || !messageVal) {
                e.preventDefault();
                feedbackDiv.innerHTML = '<span style="color:#b91c1c;"><i class="fas fa-exclamation-circle"></i> Please fill all fields.</span>';
                setTimeout(() => {
                    feedbackDiv.innerHTML = '';
                }, 3000);
                return;
            }
            
            const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
            if (!emailPattern.test(emailVal)) {
                e.preventDefault();
                feedbackDiv.innerHTML = '<span style="color:#b91c1c;"><i class="fas fa-envelope-open-text"></i> Please enter a valid email address.</span>';
                setTimeout(() => {
                    feedbackDiv.innerHTML = '';
                }, 3000);
                return;
            }
            
            feedbackDiv.innerHTML = '<span style="color:#2c6e9e;"><i class="fas fa-spinner fa-pulse"></i> Sending your message...</span>';
        });
    }

    // Optional: Additional small dynamic year (if needed)
    const yearSpan = document.querySelector('.footer p:first-child');
    if (yearSpan) {
        // just a touch but fine
    }
})();
