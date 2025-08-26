document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Verificação dos campos
        if (email === '' || password === '') {
            alert('Por favor, preencha seu e-mail e sua senha.');
            return; // Interrompe a função se algum campo estiver vazio
        }

        alert('Formulário de login enviado com sucesso!');
       
    });
});
