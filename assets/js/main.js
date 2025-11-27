// Main JavaScript - Premium Features

// Função para inicializar tudo
function initializeAll() {
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
    
    // Initialize WhatsApp button (SEMPRE inicializar)
    initWhatsAppButton();
    
    // Initialize hero slider
    initHeroSlider();
}

// Initialize AOS (Animate On Scroll)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAll);
} else {
    // DOM já está carregado, executar imediatamente
    initializeAll();
}

// Garantir que o botão WhatsApp seja criado mesmo se a página já estiver carregada
if (document.readyState === 'complete') {
    setTimeout(() => {
        const existingButton = document.querySelector('.whatsapp-float');
        if (!existingButton) {
            initWhatsAppButton();
        }
    }, 500);
}

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
    
    // Verificar se tem imagem ou usar ícone padrão
    const imageHTML = product.image && product.image.trim() !== ''
        ? `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">`
        : `<i class="fas fa-box"></i>`;
    
    card.innerHTML = `
        <div class="product-image">
            ${imageHTML}
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
    card.className = `category-card premium-card category-${category}`;
    card.setAttribute('data-aos', 'fade-up');
    
    // Detectar se estamos em uma página dentro de /pages/
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '../' : '';
    
    const icons = {
        'arroz': 'fa-seedling',
        'acucar': 'fa-cube',
        'frango': 'fa-drumstick',
        'cafe': 'fa-coffee',
        'feijao': 'fa-seedling',
        'oleo': 'fa-flask'
    };
    
    const names = {
        'arroz': 'Arroz',
        'acucar': 'Açúcar',
        'frango': 'Ovos de Codorna',
        'cafe': 'Café',
        'feijao': 'Feijão',
        'oleo': 'Óleo'
    };
    
    const subcategories = {
        'arroz': [
            'Tipo 1 longo e fino',
            'Parabolizado',
            'Integral'
        ],
        'acucar': [
            'Icumsa 45',
            'Icumsa 150',
            'VHP Icumsa 600-1200'
        ],
        'frango': [
            'Ovos de codorna em conserva',
            'Azeitonas e palmitos',
            'Linha completa de conservas'
        ],
        'cafe': [
            'Verde cru em grãos',
            'Tipos',
            'Arábica',
            'Conilon'
        ],
        'feijao': [
            'Marrom',
            'Preto'
        ],
        'oleo': [
            'Soja',
            'Girassol'
        ]
    };
    
    const categoryImages = {
        'arroz': 'assets/img/milled-rice-black-bowl-black-cement-floor.jpg',
        'acucar': 'assets/img/granulated-sugar-refined-sugar-wooden-dishes-groceries_420001-15036.jpg',
        'frango': 'assets/img/WhatsApp Image 2025-11-26 at 13.39.41.png',
        'cafe': 'assets/img/close-up-view-dark-fresh-roasted-coffee-beans-coffee-beans-background.jpg',
        'feijao': 'assets/img/uncooked-red-beans-wooden-bowl.jpg',
        'oleo': 'assets/img/soybean-oil-soybean-food-beverage-products-food-nutrition-concept.jpg'
    };
    
    const categorySubcategories = subcategories[category] || [];
    let subcategoriesHTML = '';
    
    if (categorySubcategories.length > 0) {
        subcategoriesHTML = `<div class="category-subcategories mt-4 mb-4">
            ${categorySubcategories.map(sub => `<div class="text-sm text-gray-600 mb-1">- ${sub}</div>`).join('')}
        </div>`;
    }
    
    const categoryImage = categoryImages[category] || '';
    // Ajustar caminho da imagem baseado na localização da página
    const imagePath = categoryImage ? `${basePath}${categoryImage}` : '';
    const imageHTML = imagePath 
        ? `<div class="category-image mb-4">
            <img src="${imagePath}" alt="${names[category] || category}" class="w-full h-48 object-cover rounded-lg" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'category-icon\\'><i class=\\'fas ${icons[category] || 'fa-box'}\\'></i></div>';">
           </div>`
        : `<div class="category-icon">
            <i class="fas ${icons[category] || 'fa-box'}"></i>
        </div>`;
    
    // Ajustar caminho do link também
    const linkPath = isInPages ? `${category}.html` : `pages/${category}.html`;
    
    card.innerHTML = `
        ${imageHTML}
        <h3 class="text-2xl font-bold text-primary mb-4">${names[category] || category}</h3>
        ${subcategoriesHTML}
        <a href="${linkPath}" class="btn-primary">
            Ver Produtos
        </a>
    `;
    
    container.appendChild(card);
}

// WhatsApp Floating Button
// WhatsApp Floating Button - DESABILITADO - Botão está no HTML com id="whatsapp-btn"
function initWhatsAppButton() {
    // Função desabilitada - botão está no HTML diretamente
    // NÃO remover botões existentes
    return;
}

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-arrow-prev');
    const nextBtn = document.querySelector('.slider-arrow-next');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let autoplayInterval;
    const autoplayDelay = 8000; // 8 segundos
    
    // Função para mostrar slide específico
    function showSlide(index) {
        // Remove active de todos os slides e dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Adiciona active no slide e dot atual
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentSlide = index;
        
        // Reinicia animações AOS no slide ativo
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }
    
    // Função para próximo slide
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    // Função para slide anterior
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    // Event listeners para dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoplay();
        });
    });
    
    // Event listeners para setas
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });
    }
    
    // Autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }
    
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
    
    // Pausar autoplay ao passar o mouse
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            startAutoplay();
        });
    }
    
    // Iniciar autoplay
    startAutoplay();
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoplay();
        }
    });
}
