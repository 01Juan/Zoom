if (typeof (Storage) !== "undefined") {
    // Código localStorage/sessionStorage.
    document.querySelector(".idSala").value = localStorage.getItem("idSalaM");
    document.querySelector(".idUsuario").value = localStorage.getItem("idUsuarioM");
    document.querySelector(".idSenha").value = localStorage.getItem("idSenhaM");
    document.querySelector(".idNome").value = localStorage.getItem("idNomeM");

    document.querySelector(".salas").innerHTML = localStorage.getItem("salasM")
}

function contato() {
    var idSala = document.querySelector(".idSala").value;
    var idUsuario = document.querySelector(".idUsuario").value;
    var idSenha = document.querySelector(".idSenha").value;
    var idNome = document.querySelector(".idNome").value;

    if (typeof (Storage) !== "undefined") {
        // Código localStorage/sessionStorage.
        localStorage.setItem("idSalaM", idSala);
        localStorage.setItem("idUsuarioM", idUsuario);
        localStorage.setItem("idSenhaM", idSenha);
        localStorage.setItem("idNomeM", idNome);
    }

    //Por telefone
    const botao = document.createElement("button");
    botao.setAttribute("class", idSala + "1");
    const telefone = document.createElement("a");
    telefone.setAttribute("href", "tel:+552139587888,," + idSala + "%23,," + idUsuario + "%23,," + idSenha + "%23");
    telefone.setAttribute("target", "_blank");
    telefone.innerText = "Ligar para " + idNome;
    document.getElementsByTagName("body")[0].getElementsByClassName("salas")[0].appendChild(botao);
    botao.appendChild(telefone);
    if (idNome === "") {telefone.innerText = "Ligar para ?"};

    const botaoApagar = document.createElement("button");
    botaoApagar.setAttribute("class", idSala + "1");
    botaoApagar.setAttribute("onClick", "apagarBotoesMemoria(" + idSala + "1"  + ")");
    botaoApagar.innerText = "X";
    document.getElementsByTagName("body")[0].getElementsByClassName("salas")[0].appendChild(botaoApagar);

    //Pela internet
    const botaoLink = document.createElement("button");
    botaoLink.setAttribute("class", idSala + "2");
    const link = document.createElement("a");
    link.setAttribute("href", "https://us02web.zoom.us/wc/join/" + idSala + "?pwd=" + idSenha);
    link.setAttribute("target", "_blank");
    link.innerText = "Entrar pela internet em " + idNome;
    document.getElementsByTagName("body")[0].getElementsByClassName("salas")[0].appendChild(botaoLink);
    botaoLink.appendChild(link);
    if (idNome === "") {link.innerText = "Entrar pela internet em ?"};

    const botaoLinkApagar = document.createElement("button");
    botaoLinkApagar.setAttribute("class", idSala + "2");
    botaoLinkApagar.setAttribute("onClick", "apagarBotoesMemoria(" + idSala + "2"  + ")");
    botaoLinkApagar.innerText = "X";
    document.getElementsByTagName("body")[0].getElementsByClassName("salas")[0].appendChild(botaoLinkApagar);

    //Pelo aplicativo
    const botaoApp = document.createElement("button");
    botaoApp.setAttribute("class", idSala + "3");
    const linkApp = document.createElement("a");
    linkApp.setAttribute("href", "https://jworg.zoom.us/j/" + idSala + "?pwd=" + idSenha);
    linkApp.setAttribute("target", "_blank");
    linkApp.innerText = "Entrar pelo aplicativo em " + idNome;
    document.getElementsByTagName("body")[0].getElementsByClassName("salas")[0].appendChild(botaoApp);
    botaoApp.appendChild(linkApp);
    if (idNome === "") {linkApp.innerText = "Entrar pelo aplicativo em ?"};

    const botaoAppApagar = document.createElement("button");
    botaoAppApagar.setAttribute("class", idSala + "3");
    botaoAppApagar.setAttribute("onClick", "apagarBotoesMemoria(" + idSala + "3"  + ")");
    botaoAppApagar.innerText = "X";
    document.getElementsByTagName("body")[0].getElementsByClassName("salas")[0].appendChild(botaoAppApagar);

    localStorage.setItem("salasM", document.querySelector(".salas").innerHTML)
}

function apagarBotoesMemoria(oi) {
    // Código localStorage/sessionStorage.
    //localStorage.clear()

    //localStorage.removeItem("salas");
    //document.querySelector(".salas").innerHTML = localStorage.getItem("salas")
    //var aSala = umBotao.parentNode
    console.log(oi)
    var idSala = document.querySelector(".idSala").value;
    var idUsuario = document.querySelector(".idUsuario").value;
    var idSenha = document.querySelector(".idSenha").value;
    var idNome = document.querySelector(".idNome").value;

    const osBotoes = document.getElementsByClassName(oi)

    for (let i = osBotoes.length - 1; i >= 0; i--) {
        osBotoes[i].parentNode.removeChild(osBotoes[i]);
    }


    if (typeof (Storage) !== "undefined") {
        // Código localStorage/sessionStorage.
        localStorage.setItem("idSalaM", idSala);
        localStorage.setItem("idUsuarioM", idUsuario);
        localStorage.setItem("idSenhaM", idSenha);
        localStorage.setItem("idNomeM", idNome);
        localStorage.setItem("salasM", document.querySelector(".salas").innerHTML)
    }

}

function apagarTodosBotoesMemoria() {
    // Código localStorage/sessionStorage.
    localStorage.clear()
    document.location.reload()
}

/* <body onload="setTimeout('Atualizar()', 5000)">
Essa página se atualizará a cada 5 segundos
</body>
<meta http-equiv="refresh" content="180"> */



/* var copyTextareaBtn = document.querySelector('.adicionar');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.idNome');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'sim!' : 'não!';
    alert('Texto copiado? ' + msg);
  } catch (err) {
    alert('Opa, Não conseguimos copiar o texto, é possivel que o seu navegador não tenha suporte.');
  }
}); */