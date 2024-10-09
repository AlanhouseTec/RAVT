// Obtendo os elementos necessários
const mostraAjusteBtn = document.getElementById('mostraAjusteBtn'); // Botão para mostrar o ajuste
const exibeAjuste = document.getElementById('ver-Ajuste'); // Div do ajuste que será exibida
const container = document.getElementById('container'); // Div principal que será escondida
const voltarBtn1 = document.getElementById('voltarBtn1'); // Botão para voltar ao container
const voltarBtn2 = document.getElementById('voltarBtn2'); // Botão para voltar ao container
const novoBtn = document.getElementById('novoBtn');// Botão ir para novo ajuste
const novoAjuste = document.getElementById('novo-Ajuste');// Div novo ajuste
const btAdciona = document.getElementById('btn-Adicionar');
// Quando o botão "Exemplo" for clicado

// Quando o botão "Voltar" for clicado
mostraAjusteBtn.addEventListener('click', () => {
    container.style.display = 'none'; // Mostra o container principal de volta
    exibeAjuste.style.display = 'block'; // Mostra a div de ajuste
});
voltarBtn1.addEventListener('click', () => {
    container.style.display = 'block'; // Mostra o container principal de volta
    novoAjuste.style.display = 'none'; // Mostra a div de ajuste
});
voltarBtn2.addEventListener('click', () => {
    container.style.display = 'block'; // Mostra o container principal de volta
    novoAjuste.style.display = 'none'; // Mostra a div de ajuste
});
novoBtn.addEventListener('click', () => {
    container.style.display = 'none'; // Esconde o container principal
    novoAjuste.style.display = 'block'; // Mostra a div de ajuste

});
btAdciona.addEventListener('click', () => {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td><input type="text" placeholder=""></td>
        <td><input type="text" placeholder=""></td>
        <td><input type="text" placeholder=""></td>
        <td><input type="number" value=""></td>
        <td><input type="text" placeholder=""></td>
        <td><input type="text" placeholder=""></td>
        <td><button class="btn">Excluir</button></td>
    `;
    
    // Seleciona a tabela na div "ajuste-items" e adiciona a nova linha
    const ajusteItemsTableBody = document.querySelector('#novo-Ajuste .ajuste-items tbody');
    ajusteItemsTableBody.appendChild(novaLinha);
    
    // Adiciona a funcionalidade ao botão "Excluir" da nova linha
    const btnExcluir = novaLinha.querySelector('.btn');
    btnExcluir.addEventListener('click', () => {
        novaLinha.remove(); // Remove a linha da tabela
    });
});

