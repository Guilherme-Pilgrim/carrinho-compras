let Total = 0;
let totalTela = document.getElementById("valor-total");

function adicionar() {
    //pegando o produto selecionado e separando entre nome e valor
    let produtos = document.getElementById('produto').value;
    let nomeProduto = produtos.split('-')[0];
    let valor = parseInt(produtos.split('R$')[1]);
    
    //quantidade de cada produto
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade > 0) {
        //adicionando produto e subtotal ao carrinho
        let carrinho = document.getElementById('lista-produtos')
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
              <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valor * quantidade}</span>
            </section>`;
        
        //calculando o valor total e exibindo na tela
        Total = Total + valor * quantidade;
        totalTela.innerHTML = `R$${Total}`;
        
        document.getElementById('quantidade').value = '';
        return;
    } else {
        alert('Digite uma quantidade válida.');
        document.getElementById('quantidade').value = '';
    }
    
}

function limpar() {
    Total = 0;
    totalTela.innerHTML = `R$${Total}`;

    let quantidade = document.getElementById('quantidade');
    quantidade.value = '';

    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = '';

    return;
}
