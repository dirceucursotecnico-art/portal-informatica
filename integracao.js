// =====================================================
// INTEGRAÇÃO DO PORTAL COM O PAINEL ADMINISTRATIVO
// Páginas: noticias.html, projetos.html e projetos2.html
// =====================================================

const CHAVE_CONTEUDO = "conteudoPortal";
const CHAVE_EXTRAS = "noticiasExtras";
const CHAVE_EXCLUIDAS = "noticiasExcluidas";
const CHAVE_PROJETOS_EXTRAS = "projetosExtras";
const CHAVE_PROJETOS_EXCLUIDOS = "projetosExcluidos";

// =====================================================
// CONTEÚDO ORIGINAL DO SITE
// =====================================================

const CONTEUDO_PADRAO = {

    cabecalhoPortal: {
        titulo: "PORTAL DO TÉCNICO EM INFORMÁTICA",
        descricao: "Escola Estadual Maria Barbosa Leite"
    },

    // NOTICIAS.HTML

    bannerIdentificacao: {
        titulo: "Notícias EEMBL"
    },

    banner: {
        titulo: "“Informação, inovação e tecnologia:",
        descricao: "Fique por dentro de tudo o que acontece na Escola Estadual Maria Barbosa Leite. Aqui você encontrará as principais novidades, eventos, projetos e conquistas dos nossos alunos e professores. Acompanhe as notícias e descubra um pouco mais sobre a nossa escola e o Curso Técnico em Informática.",
        complemento: "o futuro começa aqui!”",
        botao: "Conheça nossas atividades",
        link: "#curso"
    },

    bannerFrase: {
        descricao: "Mais que\nnotícias,\ninformação\nque conecta!"
    },

    principalIdentificacao: {
        titulo: "Sobre Algoritmos"
    },

    principal: {
        titulo: "Maria Barbosa Leite participa dos Jogos Escolares de Minas Gerais 2026",
        descricao: "A Maria Barbosa Leite aparece na programação dos Jogos Escolares de Minas Gerais (JEMG) 2026, representando Ibiracatu. A equipe da escola participou da etapa realizada em Varzelândia, com partida prevista para 16 de abril de 2026, na modalidade de futebol/futsal escolar.",
        imagem: "jemg.jpg"
    },

    destaque1: {
        titulo: "Medalha de ouro",
        descricao: "No xadrez."
    },

    destaque2: {
        titulo: "Disputa",
        descricao: "Módulo II FUTSAL"
    },

    destaque3: {
        titulo: "Abertura e Integração",
        descricao: "JEMG/2026"
    },

    projetosTitulo: {
        titulo: "Escola ganha Playground, Quadra de Areia e Campo Society"
    },

    projeto1: {
        descricao: "Entre as novidades na estrutura da escola estão novos espaços destinados ao esporte, lazer e convivência dos estudantes.",
        imagem: "fts.jpg"
    },

    projeto2: {
        descricao: "A instituição passou a contar com playground, quadra de areia e campo society.",
        imagem: "fut.jpg"
    },

    projeto3: {
        descricao: "Os novos ambientes ampliam as opções de atividades durante as aulas de Educação Física e os momentos de recreação.",
        imagem: "lazer.jpg"
    },

    projeto4: {
        descricao: "A quadra de areia e o campo society possibilitam a prática de diferentes modalidades esportivas, enquanto o playground oferece mais uma opção de lazer e convivência.",
        imagem: "areia.jpg"
    },

    projeto5: {
        descricao: "",
        imagem: "ftparque.jpg"
    },

    projetosTextoFinal: {
        descricao: "Mais espaços, mais diversão e novas oportunidades para os alunos praticarem esporte, brincarem e aproveitarem a escola."
    },

    maisNoticias: {
        botao: "Mais Notícias.",
        link: "https://drive.google.com/drive/folders/1embHWswN610Nq1b63h1tYbke9al7Rgzf?usp=drive_link"
    },

    noticiasTitulo: {
        titulo: "Últimas Notícias"
    },

    noticia1: {
        titulo: "Servidores ganham cadeiras mais confortáveis",
        descricao: "Pensando no bem-estar dos profissionais, a Escola Maria Barbosa Leite passou a contar com cadeiras mais confortáveis para os funcionários. A mudança proporciona mais conforto durante a jornada de trabalho e contribui para melhorar as condições dos ambientes utilizados diariamente pela equipe da escola.",
        imagem: "cadeira.webp"
    },

    noticia2: {
        titulo: "Biblioteca reformada ganha novo espaço para leitura e estudos",
        descricao: "A biblioteca da Escola Maria Barbosa Leite passou por uma reforma, proporcionando um ambiente mais adequado para leitura, estudos e pesquisas. A revitalização tornou o espaço mais agradável e contribui para incentivar os estudantes a utilizarem a biblioteca em sua rotina escolar, fortalecendo o contato com os livros e o hábito da leitura.",
        imagem: "biblioteca.jpg"
    },

    noticia3: {
        titulo: "Curso de qualificação profissional em 2026",
        descricao: "Em edital de 2026 do programa Pronatec – Novos Caminhos, a Escola Estadual Maria Barbosa Leite aparece como local de oferta do curso de Agente de Desenvolvimento Socioambiental, com 40 vagas, no período noturno e carga horária de 160 horas.",
        imagem: "pronatec.png"
    },

    rodape: {
        titulo: "© 2026 Escola Estadual Maria Barbosa Leite - Técnico em Informática. Desenvolvedores: 3º ano EMTI 2026"
    },

    // PROJETOS.HTML - PÁGINA 1

    p1HeroIdentificacao: {
        identificacao: "PROJETOS"
    },

    p1Hero: {
        titulo: "Nosso projetos",
        complemento: "E produção",
        descricao: "Aqui você encontra todos os projetos desenvolvidos pelos alunos do curso técnico em Informática da Escola Estadual Maria Barbosa Leite. São trabalhos que aplicam o que aprendemos em sala de aula, unindo teoria, prática e criatividade",
        botao: "Conheça todos os projetos",
        link: "#curso"
    },

    p1HeroFrase: {
        descricao: "Mais que\nsistemas,\nformamos\nprofissionais!"
    },

    p1Apresentacao: {
        titulo: "Criatividade, trabalho e resultados",
        descricao: "Os projetos desenvolvidos ao longo do curso técnico em Informática representam o aprendizado dos alunos e mostram como os conhecimentos de programação, redes, design, hardware e outras áreas são aplicados na prática",
        complemento: "Projetos do curso"
    },

    p1Info1: {
        titulo: "Projetos Web",
        descricao: "Sites, sistemas e aplicações em HTML, CSS e JavaScript"
    },

    p1Info2: {
        titulo: "Trabalhos em Grupo",
        descricao: "Projetos desenvolvidos em equipe, unindo diferentes habilidades"
    },

    p1Info3: {
        titulo: "Gincanas",
        descricao: "Participação e organização das gincanas escolares, com foco em trabalho em equipe"
    },

    p1Info4: {
        titulo: "Viagens",
        descricao: "Registros das viagens realizadas pela turma durante o curso"
    },

    p1Aprendizado: {
        titulo: "O que você vai encontrar?",
        descricao: "Projetos de sites e sistemas\nAplicativos e interfaces\nTrabalhos com banco de dados\nProjetos de redes e infraestrutura\nGincanas e viagens"
    },

    p1Galeria: {
        titulo: "Galeria de fotos",
        descricao: "Explore abaixo todos os projetos desenvolvidos pelos alunos do curso técnico em Informática.",
        botao: "Ver mais...",
        link: "projetos2.html"
    },

    p1Card1: {
        titulo: "Projeto Manutenção Fim de Ano",
        descricao: "",
        imagem: "fim.jpeg",
        link: "manutencao_fim_de_ano/manutencaofimdeano.html"
    },

    p1Card2: {
        titulo: "Desenvolvimento de Aplicação Java",
        descricao: "",
        imagem: "java.jpeg",
        link: "java/java.html"
    },

    p1Card3: {
        titulo: "Manutenções em Geral",
        descricao: "",
        imagem: "manutencao3.jpeg",
        link: "manutenção/manutencao.html"
    },

    p1Card4: {
        titulo: "Projeto Alunos Ensinam, Escola Aprende",
        descricao: "",
        imagem: "alunos.jpeg",
        link: "escola_aprende/escolaaprende.html"
    },

    p1Card5: {
        titulo: "Viagens EEMBL",
        descricao: "",
        imagem: "viagem.jpeg",
        link: "viagem/viagem.html"
    },

    // PROJETOS2.HTML - PÁGINA 2

    p2HeroIdentificacao: {
        identificacao: "PROJETOS"
    },

    p2Hero: {
        titulo: "Nosso projetos",
        complemento: "E produção",
        descricao: "Aqui você encontra todos os projetos desenvolvidos pelos alunos do curso técnico em Informática da Escola Estadual Maria Barbosa Leite. São trabalhos que aplicam o que aprendemos em sala de aula, unindo teoria, prática e criatividade",
        botao: "Conheça todos os projetos",
        link: "#curso"
    },

    p2HeroFrase: {
        descricao: "Mais que\nsistemas,\nformamos\nprofissionais!"
    },

    p2Apresentacao: {
        titulo: "Momentos que fazem parte da nossa história",
        descricao: "Aqui reunimos registros das experiências, atividades e momentos especiais vividos pelos alunos durante o curso.",
        complemento: "Projetos do curso"
    },

    p2Info1: {
        titulo: "Projetos Web",
        descricao: "Sites, sistemas e aplicações em HTML, CSS e JavaScript"
    },

    p2Info2: {
        titulo: "Trabalhos em Grupo",
        descricao: "Projetos desenvolvidos em equipe, unindo diferentes habilidades"
    },

    p2Info3: {
        titulo: "Gincanas",
        descricao: "Participação e organização das gincanas escolares, com foco em trabalho em equipe"
    },

    p2Info4: {
        titulo: "Viagens",
        descricao: "Registros das viagens realizadas pela turma durante o curso"
    },

    p2Aprendizado: {
        titulo: "O que você vai encontrar?",
        descricao: "Projetos de sites e sistemas\nAplicativos e interfaces\nTrabalhos com banco de dados\nProjetos de redes e infraestrutura\nGincanas e viagens"
    },

    p2Galeria: {
        titulo: "Galeria de fotos",
        descricao: "Explore abaixo todos os projetos desenvolvidos pelos alunos do curso técnico em Informática."
    },

    p2Card1: {
        titulo: "Gincana de Matemática 2024",
        descricao: "",
        imagem: "gincana1a.jpg",
        link: "gincana_de_matematica/gincanasdematematica.html"
    },

    p2Card2: {
        titulo: "Gincana de Matemática 2026",
        descricao: "",
        imagem: "gincana.jpeg",
        link: "gincana_de_matematica/gincanasdematematica.html"
    },

    p2Card3: {
        titulo: "Notícias",
        descricao: "",
        imagem: "noticias.png",
        link: "noticias/noticias.html"
    },

    p2Card4: {
        titulo: "Redes de Computadores",
        descricao: "",
        imagem: "redes.jpeg",
        link: "redes/redes.html"
    },

    p2Card5: {
        titulo: "Algoritmos e Programação",
        descricao: "",
        imagem: "algoritmo.jpeg",
        link: "algoritmo/algoritmo.html"
    }

};


// =====================================================
// SELETORES DOS CAMPOS EDITÁVEIS
// =====================================================

const camposSite = {

    cabecalhoPortal: {
        titulo: ".logo2 h1",
        descricao: ".logo2 p"
    },

    // NOTICIAS.HTML

    bannerIdentificacao: {
        titulo: ".hero-conteudo .mini-titulo"
    },

    banner: {
        titulo: ".hero-conteudo h1",
        descricao: ".hero-conteudo .descricao",
        complemento: ".hero-conteudo h1 span",
        botao: ".hero-conteudo > a.botao-principal",
        link: ".hero-conteudo > a.botao-principal"
    },

    bannerFrase: {
        descricao: ".frase-hero"
    },

    principalIdentificacao: {
        titulo: ".sobre .titulo-secao p"
    },

    principal: {
        titulo: ".sobre-esquerda > h2",
        descricao: ".sobre-esquerda .texto-sobre",
        imagem: ".sobre .imagem-projeto img"
    },

    destaque1: {
        titulo: ".informacoes .info:nth-child(1) h3",
        descricao: ".informacoes .info:nth-child(1) p"
    },

    destaque2: {
        titulo: ".informacoes .info:nth-child(2) h3",
        descricao: ".informacoes .info:nth-child(2) p"
    },

    destaque3: {
        titulo: ".informacoes .info:nth-child(3) h3",
        descricao: ".informacoes .info:nth-child(3) p"
    },

    projetosTitulo: {
        titulo: ".titulo-projetos h2"
    },

    projeto1: {
        descricao: ".cards-projetos > article:nth-of-type(1) p",
        imagem: ".cards-projetos > article:nth-of-type(1) img"
    },

    projeto2: {
        descricao: ".cards-projetos > article:nth-of-type(2) p",
        imagem: ".cards-projetos > article:nth-of-type(2) img"
    },

    projeto3: {
        descricao: ".cards-projetos > article:nth-of-type(3) p",
        imagem: ".cards-projetos > article:nth-of-type(3) img"
    },

    projeto4: {
        descricao: ".cards-projetos > article:nth-of-type(4) p",
        imagem: ".cards-projetos > article:nth-of-type(4) img"
    },

    projeto5: {
        descricao: ".cards-projetos > article:nth-of-type(5) p",
        imagem: ".cards-projetos > article:nth-of-type(5) img"
    },

    projetosTextoFinal: {
        descricao: ".projetos + p"
    },

    maisNoticias: {
        botao: ".projetos + p + a.botao-principal",
        link: ".projetos + p + a.botao-principal"
    },

    noticiasTitulo: {
        titulo: ".lista-noticias-topo h2"
    },

    noticia1: {
        titulo: '.lista-noticias .noticia[data-noticia="1"] h3',
        descricao: '.lista-noticias .noticia[data-noticia="1"] p',
        imagem: '.lista-noticias .noticia[data-noticia="1"] img'
    },

    noticia2: {
        titulo: '.lista-noticias .noticia[data-noticia="2"] h3',
        descricao: '.lista-noticias .noticia[data-noticia="2"] p',
        imagem: '.lista-noticias .noticia[data-noticia="2"] img'
    },

    noticia3: {
        titulo: '.lista-noticias .noticia[data-noticia="3"] h3',
        descricao: '.lista-noticias .noticia[data-noticia="3"] p',
        imagem: '.lista-noticias .noticia[data-noticia="3"] img'
    },

    rodape: {
        titulo: ".rodape-final p"
    }

};


// =====================================================
// CRIAR CAMPOS DAS PÁGINAS DE PROJETOS
// =====================================================

function criarCamposProjetos(prefixo) {

    const campos = {};

    campos[prefixo + "HeroIdentificacao"] = {
        identificacao: ".hero-conteudo .mini-titulo"
    };

    campos[prefixo + "Hero"] = {
        titulo: ".hero-conteudo h1",
        descricao: ".hero-conteudo .descricao",
        complemento: ".hero-conteudo h1 span",
        botao: ".hero-conteudo > a.botao-principal",
        link: ".hero-conteudo > a.botao-principal"
    };

    campos[prefixo + "HeroFrase"] = {
        descricao: ".frase-hero"
    };

    campos[prefixo + "Apresentacao"] = {
        titulo: ".sobre-esquerda > h2",
        descricao: ".sobre-esquerda .texto-sobre",
        complemento: ".titulo-secao p"
    };

    for (let i = 1; i <= 4; i++) {

        campos[prefixo + "Info" + i] = {
            titulo: `.informacoes .info:nth-child(${i}) h3`,
            descricao: `.informacoes .info:nth-child(${i}) p`
        };

    }

    campos[prefixo + "Aprendizado"] = {
        titulo: ".titulo-aprendizado h2",
        descricao: ".aprendizado ul"
    };

    campos[prefixo + "Galeria"] = {
        titulo: ".titulo-projetos h2",
        descricao: ".topo-projetos p"
    };

    if (prefixo === "p1") {
        campos[prefixo + "Galeria"].botao = ".cards-projetos > a.botao-principal";
        campos[prefixo + "Galeria"].link = ".cards-projetos > a.botao-principal";
    }

    for (let i = 1; i <= 5; i++) {

        campos[prefixo + "Card" + i] = {
            titulo: `.cards-projetos > a:nth-of-type(${i}) .card-projeto h3`,
            descricao: `.cards-projetos > a:nth-of-type(${i}) .card-projeto p`,
            imagem: `.cards-projetos > a:nth-of-type(${i}) .card-projeto img`,
            link: `.cards-projetos > a:nth-of-type(${i})`
        };

    }

    return campos;

}


// REGISTRAR AS DUAS PÁGINAS

Object.assign(
    camposSite,
    criarCamposProjetos("p1"),
    criarCamposProjetos("p2")
);


// =====================================================
// FUNÇÕES DE ARMAZENAMENTO
// =====================================================

function copiarObjeto(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

function lerDados(chave, padrao) {

    try {

        const dados = localStorage.getItem(chave);

        if (dados === null) {
            return copiarObjeto(padrao);
        }

        const convertido = JSON.parse(dados);

        return convertido ?? copiarObjeto(padrao);

    } catch (erro) {

        console.error("Erro ao ler dados:", erro);
        return copiarObjeto(padrao);

    }

}

function obterConteudo() {

    const dadosSalvos = lerDados(CHAVE_CONTEUDO, {});
    const dadosCompletos = copiarObjeto(CONTEUDO_PADRAO);

    Object.keys(dadosSalvos).forEach(function(area) {

        if (dadosSalvos[area] && typeof dadosSalvos[area] === "object") {

            dadosCompletos[area] = {
                ...(dadosCompletos[area] || {}),
                ...dadosSalvos[area]
            };

        }

    });

    return dadosCompletos;

}

function obterLista(chave) {

    const dados = lerDados(chave, []);

    return Array.isArray(dados) ? dados : [];

}

function obterExtras() {
    return obterLista(CHAVE_EXTRAS);
}

function obterExcluidas() {
    return obterLista(CHAVE_EXCLUIDAS);
}

function obterProjetosExtras() {
    return obterLista(CHAVE_PROJETOS_EXTRAS);
}

function obterProjetosExcluidos() {
    return obterLista(CHAVE_PROJETOS_EXCLUIDOS);
}

function salvarNoArmazenamento(chave, dados) {

    try {

        localStorage.setItem(chave, JSON.stringify(dados));
        return true;

    } catch (erro) {

        console.error("Erro ao salvar:", erro);
        return false;

    }

}


// =====================================================
// PAINEL ADMINISTRATIVO
// =====================================================

function inicializarPainel() {

    const seletor = document.getElementById("areaEdicao");

    if (!seletor) return;

    const campos = {
        titulo: document.getElementById("titulo"),
        descricao: document.getElementById("descricao"),
        complemento: document.getElementById("complemento"),
        imagem: document.getElementById("imagem"),
        link: document.getElementById("link"),
        botao: document.getElementById("botao"),
        identificacao: document.getElementById("identificacao")
    };

    const mensagem = document.getElementById("mensagem");

    function carregarConteudo() {

        const dados = obterConteudo();
        const area = seletor.value;
        const item = dados[area] || {};
        const configuracao = camposSite[area] || {};

        Object.keys(campos).forEach(function(campo) {

            const elemento = campos[campo];

            if (!elemento) return;

            const disponivel = Object.prototype.hasOwnProperty.call(configuracao, campo);

            elemento.disabled = !disponivel;
            elemento.value = disponivel ? (item[campo] ?? "") : "";

            elemento.closest(".campo")?.classList.toggle(
                "campo-desativado",
                !disponivel
            );

        });

        if (mensagem) {
            mensagem.textContent = "";
        }

    }

    const primeiraOpcao = Array.from(seletor.options).find(function(opcao) {
        return opcao.value && camposSite[opcao.value];
    });

    if (!camposSite[seletor.value] && primeiraOpcao) {
        seletor.value = primeiraOpcao.value;
    }

    seletor.addEventListener("change", carregarConteudo);

    window.salvarConteudo = function() {

        const area = seletor.value;
        const configuracao = camposSite[area];

        if (!configuracao) return;

        const dados = obterConteudo();
        const item = { ...(dados[area] || {}) };

        Object.keys(configuracao).forEach(function(campo) {

            if (campos[campo]) {
                item[campo] = campos[campo].value.trim();
            }

        });

        dados[area] = item;

        if (salvarNoArmazenamento(CHAVE_CONTEUDO, dados)) {

            if (mensagem) {
                mensagem.textContent = "Alterações salvas com sucesso! Atualize a página do portal para visualizar.";
                mensagem.style.color = "#167a43";
                mensagem.style.display = "block";
                mensagem.style.fontWeight = "bold";
            }

        } else if (mensagem) {

            mensagem.textContent = "Erro ao salvar as alterações.";
            mensagem.style.color = "#b83232";
            mensagem.style.display = "block";

        }

    };

    carregarConteudo();

}


// =====================================================
// APLICAR TEXTOS, IMAGENS, BOTÕES E LINKS
// =====================================================

function definirTextoBotao(elemento, valor) {

    if (!elemento) return;

    const icone = elemento.querySelector("i");

    elemento.textContent = valor + " ";

    if (icone) {
        elemento.appendChild(icone);
    }

}

function definirTituloComSpan(elemento, valor) {

    if (!elemento) return;

    const span = elemento.querySelector("span");

    if (!span) {
        elemento.textContent = valor;
        return;
    }

    const texto = Array.from(elemento.childNodes).find(
        no => no.nodeType === Node.TEXT_NODE
    );

    if (texto) {
        texto.nodeValue = valor + " ";
    } else {
        elemento.insertBefore(
            document.createTextNode(valor + " "),
            span
        );
    }

}

function aplicarValor(area, campo, valor, item, prefixo = "") {

    const configuracao = camposSite[area];

    if (!configuracao || valor === undefined || valor === null) return;

    const seletor = configuracao[campo];

    if (!seletor) return;

    let elemento = document.querySelector(seletor);

    // Criar parágrafo dos cards quando não existir no HTML.
    if (
        !elemento &&
        campo === "descricao" &&
        /^(p[12]Card|projeto)\d+$/.test(area)
    ) {

        const numero = area.match(/Card(\d+)$|projeto(\d+)$/);

        if (numero) {

            const n = numero[1] || numero[2];

            const artigo = prefixo
                ? document.querySelector(
                    `.cards-projetos > a:nth-of-type(${n}) .card-projeto`
                )
                : document.querySelector(
                    `.cards-projetos > article:nth-of-type(${n})`
                );

            if (artigo) {

                elemento = artigo.querySelector("p");

                if (!elemento) {
                    elemento = document.createElement("p");
                    artigo.appendChild(elemento);
                }

            }

        }

    }

    if (!elemento) return;

    if (campo === "imagem") {

        elemento.src = valor;
        elemento.alt = item.titulo || "Imagem do portal";
        return;

    }

    if (campo === "link") {

        elemento.href = valor;
        return;

    }

    if (campo === "botao") {

        definirTextoBotao(elemento, valor);
        return;

    }

    if (
        (area === "banner" || area === "p1Hero" || area === "p2Hero") &&
        campo === "titulo"
    ) {

        definirTituloComSpan(elemento, valor);
        return;

    }

    if (
        (area === "bannerFrase" || area === "p1HeroFrase" || area === "p2HeroFrase") &&
        campo === "descricao"
    ) {

        const linhas = valor.split("\n");
        const spans = elemento.querySelectorAll("span");

        spans.forEach(function(span, indice) {
            span.textContent = linhas[indice] || "";
        });

        return;

    }

    if (
        (area === "p1Aprendizado" || area === "p2Aprendizado") &&
        campo === "descricao"
    ) {

        const linhas = valor.split("\n");
        const itens = elemento.querySelectorAll("li");

        itens.forEach(function(li, indice) {

            const icone = li.querySelector("i");

            li.textContent = "";

            if (icone) {
                li.appendChild(icone);
            }

            li.appendChild(
                document.createTextNode(" " + (linhas[indice] || ""))
            );

        });

        return;

    }

    elemento.textContent = valor;

}


// =====================================================
// APLICAR ALTERAÇÕES EM NOTICIAS.HTML
// =====================================================

function aplicarPaginaNoticias() {

    const dados = obterConteudo();

    const areasNoticias = [
        "cabecalhoPortal",
        "bannerIdentificacao",
        "banner",
        "bannerFrase",
        "principalIdentificacao",
        "principal",
        "destaque1",
        "destaque2",
        "destaque3",
        "projetosTitulo",
        "projeto1",
        "projeto2",
        "projeto3",
        "projeto4",
        "projeto5",
        "projetosTextoFinal",
        "maisNoticias",
        "rodape"
    ];

    areasNoticias.forEach(function(area) {

        const item = dados[area] || {};
        const configuracao = camposSite[area] || {};

        Object.keys(configuracao).forEach(function(campo) {
            aplicarValor(area, campo, item[campo], item);
        });

    });

    criarListaNoticias(dados);

}


// =====================================================
// APLICAR ALTERAÇÕES EM PROJETOS.HTML E PROJETOS2.HTML
// =====================================================

function aplicarProjetosPagina() {

    const nomeArquivo = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    let prefixo = "";

    if (nomeArquivo === "projetos.html" || nomeArquivo === "projetos1.html") {
        prefixo = "p1";
    } else if (nomeArquivo === "projetos2.html") {
        prefixo = "p2";
    } else {
        return;
    }

    const dados = obterConteudo();

    const cabecalho = camposSite.cabecalhoPortal || {};

    Object.keys(cabecalho).forEach(function(campo) {
        aplicarValor(
            "cabecalhoPortal",
            campo,
            dados.cabecalhoPortal?.[campo],
            dados.cabecalhoPortal || {}
        );
    });

    Object.keys(camposSite).forEach(function(area) {

        if (!area.startsWith(prefixo)) return;

        const item = dados[area] || {};
        const configuracao = camposSite[area] || {};

        Object.keys(configuracao).forEach(function(campo) {
            aplicarValor(area, campo, item[campo], item, prefixo);
        });

    });

    aplicarProjetosExtras(prefixo);
    aplicarProjetosExcluidos(prefixo);

    const rodape = dados.rodape?.titulo;
    const textoRodape = document.querySelector(".rodape-final p");

    if (textoRodape && rodape) {
        textoRodape.textContent = rodape;
    }

}


// =====================================================
// CRIAR A SEÇÃO DE ÚLTIMAS NOTÍCIAS EM NOTICIAS.HTML
// =====================================================

function criarListaNoticias(dados) {

    const nomeArquivo = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    if (nomeArquivo !== "noticias.html") return;

    let secao = document.querySelector(".secao-ultimas-noticias");

    if (!secao) {

        secao = document.createElement("section");
        secao.className = "projetos secao-ultimas-noticias";

        secao.innerHTML = `
            <div class="topo-projetos">
                <div class="titulo-projetos lista-noticias-topo">
                    <i class="fa-solid fa-newspaper"></i>
                    <h2></h2>
                </div>
            </div>
            <div class="cards-projetos lista-noticias"></div>
        `;

        const rodape = document.querySelector("footer.rodape");

        if (rodape && rodape.parentNode) {
            rodape.parentNode.insertBefore(secao, rodape);
        } else {
            document.body.appendChild(secao);
        }

    }

    const titulo = secao.querySelector(".lista-noticias-topo h2");

    if (titulo) {
        titulo.textContent = dados.noticiasTitulo?.titulo || "Últimas Notícias";
    }

    const lista = secao.querySelector(".lista-noticias");

    if (!lista) return;

    lista.innerHTML = "";

    const excluidas = obterExcluidas();

    // NOTÍCIAS ORIGINAIS
    for (let i = 1; i <= 3; i++) {

        const id = "noticia" + i;

        if (excluidas.includes(id)) continue;

        const noticia = dados[id] || {};

        const artigo = document.createElement("article");
        artigo.className = "card-projeto noticia";
        artigo.dataset.noticia = String(i);

        const moldura = document.createElement("div");
        moldura.className = "imagem-projeto";

        const img = document.createElement("img");
        img.src = noticia.imagem || "";
        img.alt = noticia.titulo || "Imagem da notícia";

        moldura.appendChild(img);

        const h3 = document.createElement("h3");
        h3.textContent = noticia.titulo || "";

        const p = document.createElement("p");
        p.textContent = noticia.descricao || "";

        artigo.append(moldura, h3, p);
        lista.appendChild(artigo);

    }

    // NOTÍCIAS ADICIONADAS PELO PAINEL
    obterExtras().forEach(function(noticia) {

        const artigo = document.createElement("article");
        artigo.className = "card-projeto noticia";
        artigo.dataset.noticiaExtra = noticia.id;

        const moldura = document.createElement("div");
        moldura.className = "imagem-projeto";

        const img = document.createElement("img");
        img.src = noticia.imagem || "";
        img.alt = noticia.titulo || "Imagem da notícia";

        moldura.appendChild(img);

        const h3 = document.createElement("h3");
        h3.textContent = noticia.titulo || "";

        const p = document.createElement("p");
        p.textContent = noticia.descricao || "";

        artigo.append(moldura, h3, p);
        lista.appendChild(artigo);

    });

}


// =====================================================
// ADICIONAR NOTÍCIA
// =====================================================

window.adicionarNoticia = function() {

    const titulo = document.getElementById("novaNoticiaTitulo");
    const descricao = document.getElementById("novaNoticiaDescricao");
    const imagem = document.getElementById("novaNoticiaImagem");
    const mensagem = document.getElementById("mensagemNovaNoticia");

    if (!titulo || !descricao || !imagem || !mensagem) return;

    const nome = titulo.value.trim();
    const texto = descricao.value.trim();
    const foto = imagem.value.trim();

    if (!nome || !texto || !foto) {

        mensagem.textContent = "Preencha todos os campos da notícia.";
        mensagem.style.color = "#b83232";
        return;

    }

    const extras = obterExtras();

    extras.push({
        id: "extra_" + Date.now(),
        titulo: nome,
        descricao: texto,
        imagem: foto
    });

    if (salvarNoArmazenamento(CHAVE_EXTRAS, extras)) {

        titulo.value = "";
        descricao.value = "";
        imagem.value = "";

        mensagem.textContent = "✓ Notícia adicionada com sucesso!";
        mensagem.style.color = "#167a43";

        atualizarGerenciamento();

    } else {

        mensagem.textContent = "Erro ao adicionar notícia.";
        mensagem.style.color = "#b83232";

    }

};


// =====================================================
// GERENCIAR NOTÍCIAS
// =====================================================

function atualizarGerenciamento() {

    const area = document.getElementById("gerenciarNoticias");

    if (!area) return;

    area.innerHTML = "";

    const dados = obterConteudo();
    const extras = obterExtras();
    const excluidas = obterExcluidas();

    const todas = [];

    for (let i = 1; i <= 3; i++) {

        const id = "noticia" + i;

        if (!excluidas.includes(id)) {
            todas.push({
                id,
                ...(dados[id] || {}),
                original: true
            });
        }

    }

    extras.forEach(function(noticia) {
        todas.push({
            ...noticia,
            original: false
        });
    });

    if (!todas.length) {
        area.textContent = "Nenhuma notícia cadastrada.";
        return;
    }

    todas.forEach(function(noticia) {

        const card = document.createElement("div");
        card.className = "admin-noticia";

        const h3 = document.createElement("h3");
        h3.textContent = noticia.titulo || "Notícia sem título";

        const labelTitulo = document.createElement("label");
        labelTitulo.textContent = "Título:";

        const inputTitulo = document.createElement("input");
        inputTitulo.value = noticia.titulo || "";

        const labelDescricao = document.createElement("label");
        labelDescricao.textContent = "Descrição:";

        const textareaDescricao = document.createElement("textarea");
        textareaDescricao.value = noticia.descricao || "";

        const labelImagem = document.createElement("label");
        labelImagem.textContent = "Imagem:";

        const inputImagem = document.createElement("input");
        inputImagem.value = noticia.imagem || "";

        const salvar = document.createElement("button");
        salvar.type = "button";
        salvar.textContent = "Salvar notícia";

        const excluir = document.createElement("button");
        excluir.type = "button";
        excluir.textContent = "Excluir notícia";
        excluir.className = "btn-excluir-noticia";

        card.append(
            h3,
            labelTitulo,
            inputTitulo,
            labelDescricao,
            textareaDescricao,
            labelImagem,
            inputImagem,
            salvar,
            excluir
        );

        area.appendChild(card);

        // SALVAR NOTÍCIA
        salvar.addEventListener("click", function() {

            const novoTitulo = inputTitulo.value.trim();
            const novaDescricao = textareaDescricao.value.trim();
            const novaImagem = inputImagem.value.trim();

            if (!novoTitulo || !novaDescricao || !novaImagem) {
                alert("Preencha o título, a descrição e a imagem da notícia.");
                return;
            }

            if (noticia.original) {

                const atuais = obterConteudo();

                atuais[noticia.id] = {
                    titulo: novoTitulo,
                    descricao: novaDescricao,
                    imagem: novaImagem
                };

                if (!salvarNoArmazenamento(CHAVE_CONTEUDO, atuais)) {
                    alert("Erro ao salvar notícia.");
                    return;
                }

            } else {

                const atuais = obterExtras();

                const indice = atuais.findIndex(function(item) {
                    return item.id === noticia.id;
                });

                if (indice === -1) return;

                atuais[indice] = {
                    ...atuais[indice],
                    titulo: novoTitulo,
                    descricao: novaDescricao,
                    imagem: novaImagem
                };

                if (!salvarNoArmazenamento(CHAVE_EXTRAS, atuais)) {
                    alert("Erro ao salvar notícia.");
                    return;
                }

            }

            alert("Notícia atualizada com sucesso!");
            atualizarGerenciamento();

        });

        // EXCLUIR NOTÍCIA
        excluir.addEventListener("click", function() {

            if (!confirm("Deseja realmente excluir esta notícia?")) return;

            if (noticia.original) {

                const atuais = obterExcluidas();

                if (!atuais.includes(noticia.id)) {
                    atuais.push(noticia.id);
                }

                salvarNoArmazenamento(CHAVE_EXCLUIDAS, atuais);

            } else {

                const atuais = obterExtras().filter(function(item) {
                    return item.id !== noticia.id;
                });

                salvarNoArmazenamento(CHAVE_EXTRAS, atuais);

            }

            alert("Notícia excluída com sucesso!");
            atualizarGerenciamento();

        });

    });

}


// =====================================================
// ADICIONAR PROJETO
// =====================================================

window.adicionarProjeto = function() {

    const pagina = document.getElementById("paginaNovoProjeto");
    const titulo = document.getElementById("novoProjetoTitulo");
    const descricao = document.getElementById("novoProjetoDescricao");
    const imagem = document.getElementById("novoProjetoImagem");
    const link = document.getElementById("novoProjetoLink");
    const mensagem = document.getElementById("mensagemNovoProjeto");

    if (!pagina || !titulo || !descricao || !imagem || !link || !mensagem) return;

    const nome = titulo.value.trim();
    const texto = descricao.value.trim();
    const foto = imagem.value.trim();
    const destino = link.value.trim();

    if (!nome || !foto || !destino) {

        mensagem.textContent = "Preencha o título, a imagem e o link do projeto.";
        mensagem.style.color = "#b83232";
        return;

    }

    const extras = obterProjetosExtras();

    extras.push({
        id: "projeto_extra_" + Date.now(),
        pagina: pagina.value === "projetos1" ? "p1" : "p2",
        titulo: nome,
        descricao: texto,
        imagem: foto,
        link: destino
    });

    if (salvarNoArmazenamento(CHAVE_PROJETOS_EXTRAS, extras)) {

        titulo.value = "";
        descricao.value = "";
        imagem.value = "";
        link.value = "";

        mensagem.textContent = "✓ Projeto adicionado com sucesso!";
        mensagem.style.color = "#167a43";

        atualizarGerenciamentoProjetos();

    } else {

        mensagem.textContent = "Erro ao adicionar projeto.";
        mensagem.style.color = "#b83232";

    }

};


// =====================================================
// GERENCIAR PROJETOS
// =====================================================

function atualizarGerenciamentoProjetos() {

    const area = document.getElementById("gerenciarProjetos");

    if (!area) return;

    area.innerHTML = "";

    const dados = obterConteudo();
    const extras = obterProjetosExtras();
    const excluidos = obterProjetosExcluidos();

    const todos = [];

    for (let pagina = 1; pagina <= 2; pagina++) {

        const prefixo = "p" + pagina;

        for (let i = 1; i <= 5; i++) {

            const id = prefixo + "Card" + i;

            if (excluidos.includes(id)) continue;

            todos.push({
                id: id,
                pagina: prefixo,
                titulo: dados[id]?.titulo || "",
                descricao: dados[id]?.descricao || "",
                imagem: dados[id]?.imagem || "",
                link: dados[id]?.link || "",
                original: true
            });

        }

    }

    extras.forEach(function(projeto) {
        todos.push({
            ...projeto,
            original: false
        });
    });

    if (!todos.length) {
        area.textContent = "Nenhum projeto cadastrado.";
        return;
    }

    todos.forEach(function(projeto) {

        const card = document.createElement("div");
        card.className = "admin-noticia";

        const h3 = document.createElement("h3");
        h3.textContent = projeto.titulo || "Projeto sem título";

        const identificacao = document.createElement("p");
        identificacao.textContent = projeto.pagina === "p1"
            ? "Página 1 - Projetos"
            : "Página 2 - Mais Projetos";

        const labelTitulo = document.createElement("label");
        labelTitulo.textContent = "Título:";

        const inputTitulo = document.createElement("input");
        inputTitulo.value = projeto.titulo || "";

        const labelDescricao = document.createElement("label");
        labelDescricao.textContent = "Descrição:";

        const textareaDescricao = document.createElement("textarea");
        textareaDescricao.value = projeto.descricao || "";

        const labelImagem = document.createElement("label");
        labelImagem.textContent = "Imagem:";

        const inputImagem = document.createElement("input");
        inputImagem.value = projeto.imagem || "";

        const labelLink = document.createElement("label");
        labelLink.textContent = "Link:";

        const inputLink = document.createElement("input");
        inputLink.value = projeto.link || "";

        const salvar = document.createElement("button");
        salvar.type = "button";
        salvar.textContent = "Salvar projeto";

        const excluir = document.createElement("button");
        excluir.type = "button";
        excluir.textContent = "Excluir projeto";
        excluir.className = "btn-excluir-noticia";

        card.append(
            h3,
            identificacao,
            labelTitulo,
            inputTitulo,
            labelDescricao,
            textareaDescricao,
            labelImagem,
            inputImagem,
            labelLink,
            inputLink,
            salvar,
            excluir
        );

        area.appendChild(card);

        // SALVAR PROJETO
        salvar.addEventListener("click", function() {

            const novoTitulo = inputTitulo.value.trim();
            const novaDescricao = textareaDescricao.value.trim();
            const novaImagem = inputImagem.value.trim();
            const novoLink = inputLink.value.trim();

            if (!novoTitulo || !novaImagem || !novoLink) {
                alert("Preencha o título, a imagem e o link do projeto.");
                return;
            }

            if (projeto.original) {

                const atuais = obterConteudo();

                atuais[projeto.id] = {
                    ...(atuais[projeto.id] || {}),
                    titulo: novoTitulo,
                    descricao: novaDescricao,
                    imagem: novaImagem,
                    link: novoLink
                };

                if (!salvarNoArmazenamento(CHAVE_CONTEUDO, atuais)) {
                    alert("Erro ao salvar o projeto.");
                    return;
                }

            } else {

                const atuais = obterProjetosExtras();

                const indice = atuais.findIndex(function(item) {
                    return item.id === projeto.id;
                });

                if (indice === -1) return;

                atuais[indice] = {
                    ...atuais[indice],
                    titulo: novoTitulo,
                    descricao: novaDescricao,
                    imagem: novaImagem,
                    link: novoLink
                };

                if (!salvarNoArmazenamento(CHAVE_PROJETOS_EXTRAS, atuais)) {
                    alert("Erro ao salvar o projeto.");
                    return;
                }

            }

            alert("Projeto atualizado com sucesso!");
            atualizarGerenciamentoProjetos();

        });

        // EXCLUIR PROJETO
        excluir.addEventListener("click", function() {

            if (!confirm("Deseja realmente excluir este projeto?")) return;

            if (projeto.original) {

                const atuais = obterProjetosExcluidos();

                if (!atuais.includes(projeto.id)) {
                    atuais.push(projeto.id);
                }

                if (!salvarNoArmazenamento(CHAVE_PROJETOS_EXCLUIDOS, atuais)) {
                    alert("Erro ao excluir o projeto.");
                    return;
                }

            } else {

                const atuais = obterProjetosExtras().filter(function(item) {
                    return item.id !== projeto.id;
                });

                if (!salvarNoArmazenamento(CHAVE_PROJETOS_EXTRAS, atuais)) {
                    alert("Erro ao excluir o projeto.");
                    return;
                }

            }

            alert("Projeto excluído com sucesso!");
            atualizarGerenciamentoProjetos();

        });

    });

}


// =====================================================
// APLICAR PROJETOS ADICIONADOS
// =====================================================

function aplicarProjetosExtras(prefixo) {

    const nomeAtual = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const paginaCorreta = prefixo === "p1"
        ? ["projetos.html", "projetos1.html"].includes(nomeAtual)
        : nomeAtual === "projetos2.html";

    if (!paginaCorreta) return;

    const lista = document.querySelector(".cards-projetos");

    if (!lista) return;

    lista.querySelectorAll("[data-projeto-extra]").forEach(function(elemento) {
        elemento.remove();
    });

    obterProjetosExtras()
        .filter(function(projeto) {
            return projeto.pagina === prefixo;
        })
        .forEach(function(projeto) {

            const link = document.createElement("a");
            link.href = projeto.link || "#";
            link.dataset.projetoExtra = projeto.id;

            const artigo = document.createElement("article");
            artigo.className = "card-projeto";

            const moldura = document.createElement("div");
            moldura.className = "imagem-projeto";

            const imagem = document.createElement("img");
            imagem.src = projeto.imagem || "";
            imagem.alt = projeto.titulo || "Imagem do projeto";

            moldura.appendChild(imagem);

            const titulo = document.createElement("h3");
            titulo.textContent = projeto.titulo || "";

            const descricao = document.createElement("p");
            descricao.textContent = projeto.descricao || "";

            artigo.append(moldura, titulo, descricao);
            link.appendChild(artigo);

            lista.appendChild(link);

        });

}


// =====================================================
// APLICAR PROJETOS EXCLUÍDOS
// =====================================================

function aplicarProjetosExcluidos(prefixo) {

    const excluidos = obterProjetosExcluidos();

    excluidos.forEach(function(id) {

        const extra = document.querySelector(
            `[data-projeto-extra="${id}"]`
        );

        if (extra) {
            extra.remove();
        }

    });

    for (let i = 5; i >= 1; i--) {

        const id = prefixo + "Card" + i;

        if (!excluidos.includes(id)) continue;

        const card = document.querySelector(
            `.cards-projetos > a:nth-of-type(${i})`
        );

        if (card) {
            card.remove();
        }

    }

}


// =====================================================
// RESTAURAR INFORMAÇÕES ORIGINAIS
// =====================================================

window.restaurarOriginais = function() {

    const confirmar = confirm(
        "Deseja restaurar todas as informações originais do portal?\n\n" +
        "As alterações feitas nas notícias e nas páginas de projetos serão desfeitas.\n" +
        "Notícias e projetos adicionados serão removidos."
    );

    if (!confirmar) return;

    try {

        localStorage.removeItem(CHAVE_CONTEUDO);
        localStorage.removeItem(CHAVE_EXTRAS);
        localStorage.removeItem(CHAVE_EXCLUIDAS);
        localStorage.removeItem(CHAVE_PROJETOS_EXTRAS);
        localStorage.removeItem(CHAVE_PROJETOS_EXCLUIDOS);

        alert("As informações originais foram restauradas.");

        window.location.reload();

    } catch (erro) {

        console.error("Erro ao restaurar informações:", erro);

        alert("Ocorreu um erro ao restaurar as informações.");

    }

};


// =====================================================
// INICIALIZAÇÃO
// =====================================================

document.addEventListener("DOMContentLoaded", function() {

    inicializarPainel();

    atualizarGerenciamento();
    atualizarGerenciamentoProjetos();

    const nomeArquivo = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    if (nomeArquivo === "noticias.html") {
        aplicarPaginaNoticias();
    }

    if (
        nomeArquivo === "projetos.html" ||
        nomeArquivo === "projetos1.html" ||
        nomeArquivo === "projetos2.html"
    ) {
        aplicarProjetosPagina();
    }

});