const botao = documemt.querySelector("button");
const Persongem = document.querySelector("#personagens");

gerarValorAleatorio = () =>{
    return Math.floor(Math.random() * 671);
};

let getPersonagens = async(total = 3) =>{
    let personagensID = [];
    for(let i =0; i < total; i++){
        // Aqui ele faz o sorteio do personagem que vai pegar
        personagensID.push(gerarValorAleatorio());
    }

    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${personagensID}`,
        {
            method:"GET",
            headers: {
                Accept: " application/json ",
                " Content-Type ": "application/json",
            },
        }
    );

    return await response.json();

};