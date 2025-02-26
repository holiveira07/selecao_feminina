/**
 * PRIMEIRA TROCA DE  IMAGEM
 *
 * @format
 */

const botoes = document.querySelectorAll(".btn-selecao, .btn2-selecao");

const imagens = {
	goleira: "./img/goleiras.png",
	defesa: "./img/defensoras.png",
	meia: "./img/meia.png",
	ataque: "./img/atacantes.png",
};

const img = document.getElementById("meninas");

botoes.forEach((botao) => {
	botao.addEventListener("click", ({ target }) => {
		const id = target.id.replace("2", "");
		if (imagens[id]) {
			img.src = imagens[id];
		}
	});
});
