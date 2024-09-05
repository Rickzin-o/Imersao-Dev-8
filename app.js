var modal = document.querySelector("[data-modal]")
var section_resultados = document.querySelector(".resultados-pesquisa")

function openModal() {
    modal.showModal()
}

modal.addEventListener("click", () => {
    modal.close()
})

for (let i = 0; i < dados.length; i++) {
    let divJogo = `<div class="item-resultado"><img src=${dados[i].imagem} onclick="openModal()"><p><strong>Gêneros: </strong>${dados[i].generos}</p></div>`

    section_resultados.innerHTML += divJogo
}