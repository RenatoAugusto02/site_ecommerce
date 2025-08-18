document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Verificação simples dos campos
        if (email === '' || password === '') {
            alert('Por favor, preencha seu e-mail e sua senha.');
            return; // Interrompe a função se algum campo estiver vazio
        }

        // Se a validação passar, você pode mostrar uma mensagem de sucesso
        alert('Formulário de login enviado com sucesso!');
        // Aqui, o JavaScript precisaria enviar os dados para um arquivo PHP
        // para autenticar o usuário no servidor.
    });
});
