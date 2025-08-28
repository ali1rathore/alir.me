// AI Landing Page with Anime.js Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initHeroAnimations();
    initFloatingShapes();
    initParticleSystem();
    initScrollAnimations();
    initGlassmorphicCards();
    initTerminalAnimation();
    initNavigationEffects();
    initContactForm();
    initMorphingShapes();
    initSmoothScrolling();
});

// Hero Section Animations with Anime.js
function initHeroAnimations() {
    // Animate hero title with stagger effect
    anime({
        targets: '.hero-title .title-main',
        translateY: [60, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 500
    });

    anime({
        targets: '.hero-title .title-emphasis',
        translateY: [60, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 800
    });

    // Animate hero description
    anime({
        targets: '.hero-description',
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1100
    });

    // Animate stats with counter effect
    anime({
        targets: '.stat',
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: anime.stagger(200, {start: 1400}),
        complete: function() {
            animateStatsCounter();
        }
    });

    // Animate action buttons
    anime({
        targets: '.hero-actions .btn',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutBack',
        delay: anime.stagger(150, {start: 1800})
    });

    // Animate terminal container
    anime({
        targets: '.terminal-container',
        scale: [0.9, 1],
        opacity: [0, 1],
        rotateY: [15, 0],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 1000
    });
}

// Floating Shapes Animation
function initFloatingShapes() {
    const shapesContainer = document.getElementById('floating-shapes');
    if (!shapesContainer) return;

    // Create floating geometric shapes
    const shapes = [
        { type: 'circle', size: 60, gradient: 'var(--gradient-1)' },
        { type: 'triangle', size: 80, gradient: 'var(--gradient-2)' },
        { type: 'square', size: 50, gradient: 'var(--gradient-3)' },
        { type: 'hexagon', size: 70, gradient: 'var(--gradient-1)' },
        { type: 'circle', size: 40, gradient: 'var(--gradient-2)' }
    ];

    shapes.forEach((shape, index) => {
        const shapeEl = document.createElement('div');
        shapeEl.className = `floating-shape floating-${shape.type}`;
        shapeEl.style.cssText = `
            position: absolute;
            width: ${shape.size}px;
            height: ${shape.size}px;
            background: ${shape.gradient};
            opacity: 0.1;
            border-radius: ${shape.type === 'circle' ? '50%' : shape.type === 'square' ? '12px' : '0'};
            backdrop-filter: blur(20px);
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 1;
        `;

        if (shape.type === 'triangle') {
            shapeEl.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            shapeEl.style.borderRadius = '0';
        } else if (shape.type === 'hexagon') {
            shapeEl.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
            shapeEl.style.borderRadius = '0';
        }

        shapesContainer.appendChild(shapeEl);

        // Animate floating shapes
        anime({
            targets: shapeEl,
            translateX: [
                { value: Math.random() * 200 - 100, duration: 4000 },
                { value: Math.random() * 200 - 100, duration: 4000 }
            ],
            translateY: [
                { value: Math.random() * 100 - 50, duration: 3000 },
                { value: Math.random() * 100 - 50, duration: 3000 }
            ],
            rotate: [
                { value: 360, duration: 8000 }
            ],
            scale: [
                { value: 1.2, duration: 2000 },
                { value: 0.8, duration: 2000 }
            ],
            easing: 'easeInOutSine',
            loop: true,
            delay: index * 1000
        });
    });
}

// Particle System
function initParticleSystem() {
    const particleContainer = document.getElementById('particle-system');
    if (!particleContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary-blue);
            border-radius: 50%;
            opacity: 0.3;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 1;
        `;

        particleContainer.appendChild(particle);

        // Animate particles
        anime({
            targets: particle,
            translateY: [
                { value: -100, duration: 3000 },
                { value: 100, duration: 3000 }
            ],
            translateX: [
                { value: Math.random() * 50 - 25, duration: 2000 },
                { value: Math.random() * 50 - 25, duration: 2000 }
            ],
            opacity: [
                { value: 0.8, duration: 1500 },
                { value: 0.1, duration: 1500 }
            ],
            scale: [
                { value: 1.5, duration: 1000 },
                { value: 0.5, duration: 1000 }
            ],
            easing: 'easeInOutSine',
            loop: true,
            delay: Math.random() * 3000
        });
    }
}

// Advanced Scroll Animations
function initScrollAnimations() {
    // Intersection Observer with Anime.js
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                if (target.classList.contains('section-title')) {
                    anime({
                        targets: target,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
                
                if (target.classList.contains('section-description')) {
                    anime({
                        targets: target,
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 600,
                        easing: 'easeOutExpo',
                        delay: 200
                    });
                }

                if (target.classList.contains('expertise-grid')) {
                    animateExpertiseCards();
                }

                if (target.classList.contains('services-grid')) {
                    animateServiceCards();
                }

                if (target.classList.contains('portfolio-grid')) {
                    animatePortfolioCards();
                }

                if (target.classList.contains('contact-content')) {
                    animateContactSection();
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe elements
    const elementsToAnimate = document.querySelectorAll(
        '.section-title, .section-description, .expertise-grid, .services-grid, .portfolio-grid, .contact-content'
    );
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Glassmorphic Cards Interactions
function initGlassmorphicCards() {
    const cards = document.querySelectorAll('[data-anime="card"]');
    
    cards.forEach((card, index) => {
        // Add mouse movement parallax effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            anime({
                targets: card,
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                rotateX: 0,
                rotateY: 0,
                duration: 500,
                easing: 'easeOutElastic(1, .8)'
            });
        });

        // Add click ripple effect
        card.addEventListener('click', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--primary-blue);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                opacity: 0.6;
                z-index: 10;
            `;

            card.style.position = 'relative';
            card.appendChild(ripple);

            anime({
                targets: ripple,
                scale: [0, 40],
                opacity: [0.6, 0],
                duration: 800,
                easing: 'easeOutExpo',
                complete: () => ripple.remove()
            });
        });
    });
}

// Animate Expertise Cards
function animateExpertiseCards() {
    const cards = document.querySelectorAll('.expertise-card');
    
    anime({
        targets: cards,
        translateY: [60, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 800,
        easing: 'easeOutBack',
        delay: anime.stagger(150)
    });
}

// Animate Service Cards
function animateServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    
    anime({
        targets: cards,
        translateY: [60, 0],
        opacity: [0, 1],
        rotateX: [15, 0],
        duration: 800,
        easing: 'easeOutExpo',
        delay: anime.stagger(200)
    });
}

// Animate Portfolio Cards
function animatePortfolioCards() {
    const cards = document.querySelectorAll('.project-card');
    
    anime({
        targets: cards,
        translateY: [80, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 1000,
        easing: 'easeOutElastic(1, .8)',
        delay: anime.stagger(250)
    });
}

// Animate Contact Section
function animateContactSection() {
    anime({
        targets: '.contact-info',
        translateX: [-60, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.contact-form-container',
        translateX: [60, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 200
    });
}

// Stats Counter Animation
function animateStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const suffix = stat.textContent.replace(/[\d]/g, '');
        
        anime({
            targets: { count: 0 },
            count: target,
            duration: 2000,
            easing: 'easeOutExpo',
            update: function(anim) {
                stat.textContent = Math.floor(anim.animatables[0].target.count) + suffix;
            }
        });
    });
}

// Enhanced Terminal Animation
function initTerminalAnimation() {
    const typedText = document.getElementById('typed-text');
    const cursor = document.getElementById('cursor');
    const terminalOutput = document.getElementById('terminal-output');
    
    if (!typedText || !cursor || !terminalOutput) return;
    
    const commands = [
        { 
            command: 'python ai_agent_builder.py --create-fleet-manager',
            delay: 50,
            output: [
                { text: '🤖 Initializing AI agent framework...', type: 'info', delay: 800 },
                { text: '✅ Multi-agent orchestration loaded', type: 'success', delay: 600 },
                { text: '📊 Processing 700+ vehicle data points...', type: 'info', delay: 700 },
                { text: '🚗 Fleet optimization complete - 40% cost reduction', type: 'success', delay: 900 }
            ]
        },
        { 
            command: 'go run distributed_system.go --scale-production',
            delay: 40,
            output: [
                { text: '🏗️  Building cloud-native infrastructure...', type: 'info', delay: 700 },
                { text: '🔄 Orchestrating microservices...', type: 'info', delay: 600 },
                { text: '📈 System scaled to handle 10M+ requests/day', type: 'success', delay: 800 },
                { text: '⚡ Performance optimized - 85% faster response', type: 'success', delay: 700 }
            ]
        },
        { 
            command: 'ai-consultant --analyze-business-process',
            delay: 45,
            output: [
                { text: '🔍 Analyzing workflow inefficiencies...', type: 'info', delay: 600 },
                { text: '🧠 AI recommendations generated', type: 'success', delay: 700 },
                { text: '🎯 Automation opportunities identified', type: 'info', delay: 650 },
                { text: '💡 ROI projection: 300% within 12 months', type: 'success', delay: 800 }
            ]
        }
    ];
    
    let currentCommandIndex = 0;
    
    function typeCommand(command, delay, callback) {
        typedText.textContent = '';
        
        anime({
            targets: { progress: 0 },
            progress: command.length,
            duration: command.length * delay,
            easing: 'linear',
            update: function(anim) {
                const progress = Math.floor(anim.animatables[0].target.progress);
                typedText.textContent = command.substring(0, progress);
            },
            complete: callback
        });
    }
    
    function showOutput(outputs, callback) {
        let outputIndex = 0;
        
        const showNextOutput = () => {
            if (outputIndex < outputs.length) {
                const output = outputs[outputIndex];
                const outputLine = document.createElement('div');
                outputLine.className = `output-line output-${output.type}`;
                outputLine.textContent = output.text;
                outputLine.style.opacity = '0';
                outputLine.style.transform = 'translateY(10px)';
                
                terminalOutput.appendChild(outputLine);
                
                // Animate in with Anime.js
                anime({
                    targets: outputLine,
                    opacity: [0, 1],
                    translateY: [10, 0],
                    duration: 300,
                    easing: 'easeOutExpo'
                });
                
                outputIndex++;
                setTimeout(showNextOutput, output.delay);
            } else {
                setTimeout(callback, 2000);
            }
        };
        
        showNextOutput();
    }
    
    function runNextCommand() {
        const command = commands[currentCommandIndex];
        
        // Clear previous content with animation
        anime({
            targets: terminalOutput.children,
            opacity: [1, 0],
            translateY: [0, -10],
            duration: 200,
            easing: 'easeInExpo',
            complete: () => {
                terminalOutput.innerHTML = '';
                
                typeCommand(command.command, command.delay, () => {
                    showOutput(command.output, () => {
                        currentCommandIndex = (currentCommandIndex + 1) % commands.length;
                        setTimeout(runNextCommand, 3000);
                    });
                });
            }
        });
    }
    
    // Start the animation
    setTimeout(runNextCommand, 1000);
}

// Morphing Shapes
function initMorphingShapes() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create morphing background shapes
    const morphShapes = document.createElement('div');
    morphShapes.className = 'morph-shapes';
    morphShapes.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
        pointer-events: none;
    `;

    for (let i = 0; i < 3; i++) {
        const shape = document.createElement('div');
        shape.className = 'morph-shape';
        shape.style.cssText = `
            position: absolute;
            width: 300px;
            height: 300px;
            background: var(--gradient-${i + 1});
            opacity: 0.05;
            border-radius: 50%;
            filter: blur(40px);
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;

        morphShapes.appendChild(shape);

        // Animate morphing shapes
        anime({
            targets: shape,
            translateX: [
                { value: Math.random() * 400 - 200, duration: 6000 },
                { value: Math.random() * 400 - 200, duration: 6000 }
            ],
            translateY: [
                { value: Math.random() * 200 - 100, duration: 4000 },
                { value: Math.random() * 200 - 100, duration: 4000 }
            ],
            scale: [
                { value: 1.5, duration: 3000 },
                { value: 0.8, duration: 3000 }
            ],
            borderRadius: [
                { value: '30%', duration: 2000 },
                { value: '50%', duration: 2000 }
            ],
            easing: 'easeInOutSine',
            loop: true,
            delay: i * 2000
        });
    }

    hero.appendChild(morphShapes);
}

// Navigation Effects
function initNavigationEffects() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Enhanced scroll effect
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            anime({
                targets: nav,
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        } else {
            anime({
                targets: nav,
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        }
    });

    // Animated nav links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            anime({
                targets: link,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutBack'
            });
        });

        link.addEventListener('mouseleave', () => {
            anime({
                targets: link,
                scale: 1,
                duration: 300,
                easing: 'easeOutElastic(1, .6)'
            });
        });
    });
}

// Contact Form with Animations
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Animate form inputs on focus
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            anime({
                targets: input,
                scale: 1.02,
                borderColor: 'var(--primary-blue)',
                duration: 200,
                easing: 'easeOutQuad'
            });
        });

        input.addEventListener('blur', () => {
            anime({
                targets: input,
                scale: 1,
                duration: 300,
                easing: 'easeOutElastic(1, .8)'
            });
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        if (!validateForm(data)) return;
        
        // Animate submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        anime({
            targets: submitBtn,
            scale: [1, 0.95, 1.1, 1],
            duration: 600,
            easing: 'easeOutElastic(1, .8)'
        });
        
        submitForm(data);
    });
}

// Form Validation
function validateForm(data) {
    const required = ['name', 'email'];
    const errors = [];
    
    required.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(`${field} is required`);
        }
    });
    
    if (data.email && !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (errors.length > 0) {
        showFormMessage(errors.join(', '), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm(data) {
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showFormMessage('Thank you! I\'ll get back to you within 24 hours.', 'success');
        document.getElementById('contact-form').reset();
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

function showFormMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        anime({
            targets: existingMessage,
            opacity: [1, 0],
            translateY: [0, -10],
            duration: 200,
            easing: 'easeInExpo',
            complete: () => existingMessage.remove()
        });
    }
    
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message-${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        margin-top: 16px;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 14px;
        opacity: 0;
        transform: translateY(10px);
        ${type === 'success' ? 
            'background: rgba(16, 185, 129, 0.1); color: var(--accent-green); border: 1px solid rgba(16, 185, 129, 0.2);' : 
            'background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2);'
        }
    `;
    
    document.getElementById('contact-form').appendChild(messageEl);
    
    // Animate message in
    anime({
        targets: messageEl,
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 300,
        easing: 'easeOutExpo'
    });
    
    setTimeout(() => {
        anime({
            targets: messageEl,
            opacity: [1, 0],
            translateY: [0, -10],
            duration: 300,
            easing: 'easeInExpo',
            complete: () => messageEl.remove()
        });
    }, 5000);
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                anime({
                    targets: document.documentElement,
                    scrollTop: targetPosition,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
            }
        });
    });
}

// Performance optimization for mobile
function optimizeForMobile() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Reduce particle count for mobile
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index > 25) particle.remove();
        });
        
        // Simplify animations for mobile
        const floatingShapes = document.querySelectorAll('.floating-shape');
        floatingShapes.forEach(shape => {
            shape.style.opacity = '0.05';
        });
    }
}

// Initialize mobile optimizations
window.addEventListener('resize', optimizeForMobile);
optimizeForMobile();