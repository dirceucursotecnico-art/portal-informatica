// ======================================
// MENU LATERAL
// ======================================

function abrirMenu() {
    const menu = document.getElementById("menuLateral");

    if (menu) {
        menu.classList.add("aberto");
    }
}

function fecharMenu() {
    const menu = document.getElementById("menuLateral");

    if (menu) {
        menu.classList.remove("aberto");
    }
}


// ======================================
// CONFIGURAÇÃO DO LOGIN ADMINISTRATIVO
// ======================================

const EMAIL_ADMIN = "admin@escolambl.com";
const SENHA_ADMIN = "Mbl@2026";
const CHAVE_LOGIN = "usuarioLogado";


// ======================================
// REALIZAR LOGIN
// ======================================

window.entrarAdmin = function(event) {

    event.preventDefault();

    const campoEmail = document.getElementById("email");
    const campoSenha = document.getElementById("senha");

    const email = campoEmail.value.trim().toLowerCase();
    const senha = campoSenha.value;

    if (email === EMAIL_ADMIN && senha === SENHA_ADMIN) {

        sessionStorage.setItem(CHAVE_LOGIN, "true");

        alert("Login realizado com sucesso! Bem-vindo ao painel administrativo.");

        window.location.href = "admin.html";

    } else {

        alert("E-mail ou senha incorretos! Tente novamente.");

        campoSenha.value = "";

    }

};


// ======================================
// PROTEGER A PÁGINA ADMINISTRATIVA
// ======================================

function verificarAcessoAdmin() {

    if (document.body.classList.contains("admin-page")) {

        const usuarioLogado = sessionStorage.getItem(CHAVE_LOGIN);

        if (usuarioLogado !== "true") {

            alert("Acesso negado! É necessário fazer login primeiro.");

            window.location.replace("index.html");

        }

    }

}


// ======================================
// SAIR DO PAINEL ADMINISTRATIVO
// ======================================

window.sairAdmin = function() {

    sessionStorage.removeItem(CHAVE_LOGIN);

    alert("Você saiu do painel administrativo.");

    window.location.replace("index.html");

};


// ======================================
// VERIFICAR ACESSO AO CARREGAR A PÁGINA
// ======================================

verificarAcessoAdmin();