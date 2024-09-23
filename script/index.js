let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");

botaoNao.addEventListener("mouseover", function () {
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth)
    let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight)

    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px";
    botaoNao.style.top = posY + "px";

    mensagemErro.style.display = "block";
});

botaoSim.addEventListener("click", function () {
    window.open ("https://www.youtube.com/watch?v=yaYJ68Akj2M", "_blank")
    window.open ("img/Declaracao_Amor_page-0001.pdf", "_blank")
    alert("Ainda bem que sabe, ela é perdidinha em você!")
});