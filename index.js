const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem-text-area');

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = '';
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  removerElementos('.imagem-sem-texto', '.text', '.info-digite-texto');
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

function removerElementos(...seletores) {
  seletores.forEach((seletor) => {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      elemento.remove();
    }
  });
}

function copiarTexto() {
  let textAreaCopiar = document.getElementById('textoParaCopiar');
  textAreaCopiar.select();
  document.execCommand('copy');
  textAreaCopiar.setSelectionRange(0, 0);
  alert('Texto copiado com sucesso!');
}
