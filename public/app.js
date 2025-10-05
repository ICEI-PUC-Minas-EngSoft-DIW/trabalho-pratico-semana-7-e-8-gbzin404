const itens = [
  {
    id: 1,
    titulo: "Razer DeathAdder V2",
    descricao: "Mouse extremamente preciso para jogos e uso diario, com sensor de alta qualidade e design ergonômico. Ideal para gamers e profissionais que buscam desempenho e conforto.",
    imagem: "img/item1.jpg"
  },
  {
    id: 2,
    titulo: "Logitech G502 HERO",
    descricao: "Mouse gamer com sensor HERO 25K, iluminação RGB personalizável e 11 botões programáveis. Perfeito para jogadores que desejam precisão e versatilidade em suas partidas.",
    imagem: "img/item2.jpg"
  },
  {
    id: 3,
    titulo: "Logitech G Pro X",
    descricao: "Mouse gamer leve e compacto, projetado para jogadores profissionais. Com sensor HERO 25K, design ambidestro e iluminação RGB, oferece desempenho excepcional em qualquer jogo.",
    imagem: "img/item3.jpg"
  }
  ,{
    id: 4,
    titulo: "Razer BlackWidow V3",
    descricao: "Teclado mecânico gamer com switches Razer Green, iluminação RGB personalizável e estrutura robusta. Ideal para gamers que buscam durabilidade e desempenho em suas partidas.",
    imagem: "img/item3.jpg"
  }

];



function montarCards() {
  const container = document.getElementById("cards-container");

  itens.forEach(item => {
    
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}">
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
      <a href="detalhes.html?id=${item.id}">Ver detalhes</a>
    `;

    
    container.appendChild(card);
  });
}


if (document.getElementById("cards-container")) {
  montarCards();
}
