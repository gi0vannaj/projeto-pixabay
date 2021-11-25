"use strict";

const procurarImagens = async (pesquisa) => {
  const key = "24408664-82cd2670ccae20784bf9b168b";
  const url = `https://pixabay.com/api/?key=${key}&q=${pesquisa}`;
  const reponse = await fetch(url);
  return reponse.json();
};
const criarCard = ({ webformatURL, pageURL }) => {
  const card = document.createElement("div");
  card.classList.add("card-container");
  card.innerHTML = ` 
    <a href="${pageURL}">
      <img src='${webformatURL}' class='card-imagem'>
    </a>
  `;
  return card;
};

const carregarGaleria = async (pesquisa) => {
  const container = document.querySelector(".galeria-container");
  const { hits } = await procurarImagens(pesquisa);
  const cards = hits.map(criarCard);
  container.replaceChildren(...cards); //... espalha um array
};

const handleKeypress = ({ key, target }) => {
  if (key === "Enter") {
    carregarGaleria(target.value);
  }
};

document
  .querySelector(".pesquisa-input")
  .addEventListener("keypress", handleKeypress);
