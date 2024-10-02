document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    const botoes = document.querySelectorAll('.btn-proximo');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const proximoPasso = botao.getAttribute('data-proximo');
            passos.forEach(passo => {
                passo.classList.remove('ativo'); // Remove a classe ativo de todos os passos
            });
            document.getElementById(`passo-${proximoPasso}`).classList.add('ativo'); // Adiciona a classe ativo no próximo passo
        });
    });
});
