window.onload = function () {
  let rotatingCube = document.getElementsByClassName("cube")[0];
  clickEvent = document.addEventListener("click", changeScene);

  let sceneControl = 0;

  /* aqui é possível pre configurar como as faces do cubo serão mostradas */
  let showFacesControl = {
    "face--left": "rotateX(0deg) rotateY(90deg) translateZ(100px)",
    "face--top": "rotateX(0deg) rotateY(0deg) translateZ(100px)",
    "face--right": "rotateX(-0deg) rotateY(-90deg) translateZ(100px)",
    "face--top": "rotateX(-90deg) rotateY(0deg) translateZ(0px)",
    "face--bottom": "rotateX(90deg) rotateY(-0deg) translateZ(100px)",
    "face--front": "rotateX(0deg) rotateY(0deg) translateZ(100px)",
  }

  /* toda informação referente a cena atual estará aqui */
  /*
   * [0] A face que será mostrada
   * [2] texto principal
   * [1] texto titular
   */

  /* Evitar usar face--bottom devido a extrapolação da tela */
  const scenes = [
    ["face--top", "Milhões de pessoas nasceram no dia de hoje", ""],
    ["face--right", "Mas apenas uma dentre todas elas importa para nós", ""],
    ["face--top", "E esta página foi criada exclusivamente para esta pessoa", ":)"],
    ["face--front", "Sim, tem que ser muito especial para ganhar uma página Web exclusiva", ""],
    ["face--left", "Mas quem é essa pessoa?", "🤔"],
    ["face--right", "Vamos descobrir!", "😀"],
    ["face--top", "Esta pessoa...", "Tem um gosto musical muito peculiar &#9835&#9834;"],
    ["face--left", "Close To You – Carpenters<br>Máscara – Pitty<br>Ovelha Negra – Rita Lee<br>Getway Car – Taylor Swift", ""],
    ["face--top", "Isso para citar apenas alguns...", ""],
    ["face--left", "A cor do site reflete a preferência de cor dela", "🖌"],
    ["face--right", "Ama comer", "🙄"],
    ["face--top", "Tem ideias muito sensatas", "💡"],
    ["face--left", "Emana maturidade", ""],
    ["face--front", "Inteligência invejável e muito senso crítico", "<b><i>(Us Core)</i></b>"],
    ["face--right", "Ela diz:", "<i>I hate cofused people</i><br>Ahhhhh"],
    ["face--top", "É chata, mas ser paciente com sua <i>personality</i> pode revelar uma grande amizade", ""],
    ["face--left", "Ama explicar sobre <i>BL</i>, <i>GL</i>, MBTI, comunidade LGBTQIA+<br>(N. D.: aprendi sobre GayDar com ela)", ""],
    ["face--right", "Realmente se importa com suas amizades", "<b><3</b>"],
    ["face--top", "Busca o crescimento espiritual", "<i><b>Louvável</b></i>"],
    ["face--right", "Ama ler livros", "<i>Só o papiro liberta</i>"],
    ["face--front", "Tem um bom relacionamento – invejável – com a família dela", ""],
    ["face--top", "Claro que você já sabe quem é, impossível não saber", ""],
    ["face--right", "<b><i>Happy Birthday</i></b><br>Gaby<br>Feliz Aniversário<br>Joyeux anniversaire", "🎉🎉🎉🎉🎉"],
    ["face--top", "E o que vem agora?", "<b>?</b>"],
    ["face--left", "<img style=\" width: 100%; height: 100%; \"src=\"./assets/img/1.jpg\">", ""],
    ["face--right", "<img style=\" width: 100%; height: auto; \"src=\"./assets/img/2.jpg\">", ""],
    ["face--front", "<img style=\" width: 100%; height: 100%; \"src=\"./assets/img/3.jpg\">", ""],
    ["face--right", "<img style=\" width: 100%; height: 100%; \"src=\"./assets/img/4.jpg\">", ""],
    ["face--left", "<img style=\" width: 100%; height: 100%; \"src=\"./assets/img/5.jpg\">", ""],
  ]

  /* func */
  function alterTexts(sceneData) {
    face = document.getElementsByClassName(sceneData[0])[0] /* obtem o elemento da face do cubo */
    face.children[0].innerHTML = sceneData[1]; /* altera o texto do elemento main-text */;
    face.children[1].innerHTML = sceneData[2]; /* altera o texto do elemento sub-text */
  }

  function rotateCube(sceneData) {
    rotatingCube.style["transform"] = showFacesControl[sceneData[0]];
  }

  function fimDasMensagens() {
    /* Remove o evento de clique da página */
    document.addEventListener("click", () => { })
  }

  function changeScene() {
    alterTexts(scenes[sceneControl]);
    rotateCube(scenes[sceneControl]);

    (sceneControl == scenes.length - 1) ? fimDasMensagens() : sceneControl += 1;
  }
}
