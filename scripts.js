let comida, bebida, sobremesa, final1, final2, final3, a, b, c, soma;
function seção_1 (seletor){
    const bordaSelect = document.querySelector(".borda1");
    if (bordaSelect !== null){
        bordaSelect.classList.remove("borda1")
    }
    seletor.classList.add("borda1")

    const apagar = document.querySelector(".seuPrato .aparecer");
    const aparecer = document.querySelector(".borda1 .escondido");
    aparecer.classList.add("aparecer")
    if (apagar !== null){
        apagar.classList.remove("aparecer")
        bordaSelect.classList.remove("borda1")
    }  
    
    const c = document.querySelector(".borda1 h1")
    comida = c.innerHTML;
    console.log(comida)
    const valor = document.querySelector(".borda1 h2")
    final1 = valor.innerHTML;
    final1 = final1.replace("R$ ", "")
    final1 = final1.replace(",", ".")
    console.log(final1)

    a = document.querySelectorAll(".borda1").length

    ativarBotao ()
}

function seção_2 (seletor){
    const bordaSelect = document.querySelector(".borda2");
    if (bordaSelect !== null){
        bordaSelect.classList.remove("borda2")
    }
    seletor.classList.add("borda2")

    const apagar = document.querySelector(".bebida .aparecer");
    const aparecer = document.querySelector(".borda2 .escondido");
    aparecer.classList.add("aparecer")
    if (apagar !== null){
        apagar.classList.remove("aparecer")
        bordaSelect.classList.remove("borda2")
    }

    const c4 = document.querySelector(".borda2 h1")
    bebida = c4.innerHTML;
    console.log(bebida)
    const valor1 = document.querySelector(".borda2 h2")
    final2 = valor1.innerHTML;
    final2 = final2.replace("R$ ", "")
    final2 = final2.replace(",", ".")
    console.log(final2)
   

    b = document.querySelectorAll(".borda2").length

    ativarBotao ()
}

function seção_3 (seletor){
    const bordaSelect = document.querySelector(".borda3");
    if (bordaSelect !== null){
        bordaSelect.classList.remove("borda3")
    }
    seletor.classList.add("borda3")   

    const apagar = document.querySelector(".sobremesa .aparecer");
    const aparecer = document.querySelector(".borda3 .escondido");
    aparecer.classList.add("aparecer")
    if (apagar !== null){
        apagar.classList.remove("aparecer")
        bordaSelect.classList.remove("borda3")
    }

    const c5 = document.querySelector(".borda3 h1")
    sobremesa = c5.innerHTML;
    console.log(sobremesa)
    const valor8 = document.querySelector(".borda3 h2")
    final3 = valor8.innerHTML;
    final3 = final3.replace("R$ ", "")
    final3 = final3.replace(",", ".")
    console.log(final3)

    c = document.querySelectorAll(".borda3").length

    ativarBotao ()
}

let texto;
function ativarBotao (){
    const botao = document.querySelector(".roda-pe>button");
    texto = document.querySelector(".ativar")
    if (a === 1 && b === 1 && c === 1){
        botao.classList.add("ativadorBotao")  
        const p = document.querySelector(".p1")
        p.classList.add("esconder")
        const b = document.querySelector(".p2")
        b.classList.remove("esconder")
    } else {
        const botao1 = document.querySelector(".roda-pe>button")
        botao1.classList.remove("ativadorBotao")
        const p = document.querySelector(".p1")
        p.classList.remove("esconder")
        const b = document.querySelector(".p2")
        b.classList.add("esconder")
    }
}

function enviar (){
    x = Number(final1)
    y = Number(final2)
    z = Number(final3)
    soma = x + y + z;
    let mensagem = encodeURIComponent(`
    Olá, gostaria de fazer o *pedido*:\n*- Prato*: ${comida}\n*- Bebida*: ${bebida}\n*- Sobremesa*: ${sobremesa}\n*Total*: R$ ${soma + ",00"}\n
    `)

    if (texto !== undefined){
        window.open("http://wa.me/5598984358019?text=" + mensagem)
    }

    
}
