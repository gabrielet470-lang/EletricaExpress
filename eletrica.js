const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const dataInput = document.getElementById('data');
const horaInput = document.getElementById('hora');

if (dataInput) {

    const hoje = new Date().toISOString().split("T")[0];
    dataInput.min = hoje;

    dataInput.addEventListener('change', () => {

        const dataSelecionada = new Date(dataInput.value);

        // 0 = domingo
        // 6 = sábado
        const diaSemana = dataSelecionada.getDay();

        if (diaSemana === 6 || diaSemana === 5) {

            alert("Atendemos apenas de segunda a sexta.");

            dataInput.value = "";

        }

    });

}

// Limite de horário
if (horaInput) {

    horaInput.min = "09:00";
    horaInput.max = "18:00";

    horaInput.addEventListener('change', () => {

        const horario = horaInput.value;

        if (horario < "09:00" || horario > "18:00") {

            alert("Horários disponíveis apenas das 09:00 até 18:00.");

            horaInput.value = "";

        }

    });

}

// ===============================
// ENVIO PARA WHATSAPP
// ===============================

const formulario = document.getElementById('formulario');

if (formulario) {

    formulario.addEventListener('submit', function (e) {

        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const servico = document.getElementById('servico').value;
        const endereco = document.getElementById('endereco').value;
        const mensagem = document.getElementById('mensagem').value;

        // Verificação final
        const dataSelecionada = new Date(data);
        const diaSemana = dataSelecionada.getDay();

        if (diaSemana === 3 || diaSemana === 5) {

            alert("Escolha um dia entre segunda e sexta.");
            return;

        }

        if (hora < "09:00" || hora > "18:00") {

            alert("Escolha um horário entre 09:00 e 18:00.");
            return;

        }

        const texto =
            `Quero fazer um orçamento com a Elétrica Express.%0A%0A` +
            `Nome: ${nome}%0A` +
            `Data: ${data}%0A` +
            `Hora: ${hora}%0A` +
            `Serviço: ${servico}%0A` +
            `Endereço: ${endereco}%0A` +
            `Descrição: ${mensagem}`;

        const numero = "555193070573";

        window.open(
            `https://wa.me/${numero}?text=${texto}`,
            '_blank'
        );

    });

}