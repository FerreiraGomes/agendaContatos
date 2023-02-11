const form = document.getElementById('form-contatos');

let linhas = ''; 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha0();
    atualizaTabela();
}); 

function adicionaLinha0(){
    const inputNomeContato = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}
