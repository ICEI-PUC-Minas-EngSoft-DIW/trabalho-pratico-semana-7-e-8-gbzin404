// app.js
const produtos = [
  {
    "id": 1,
    "nome": "Razer DeathAdder V2",
    "descricao": "Sensor óptico de 20.000 DPI para precisão extrema.",
    "descricaoCompleta": "O Razer DeathAdder V2 é um mouse gamer de alto desempenho com sensor óptico de 20.000 DPI, switches ópticos Razer com durabilidade de 70 milhões de cliques, design ergonômico para destros e iluminação RGB Razer Chroma™ personalizável.",
    "preco": "R$ 399,90",
    "categoria": "mouses",
    "marca": "Razer",
    "imagem": "https://images.unsplash.com/photo-1594008671689-8d8b9480cae8?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "caracteristicas": ["20.000 DPI", "Switches ópticos", "Design ergonômico", "RGB Chroma™"]
  },
  {
    "id": 2,
    "nome": "Logitech G502 HERO",
    "descricao": "Mouse personalizável com 11 botões programáveis.",
    "descricaoCompleta": "O Logitech G502 HERO oferece desempenho de ponta com sensor HERO 25K, 11 botões programáveis, sistema de pesos ajustáveis e tecnologia LIGHTSYNC RGB. Perfeito para jogos que exigem precisão e customização.",
    "preco": "R$ 349,90",
    "categoria": "mouses",
    "marca": "Logitech",
    "imagem": "https://images.unsplash.com/photo-1588440241012-ffd0331a05a8?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "caracteristicas": ["Sensor HERO 25K", "11 botões programáveis", "Pesos ajustáveis", "LIGHTSYNC RGB"]
  },
  {
    "id": 3,
    "nome": "Logitech G Pro X",
    "descricao": "Teclado mecânico compacto com switches customizáveis.",
    "descricaoCompleta": "O Logitech G Pro X é um teclado mecânico compacto desenvolvido para e-sports. Com switches mecânicos customizáveis, design tenkeyless para mais espaço, construção em aço e iluminação LIGHTSYNC RGB avançada.",
    "preco": "R$ 699,90",
    "categoria": "teclados",
    "marca": "Logitech",
    "imagem": "https://images.unsplash.com/photo-1623593475667-377c7376f0f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjbGFkbyUyMGclMjBwcm8lMjB4fGVufDB8fDB8fHww",
    "caracteristicas": ["Switches customizáveis", "Design tenkeyless", "Construção em aço", "LIGHTSYNC RGB"]
  },
  {
    "id": 4,
    "nome": "Razer BlackWidow V3",
    "descricao": "Switches verdes mecânicos com iluminação RGB.",
    "descricaoCompleta": "O Razer BlackWidow V3 apresenta switches mecânicos verdes Razer com feedback tátil e audível, keycaps double-shot, repouso de pulso acolchoado e iluminação RGB Razer Chroma™ com 16.8 milhões de cores.",
    "preco": "R$ 899,90",
    "categoria": "teclados",
    "marca": "Razer",
    "imagem": "https://images.unsplash.com/photo-1728439652767-713c5f412738?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "caracteristicas": ["Switches verdes mecânicos", "Keycaps double-shot", "Repouso de pulso", "RGB Chroma™"]
  },
  {
    "id": 5,
    "nome": "Corsair Void RGB Elite",
    "descricao": "Áudio 7.1 com conforto e iluminação personalizável.",
    "descricaoCompleta": "O Corsair Void RGB Elite oferece som surround 7.1 virtual de alta qualidade, drivers de 50mm, almofadas em memory foam, microfone omnidirecional com cancelamento de ruído e iluminação RGB personalizável.",
    "preco": "R$ 599,90",
    "categoria": "headsets",
    "marca": "Corsair",
    "imagem": "https://plus.unsplash.com/premium_photo-1679177184017-7777cdbb2ba5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "caracteristicas": ["Som surround 7.1", "Drivers 50mm", "Memory foam", "Microfone com cancelamento"]
  },
  {
    "id": 6,
    "nome": "SteelSeries QcK Prism",
    "descricao": "Mousepad RGB com superfície de precisão.",
    "descricaoCompleta": "O SteelSeries QcK Prism combina a superfície de tecido otimizada do QcK com iluminação RGB dinâmica em duas zonas. Base de borracha antiderrapante, bordas costuradas e controle via software Engine.",
    "preco": "R$ 249,90",
    "categoria": "mousepads",
    "marca": "SteelSeries",
    "imagem": "https://images.unsplash.com/photo-1616071358409-ef30a44a90bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "caracteristicas": ["Iluminação RGB dual-zone", "Superfície QcK otimizada", "Base antiderrapante", "Bordas costuradas"]
  }
];

// Função para carregar produtos na home
function carregarProdutosHome() {
  const containers = {
    'mouses': document.getElementById('mouses-container'),
    'teclados': document.getElementById('teclados-container'),
    'headsets': document.getElementById('headsets-container'),
    'mousepads': document.getElementById('mousepads-container')
  };

  // Limpar containers antes de adicionar os produtos
  Object.values(containers).forEach(container => {
    if (container) container.innerHTML = '';
  });

  // Adicionar produtos aos respectivos containers
  produtos.forEach(produto => {
    const container = containers[produto.categoria];
    if (!container) return;

    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="card-content">
        <h3>${produto.nome}</h3>
        <p class="description">${produto.descricao}</p>
        <p class="price">${produto.preco}</p>
        <a href="detalhes.html?id=${produto.id}" class="btn-details">Ver Detalhes</a>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Função para carregar detalhes do produto
function carregarDetalhesProduto() {
  const urlParams = new URLSearchParams(window.location.search);
  const produtoId = parseInt(urlParams.get('id'));
  
  const produto = produtos.find(p => p.id === produtoId);
  const container = document.getElementById('detalhes-container');
  
  if (!produto || !container) {
    container.innerHTML = `
      <div class="error-message">
        <h3>Produto não encontrado</h3>
        <a href="index.html" class="btn-back">Voltar para Home</a>
      </div>
    `;
    return;
  }
  
  container.innerHTML = `
    <div class="product-detail">
      <div class="product-image">
        <img src="${produto.imagem}" alt="${produto.nome}">
      </div>
      <div class="product-info">
        <h1>${produto.nome}</h1>
        <p class="brand">Marca: ${produto.marca}</p>
        <p class="full-description">${produto.descricaoCompleta}</p>
        
        <div class="features">
          <h3>Características:</h3>
          <ul>
            ${produto.caracteristicas.map(carac => `<li>${carac}</li>`).join('')}
          </ul>
        </div>
        
        <div class="purchase-section">
          <div class="price-section">
            <span class="price">${produto.preco}</span>
            <span class="stock">Em estoque</span>
          </div>
          <div class="buttons">
            <button class="btn-buy">Comprar Agora</button>
            <a href="index.html" class="btn-back">Voltar para Loja</a>
          </div>
        </div>
      </div>
    </div>
  `;
}