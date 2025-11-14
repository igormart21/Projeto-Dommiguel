# Dom Miguel Atacadista - Site Institucional Premium

Site institucional moderno, premium e altamente profissional para a empresa **Dom Miguel Atacadista**, especializada em distribuição e atacado de produtos alimentícios.

## 🎯 Sobre o Projeto

Este é um site institucional premium desenvolvido com as melhores práticas de desenvolvimento web moderno, apresentando a empresa, suas categorias de produtos e páginas individuais para cada item do catálogo. O site é totalmente responsivo, otimizado para SEO e com animações suaves.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **TailwindCSS** - Framework CSS utilitário (via CDN)
- **JavaScript (Vanilla)** - Modular e organizado
- **AOS (Animate On Scroll)** - Animações suaves ao scroll
- **Font Awesome** - Ícones modernos
- **Google Fonts (Inter)** - Tipografia premium

## 📁 Estrutura de Pastas

```
Projeto-Dommiguel/
│
├── index.html              # Página principal (Home)
├── README.md              # Documentação
│
├── components/            # Componentes reutilizáveis
│   ├── header.html        # Header premium
│   └── footer.html        # Footer premium
│
├── pages/                 # Páginas do site
│   ├── sobre.html         # Sobre Nós
│   ├── produtos.html      # Hub de produtos
│   ├── produto.html       # Página modelo de produto individual
│   ├── contato.html       # Contato
│   ├── conservas.html     # Categoria: Conservas
│   ├── temperos.html      # Categoria: Temperos
│   ├── graos.html         # Categoria: Grãos & Farinhas
│   └── carvao.html        # Categoria: Carvão & Utilidades
│
└── assets/
    ├── css/
    │   └── style.css      # Estilos customizados premium
    ├── js/
    │   ├── components.js  # Carregador de componentes
    │   ├── products.js    # Catálogo de produtos
    │   └── main.js        # JavaScript principal
    └── img/               # Imagens (pronta para uso)
```

## 🎨 Identidade Visual

### Paleta de Cores

- **Azul Petróleo (Primary)**: `#0B2A3D`
- **Azul Petróleo Escuro**: `#081A26`
- **Dourado Premium (Accent)**: `#C5A25A`
- **Dourado Escuro**: `#A68B4A`
- **Branco**: `#FFFFFF`
- **Cinza Claro**: `#F2F2F2`
- **Cinza Médio**: `#E8E8E8`

### Design

- Estética corporativa de atacado + distribuição
- Layouts amplos e espaçados
- Cards modernos com bordas arredondadas (12px)
- Sombras suaves e elegantes
- Ícones minimalistas
- Animações premium (AOS)

## 📄 Páginas do Site

### 1. Home (`index.html`)
- **Hero Section** com gradiente premium
- **Seção de Categorias** (4 cards principais)
- **Destaques** da empresa (3 cards)

### 2. Sobre Nós (`pages/sobre.html`)
- História da empresa
- Timeline moderna com diferenciais
- Valores e princípios

### 3. Produtos (`pages/produtos.html`)
- Hub geral com todas as categorias
- Links para páginas específicas de cada categoria

### 4. Páginas de Categoria
- **Conservas** (`pages/conservas.html`) - 7 produtos
- **Temperos** (`pages/temperos.html`) - 2 produtos
- **Grãos & Farinhas** (`pages/graos.html`) - 1 produto
- **Carvão & Utilidades** (`pages/carvao.html`) - 1 produto

### 5. Produto Individual (`pages/produto.html`)
- Banner do produto
- Breadcrumb navegável
- Ficha técnica completa
- Descrição detalhada
- Botão "Solicitar Cotação"
- Seção de produtos similares (4 cards)

### 6. Contato (`pages/contato.html`)
- Formulário moderno e completo
- Informações da empresa
- Mapa incorporado (Google Maps)
- Horário de atendimento

## 📦 Catálogo de Produtos

### Conservas (7 produtos)
- Ovos de codorna em conserva (1kg)
- Ovos de codorna em conserva (2,1kg)
- Azeitona em conserva (3,2kg)
- Azeitona em conserva (2,9kg)
- Azeitona preta com caroço (11kg)
- Palmito tolete (Caixa com 6 unidades)
- Palmito picado (Caixa com 6 unidades)

### Temperos (2 produtos)
- Alho desidratado flocos (500g)
- Alho descascado natural (1kg)

### Grãos & Farinhas (1 produto)
- Farinha de trigo (25kg)

### Carvão & Utilidades (1 produto)
- Carvão (2kg)

**Total: 11 produtos catalogados**

## 🎯 Funcionalidades

### Componentes Reutilizáveis
- ✅ Header com menu responsivo
- ✅ Footer premium com links e redes sociais
- ✅ Sistema de carregamento dinâmico de componentes

### Navegação
- ✅ Menu fixo com efeito de scroll
- ✅ Breadcrumb em todas as páginas
- ✅ Scroll suave entre seções
- ✅ Links ativos destacados

### Animações
- ✅ AOS (Animate On Scroll) configurado
- ✅ Fade-up, fade-right, fade-left
- ✅ Hover effects premium
- ✅ Transições suaves

### Interatividade
- ✅ Menu mobile toggle
- ✅ Formulário de contato funcional
- ✅ Máscara de telefone automática
- ✅ Renderização dinâmica de produtos
- ✅ Sistema de notificações

### Responsividade
- ✅ Mobile-first design
- ✅ Breakpoints otimizados
- ✅ Grid adaptativo
- ✅ Imagens responsivas

### SEO
- ✅ Meta tags otimizadas
- ✅ Títulos descritivos
- ✅ Estrutura semântica HTML5
- ✅ Alt texts preparados

## 📍 Informações da Empresa

- **Nome**: Dom Miguel Atacadista
- **CNPJ**: 40.613.582/0001-04
- **Endereço**: Rua das Hortênsias, 9 - Bairro Village I Sede
- **CEP**: 45.810-000

## 🚀 Como Usar

### Opção 1: Abrir diretamente
1. Abra o arquivo `index.html` em um navegador moderno

### Opção 2: Servidor local (recomendado)
```bash
# Com Python
python3 -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 🔧 Estrutura de Componentes

### Header Component
- Logo com iniciais "DM"
- Menu de navegação responsivo
- Efeito de scroll com transparência
- Links com hover elegante

### Footer Component
- Logo e descrição
- Links rápidos
- Informações de contato
- Redes sociais
- Copyright

### Product Card
- Imagem placeholder profissional
- Nome do produto
- Peso/variação
- Código do produto
- Descrição
- Botão "Ver Detalhes"
- Animação hover premium

### Category Card
- Ícone minimalista
- Nome da categoria
- Fundo com textura leve
- Botão "Ver Produtos"
- Animação hover upscale

## 📝 Notas Importantes

### Mapa do Google Maps
O mapa está com coordenadas placeholder. Para produção:
1. Obtenha as coordenadas reais do endereço no Google Maps
2. Atualize o iframe em `pages/contato.html` com as coordenadas corretas

### Imagens dos Produtos
As imagens são placeholders. Para adicionar imagens reais:
1. Adicione as imagens na pasta `assets/img/`
2. Atualize os caminhos nas páginas ou no JavaScript

### Formulário de Contato
O formulário atualmente mostra uma notificação. Para produção:
1. Integre com um backend (PHP, Node.js, etc.)
2. Ou use um serviço de e-mail (EmailJS, Formspree, etc.)

### Página de Produto Individual
A página `produto.html` é dinâmica e carrega produtos baseado no parâmetro `?id=` na URL. Exemplo:
- `produto.html?id=cons-20242`
- `produto.html?id=temp-20244`

## 🔄 Próximas Melhorias Sugeridas

- [ ] Integração do formulário com backend
- [ ] Adicionar imagens reais dos produtos
- [ ] Atualizar mapa com coordenadas reais
- [ ] Implementar busca de produtos
- [ ] Adicionar filtros nas páginas de categoria
- [ ] Sistema de favoritos/produtos salvos
- [ ] Galeria de imagens nos produtos
- [ ] Blog/Notícias da empresa
- [ ] Área do cliente
- [ ] Integração com WhatsApp Business
- [ ] Otimização de performance (lazy loading)
- [ ] PWA (Progressive Web App)

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para Dom Miguel Atacadista.

---

**Desenvolvido com ❤️ para Dom Miguel Atacadista**

*Site institucional premium - 2024*
