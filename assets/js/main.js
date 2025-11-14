// Main JavaScript - Premium Features

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // Initialize phone mask
    initPhoneMask();
    
    // Initialize form handlers
    initContactForm();
    
    // Initialize smooth scroll
    initSmoothScroll();
});

// Phone Mask
function initPhoneMask() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                if (value.length <= 10) {
                    value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
                } else {
                    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                }
                e.target.value = value;
            }
        });
    });
}

// Contact Form Handler
function initContactForm() {
    const contactForms = document.querySelectorAll('#contact-form, .contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                nome: form.querySelector('[name="nome"]')?.value || '',
                email: form.querySelector('[name="email"]')?.value || '',
                telefone: form.querySelector('[name="telefone"]')?.value || '',
                mensagem: form.querySelector('[name="mensagem"]')?.value || ''
            };
            
            // Here you would typically send the data to a server
            // For now, we'll show a success message
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // Reset form
            form.reset();
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header')?.offsetHeight || 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg z-50 border-l-4 ${
        type === 'success' ? 'border-green-500' : 'border-blue-500'
    }`;
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <i class="fas ${type === 'success' ? 'fa-check-circle text-green-500' : 'fa-info-circle text-blue-500'}"></i>
            <span class="text-gray-800">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Product Card Renderer
function renderProductCard(product, container) {
    const card = document.createElement('div');
    card.className = 'product-card premium-card';
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <div class="product-image">
            <i class="fas fa-box"></i>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-weight">${product.weight}</p>
            <p class="product-code">Código: ${product.code}</p>
            <p class="product-description">${product.description || ''}</p>
            <a href="produto.html?id=${product.id}" class="btn-outline mt-auto text-center">
                Ver Detalhes
            </a>
        </div>
    `;
    
    container.appendChild(card);
}

// Category Card Renderer
function renderCategoryCard(category, container) {
    const card = document.createElement('div');
    card.className = 'category-card premium-card';
    card.setAttribute('data-aos', 'fade-up');
    
    const icons = {
        'conservas': 'fa-box',
        'temperos': 'fa-pepper-hot',
        'graos': 'fa-wheat-awn',
        'carvao': 'fa-fire'
    };
    
    const names = {
        'conservas': 'Conservas',
        'temperos': 'Temperos',
        'graos': 'Grãos & Farinhas',
        'carvao': 'Carvão & Utilidades'
    };
    
    card.innerHTML = `
        <div class="category-icon">
            <i class="fas ${icons[category] || 'fa-box'}"></i>
        </div>
        <h3 class="text-2xl font-bold text-primary mb-4">${names[category] || category}</h3>
        <a href="pages/${category}.html" class="btn-primary">
            Ver Produtos
        </a>
    `;
    
    container.appendChild(card);
}
