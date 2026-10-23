// =========================================
// CONTROLE DO MENU HAMBÚRGUER (MOBILE)
// =========================================
const botaoMenu = document.getElementById("botao-menu");
const menuNavegacao = document.getElementById("menu-navegacao");
const linksMenu = document.querySelectorAll(".nav-link");

// Alterna a exibição do menu ao clicar no botão hambúrguer
botaoMenu.addEventListener("click", () => {
    menuNavegacao.classList.toggle("ativo");
    const icone = botaoMenu.querySelector("i");
    
    // Altera o ícone de barras para "X" (fechar) e vice-versa
    if (menuNavegacao.classList.contains("ativo")) {
        icone.classList.remove("bi-list");
        icone.classList.add("bi-x-lg");
    } else {
        icone.classList.remove("bi-x-lg");
        icone.classList.add("bi-list");
    }
});

// Fecha o menu automaticamente ao clicar em um link de navegação
linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        menuNavegacao.classList.remove("ativo");
        botaoMenu.querySelector("i").classList.remove("bi-x-lg");
        botaoMenu.querySelector("i").classList.add("bi-list");
    });
});

// =========================================
// ALTERNAR TEMA (DARK MODE / LIGHT MODE)
// =========================================
const botaoTema = document.getElementById("botao-tema");
const iconeTema = document.getElementById("icone-tema");
const htmlDocumento = document.documentElement;

botaoTema.addEventListener("click", () => {
    const temaAtual = htmlDocumento.getAttribute("data-tema");
    
    if (temaAtual === "dark") {
        htmlDocumento.setAttribute("data-tema", "light");
        iconeTema.classList.remove("bi-moon-fill");
        iconeTema.classList.add("bi-sun-fill");
    } else {
        htmlDocumento.setAttribute("data-tema", "dark");
        iconeTema.classList.remove("bi-sun-fill");
        iconeTema.classList.add("bi-moon-fill");
    }
});

// =========================================
// EFEITO MÁQUINA DE ESCREVER (TYPING EFFECT)
// =========================================
const elementoTexto = document.getElementById("maquina-escrever");
const palavras = [
    "Estudante de Desenvolvimento Full Stack",
    "Desenvolvedor Front-end em Formação",
    "Entusiasta de Tecnologia e UI/UX"
];
let indicePalavra = 0;
let indiceCaractere = 0;
let estaApagando = false;
let velocidadeDigitacao = 100;

function efeitoMaquinaEscrever() {
    const palavraAtual = palavras[indicePalavra];
    
    if (estaApagando) {
        elementoTexto.textContent = palavraAtual.substring(0, indiceCaractere - 1);
        indiceCaractere--;
        velocidadeDigitacao = 50;
    } else {
        elementoTexto.textContent = palavraAtual.substring(0, indiceCaractere + 1);
        indiceCaractere++;
        velocidadeDigitacao = 100;
    }
    
    // Quando termina de digitar a palavra completa
    if (!estaApagando && indiceCaractere === palavraAtual.length) {
        estaApagando = true;
        velocidadeDigitacao = 2000; // Pausa antes de começar a apagar
    } 
    // Quando termina de apagar a palavra
    else if (estaApagando && indiceCaractere === 0) {
        estaApagando = false;
        indicePalavra = (indicePalavra + 1) % palavras.length;
        velocidadeDigitacao = 500;
    }
    
    setTimeout(efeitoMaquinaEscrever, velocidadeDigitacao);
}

// Inicia o efeito após o carregamento
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(efeitoMaquinaEscrever, 1000);
});

// =========================================
// BOTÃO "VOLTAR AO TOPO" E DINÂMICA DE ROLAGEM
// =========================================
const botaoTopo = document.getElementById("botao-topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        botaoTopo.classList.add("visivel");
    } else {
        botaoTopo.classList.remove("visivel");
    }
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================================
// ANO DINÂMICO NO RODAPÉ
// =========================================
const spanAno = document.getElementById("ano-atual");
spanAno.textContent = new Date().getFullYear();