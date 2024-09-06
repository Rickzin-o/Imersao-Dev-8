var section_resultados = document.getElementById("resultados-pesquisa")
var modal = document.getElementById("info-modal")
var campoPesquisa = document.getElementById("campo-pesquisa")

function pesquisar() {
    let pesquisa = campoPesquisa.value.trim().toLowerCase()
    if (pesquisa == "" || pesquisa.length < 2) {
        section_resultados.innerHTML = "Faça uma busca mais específica..."
        return
    }

    let resultados = ""
    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        let nome = dado.nome.toLowerCase()
        let generos = dado.generos.toLowerCase()
        if (nome.includes(pesquisa) || generos.includes(pesquisa)) {
            let divJogo = `<div class="item-resultado" onclick="openModal('${dado.nome}')"><img src=${dado.imagem}><p><strong>Gêneros: </strong>${dado.generos}</p></div>`

            resultados += divJogo
        }
    }

    if (resultados == "") {
        section_resultados.innerHTML = "Nenhum resultado encontrado."
        return
    }

    section_resultados.innerHTML = resultados
}

function openModal(jogo) {
    for (let dado of dados) {
        if (dado.nome == jogo) {
            let infosModal = `<img src=${dado.imagem}><p>${dado.resumo}</p><p><strong>Ano de publicação: </strong>${dado.publicacao}</p><p><strong>Desenvolvedor(es): </strong>${dado.desenvolvedor}</p><p><strong>Gêneros: </strong>${dado.generos}</p><div class="buttons-container"><button><a href="https://store.steampowered.com/search/?term=${dado.nome}" target="_blank">Pesquisar na Steam</a></button><button><a href="https://www.google.com/search?q=${dado.nome}" target="_blank">Pesquisar no Google</a></button></div>`
                modal.innerHTML = infosModal
                modal.showModal()
        }
    };
}

modal.addEventListener("click", () => {
    modal.close()
})