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
        const existingButton = document.querySelector('.whatsapp-float') || document.getElementById('whatsapp-float-button');
        if (!existingButton) {
            console.log('🔧 Criando botão WhatsApp (página já carregada)...');
            initWhatsAppButton();
        }
    }, 500);
}

// Verificação final após 2 segundos para garantir que o botão existe
setTimeout(() => {
    const existingButton = document.querySelector('.whatsapp-float') || document.getElementById('whatsapp-float-button');
    if (!existingButton && typeof initWhatsAppButton === 'function') {
        console.log('🔧 Criando botão WhatsApp (verificação final)...');
        initWhatsAppButton();
    } else if (existingButton) {
        console.log('✅ Botão WhatsApp confirmado:', existingButton);
    }
}, 2000);

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
    card.className = 'category-card premium-card';
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
        'frango': 'Frango',
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
            'Icumsa',
            'Icumsa 150',
            'VHP Icumsa 600-1200'
        ],
        'frango': [
            'Pé',
            'Meio da asa',
            'Observação: Demais cortes sob consulta.'
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
        'frango': 'assets/img/raw-chicken-meat.jpg',
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
function initWhatsAppButton() {
    // Número do WhatsApp: 11 99488-1827
    // Formato para WhatsApp API: 55 (país) + 11 (DDD) + 994881827 (número sem hífen)
    const whatsappNumber = '5511994881827'; // NÚMERO ATUALIZADO: 11 99488-1827
    const defaultMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos da Dom Miguel Atacadista.');
    
    // Remover TODOS os botões antigos (para garantir atualização)
    const existingButtons = document.querySelectorAll('.whatsapp-float');
    existingButtons.forEach(btn => btn.remove());
    
    // Criar o botão com o número correto
    const whatsappButton = document.createElement('a');
    whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
    whatsappButton.target = '_blank';
    whatsappButton.rel = 'noopener noreferrer';
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.setAttribute('aria-label', 'Fale conosco no WhatsApp - 11 99488-1827');
    
    // Limpar completamente qualquer conteúdo
    whatsappButton.textContent = '';
    whatsappButton.innerHTML = '';
    
    // Adicionar APENAS o ícone do WhatsApp, sem classes extras
    const icon = document.createElement('i');
    icon.className = 'fab fa-whatsapp';
    // Remover qualquer classe que possa adicionar margem ou texto
    icon.classList.remove('mr-2');
    
    whatsappButton.appendChild(icon);
    
    // Garantir que não haja texto no botão
    whatsappButton.textContent = '';
    
    // Adicionar data attribute para verificação e proteção
    whatsappButton.setAttribute('data-whatsapp-number', whatsappNumber);
    whatsappButton.setAttribute('data-whatsapp-float', 'true');
    whatsappButton.setAttribute('id', 'whatsapp-float-button');
    
    // Proteger o botão de modificações usando MutationObserver
    const protectButton = () => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    // Se o botão foi modificado, restaurar apenas o ícone
                    if (whatsappButton.textContent.trim() || 
                        whatsappButton.querySelectorAll('i').length !== 1 ||
                        whatsappButton.querySelector('i.mr-2')) {
                        whatsappButton.textContent = '';
                        whatsappButton.innerHTML = '';
                        const icon = document.createElement('i');
                        icon.className = 'fab fa-whatsapp';
                        whatsappButton.appendChild(icon);
                    }
                }
            });
        });
        
        observer.observe(whatsappButton, {
            childList: true,
            characterData: true,
            subtree: true
        });
    };
    
    // Função para adicionar o botão ao DOM
    const addButtonToDOM = () => {
        if (document.body) {
            // Verificar se já existe um botão
            const existing = document.querySelector('.whatsapp-float') || document.getElementById('whatsapp-float-button');
            if (existing && existing !== whatsappButton) {
                existing.remove();
            }
            
            document.body.appendChild(whatsappButton);
            
            // Proteger o botão após ser adicionado ao DOM
            setTimeout(protectButton, 100);
            
            // Debug: verificar se o número está correto
            console.log('✅ WhatsApp Button criado e adicionado ao DOM!');
            console.log('📍 Posição:', whatsappButton.getBoundingClientRect());
            console.log('🎨 Classes:', whatsappButton.className);
            console.log('👁️ Visível:', window.getComputedStyle(whatsappButton).display !== 'none');
            
            return true;
        }
        return false;
    };
    
    // Tentar adicionar imediatamente
    if (!addButtonToDOM()) {
        // Se o body não existe ainda, tentar novamente
        console.warn('⚠️ Body não encontrado, tentando novamente...');
        const retryInterval = setInterval(() => {
            if (addButtonToDOM()) {
                clearInterval(retryInterval);
            }
        }, 100);
        
        // Parar após 5 segundos
        setTimeout(() => {
            clearInterval(retryInterval);
            if (!document.querySelector('.whatsapp-float')) {
                console.error('❌ Não foi possível criar o botão WhatsApp após 5 segundos');
            }
        }, 5000);
    }
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
