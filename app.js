var section_resultados = document.getElementById("resultados-pesquisa");
var modal = document.getElementById("info-modal");
var campoPesquisa = document.getElementById("campo-pesquisa");

// Função para realizar a pesquisa de jogos
function pesquisar() {
    // Obtém o termo de pesquisa, remove espaços em branco e converte para minúsculas
    let pesquisa = campoPesquisa.value.trim().toLowerCase();

    // Verifica se o termo de pesquisa é válido
    if (pesquisa == "" || pesquisa.length < 2) {
        // Exibe uma mensagem caso o termo de pesquisa seja muito curto
        section_resultados.innerHTML = "Faça uma busca mais específica...";
        return;
    }

    let resultados = "";

    // Itera sobre cada jogo na lista de dados
    for (let dado of dados) {
        // Obtém o nome e os gêneros do jogo em minúsculas para facilitar a comparação
        let nome = dado.nome.toLowerCase();
        let generos = dado.generos.toLowerCase();

        // Verifica se o termo de pesquisa está presente no nome ou nos gêneros do jogo
        if (nome.includes(pesquisa) || generos.includes(pesquisa)) {
            // Cria um elemento HTML para exibir o resultado da pesquisa
            let divJogo = `<div class="item-resultado" onclick="openModal('${dado.nome}')"><img src=${dado.imagem}><p><strong>${dado.generos}</strong></p></div>`;

            resultados += divJogo;
        }
    }

    if (resultados == "") {
        // Exibe uma mensagem caso não sejam encontrados resultados
        section_resultados.innerHTML = "Nenhum resultado encontrado.";
        return;
    }

    // Exibe os resultados da pesquisa na seção apropriada
    section_resultados.innerHTML = resultados;
}

// Função para abrir o modal com informações detalhadas sobre um jogo
function openModal(jogo) {
    // Itera sobre cada jogo na lista de dados
    for (let dado of dados) {
        // Verifica se o jogo atual corresponde ao jogo selecionado
        if (dado.nome == jogo) {
            // Cria o conteúdo do modal com as informações do jogo
            let infosModal = `<img src=${dado.imagem}><p>${dado.resumo}</p><p><strong>Ano de publicação: </strong>${dado.publicacao}</p><p><strong>Desenvolvedor(es): </strong>${dado.desenvolvedor}</p><p><strong>Gêneros: </strong>${dado.generos}</p><div class="buttons-container"><button><a href="https://store.steampowered.com/search/?term=${dado.nome}" target="_blank">Pesquisar na Steam</a></button><button><a href="https://www.google.com.google.com/search/?v=1=https://www.google.com/search/?term=https://www.google.com/google.com/search/term/com/search/?term=2=https://www.google.com/google.com/search/com.google/google.com.google/com=" target="_blank">Pesquisar no Google</a></button></div>`;

            modal.innerHTML = infosModal;
            modal.showModal();
        }
    }
}

// Fecha o modal quando o usuário clica na tela
modal.addEventListener("click", () => {
    modal.close();
});