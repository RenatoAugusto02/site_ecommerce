document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Verificação simples dos campos
        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return; // Interrompe a função se algum campo estiver vazio
        }

        // Se a validação passar, você pode mostrar uma mensagem de sucesso
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        contactForm.reset(); // Limpa o formulário

        // Para o formulário realmente enviar a mensagem, o JavaScript
        // precisaria se comunicar com um arquivo PHP no servidor.
        // O PHP faria o processamento, como enviar um e-mail.
    });
});
