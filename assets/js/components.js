// Component Loader - Carrega header e footer dinamicamente
async function loadComponent(componentPath) {
    try {
        // Try to load with absolute path if relative fails
        let response = await fetch(componentPath);
        
        // If 404, try with absolute path from root
        if (!response.ok && !componentPath.startsWith('/') && !componentPath.startsWith('http')) {
            const absolutePath = componentPath.startsWith('../') 
                ? componentPath.substring(3) 
                : componentPath;
            response = await fetch('/' + absolutePath);
        }
        
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}: ${response.status}`);
        }
        
        const html = await response.text();
        return html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
        // Return empty string to prevent breaking the page
        return '';
    }
}

// Fix relative paths in loaded HTML
function fixPaths(html, isInPages) {
    if (!isInPages) return html;
    
    // Fix href paths - add ../ to paths that don't start with ../
    let fixed = html
        .replace(/href="index\.html"/g, 'href="../index.html"')
        .replace(/href="pages\//g, 'href="../pages/')
        .replace(/href="([^"#:\.\/]+\.html)"/g, (match, file) => {
            if (!file.startsWith('../') && !file.startsWith('/') && !file.startsWith('http')) {
                return `href="../${file}"`;
            }
            return match;
        });
    
    // Fix image src paths - add ../ to asset paths
    fixed = fixed.replace(/src="assets\//g, 'src="../assets/');
    
    return fixed;
}

// Load Header and Footer
document.addEventListener('DOMContentLoaded', async () => {
    // Determine base path based on current page location
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '../' : '';
    
    // Load Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const headerHTML = await loadComponent(`${basePath}components/header.html`);
        const fixedHeaderHTML = fixPaths(headerHTML, isInPages);
        headerPlaceholder.innerHTML = fixedHeaderHTML;
        initHeader();
        
        // Inicializar sistema de idiomas após header carregar
        setTimeout(() => {
            initLanguageSystem();
            // Reinicializar após um pequeno delay para garantir que tudo está pronto
            setTimeout(() => {
                initLanguageSystem();
            }, 500);
        }, 200);
    }
    
    // Load Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        const footerHTML = await loadComponent(`${basePath}components/footer.html`);
        const fixedFooterHTML = fixPaths(footerHTML, isInPages);
        footerPlaceholder.innerHTML = fixedFooterHTML;
    }
    
    // Garantir que o botão WhatsApp seja criado após carregar componentes
    setTimeout(() => {
        if (typeof initWhatsAppButton === 'function') {
            const existingButton = document.querySelector('.whatsapp-float') || document.getElementById('whatsapp-float-button');
            if (!existingButton) {
                console.log('🔧 Criando botão WhatsApp após carregar componentes...');
                initWhatsAppButton();
            } else {
                console.log('✅ Botão WhatsApp já existe');
            }
        } else {
            console.error('❌ initWhatsAppButton não está definido!');
        }
    }, 500);
});

// Header functionality
function initHeader() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
    
    // Language Dropdown Toggle
    initLanguageDropdown();
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Active link highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href) || (currentPath.endsWith('/') && href === 'index.html')) {
            link.classList.add('text-accent');
            link.classList.remove('text-white');
        }
    });
}

// Função para inicializar dropdown de idiomas
function initLanguageDropdown() {
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    
    if (languageBtn && languageDropdown) {
        // Remover event listeners anteriores se existirem
        const newBtn = languageBtn.cloneNode(true);
        languageBtn.parentNode.replaceChild(newBtn, languageBtn);
        
        // Atualizar referência
        const updatedBtn = document.getElementById('language-btn');
        const updatedDropdown = document.getElementById('language-dropdown');
        
        updatedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Botão de idioma clicado!'); // Debug
            const isVisible = updatedDropdown.classList.contains('visible');
            console.log('Dropdown visível?', isVisible); // Debug
            if (isVisible) {
                updatedDropdown.classList.remove('opacity-100', 'visible');
                updatedDropdown.classList.add('opacity-0', 'invisible');
            } else {
                updatedDropdown.classList.remove('opacity-0', 'invisible');
                updatedDropdown.classList.add('opacity-100', 'visible');
                console.log('Dropdown aberto!'); // Debug
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#language-selector') && !e.target.closest('#language-dropdown')) {
                updatedDropdown.classList.add('opacity-0', 'invisible');
                updatedDropdown.classList.remove('opacity-100', 'visible');
            }
        });
    } else {
        console.error('language-btn ou language-dropdown não encontrados!', { languageBtn, languageDropdown });
    }
}

// Função para inicializar sistema de idiomas
function initLanguageSystem() {
    if (typeof setLanguage === 'function') {
        const savedLang = localStorage.getItem('language') || 'pt';
        console.log('Inicializando sistema de idiomas. Idioma salvo:', savedLang);
        setLanguage(savedLang);
        
        // Adicionar event listeners diretamente nos botões
        const languageOptions = document.querySelectorAll('.language-option, .language-option-mobile');
        console.log('Botões de idioma encontrados:', languageOptions.length);
        
        if (languageOptions.length === 0) {
            console.warn('Nenhum botão de idioma encontrado! Tentando novamente em 500ms...');
            setTimeout(() => initLanguageSystem(), 500);
            return;
        }
        
        languageOptions.forEach((btn, index) => {
            const lang = btn.getAttribute('data-lang');
            console.log(`Configurando botão ${index}: ${lang}`);
            
            // Verificar se já tem listener (usando data attribute)
            if (btn.dataset.listenerAdded === 'true') {
                console.log(`Botão ${index} já tem listener, pulando...`);
                return;
            }
            
            // Marcar como tendo listener
            btn.dataset.listenerAdded = 'true';
            
            // Adicionar listener
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const selectedLang = this.getAttribute('data-lang');
                console.log('🎯 CLIQUE NO BOTÃO DE IDIOMA! Idioma selecionado:', selectedLang);
                
                if (selectedLang && typeof setLanguage === 'function') {
                    console.log('✅ Chamando setLanguage com:', selectedLang);
                    setLanguage(selectedLang);
                    
                    // Fechar dropdown após seleção
                    const languageDropdown = document.getElementById('language-dropdown');
                    if (languageDropdown) {
                        languageDropdown.classList.add('opacity-0', 'invisible');
                        languageDropdown.classList.remove('opacity-100', 'visible');
                        console.log('Dropdown fechado');
                    }
                } else {
                    console.error('❌ Erro: Idioma inválido ou setLanguage não definido', { 
                        selectedLang, 
                        setLanguageExists: typeof setLanguage 
                    });
                }
            });
            
            console.log(`✅ Listener adicionado ao botão ${index} (${lang})`);
        });
        
        console.log('✅ Sistema de idiomas inicializado com sucesso!');
    } else {
        console.error('❌ ERRO: setLanguage não está definido! Verifique se i18n.js foi carregado antes de components.js');
    }
}

