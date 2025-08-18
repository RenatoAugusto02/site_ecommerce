document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contact-btn');

    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o link de navegar
        alert('Obrigado por tentar entrar em contato! Em breve teremos um formulário aqui.');
    });

    console.log('Site Caio\'s Celulares carregado com sucesso!');
});

document.addEventListener('DOMContentLoaded', function() {
    // Código existente para o botão de contato
    const contactButton = document.getElementById('contact-btn');
    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Obrigado por tentar entrar em contato!');
    });

    // Lógica para o formulário da newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que a página recarregue
        const emailInput = document.getElementById('email-input');
        const email = emailInput.value;
        
        // Aqui, você enviaria o e-mail para o servidor (PHP)
        // Por enquanto, vamos apenas mostrar um alerta
        if (email) {
            alert(`Obrigado por se inscrever, ${email}!`);
            emailInput.value = ''; // Limpa o campo do e-mail
        }
    });

    console.log('Site Caio\'s Celulares carregado com sucesso!');
});
