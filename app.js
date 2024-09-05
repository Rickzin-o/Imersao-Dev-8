var modal = document.querySelector("[data-modal]")
var section_resultados = document.querySelector(".resultados-pesquisa")

function openModal(jogo) {
    dados.forEach(element => {
            if (element.nome == jogo) {
                let infosModal = `<img src=${element.imagem}"><p>${element.resumo}</p><p><strong>Desenvolvedor(es): </strong>${element.desenvolvedor}</p><p><strong>Gêneros: </strong>${element.generos}</p><button>Página da Steam</button>`
                modal.innerHTML = infosModal
                modal.showModal()
        }
    });
}

modal.addEventListener("click", () => {
    modal.close()
})

for (let i = 0; i < dados.length; i++) {
    let divJogo = `<div class="item-resultado"><img src=${dados[i].imagem} onclick="openModal('${dados[i].nome}')"><p><strong>Gêneros: </strong>${dados[i].generos}</p></div>`

    section_resultados.innerHTML += divJogo
}