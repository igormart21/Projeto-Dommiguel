// Products Data - Catálogo completo extraído do PDF
const productsCatalog = {
    conservas: [
        {
            id: 'cons-20242',
            name: 'Ovos de Codorna em Conserva',
            weight: '1kg',
            code: '20242',
            description: 'Ovos de codorna selecionados em conserva, embalagem de 1kg.',
            category: 'Conservas'
        },
        {
            id: 'cons-20243',
            name: 'Ovos de Codorna em Conserva',
            weight: '2,1kg',
            code: '20243',
            description: 'Ovos de codorna selecionados em conserva, embalagem de 2,1kg.',
            category: 'Conservas'
        },
        {
            id: 'cons-20246',
            name: 'Azeitona em Conserva',
            weight: '3,2kg',
            code: '20246',
            description: 'Azeitona verde em conserva, embalagem de 3,2kg.',
            category: 'Conservas'
        },
        {
            id: 'cons-20247',
            name: 'Azeitona em Conserva',
            weight: '2,9kg',
            code: '20247',
            description: 'Azeitona verde em conserva, embalagem de 2,9kg.',
            category: 'Conservas'
        },
        {
            id: 'cons-20248',
            name: 'Azeitona Preta c/ Caroço',
            weight: '11kg',
            code: '20248',
            description: 'Azeitona preta com caroço, embalagem de 11kg.',
            category: 'Conservas'
        },
        {
            id: 'cons-20249',
            name: 'Palmito Tolete',
            weight: 'Cx com 6 und',
            code: '20249',
            description: 'Palmito tolete em conserva, caixa com 6 unidades.',
            category: 'Conservas'
        },
        {
            id: 'cons-20250',
            name: 'Palmito Picado',
            weight: 'Caixa c/ 6 und',
            code: '20250',
            description: 'Palmito picado em conserva, caixa com 6 unidades.',
            category: 'Conservas'
        }
    ],
    temperos: [
        {
            id: 'temp-20244',
            name: 'Alho Desidratado Flocos',
            weight: '500g',
            code: '20244',
            description: 'Alho desidratado em flocos, embalagem de 500g.',
            category: 'Temperos'
        },
        {
            id: 'temp-20245',
            name: 'Alho Descascado 100% Natural',
            weight: '1kg',
            code: '20245',
            description: 'Alho descascado 100% natural, embalagem de 1kg.',
            category: 'Temperos'
        }
    ],
    graos: [
        {
            id: 'grao-20251',
            name: 'Farinha de Trigo',
            weight: '25kg',
            code: '20251',
            description: 'Farinha de trigo tipo 1, embalagem de 25kg.',
            category: 'Grãos & Farinhas'
        }
    ],
    carvao: [
        {
            id: 'carv-20241',
            name: 'Carvão',
            weight: '2kg',
            code: '20241',
            description: 'Carvão vegetal de alta qualidade, embalagem de 2kg.',
            category: 'Carvão & Utilidades'
        }
    ]
};

// Get all products
function getAllProducts() {
    return [
        ...productsCatalog.conservas,
        ...productsCatalog.temperos,
        ...productsCatalog.graos,
        ...productsCatalog.carvao
    ];
}

// Get products by category
function getProductsByCategory(category) {
    const categoryMap = {
        'conservas': productsCatalog.conservas,
        'temperos': productsCatalog.temperos,
        'graos': productsCatalog.graos,
        'carvao': productsCatalog.carvao
    };
    return categoryMap[category] || [];
}

// Get product by ID
function getProductById(id) {
    const allProducts = getAllProducts();
    return allProducts.find(p => p.id === id);
}

// Get similar products (same category, excluding current)
function getSimilarProducts(currentProductId, limit = 4) {
    const currentProduct = getProductById(currentProductId);
    if (!currentProduct) return [];
    
    const categoryProducts = getProductsByCategory(
        Object.keys(productsCatalog).find(key => 
            productsCatalog[key].some(p => p.category === currentProduct.category)
        )
    );
    
    return categoryProducts
        .filter(p => p.id !== currentProductId)
        .slice(0, limit);
}
