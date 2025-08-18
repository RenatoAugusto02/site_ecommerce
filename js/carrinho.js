document.addEventListener('DOMContentLoaded', function() {
    // Array de produtos falsos para simular o carrinho
    const cartItems = [
        { name: 'Smartphone Pro', price: 1500.00, quantity: 1, image: 'https://via.placeholder.com/80x80?text=Smartphone+Pro' },
        { name: 'Fone de Ouvido Bluetooth', price: 250.00, quantity: 2, image: 'https://via.placeholder.com/80x80?text=Fone' },
        { name: 'Smartwatch', price: 800.00, quantity: 1, image: 'https://via.placeholder.com/80x80?text=Smartwatch' }
    ];
    
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummaryContainer = document.getElementById('cart-summary');
    let total = 0;

    // Função para carregar os itens na página
    function loadCartItems() {
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
            return;
        }

        let cartHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
        `;

        cartItems.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            total += itemSubtotal;

            cartHTML += `
                <tr>
                    <td>
                        <div class="product-info">
                            <img src="${item.image}" alt="${item.name}" class="cart-product-image">
                            <h4>${item.name}</h4>
                        </div>
                    </td>
                    <td>R$ ${item.price.toFixed(2).replace('.', ',')}</td>
                    <td>
                        <div class="quantity-control">
                            <input type="number" value="${item.quantity}" min="1">
                        </div>
                    </td>
                    <td>R$ ${itemSubtotal.toFixed(2).replace('.', ',')}</td>
                    <td><button class="remove-btn">Remover</button></td>
                </tr>
            `;
        });

        cartHTML += `
                </tbody>
            </table>
        `;
        cartItemsContainer.innerHTML = cartHTML;
    }

    // Função para carregar o resumo da compra
    function loadCartSummary() {
        cartSummaryContainer.innerHTML = `
            <p>Subtotal: R$ ${total.toFixed(2).replace('.', ',')}</p>
            <p class="total">Total: R$ ${total.toFixed(2).replace('.', ',')}</p>
            <button class="checkout-btn">Finalizar Compra</button>
        `;
    }

    loadCartItems();
    loadCartSummary();
});
