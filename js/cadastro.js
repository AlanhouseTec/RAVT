const func = document.getElementById('func');
const merc = document.getElementById('merc');
const config = document.getElementById('config');
const funcionarios = document.getElementById('funcionarios');
const novoFunc = document.getElementById('novofunc');
const adicionarFunc = document.getElementById('adicionarfunc');
const addFunc = document.getElementById('addfunc');
const mercadorias = document.getElementById('mercadorias');
const novaMerc = document.getElementById('novamerc');
const adicionarMerc = document.getElementById('adicionarmerc');
const addMerc = document.getElementById('addmerc');
const configuracoes = document.getElementById('configuracoes');
const saveConfig = document.getElementById('saveconfig');
const fecharFunc = document.getElementById('fecharfunc');
const fecharAddFunc = document.getElementById('fecharaddfunc');
const fecharMerc = document.getElementById('fecharmerc');
const fecharAddMerc = document.getElementById('fecharaddmerc');
var tamanho;

func.addEventListener('click', () => {
    if (mercadorias.style.display === 'flex'){
        mercadorias.style.display = 'none';
    }
    if (configuracoes.style.display === 'flex'){
        configuracoes.style.display = 'none';
    }
    if (novoFunc.style.display === 'flex'){ 
        novoFunc.style.display = 'none';    
    }
    funcionarios.style.display = 'flex';
});
adicionarFunc.addEventListener('click', () => {
    if(novoFunc.style.display === 'none'){
        tamanho = funcionarios.offsetHeight;
        novoFunc.style.display = 'flex';
        funcionarios.style.height = novoFunc.offsetHeight + 30 + 'px';
    }
});
addFunc.addEventListener('click', () => {
    novoFunc.style.display = 'none';
    funcionarios.style.height = tamanho + 'px';
});

fecharFunc.addEventListener('click', () =>{
    if(!(novoFunc.style.display  === 'flex')){
        funcionarios.style.display = 'none';
    }
})
fecharAddFunc.addEventListener('click', () =>{
    novoFunc.style.display = 'none';
    funcionarios.style.height = tamanho + 'px';
});

merc.addEventListener('click', () => {
    if (funcionarios.style.display === 'flex') {
        funcionarios.style.display = 'none';
    }
    if (configuracoes.style.display === 'flex'){
        configuracoes.style.display = 'none';
    }
    if (novaMerc.style.display === 'flex'){
        novaMerc.style.display = 'none';
    }
    if (mercadorias.style.display === 'flex') {
        mercadorias.style.display = 'none';
    } else {
        mercadorias.style.display = 'flex';
    }
});
adicionarMerc.addEventListener('click', () => {
    if(novaMerc.style.display === 'none'){
        tamanho = mercadorias.offsetHeight;
        novaMerc.style.display = 'flex';
        mercadorias.style.height = novaMerc.offsetHeight + 30 + 'px';
    }
});
addMerc.addEventListener('click', () => {
    novaMerc.style.display = 'none';
    mercadorias.style.height = tamanho + 'px';
});

fecharMerc.addEventListener('click', () =>{
    if(!(novaMerc.style.display  === 'flex')){
        mercadorias.style.display = 'none';
    }
})

fecharAddMerc.addEventListener('click', () =>{
    novaMerc.style.display = 'none';
    mercadorias.style.height = tamanho + 'px';
});


config.addEventListener('click', () => {
    if (funcionarios.style.display === 'flex') {
        funcionarios.style.display = 'none';
    }
    if (mercadorias.style.display === 'flex') {
        mercadorias.style.display = 'none';
    }
    if (configuracoes.style.display === 'flex') {
        configuracoes.style.display = 'none';
    } else {
        configuracoes.style.display = 'flex';
    }
});
saveConfig.addEventListener('click', () =>{
    configuracoes.style.display = 'none';
});