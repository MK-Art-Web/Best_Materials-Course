// ==================== LISTA DE PRODUTOS ====================
const produtos = [
  {
    nome: "Papel Sulfite",
    descricao: "Folha comum para desenho e escrita.",
    imagem: "Imagem Papel Sulfite",
    link: "https://link-do-produto.com/papel-sulfite"
  },
  {
    nome: "Papel Canson",
    descricao: "Ideal para desenhos a lápis e grafite.",
    imagem: "Imagem Papel Canson",
    link: "https://link-do-produto.com/papel-canson"
  },
  {
    nome: "Papel Aquarela",
    descricao: "Papel texturizado para pinturas em aquarela.",
    imagem: "Imagem Papel Aquarela",
    link: "https://link-do-produto.com/papel-aquarela"
  },
  {
    nome: "Bloco Sketchbook",
    descricao: "Perfeito para rascunhos e estudos de desenho.",
    imagem: "Imagem Sketchbook",
    link: "https://link-do-produto.com/sketchbook"
  }
];

// ==================== LISTA DE CURSOS ====================
const cursos = [
  {
    nome: "Curso Básico de Desenho",
    descricao: "Aprenda as bases do desenho e técnicas iniciais.",
    imagem: "Imagem Curso Básico"
  },
  {
    nome: "Curso Intermediário de Desenho",
    descricao: "Aprofunde suas habilidades e técnicas de desenho.",
    imagem: "Imagem Curso Intermediário"
  }
];

// ==================== SELEÇÃO DE CONTAINERS ====================
const produtosContainer = document.getElementById("produtos-container");
const cursosContainer = document.getElementById("cursos-container");

// Pop-up
const popup = document.getElementById("popup");
const fecharPopup = document.getElementById("fechar-popup");

// ==================== CRIAÇÃO DOS PRODUTOS ====================
produtos.forEach(produto => {
  const card = document.createElement("article");
  card.className = "card produto-card";
  card.innerHTML = `
    <div class="img-placeholder">${produto.imagem}</div>
    <h3 class="produto-nome">${produto.nome}</h3>
    <p class="produto-desc">${produto.descricao}</p>
    <a href="${produto.link}" target="_blank" class="btn-outline">Ver Produto</a>
  `;
  produtosContainer.appendChild(card);
});

// ==================== CRIAÇÃO DOS CURSOS ====================
cursos.forEach(curso => {
  const card = document.createElement("article");
  card.className = "card curso-card";
  card.innerHTML = `
    <div class="img-placeholder">${curso.imagem}</div>
    <h3 class="produto-nome">${curso.nome}</h3>
    <p class="produto-desc">${curso.descricao} (Em andamento)</p>
  `;

  card.addEventListener("click", () => {
    popup.classList.add("active");
  });

  cursosContainer.appendChild(card);
});

// ==================== EVENTOS DO POP-UP ====================
fecharPopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});