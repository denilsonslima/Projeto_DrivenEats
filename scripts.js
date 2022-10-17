let comida, preco, valor1, valor2, valor3, final1, final2, final3, a, b, c;
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

    a = document.querySelectorAll(".borda1").length
    console.log(a)

    ativarBotao ()
}

let bebida, valorBebida;
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

    b = document.querySelectorAll(".borda2").length
    console.log(b)

    ativarBotao ()
}

let sobremesa, valorSobremesa;
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

    class


    c = document.querySelectorAll(".borda3").length
    console.log(c)

    ativarBotao ()
}

function ativarBotao (){
    const botao = document.querySelector(".roda-pe>button");
    const texto = document.querySelector(".ativar")
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
    const soma = final1 + final2 + final3;

    let mensagem = encodeURIComponent(`
    Olá, gostaria de fazer o *pedido*:\n*- Prato*: ${comida}\n*- Bebida*: ${bebida}\n*- Sobremesa*: ${sobremesa}\n*Total*: R$ ${soma}\n
    `)

    if (texto !== undefined){
        window.open("http://wa.me/5598984358019?text=" + mensagem)
    }

    
}
