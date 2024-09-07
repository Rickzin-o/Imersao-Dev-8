let dados = [
    {
        nome: "Hollow Knight",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1695270428",
        desenvolvedor: "Team Cherry",
        generos: "Plataforma, Metroidvania, Aventura",
        publicacao: 2017,
        resumo: "Hollow Knight é um metroidvania em 2D que te transporta para um reino subterrâneo em ruínas, habitado por criaturas bizarras e repleto de perigos. Com uma atmosfera sombria e melancólica, o jogo te convida a explorar cada canto de Hallownest, um reino outrora próspero, agora corroído pela infecção."
    },
    {
        nome: "Dead Cells",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg?t=1717495895",
        desenvolvedor: "Motion Twin",
        generos: "Roguelike, Plataforma, Ação",
        publicacao: 2017,
        resumo: "Dead Cells é um rogue-like de ação em 2D com combate frenético e progressão permanente. Explore um castelo em constante mutação, derrote inimigos grotescos e descubra novas habilidades a cada partida."
    },
    {
        nome: "Undertale",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg?t=1579096091",
        desenvolvedor: "Toby Fox",
        generos: "RPG, Aventura",
        publicacao: 2015,
        resumo: "Undertale é um RPG com uma história profunda e cheia de reviravoltas, onde suas escolhas influenciam o destino dos personagens. Com uma estética pixelada e uma trilha sonora memorável, Undertale oferece uma experiência única e emocionante."
        
    },
    {
        nome: "Stardew Valley",
        imagem: "https://shared.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1711128146",
        desenvolvedor: "ConcernedApe",
        generos: "Simulação, RPG, Fazenda",
        publicacao: 2016,
        resumo: "Stardew Valley é um jogo de simulação de vida no campo onde você herda a fazenda de seu avô e precisa reconstruí-la. Cultive a terra, crie animais, explore minas e construa relacionamentos com os moradores da cidade."
    },
    {
        nome: "Cuphead",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg?t=1709068852",
        desenvolvedor: "StudioMDHR",
        generos: "Plataforma, Ação, Clássico",
        publicacao: 2017,
        resumo: "Cuphead é um jogo de plataforma clássico com gráficos de desenho animado à mão, inspirado em cartoons dos anos 30. Enfrente chefes épicos em batalhas desafiadoras com armas e habilidades únicas."
    },
    {
        nome: "Celeste",
        imagem: "https://cdn2.steamgriddb.com/grid/d3a1142c37e1db8545c12aca5e0fc43f.png",
        desenvolvedor: "Matt Makes Games",
        generos: "Plataforma, Aventura",
        publicacao: 2018,
        resumo: "Celeste é um jogo de plataforma 2D com foco em mecânicas de escalada e desafios precisos. Explore montanhas misteriosas, supere seus medos e descubra uma história emocionante."
    },
    {
        nome: "Deltarune",
        imagem: "https://cdn2.steamgriddb.com/grid/afbc3a3a3341b8be626c3b181f2effb3.png",
        desenvolvedor: "Toby Fox",
        generos: "RPG, Aventura",
        publicacao: 2018,
        resumo: "Deltarune é um RPG com uma história envolvente e personagens memoráveis. Explore um mundo mágico, resolva puzzles e lute contra monstros em batalhas por turnos com um toque único."
    },
    {
        nome: "Katana Zero",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/460950/header.jpg?t=1719982207",
        desenvolvedor: "Askiisoft",
        generos: "Ação, Plataforma, Aventura",
        publicacao: 2019,
        resumo: "Katana Zero é um jogo de ação frenético com elementos de neo-noir. Manipule o tempo, desvie de balas e elimine seus inimigos com precisão em níveis desafiadores."
    },
    {
        nome: "Rocket League",
        imagem: "https://cdn2.steamgriddb.com/grid/0bc7514855017a9c038a88c0a62403b4.jpg",
        desenvolvedor: "Psyonix Studios",
        generos: "Esporte, Veicular, Multijogador",
        publicacao: 2015,
        resumo: "Rocket League é um jogo de futebol com carros, onde você usa seus veículos para marcar gols em partidas frenéticas e cheias de acrobacias. Com física realista e jogabilidade viciante, o jogo oferece horas de diversão solo ou com amigos."
    },
    {
        nome: "Rhythm Doctor",
        imagem: "https://shared.steamstatic.com/store_item_assets/steam/apps/774181/header.jpg?t=1720154874",
        desenvolvedor: "3DClouds",
        generos: "Ritmo, Música",
        publicacao: 2018,
        resumo: "Rhythm Doctor é um jogo rítmico desafiador onde você precisa realizar procedimentos médicos no ritmo da música. Com uma trilha sonora original e viciante, o jogo testa seus reflexos e senso de ritmo."
    },
    {
        nome: "Dont Starve",
        imagem: "https://cdn2.steamgriddb.com/grid/9e05fb01c4c2aa78872ff38b73e69197.png",
        desenvolvedor: "Klei Entertainment",
        generos: "Sobrevivência, Aventura",
        publicacao: 2013,
        resumo: "Don't Starve é um jogo de sobrevivência em mundo aberto onde você precisa coletar recursos, construir abrigos e criar ferramentas para sobreviver em um ambiente hostil e cheio de criaturas perigosas."
    },
    {
        nome: "Super Chicken Jumper",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/584640/header.jpg?t=1708609164",
        desenvolvedor: "Sewer Cat",
        generos: "Plataforma, Arcade",
        publicacao: 2020,
        resumo: "Super Chicken Jumper é um jogo de plataforma arcade com gráficos pixelados e jogabilidade viciante. Controle um frango superpoderoso e pule por diversos níveis desafiadores, coletando ovos e evitando obstáculos."
    },
    {
        nome: "Shovel Knight",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/589500/header.jpg?t=1701228316",
        desenvolvedor: "Yacht Club Games",
        generos: "Plataforma, Aventura, Retro",
        publicacao: 2014,
        resumo: "Shovel Knight é um jogo de plataforma 2D com estética retro que homenageia os clássicos da era 8 e 16 bits. Controle o cavaleiro Shovel Knight em sua jornada para resgatar sua amada e derrotar o mal."
    },
    {
        nome: "Terraria",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
        desenvolvedor: "Re-Logic",
        generos: "Aventura, Construção, Sandbox",
        publicacao: 2011,
        resumo: "Terraria é um jogo de mundo aberto em 2D onde você pode construir, explorar e lutar contra monstros em um mundo gerado proceduralmente. Crie ferramentas, armas e construções para sobreviver e prosperar."
    },
    {
        nome: "The Binding of Isaac: Rebirth",
        imagem: "https://cdn2.steamgriddb.com/grid/53078424bffd4f61f37db5fc749e1afd.png", 
        desenvolvedor: "Edmund McMillen",
        generos: "Roguelike, Ação",
        publicacao: 2014,
        resumo: "The Binding of Isaac: Rebirth é um roguelike com elementos de RPG e ação. Explore as profundezas de uma masmorra gerada proceduralmente, enfrentando monstros bizarros e coletando itens para fortalecer seu personagem."
    },
    {
        nome: "Chants of Sennaar",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1931770/header.jpg?t=1723627319", 
        desenvolvedor: "RUNDISC",
        generos: "Quebra-cabeça, Aventura",
        publicacao: 2020,
        resumo: "Chants of Sennaar é um jogo de quebra-cabeça focado em linguística. Desvende os mistérios de uma torre antiga traduzindo idiomas desconhecidos e resolvendo enigmas para progredir na história."
    }
];