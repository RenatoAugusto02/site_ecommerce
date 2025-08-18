document.addEventListener('DOMContentLoaded', function() {

    // 1. Pega o ID do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Array de produtos falsos (simulando um banco de dados)
    const allProducts = [
        {
            id: 'iPhone-15',
            name: 'iPhone 15',
            price: 6500.00,
            description: 'O mais novo iPhone com câmera de 108MP e processador A17 Bionic.',
            image: 'https://via.placeholder.com/600x600?text=iPhone+Pro+15',
            specs: ['Tela: 6.7" OLED', 'Câmera: 108MP', 'Bateria: 4500mAh']
        },
        {
            id: 'samsung-s23',
            name: 'Samsung Galaxy S23',
            price: 4999.00,
            description: 'Câmera de última geração e tela dinâmica para uma experiência imersiva.',
            image: 'https://via.placeholder.com/600x600?text=Samsung+S23',
            specs: ['Tela: 6.1" AMOLED', 'Câmera: 50MP', 'Bateria: 3900mAh']
        },
        // Adicione mais produtos aqui
    ];

    // 2. Encontra o produto no array usando o ID
    const product = allProducts.find(p => p.id === productId);

    if (product) {
        // 3. Preenche a página com as informações do produto
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-image').alt = product.name;
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-price').innerText = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
        document.getElementById('product-description').innerText = product.description;

        // Preenche as especificações
        const specsList = document.getElementById('product-specs-list');
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerText = spec;
            specsList.appendChild(li);
        });

        // 4. Adiciona a funcionalidade ao botão "Adicionar ao Carrinho"
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        addToCartBtn.addEventListener('click', function() {
            // Aqui, você chamaria a função para adicionar ao carrinho
            // que discutimos anteriormente
            alert(`O produto "${product.name}" foi adicionado ao carrinho!`);
        });

    } else {
        // Se o produto não for encontrado, mostra uma mensagem de erro
        document.querySelector('.product-detail').innerHTML = '<h1>Produto não encontrado.</h1><p>Verifique o ID na URL e tente novamente.</p>';
    }
});
