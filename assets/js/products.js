// Products Data - Catálogo completo extraído do PDF
const productsCatalog = {
    conservas: [
        {
            id: 'cons-20242',
            name: 'Ovos de Codorna em Conserva',
            weight: '1kg',
            code: '20242',
            description: 'Ovos de codorna selecionados em conserva, embalagem de 1kg.',
            category: 'Conservas',
            image: '' // Exemplo: 'assets/img/products/ovos-codorna-1kg.jpg'
        },
        {
            id: 'cons-20243',
            name: 'Ovos de Codorna em Conserva',
            weight: '2,1kg',
            code: '20243',
            description: 'Ovos de codorna selecionados em conserva, embalagem de 2,1kg.',
            category: 'Conservas',
            image: ''
        },
        {
            id: 'cons-20246',
            name: 'Azeitona em Conserva',
            weight: '3,2kg',
            code: '20246',
            description: 'Azeitona verde em conserva, embalagem de 3,2kg.',
            category: 'Conservas',
            image: ''
        },
        {
            id: 'cons-20247',
            name: 'Azeitona em Conserva',
            weight: '2,9kg',
            code: '20247',
            description: 'Azeitona verde em conserva, embalagem de 2,9kg.',
            category: 'Conservas',
            image: ''
        },
        {
            id: 'cons-20248',
            name: 'Azeitona Preta c/ Caroço',
            weight: '11kg',
            code: '20248',
            description: 'Azeitona preta com caroço, embalagem de 11kg.',
            category: 'Conservas',
            image: ''
        },
        {
            id: 'cons-20249',
            name: 'Palmito Tolete',
            weight: 'Cx com 6 und',
            code: '20249',
            description: 'Palmito tolete em conserva, caixa com 6 unidades.',
            category: 'Conservas',
            image: ''
        },
        {
            id: 'cons-20250',
            name: 'Palmito Picado',
            weight: 'Caixa c/ 6 und',
            code: '20250',
            description: 'Palmito picado em conserva, caixa com 6 unidades.',
            category: 'Conservas',
            image: ''
        }
    ],
    temperos: [
        {
            id: 'temp-20244',
            name: 'Alho Desidratado Flocos',
            weight: '500g',
            code: '20244',
            description: 'Alho desidratado em flocos, embalagem de 500g.',
            category: 'Temperos',
            image: ''
        },
        {
            id: 'temp-20245',
            name: 'Alho Descascado 100% Natural',
            weight: '1kg',
            code: '20245',
            description: 'Alho descascado 100% natural, embalagem de 1kg.',
            category: 'Temperos',
            image: ''
        }
    ],
    graos: [
        {
            id: 'grao-20251',
            name: 'Farinha de Trigo',
            weight: '25kg',
            code: '20251',
            description: 'Farinha de trigo tipo 1, embalagem de 25kg.',
            category: 'Grãos & Farinhas',
            image: ''
        }
    ],
    carvao: [
        {
            id: 'carv-20241',
            name: 'Carvão',
            weight: '2kg',
            code: '20241',
            description: 'Carvão vegetal de alta qualidade, embalagem de 2kg.',
            category: 'Carvão & Utilidades',
            image: ''
        }
    ],
    // Novas categorias - adicionar produtos aqui
    arroz: [
        {
            id: 'arroz-77189',
            name: 'Arroz Tipo 1 ALEGRE',
            weight: '5kg',
            code: '77189',
            description: 'Arroz Tipo 1 ALEGRE, embalagem de 5kg. FD 30.',
            category: 'Arroz',
            image: 'assets/img/1948001.png'
        },
        {
            id: 'arroz-alegre-1kg',
            name: 'Arroz Tipo 1 ALEGRE',
            weight: '1kg',
            code: 'FD 30',
            description: 'Arroz Tipo 1 ALEGRE, embalagem de 1kg. FD 30.',
            category: 'Arroz',
            image: 'assets/img/1948001.png'
        },
        {
            id: 'arroz-rico-prato',
            name: 'Arroz Tipo 1 RICO PRATO',
            weight: '5kg',
            code: 'FD 6',
            description: 'Arroz Tipo 1 RICO PRATO, embalagem de 5kg. FD 6.',
            category: 'Arroz',
            image: 'assets/img/65e8c3092ba5b.png'
        },
        {
            id: 'arroz-rico-prato-1kg',
            name: 'Arroz Tipo 1 RICO PRATO',
            weight: '1kg',
            code: 'ED 30',
            description: 'Arroz Tipo 1 RICO PRATO, embalagem de 1kg. ED 30.',
            category: 'Arroz',
            image: 'assets/img/65e8c3092ba5b.png'
        }
    ],
    acucar: [
        {
            id: 'acucar-santa-isabel-1kg',
            name: 'Açúcar Cristal SANTA ISABEL',
            weight: '1kg',
            code: 'FD 10',
            description: 'Açúcar Cristal SANTA ISABEL, embalagem de 1kg. FD 10.',
            category: 'Açúcar',
            image: 'assets/img/acucar_cristal_santa_isabel_1kg_10561_1_0101ba81d9a2fad2750715c8dcc93789.jpg.webp'
        },
        {
            id: 'acucar-alcon-2kg',
            name: 'Açúcar Cristal ALCON',
            weight: '2kg',
            code: 'FD 15',
            description: 'Açúcar Cristal ALCON, embalagem de 2kg. FD 15.',
            category: 'Açúcar',
            image: 'assets/img/Unknown-2.jpeg'
        },
        {
            id: 'acucar-santa-isabel-refinado-1kg',
            name: 'Açúcar Refinado Extra Fino SANTA ISABEL',
            weight: '1kg',
            code: 'ED 10',
            description: 'Açúcar Refinado Extra Fino SANTA ISABEL, embalagem de 1kg. ED 10.',
            category: 'Açúcar',
            image: 'assets/img/acucar_refinado_santa_isabel_extra_fino_1kg_8383_1_7d4d54761a545907bbbaeef42addd349.jpg.webp'
        },
        {
            id: 'acucar-uniao-refinado-1kg',
            name: 'Açúcar Refinado UNIÃO',
            weight: '1kg',
            code: 'FD 10',
            description: 'Açúcar Refinado UNIÃO, embalagem de 1kg. FD 10.',
            category: 'Açúcar',
            image: 'assets/img/Unknown-3.jpeg'
        }
    ],
    frango: [],
    cafe: [
        {
            id: 'cafe-extraforte-numero1',
            name: 'Café Extraforte NÚMERO 1',
            weight: '20 x 250g',
            code: '',
            description: 'Café Extraforte NÚMERO 1, embalagem com 20 unidades de 250g cada.',
            category: 'Café',
            image: 'assets/img/930485-800-auto.webp'
        },
        {
            id: 'cafe-extraforte-numero1-500g',
            name: 'Café Extraforte NÚMERO 1',
            weight: '10 x 500g',
            code: '',
            description: 'Café Extraforte NÚMERO 1, embalagem com 10 unidades de 500g cada.',
            category: 'Café',
            image: 'assets/img/82722.jpg.webp'
        },
        {
            id: 'cafe-tradicional-numero1',
            name: 'Café Tradicional NÚMERO 1',
            weight: '20 x 250g',
            code: '',
            description: 'Café Tradicional NÚMERO 1, embalagem com 20 unidades de 250g cada.',
            category: 'Café',
            image: 'assets/img/82719.jpg.webp'
        },
        {
            id: 'cafe-tradicional-numero1-500g',
            name: 'Café Tradicional NÚMERO 1',
            weight: '10 x 500g',
            code: '',
            description: 'Café Tradicional NÚMERO 1, embalagem com 10 unidades de 500g cada.',
            category: 'Café',
            image: 'assets/img/82720.jpg.webp'
        }
    ],
    feijao: [
        {
            id: 'feijao-carioca-dalila-1kg',
            name: 'Feijão Carioca Tipo 1 DALILA',
            weight: '1kg',
            code: 'FD 30',
            description: 'Feijão Carioca Tipo 1 DALILA, embalagem de 1kg. FD 30.',
            category: 'Feijão',
            image: 'assets/img/481093413_4808408249383567_7170895081190784340_n.jpg'
        },
        {
            id: 'feijao-preto-dalila-1kg',
            name: 'Feijão Preto Tipo 1 DALILA',
            weight: '1kg',
            code: 'FD 30',
            description: 'Feijão Preto Tipo 1 DALILA, embalagem de 1kg. FD 30.',
            category: 'Feijão',
            image: 'assets/img/40406625_2665155923708821_2638168650657300480_n.jpg'
        },
        {
            id: 'feijao-carioca-princesa-norte-1kg',
            name: 'Feijão Carioca Tipo 1 PRINCESA DO NORTE',
            weight: '1kg',
            code: 'ED 30',
            description: 'Feijão Carioca Tipo 1 PRINCESA DO NORTE, embalagem de 1kg. ED 30.',
            category: 'Feijão',
            image: 'assets/img/74469537_801887760255416_5452733867314118656_n-removebg-preview.png'
        },
        {
            id: 'feijao-carioca-princesa-norte-2kg',
            name: 'Feijão Carioca Tipo 1 PRINCESA DO NORTE',
            weight: '2kg',
            code: 'FD 15',
            description: 'Feijão Carioca Tipo 1 PRINCESA DO NORTE, embalagem de 2kg. FD 15.',
            category: 'Feijão',
            image: 'assets/img/74469537_801887760255416_5452733867314118656_n-removebg-preview.png'
        }
    ],
    oleo: [
        {
            id: 'oleo-soja-soya-900ml',
            name: 'Óleo de Soja SOYA',
            weight: '20 x 900ml',
            code: '',
            description: 'Óleo de Soja SOYA, embalagem com 20 unidades de 900ml cada.',
            category: 'Óleo',
            image: 'assets/img/Oleo-de-Soja-Soya-900ml.png.webp'
        },
        {
            id: 'oleo-soja-vila-velha-900ml',
            name: 'Óleo de Soja VILA VELHA',
            weight: '20 x 900ml',
            code: '',
            description: 'Óleo de Soja VILA VELHA, embalagem com 20 unidades de 900ml cada.',
            category: 'Óleo',
            image: 'assets/img/2020928_99244-removebg-preview.png'
        },
        {
            id: 'oleo-soja-leve-900ml',
            name: 'Óleo de Soja LEVE',
            weight: '20 x 900ml',
            code: '',
            description: 'Óleo de Soja LEVE, embalagem com 20 unidades de 900ml cada.',
            category: 'Óleo',
            image: 'assets/img/8831-1.png'
        },
        {
            id: 'oleo-soja-liza-900ml',
            name: 'Óleo de Soja LIZA',
            weight: '20 x 900ml',
            code: '',
            description: 'Óleo de Soja LIZA, embalagem com 20 unidades de 900ml cada.',
            category: 'Óleo',
            image: 'assets/img/256814.jpg copy.png'
        }
    ]
};

// Get all products
function getAllProducts() {
    return [
        ...productsCatalog.conservas,
        ...productsCatalog.temperos,
        ...productsCatalog.graos,
        ...productsCatalog.carvao,
        ...productsCatalog.arroz,
        ...productsCatalog.acucar,
        ...productsCatalog.frango,
        ...productsCatalog.cafe,
        ...productsCatalog.feijao,
        ...productsCatalog.oleo
    ];
}

// Get products by category
function getProductsByCategory(category) {
    const categoryMap = {
        'conservas': productsCatalog.conservas || [],
        'temperos': productsCatalog.temperos || [],
        'graos': productsCatalog.graos || [],
        'carvao': productsCatalog.carvao || [],
        'arroz': productsCatalog.arroz || [],
        'acucar': productsCatalog.acucar || [],
        'frango': productsCatalog.frango || [],
        'cafe': productsCatalog.cafe || [],
        'feijao': productsCatalog.feijao || [],
        'oleo': productsCatalog.oleo || []
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

// Generate WhatsApp link for product quotation
function getWhatsAppQuotationLink(product) {
    const whatsappNumber = '5511994881827';
    const message = encodeURIComponent(
        `Olá! Gostaria de solicitar uma cotação para:\n\n` +
        `*${product.name}*\n` +
        `Peso: ${product.weight}\n` +
        `Código: ${product.code}\n` +
        `${product.description ? `\n${product.description}` : ''}`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
}
