"use strict";

const procurarImagens = async (pesquisa) => {
  const key = "24408664-82cd2670ccae20784bf9b168b";
  const url = `https://pixabay.com/api/?key=${key}&q=${pesquisa}`;
  const reponse = await fetch(url);
  return reponse.json();
};

const carregarGaleria = async (pesquisa) => {
  const { hits } = await procurarImagens(pesquisa);
  console.log(hits);
};

const handleKeypress = ({ key, target }) => {
  if (key === "Enter") {
    carregarGaleria(target.value);
  }
};

document
  .querySelector(".pesquisa-input")
  .addEventListener("keypress", handleKeypress);
