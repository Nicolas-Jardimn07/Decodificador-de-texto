const input_texto = document.querySelector("#input-texto");  
const input_mensagem = document.querySelector("#input-mensagem");

let matriz_code = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnCriptografar() {
  const textoCriptografado = Criptografar(input_texto.value);
  input_mensagem.value = textoCriptografado;
  input_texto.value = "";
}

function Criptografar(stringCriptografada) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (stringCriptografada.includes(matriz_code[i][0])) {
      stringCriptografada = stringCriptografada.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
      );
    }
  }
  return stringCriptografada;
}

function btnDescriptografar() {
  const textoDescriptografado = Descriptografar(input_texto.value);
  input_mensagem.value = textoDescriptografado;
  input_texto.value = "";
}

function Descriptografar(stringDescriptografada) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (stringDescriptografada.includes(matriz_code[i][1])) {
      stringDescriptografada = stringDescriptografada.replaceAll(
        matriz_code[i][1],
        matriz_code[i][0]
      );
    }
  }
  return stringDescriptografada;
}

function Copiar() {
  input_mensagem.select();
  navigator.clipboard.writeText(input_mensagem.value);
  input_mensagem.value = "";
}
