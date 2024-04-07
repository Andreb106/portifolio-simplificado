/*- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

    Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

    Passo 2 - identificar o clique no botão 

    Passo 3 - adicionar a classe "ativo" nos projetos escondidos 

- <div class="projeto ativo">
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mias deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder vereficar quando o usário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

console.log(projetosInativos);

botaoMostrarProjetos.addEventListener('click', () => {

    mostrarMaisProjetos();

    esconderBotao();

});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
