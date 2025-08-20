// Product Data
const products = {
    'chicken-achar': {
        name: 'Chicken Achar',
        price: 'NPR299',
        weight: '500g',
        description: 'Spicy and tangy chicken pickle made with traditional spices and authentic family recipe. This pickle is perfect for adding a burst of flavor to your meals.',
        image: 'assets/ChatGPT Image Aug 19, 2025, 05_45_39 PM.png',
        ingredients: [
            'Fresh chicken pieces',
            'Mustard oil',
            'Red chili powder',
            'Turmeric powder',
            'Coriander powder',
            'Cumin seeds',
            'Fenugreek seeds',
            'Asafoetida',
            'Salt',
            'Lemon juice',
            'Ginger-garlic paste',
            'Vinegar'
        ],
        nutritionalInfo: [
            'Calories: 180 per 100g',
            'Protein: 12g',
            'Fat: 15g',
            'Carbohydrates: 3g',
            'Fiber: 1g'
        ],
        storage: 'Store in a cool, dry place. Refrigerate after opening. Best consumed within 6 months.',
        shelfLife: '12 months (unopened), 6 months (opened)',
        allergens: 'Contains mustard oil. May contain traces of nuts.',
        servingSuggestion: 'Perfect with rice, roti, or as a side dish. Can be used in sandwiches or as a topping.',
        origin: 'Traditional family recipe from North India',
        certification: 'FSSAI Certified, 100% Natural Ingredients'
    },
    'lashuna-achar': {
        name: 'Lashuna Achar',
        price: 'NPR199',
        weight: '500g',
        description: 'Aromatic garlic pickle with health benefits and perfect spice balance. Made with fresh garlic cloves and traditional spices for authentic taste.',
        image: 'assets/no name 3.png',
        ingredients: [
            'Fresh garlic cloves',
            'Mustard oil',
            'Red chili powder',
            'Turmeric powder',
            'Coriander powder',
            'Cumin seeds',
            'Fenugreek seeds',
            'Asafoetida',
            'Salt',
            'Lemon juice',
            'Ginger paste',
            'Vinegar',
            'Black pepper'
        ],
        nutritionalInfo: [
            'Calories: 120 per 100g',
            'Protein: 8g',
            'Fat: 8g',
            'Carbohydrates: 12g',
            'Fiber: 2g',
            'Vitamin C: 15mg'
        ],
        storage: 'Store in a cool, dry place. Refrigerate after opening. Best consumed within 8 months.',
        shelfLife: '18 months (unopened), 8 months (opened)',
        allergens: 'Contains mustard oil. May contain traces of nuts.',
        servingSuggestion: 'Excellent with rice, dal, or as a condiment. Can be used in cooking or as a spread.',
        origin: 'Traditional family recipe from North India',
        certification: 'FSSAI Certified, 100% Natural Ingredients'
    }
};

// WhatsApp Integration Function
function buyOnWhatsApp(productName, price, weight, productId) {
    // Replace this phone number with your actual WhatsApp business number
    const phoneNumber = '9779813520927';
    
    // Get current page URL for product link
    const currentURL = window.location.href;
    const productURL = `${currentURL}#${productId}`;
    
    // Create the message with product details and link
    const message = `Hi! I'm interested in buying:\n\n🍽️ *${productName}*\n💰 Price: ${price}\n⚖️ Weight: ${weight}\n🔗 Product Link: ${productURL}\n\nPlease provide more details about delivery and payment options.`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
}

// Product Detail Modal Functions
function openProductDetail(productId) {
    const product = products[productId];
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-header">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <h2>${product.name}</h2>
                    <div class="product-detail-price">${product.price}</div>
                    <div class="product-detail-description">${product.description}</div>
                    <div class="product-detail-buy">
                        <button class="buy-button" onclick="buyOnWhatsApp('${product.name}', '${product.price}', '${product.weight}', '${productId}')">
                            <i class="fab fa-whatsapp"></i> Buy on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="product-detail-specs">
                <h3>Product Specifications</h3>
                <div class="spec-item">
                    <span class="spec-label">Weight:</span>
                    <span class="spec-value">${product.weight}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Shelf Life:</span>
                    <span class="spec-value">${product.shelfLife}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Storage:</span>
                    <span class="spec-value">${product.storage}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Origin:</span>
                    <span class="spec-value">${product.origin}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Certification:</span>
                    <span class="spec-value">${product.certification}</span>
                </div>
            </div>
            
            <div class="product-detail-specs">
                <h3>Ingredients</h3>
                <div class="ingredients-list">
                    ${product.ingredients.map(ingredient => `<div class="ingredient-item">• ${ingredient}</div>`).join('')}
                </div>
            </div>
            
            <div class="product-detail-specs">
                <h3>Nutritional Information (per 100g)</h3>
                ${product.nutritionalInfo.map(info => `<div class="spec-item"><span class="spec-label">${info.split(':')[0]}:</span><span class="spec-value">${info.split(':')[1]}</span></div>`).join('')}
            </div>
            
            <div class="product-detail-specs">
                <h3>Allergen Information</h3>
                <p>${product.allergens}</p>
            </div>
            
            <div class="product-detail-specs">
                <h3>Serving Suggestions</h3>
                <p>${product.servingSuggestion}</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Enhanced Navigation System
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Mobile Navigation Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Add slide animation for mobile menu
            if (navMenu.classList.contains('active')) {
                navMenu.style.transform = 'translateX(0)';
                navMenu.style.opacity = '1';
            } else {
                navMenu.style.transform = 'translateX(100%)';
                navMenu.style.opacity = '0';
            }
        });
    }
    
    // Enhanced Navigation Link Interactions
    navLinks.forEach(link => {
        // Add hover effects
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.color = '#e74c3c';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            if (!this.classList.contains('active')) {
                this.style.color = '#333';
            }
        });
        
        // Add click effects
        link.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => ripple.remove(), 600);
            
            // Close mobile menu
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navMenu.style.transform = 'translateX(100%)';
                navMenu.style.opacity = '0';
            }
        });
        
        // Add active state management
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage || 
            (currentPage === 'index.html' && linkHref === 'index.html') ||
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navMenu.style.transform = 'translateX(100%)';
            navMenu.style.opacity = '0';
        }
    });
    
    // Add scroll-based header effects (safe for new .site-header)
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.site-header') || document.querySelector('.header');
        if (!header) return;
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = currentScrollTop;
    });
    
    // Add navigation menu backdrop
    if (navMenu) {
        navMenu.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                navToggle.classList.remove('active');
                this.style.transform = 'translateX(100%)';
                this.style.opacity = '0';
            }
        });
    }
    
    // Modal close functionality
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Create WhatsApp message for contact form
            const contactMessage = `*New Contact Form Submission from Ma Achar Website*\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n💬 Message: ${message}`;
            
            // Encode message for WhatsApp
            const encodedContactMessage = encodeURIComponent(contactMessage);
            
            // Open WhatsApp with contact form details
            const whatsappURL = `https://wa.me/9779813520927?text=${encodedContactMessage}`;
            window.open(whatsappURL, '_blank');
            
            // Show success message
            showNotification('Message sent! Redirecting to WhatsApp...', 'success');
            
            // Reset form
            this.reset();
        });
    }
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25d366' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header') || document.querySelector('.header');
    if (!header) return;
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// WhatsApp float button animation
document.addEventListener('DOMContentLoaded', function() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    if (whatsappFloat) {
        // Add pulse animation
        whatsappFloat.style.animation = 'pulse 2s infinite';
        
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(pulseStyle);
        
        // Pause animation on hover
        whatsappFloat.addEventListener('mouseenter', () => {
            whatsappFloat.style.animationPlayState = 'paused';
        });
        
        whatsappFloat.addEventListener('mouseleave', () => {
            whatsappFloat.style.animationPlayState = 'running';
        });
    }
});

// Image Slider: mobile-friendly with swipe and smooth slide animation
let currentSlideIndex = 0;
let sliderTrack = null;
let sliderSlides = [];
let sliderDots = [];
let autoSlideTimer = null;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let sliderWidth = 0;

function updateDots(activeIndex) {
    if (!sliderDots || !sliderDots.length) return;
    sliderDots.forEach((d, i) => {
        if (i === activeIndex) d.classList.add('active');
        else d.classList.remove('active');
    });
}

function setTrackPosition(translateX, withTransition = true) {
    if (!sliderTrack) return;
    if (withTransition) sliderTrack.style.transition = 'transform 0.45s ease';
    else sliderTrack.style.transition = 'none';
    sliderTrack.style.transform = `translateX(${translateX}px)`;
}

function goToSlide(index, withTransition = true) {
    if (!sliderSlides.length) return;
    const maxIndex = sliderSlides.length - 1;
    currentSlideIndex = Math.max(0, Math.min(index, maxIndex));
    sliderWidth = sliderTrack.parentElement.clientWidth;
    currentTranslate = -currentSlideIndex * sliderWidth;
    prevTranslate = currentTranslate;
    setTrackPosition(currentTranslate, withTransition);
    updateDots(currentSlideIndex);
}

function nextSlide() {
    goToSlide(currentSlideIndex + 1);
}

function currentSlide(index) {
    // 1-based index from dot click → convert to 0-based
    goToSlide(index - 1);
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(() => {
        const lastIndex = sliderSlides.length - 1;
        if (currentSlideIndex >= lastIndex) {
            goToSlide(0);
        } else {
            goToSlide(currentSlideIndex + 1);
        }
    }, 5000);
}

function stopAutoSlide() {
    if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
    }
}

function attachSwipeHandlers(sliderRoot) {
    const onPointerDown = (e) => {
        isDragging = true;
        sliderRoot.setPointerCapture(e.pointerId);
        startX = e.clientX;
        sliderWidth = sliderRoot.clientWidth;
        stopAutoSlide();
    };

    const onPointerMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        currentTranslate = prevTranslate + deltaX;
        setTrackPosition(currentTranslate, false);
    };

    const onPointerUp = (e) => {
        if (!isDragging) return;
        isDragging = false;
        const deltaX = e.clientX - startX;
        const threshold = Math.min(120, sliderWidth * 0.2);
        if (deltaX > threshold) {
            goToSlide(currentSlideIndex - 1);
        } else if (deltaX < -threshold) {
            goToSlide(currentSlideIndex + 1);
        } else {
            goToSlide(currentSlideIndex);
        }
        startAutoSlide();
    };

    sliderRoot.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
}

// Initialize all functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ma Achar Pickle Website Loaded!');
    console.log('WhatsApp Integration Ready');
    console.log('Product Detail Modals Ready');
    console.log('Image Slider Ready');
    console.log('All interactive features initialized');
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        // Prevent navigation toggle from interfering with other clicks
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't prevent default - let the link work normally
                // Just close the mobile menu
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
        
        // Close mobile menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Prevent navigation menu from disappearing on desktop
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.addEventListener('click', function(e) {
            // Prevent clicks within the navbar from bubbling up
            e.stopPropagation();
        });
    }
    
    // Slider setup (wrap slides into a track for sliding animation)
    const sliderRoot = document.querySelector('.image-slider');
    if (sliderRoot) {
        const existingSlides = Array.from(sliderRoot.querySelectorAll('.slide'));
        const dotsContainer = sliderRoot.querySelectorAll('.slider-dots .dot');
        sliderDots = Array.from(dotsContainer);

        // Create track and move slides inside
        sliderTrack = document.createElement('div');
        sliderTrack.className = 'slides-track';
        existingSlides.forEach(s => sliderTrack.appendChild(s));
        sliderRoot.insertBefore(sliderTrack, sliderRoot.firstChild);

        sliderSlides = existingSlides;

        // Dots click binding
        sliderDots.forEach((d, i) => {
            d.addEventListener('click', () => goToSlide(i));
        });

        // Click on slide to go to next (tap-friendly)
        sliderSlides.forEach(slide => {
            slide.addEventListener('click', function(e) {
                // Ignore if during a drag gesture
                if (isDragging) return;
                e.preventDefault();
                nextSlide();
            });
        });

        // Hover pause (desktop) and swipe (mobile)
        sliderRoot.addEventListener('mouseenter', stopAutoSlide);
        sliderRoot.addEventListener('mouseleave', startAutoSlide);
        attachSwipeHandlers(sliderRoot);

        // Initial state
        goToSlide(0, false);
        startAutoSlide();
        // Handle resize
        window.addEventListener('resize', () => goToSlide(currentSlideIndex, false));
    }
});

// New navigation behavior for redesigned header
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.querySelector('.menu-button');
        const mobileMenu = document.getElementById('mobileMenu');
        const setActive = () => {
            const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
            document.querySelectorAll('.primary-nav a, .mobile-nav a').forEach(a => {
                const href = (a.getAttribute('href') || '').toLowerCase();
                if (href === current) {
                    a.classList.add('active');
                } else {
                    a.classList.remove('active');
                }
            });
        };
        setActive();

        if (menuButton && mobileMenu) {
            const toggle = () => {
                const isOpen = menuButton.classList.toggle('is-open');
                if (isOpen) {
                    mobileMenu.removeAttribute('hidden');
                    menuButton.setAttribute('aria-expanded', 'true');
                } else {
                    mobileMenu.setAttribute('hidden', '');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            };
            menuButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggle();
            });
            document.addEventListener('click', function(e) {
                if (!mobileMenu.hasAttribute('hidden') && !mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
                    menuButton.classList.remove('is-open');
                    mobileMenu.setAttribute('hidden', '');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && !mobileMenu.hasAttribute('hidden')) {
                    menuButton.classList.remove('is-open');
                    mobileMenu.setAttribute('hidden', '');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            });
            mobileMenu.querySelectorAll('a').forEach(a => {
                a.addEventListener('click', () => {
                    menuButton.classList.remove('is-open');
                    mobileMenu.setAttribute('hidden', '');
                    menuButton.setAttribute('aria-expanded', 'false');
                });
            });
        }
    });
})();

// Products page: chip filtering
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const grid = document.querySelector('.products-grid');
        const chips = document.querySelectorAll('.products-toolbar .chip');
        if (!grid || !chips.length) return;

        const cards = Array.from(grid.querySelectorAll('.product-detail-card'));
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const label = chip.textContent.trim().toLowerCase();
                if (label === 'all') {
                    cards.forEach(card => card.style.display = 'grid');
                } else {
                    cards.forEach(card => {
                        const cat = card.getAttribute('data-category');
                        card.style.display = (cat === label) ? 'grid' : 'none';
                    });
                }
            });
        });
    });
})();
