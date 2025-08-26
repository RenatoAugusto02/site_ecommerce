document.addEventListener('DOMContentLoaded', function() {
    // Array de produtos falsos para simular o carrinho
    const cartItems = [
        { name: 'Smartphone Pro', price: 1500.00, quantity: 1, image: 'https://placehold.co/100x100/A8A29E/FFFFFF?text=PRODUTO' },
        { name: 'Fone de Ouvido Bluetooth', price: 250.00, quantity: 2, image: 'https://placehold.co/100x100/A8A29E/FFFFFF?text=FONE' },
        { name: 'Smartwatch', price: 800.00, quantity: 1, image: 'https://placehold.co/100x100/A8A29E/FFFFFF?text=SMARTWATCH' }
    ];

    const cartItemsContainer = document.getElementById('items');
    const cartSummaryContainer = document.getElementById('total_compra');

    // Função para renderizar o carrinho e o resumo
    function renderCart() {
        let total = 0;

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center">Seu carrinho está vazio.</p>';
            cartSummaryContainer.innerHTML = `
                <p class="text-sm text-gray-700">Subtotal: R$ 0,00</p>
                <p class="font-bold text-xl mt-2 text-gray-800">Total: R$ 0,00</p>
                <button class="w-full bg-blue-500 text-white font-semibold py-3 mt-4 rounded-lg cursor-not-allowed opacity-50" disabled>Finalizar Compra</button>
            `;
            return;
        }

        let cartHTML = `
            <table class="w-full text-left">
                <thead>
                    <tr class="text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6">Produto</th>
                        <th class="py-3 px-6">Preço</th>
                        <th class="py-3 px-6 text-center">Quantidade</th>
                        <th class="py-3 px-6">Subtotal</th>
                        <th class="py-3 px-6">Ação</th>
                    </tr>
                </thead>
                <tbody class="text-gray-700 text-sm font-light">
        `;

        cartItems.forEach((item, index) => {
            const itemSubtotal = item.price * item.quantity;
            total += itemSubtotal;

            cartHTML += `
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 whitespace-nowrap">
                        <div class="flex items-center">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md mr-4">
                            <span>${item.name}</span>
                        </div>
                    </td>
                    <td class="py-3 px-6">R$ ${item.price.toFixed(2).replace('.', ',')}</td>
                    <td class="py-3 px-6 text-center">
                        <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="input-quantidade  w-16 text-center border rounded-md">
                    </td>
                    <td class="py-3 px-6 font-semibold">R$ ${itemSubtotal.toFixed(2).replace('.', ',')}</td>
                    <td class="py-3 px-6">
                        <button class="remover text-red-500 hover:text-red-700 font-bold" data-index="${index}">Remover</button>
                    </td>
                </tr>
            `;
        });

        cartHTML += `
                </tbody>
            </table>
        `;
        cartItemsContainer.innerHTML = cartHTML;

        // Atualiza o resumo
        cartSummaryContainer.innerHTML = `
            <p class="text-sm text-gray-700">Subtotal: R$ ${total.toFixed(2).replace('.', ',')}</p>
            <p class="font-bold text-xl mt-2 text-gray-800">Total: R$ ${total.toFixed(2).replace('.', ',')}</p>
            <button class="btn-finalizar w-full bg-blue-500 text-white font-semibold py-3 mt-4 rounded-lg hover:bg-blue-600">Finalizar Compra</button>
        `;

        // Adiciona event listeners para os botões de remover e inputs de quantidade
        document.querySelectorAll('remover').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                cartItems.splice(index, 1);
                renderCart();
            });
        });

        document.querySelectorAll('.input-quantidade ').forEach(input => {
            input.addEventListener('change', (e) => {
                const index = e.target.dataset.index;
                const newQuantity = parseInt(e.target.value);
                if (newQuantity >= 1) {
                    cartItems[index].quantity = newQuantity;
                    renderCart();
                }
            });
        });
    }

    renderCart();
});
