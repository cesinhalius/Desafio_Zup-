const botao = document.querySelector('button'); 
const personagemDIV = document.getElementById("personagens");

gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 671);
};

let getPersonagens = async (total = 3) => {
  let personagensID = [];
  for (let i = 0; i < total; i++) {
    // Aqui ele faz o sorteio do personagem que vai pegar
    personagensID.push(gerarValorAleatorio());
  }

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${personagensID}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
};

pegarListadePersonagem = async () => {
  let html = "";
  let p = await getPersonagens();

  p.forEach((personagem) => {
    console.log(personagem);
    const { name, image, species, status } = personagem;
    html += `<img alt="${image}" src=${image} >`;
    html += `<ul id="detalhes-container">
                <li>Nome:<p id="nome">${name}</p></li>
                <li>Espécie:<p id="especie">${species}</p></li>
                <li>Esta Vivo?:<p id="condicao">${status}</p></li>
        </ul>`;
  });
  console.log(html);
  
  personagemDIV.innerHTML = html;
};

botao.onclick = pegarListadePersonagem;
