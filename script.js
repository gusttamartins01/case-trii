document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.budget-form');
    const telInput = document.getElementById('tel');

    telInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (value.length > 5) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, "($1");
        }

        e.target.value = value;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: telInput.value,
            servico: document.getElementById('servico').value,
            mensagem: document.getElementById('msg').value
        };

        const btn = form.querySelector('button');
        const originalText = btn.innerText;

        btn.disabled = true;
        btn.innerText = "Enviando...";
        btn.style.backgroundColor = "#ccc";

        setTimeout(() => {
            console.log("Dados prontos para envio:", formData);

            alert(`Obrigado, ${formData.nome}! Seu orçamento para ${formData.servico} foi solicitado com sucesso.`);

            form.reset();
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style.backgroundColor = "#0076c0";
        }, 1500);
    });
});