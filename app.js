var section_resultados = document.getElementById("resultados-pesquisa")
var modal = document.querySelector("[data-modal]")

function pesquisar() {
    let resultados = ""
    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        let divJogo = `<div class="item-resultado" onclick="openModal('${dado.nome}')"><img src=${dado.imagem}><p><strong>Gêneros: </strong>${dado.generos}</p></div>`

        resultados += divJogo
    }

    section_resultados.innerHTML = resultados
}

function openModal(jogo) {
    for (let dado of dados) {
        if (dado.nome == jogo) {
            let infosModal = `<img src=${dado.imagem}><p>${dado.resumo}</p><p><strong>Ano de publicação: </strong>${dado.publicacao}</p><p><strong>Desenvolvedor(es): </strong>${dado.desenvolvedor}</p><p><strong>Gêneros: </strong>${dado.generos}</p><button><a href="https://store.steampowered.com/search/?term=${dado.nome}" target="_blank">Pesquisar na Steam</a></button>`
                modal.innerHTML = infosModal
                modal.showModal()
        }
    };
}

modal.addEventListener("click", () => {
    modal.close()
})