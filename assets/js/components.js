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
    }
    
    // Load Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        const footerHTML = await loadComponent(`${basePath}components/footer.html`);
        const fixedFooterHTML = fixPaths(footerHTML, isInPages);
        footerPlaceholder.innerHTML = fixedFooterHTML;
    }
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

