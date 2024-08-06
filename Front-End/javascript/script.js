document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //Expressão regular para testar o formato do e-mail
    var exp_reg = new  RegExp(/\S+@\S+\.\S+/);

    //Obtem e seta o valores do nome, email, e messagem
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação dos dados
    if (!name || !exp_reg.exec(email) || !message) {
        //console.log(exp_reg.exec(email));
        alert('Por favor, preencha os campos de nome e e-mail corretamente.');
        return;
    }

    // Exibir os dados do formulário
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Dados Enviados:</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
    `;
});
