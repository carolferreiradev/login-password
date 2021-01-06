const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");


btnLogin.addEventListener("click", (event) => {/*listener ouve o evento da ação indicada(click)*/
    event.preventDefault();/*retira o submit(tipo do botão que foi posto no HTML e coloca ele como defoult(vazio))*/

    //input block pega tudo mas precisa do input
    const fields = [...document.querySelectorAll(".input-block input")]//pegará todos os elementos do input block e colocará em um array desconstruido(...)


    fields.forEach(field => {/*varre o array e verifica se há um campo vazio, se tiver vai adc o validate lá do CSS*/
        if (field.value === "") form.classList.add("validate-error")
    });
    const formError = document.querySelector(".validate-error");/* adiciona o validate-erro a variavel formerror*/
    if (formError) {
        formError.addEventListener("animationend", (event) => {/*quando chegar no final do evento ele verifica se*/
            if (event.animationName === "vibrar") {/*a animação é o evento "vibrar do css"*/
                formError.classList.remove("validate-error");//remove para caso clique de novo chama novamente a classe a adicionando, criando o loop
            }
        });
    } else {//caso os campos sejam preenchidos cria a classe form-hide e chama o estilo dela no CSS(joga o form para baixo)
        form.classList.add("form-hide")/*faz com que o form "suma" quando clica no botão chamando um CSS*/
    }
});

/*Remover o formulario do HTML e não mostrar rolagem
enquanto o formulario está saindo da tela
overflow: hidden não dá a rolagem
*/

form.addEventListener("animationstart", event => {/* ouvirá quando o evento de animação começar e tirará a barra de rolagem*/
    if (event.animationName === 'formDown') {
        document.querySelector("body").style.overflow = "hidden"
    };
});


form.addEventListener("animationend", (event) => {/*ouvirá o evento de animação acabou e sumirá com o form*/
    if (event.animationName === "formDown") {
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";/*para voltar a rolagem ao normal quando o evento acabar*/
    }
});

/*BACKGROUND QUADRADOS - SQUARES*/
const ulQuadrados = document.querySelector("ul.quadrados");

for (let i = 0; i <= 10; i++) {//contagem para ter 10 quadrados
    const li = document.createElement("li");

    //criando tamanhos randomicos,  numa função que pega os valores minimos e maximos
    const random = (min, max) => Math.random() *(max - min) + min;
    //floor arrendondado o numero(SIZE)
    const size = Math.floor(random(10, 80));

    //mudando a posição de 1% a 99% da tela
    const position = random(1, 99);

    //mudando o delay dos quadrados
    const delay = random(5, 0.1);

    //mudando o tempo da animação
    const duration = random(24, 12);

    //fazendo uma largura
    li.style.width = `${size}px`;
    //fazendo a altura
    li.style.height = `${size}px`;
    //colocando o botom menos a altura que ele tiver
    li.style.bottom = `-${size}px`;
    //posição que ele tiver
    li.style.left = `${position}%`;

    //delay da animação, momentos diferentes
    li.style.animationDelay = `${delay}s`;

    //tempo da animação dinamico
    li.style.animationDuration = `${duration}s`

    //timing diferente
    li.style.animationTimingFunction = `cubic-bezier(${Math.random(), Math.random(), Math.random(), Math.random()})`

    //adicionando o li a ul do quadrado
    ulQuadrados.appendChild(li);
}