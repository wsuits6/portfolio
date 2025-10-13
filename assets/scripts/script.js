
      // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Add circuit lines dynamically
        const bgAnimation = document.querySelector('.bg-animation');
        for (let i = 0; i < 10; i++) {
            const line = document.createElement('div');
            line.className = 'circuit-line';
            line.style.top = `${Math.random() * 100}%`;
            line.style.width = `${Math.random() * 500 + 200}px`;
            line.style.animationDelay = `${Math.random() * 5}s`;
            bgAnimation.appendChild(line);
        }

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 1s forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card, .stat-card').forEach(el => {
            observer.observe(el);
        });

        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-image, .pixel-grid');
            parallaxElements.forEach(el => {
                el.style.transform = `translateY(${scrolled * 0.3}px)`;
            });
        });