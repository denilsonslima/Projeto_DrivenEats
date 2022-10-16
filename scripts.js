let comida, preco, valor1, valor2, valor3, final1, final2, final3;
function seção_1 (seletor){
    const bordaSelect = document.querySelector(".borda1");
    const teste = seletor.querySelector(".borda1")
    if (bordaSelect !== null){
        bordaSelect.classList.remove("borda1")
    }
    seletor.classList.add("borda1"); 
    const prato = document.querySelector(".borda1>h1")
    comida = prato.innerHTML;
    console.log(comida)
    const prato2 = document.querySelector(".borda1>div>h2")
    preco = prato2.innerHTML;
    const res = preco.replace("R$ ", "")
    valor1 = res.replace(",", ".")
    final1 = Number(valor1)

    const apagar = document.querySelector(".seuPrato .aparecer");
    const aparecer = document.querySelector(".borda1 .escondido");
    aparecer.classList.add("aparecer")
    if (apagar !== null){
        apagar.classList.remove("aparecer")
    }
    ativarBotao ()
}

let bebida, valorBebida;
function seção_2 (seletor){
    const bordaSelect = document.querySelector(".borda2");
    if (bordaSelect !== null){
        bordaSelect.classList.remove("borda2")
    }
    seletor.classList.add("borda2")
    const prato = document.querySelector(".borda2>h1")
    bebida = prato.innerHTML;
    console.log(bebida)
    const prato2 = document.querySelector(".borda2>div>h2")
    valorBebida = prato2.innerHTML;
    const res = valorBebida.replace("R$ ", "")
    valor2 = res.replace(",", ".")
    final2 = Number(valor2)


    const apagar = document.querySelector(".bebida .aparecer");
    const aparecer = document.querySelector(".borda2 .escondido");
    aparecer.classList.add("aparecer")
    if (apagar !== null){
        apagar.classList.remove("aparecer")
    }
    ativarBotao ()
}

let sobremesa, valorSobremesa;
function seção_3 (seletor){
    const bordaSelect = document.querySelector(".borda3");
    if (bordaSelect !== null){
        bordaSelect.classList.remove("borda3")
    }
    seletor.classList.add("borda3")
    const prato = document.querySelector(".borda3>h1")
    sobremesa = prato.innerHTML;
    console.log(sobremesa)
    const prato2 = document.querySelector(".borda3>div>h2")
    valorSobremesa = prato2.innerHTML;
    const res = valorSobremesa.replace("R$ ", "")
    valor3 = res.replace(",", ".")
    final3 = Number(valor3)

    const apagar = document.querySelector(".sobremesa .aparecer");
    const aparecer = document.querySelector(".borda3 .escondido");
    aparecer.classList.add("aparecer")
    if (apagar !== null){
        apagar.classList.remove("aparecer")
    }
    ativarBotao ()
}


function ativarBotao (){
    if (comida !== undefined && bebida !== undefined && sobremesa !== undefined){
        const botao = document.querySelector(".roda-pe>button");
        botao.classList.add("ativadorBotao")
        const paragrafo = document.querySelector(".ativar>p")
        paragrafo.innerHTML = "Fecha Pedido"
        enviar()
    }
}

function enviar (){
    const soma = final1 + final2 + final3;
    console.log(soma)
}
