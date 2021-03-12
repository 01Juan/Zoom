function contato() {
    var idSala = document.querySelector(".idSala").value;
    var idUsuario = document.querySelector(".idUsuario").value;
    var idSenha = document.querySelector(".idSenha").value;
    var idNome = document.querySelector(".idNome").value;

    //Por telefone
    const botao = document.createElement("button");
    const telefone = document.createElement("a");
    telefone.setAttribute("href", "tel:+552139587888,," + idSala + "%23,," + idUsuario + "%23,," + idSenha + "%23");
    telefone.setAttribute("target", "_blank");
    telefone.innerText = "Ligar para " + idNome;
    document.getElementsByTagName("body")[0].getElementsByClassName("salas")[0].appendChild(botao);
    botao.appendChild(telefone);
    if (idNome === "") {
        telefone.innerText = "Ligar para ?"
    };

    //Pela internet
    const botaoLink = document.createElement("button");
    const link = document.createElement("a");
    link.setAttribute("href", "https://us02web.zoom.us/wc/join/" + idSala + "?pwd=" + idSenha);
    link.setAttribute("target", "_blank");
    link.innerText = "Entrar pela internet em " + idNome;
    document.getElementsByTagName("body")[0].getElementsByClassName("salas")[0].appendChild(botaoLink);
    botaoLink.appendChild(link);
    if (idNome === "") {
        link.innerText = "Entrar pela internet em ?"
    };

    //Pelo aplicativo
    const botaoApp = document.createElement("button");
    const linkApp = document.createElement("a");
    linkApp.setAttribute("href", "https://jworg.zoom.us/j/" + idSala + "?pwd=" + idSenha);
    linkApp.setAttribute("target", "_blank");
    linkApp.innerText = "Entrar pelo aplicativo em " + idNome;
    document.getElementsByTagName("body")[0].getElementsByClassName("salas")[0].appendChild(botaoApp);
    botaoApp.appendChild(linkApp);
    if (idNome === "") {
        linkApp.innerText = "Entrar pelo aplicativo em ?"
    };

}





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