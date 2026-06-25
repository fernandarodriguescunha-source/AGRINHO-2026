// Quiz Sustentável
function verificarQuiz() {

    let resposta = document.querySelector(
        'input[name="quiz"]:checked'
    );

    let resultado =
        document.getElementById("resultado");

    if (!resposta) {
        resultado.innerHTML =
            "⚠️ Escolha uma opção!";
        return;
    }

    if (resposta.value === "certo") {
        resultado.innerHTML =
            "✅ Correto! A irrigação inteligente ajuda a reduzir o desperdício de água.";
    } else {
        resultado.innerHTML =
            "❌ Resposta incorreta. Tente novamente!";
    }
}

// Calculadora Ambiental
function calcular() {

    let agua = Number(
        document.getElementById("agua").value
    );

    let economia =
        agua * 0.25;

    document.getElementById("economia").innerHTML =
        "💧 Você poderia economizar aproximadamente " +
        economia.toFixed(2) +
        " litros de água por dia.";
}

// Validação do Formulário
document.addEventListener("DOMContentLoaded", () => {

    const formulario =
        document.querySelector("form");

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const nome =
            formulario.querySelector(
                'input[type="text"]'
            ).value;

        const email =
            formulario.querySelector(
                'input[type="email"]'
            ).value;

        const mensagem =
            formulario.querySelector(
                "textarea"
            ).value;

        if (
            nome === "" ||
            email === "" ||
            mensagem === ""
        ) {
            alert(
                "Preencha todos os campos!"
            );
            return;
        }

        alert(
            "Mensagem enviada com sucesso!"
        );

        formulario.reset();
    });
});

// Animação ao rolar a página
window.addEventListener("scroll", () => {

    const cards =
        document.querySelectorAll(".card");

    cards.forEach((card) => {

        const posicao =
            card.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {

            card.style.opacity = "1";
            card.style.transform =
                "translateY(0)";
        }
    });
});

// Configuração inicial dos cards
document.addEventListener("DOMContentLoaded", () => {

    const cards =
        document.querySelectorAll(".card");

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform =
            "translateY(30px)";
        card.style.transition =
            "all 0.6s ease";
    });
});
