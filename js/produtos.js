document.addEventListener('DOMContentLoaded', function() {
    
    // Função para carregar todos os produtos na página
    function loadAllProducts() {
        const productGrid = document.getElementById('all-products-grid');

        // Faz a requisição para o arquivo PHP
        fetch('get_all_products.php')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    let htmlContent = '';
                    // Loop através de cada produto recebido
                    data.forEach(product => {
                        htmlContent += `
                            <div class="product-card">
                                <img src="https://via.placeholder.com/250x250.png?text=${product.name.replace(/ /g, '+')}" alt="${product.name}">
                                <h3>${product.name}</h3>
                                <p class="price">R$ ${parseFloat(product.price).toFixed(2).replace('.', ',')}</p>
                                <a href="#" class="btn-buy">Adicionar ao Carrinho</a>
                            </div>
                        ;
                    });
                    productGrid.innerHTML = htmlContent; // Insere o HTML na página
                } else {
                    productGrid.innerHTML = '<p>Nenhum produto encontrado.</p>';
                }
            })
            .catch(error => {
                console.error('Erro ao carregar os produtos:', error);
                productGrid.innerHTML = '<p>Erro ao carregar os produtos. Tente novamente mais tarde.</p>';
            });
    }

    // Chama a função quando a página for carregada
    loadAllProducts();

    console.log('Página de Produtos carregada com sucesso!');
});
