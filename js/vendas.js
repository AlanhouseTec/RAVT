const vendas = document.getElementById('vendas');
const novaVenda = document.getElementById('novavenda');
const fecharVenda = document.getElementById('fecharvenda');
const concluir = document.getElementById('concluir');
const mostrar = document.getElementById('mostrar-vendas');
const mostraVendas = document.getElementById('mostravenda');
const fecharMostrar = document.getElementById('fecharmostra');

novaVenda.addEventListener('click', () =>{
    if(mostrar.style.display === 'flex'){
        mostrar.style.display = 'none';
    }
    if(vendas.style.display === 'none'){
        vendas.style.display = 'flex';
    }
});
fecharVenda.addEventListener('click', () =>{
    if(vendas.style.display === 'flex'){
        vendas.style.display = 'none';
    }
});
concluir.addEventListener('click', () =>{
    if(vendas.style.display === 'flex'){
        vendas.style.display = 'none';
    }
});

mostraVendas.addEventListener('click', () =>{
    if(vendas.style.display === 'flex'){
        vendas.style.display = 'none';
    }
    if(mostrar.style.display === 'none'){
        mostrar.style.display = 'flex';
    }
});
fecharMostrar.addEventListener('click', () =>{
    if(mostrar.style.display === 'flex'){
        mostrar.style.display = 'none';
    }
});