# 📦 Guia para Adicionar Produtos do PDF ao Site

Este guia explica como extrair produtos do PDF `Catalogo.pdf` e adicioná-los ao site com imagens.

## 📋 Estrutura de um Produto

Cada produto no arquivo `assets/js/products.js` segue esta estrutura:

```javascript
{
    id: 'categoria-codigo',        // ID único (ex: 'arroz-001', 'cafe-20242')
    name: 'Nome do Produto',       // Nome completo do produto
    weight: '1kg',                 // Peso ou quantidade
    code: '20242',                 // Código do produto
    description: 'Descrição detalhada do produto.',  // Descrição
    category: 'Categoria',          // Categoria (ex: 'Arroz', 'Café')
    image: 'assets/img/products/nome-imagem.jpg'  // Caminho da imagem (opcional)
}
```

## 🖼️ Como Extrair Imagens do PDF

### Opção 1: Usando Adobe Acrobat (Recomendado)
1. Abra o PDF no Adobe Acrobat
2. Vá em **Ferramentas** > **Exportar PDF**
3. Selecione **Imagem** > **JPEG** ou **PNG**
4. Escolha a qualidade e exporte
5. As imagens serão salvas individualmente

### Opção 2: Usando Ferramentas Online
- **ILovePDF** (https://www.ilovepdf.com/pt/pdf-para-jpg)
- **SmallPDF** (https://smallpdf.com/pt/pdf-para-jpg)
- **PDF24** (https://tools.pdf24.org/pt/pdf-para-jpg)

### Opção 3: Usando Python (Avançado)
```python
from pdf2image import convert_from_path

# Converter PDF para imagens
images = convert_from_path('Catalogo.pdf', dpi=300)

# Salvar cada página como imagem
for i, image in enumerate(images):
    image.save(f'assets/img/products/pagina_{i+1}.jpg', 'JPEG')
```

## 📁 Organização das Imagens

1. **Crie a pasta de produtos** (já criada):
   ```
   assets/img/products/
   ```

2. **Nomeie as imagens de forma organizada**:
   - Use o código do produto: `20242.jpg`
   - Ou nome descritivo: `ovos-codorna-1kg.jpg`
   - Exemplo: `assets/img/products/20242.jpg`

3. **Formatos suportados**:
   - `.jpg` ou `.jpeg` (recomendado)
   - `.png`
   - `.webp` (melhor compressão)

## ➕ Como Adicionar um Produto

### Passo 1: Extrair a Imagem do PDF
1. Abra o PDF e encontre o produto
2. Extraia a imagem (métodos acima)
3. Salve em `assets/img/products/` com nome descritivo

### Passo 2: Adicionar ao products.js

Abra `assets/js/products.js` e adicione o produto na categoria correta:

```javascript
arroz: [
    {
        id: 'arroz-001',
        name: 'Arroz Tipo 1 Longo e Fino',
        weight: '5kg',
        code: '20252',
        description: 'Arroz tipo 1 longo e fino, embalagem de 5kg.',
        category: 'Arroz',
        image: 'assets/img/products/arroz-tipo1-5kg.jpg'
    },
    // Adicione mais produtos aqui...
],
```

### Passo 3: Verificar a Categoria

Certifique-se de que a categoria existe no objeto `productsCatalog`:

```javascript
const productsCatalog = {
    arroz: [...],      // ✅ Existe
    acucar: [...],     // ✅ Existe
    frango: [...],     // ✅ Existe
    cafe: [...],       // ✅ Existe
    feijao: [...],     // ✅ Existe
    oleo: [...]        // ✅ Existe
};
```

### Passo 4: Atualizar getAllProducts()

Se adicionar uma nova categoria, atualize a função `getAllProducts()`:

```javascript
function getAllProducts() {
    return [
        ...productsCatalog.conservas,
        ...productsCatalog.temperos,
        ...productsCatalog.graos,
        ...productsCatalog.carvao,
        ...productsCatalog.arroz,    // Adicione aqui
        ...productsCatalog.acucar,   // Adicione aqui
        // etc...
    ];
}
```

## 🔍 Exemplo Completo

### Produto: Café Arábica

1. **Extrair imagem**: `cafe-arabica.jpg` → salvar em `assets/img/products/`

2. **Adicionar ao products.js**:
```javascript
cafe: [
    {
        id: 'cafe-001',
        name: 'Café Arábica em Grãos',
        weight: '60kg',
        code: '20253',
        description: 'Café arábica de alta qualidade, embalagem de 60kg.',
        category: 'Café',
        image: 'assets/img/products/cafe-arabica.jpg'
    }
],
```

3. **Resultado**: O produto aparecerá automaticamente na página `pages/cafe.html`

## ✅ Checklist para Cada Produto

- [ ] Imagem extraída do PDF
- [ ] Imagem salva em `assets/img/products/`
- [ ] Produto adicionado em `products.js` na categoria correta
- [ ] ID único criado (formato: `categoria-codigo`)
- [ ] Código do produto preenchido
- [ ] Descrição completa
- [ ] Caminho da imagem correto
- [ ] Testado no navegador

## 🎨 Dicas de Imagens

1. **Tamanho recomendado**: 800x800px a 1200x1200px
2. **Qualidade**: Use JPEG com qualidade 85-90% para melhor compressão
3. **Otimização**: Use ferramentas como TinyPNG ou ImageOptim
4. **Nomes**: Use nomes descritivos e sem espaços (use hífens)

## 🚀 Processo Rápido

1. Abra o PDF e identifique todos os produtos
2. Extraia todas as imagens de uma vez
3. Organize as imagens na pasta `assets/img/products/`
4. Adicione todos os produtos no `products.js` de uma vez
5. Teste no navegador

## 📝 Notas Importantes

- Se um produto não tiver imagem, deixe `image: ''` - o sistema mostrará um ícone padrão
- O ID deve ser único em todo o catálogo
- O código do produto geralmente vem do PDF
- Mantenha a consistência nos nomes e descrições

## 🆘 Problemas Comuns

**Imagem não aparece?**
- Verifique o caminho: deve ser `assets/img/products/nome.jpg`
- Verifique se o arquivo existe na pasta
- Limpe o cache do navegador (Ctrl+F5)

**Produto não aparece na página?**
- Verifique se está na categoria correta
- Verifique se a categoria existe em `getProductsByCategory()`
- Verifique o console do navegador (F12) para erros

**Erro de sintaxe?**
- Verifique vírgulas e chaves no JSON
- Certifique-se de que todas as strings estão entre aspas

---

**Boa sorte adicionando os produtos! 🎉**

