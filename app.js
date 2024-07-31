function encriptar() {

    let textoUsuario = document.getElementById('textoUsuario').value; 
    let textoEncriptado = '';
    let imagen = document.getElementById('imagen');
    let txt1 = document.getElementById('txt1');
    let txt2 = document.getElementById('txt2');
    let textArea = document.getElementById('textoRespuesta');
    let botonCopiar = document.getElementById('boton_copiar_id');

    if (/[A-ZÁÉÍÓÚáéíóú]/.test(textoUsuario)) {
        alert('El texto no debe contener mayúsculas ni acentos.');
        return; // Salir de la función si se encuentran mayúsculas o acentos
    }

    for (let i = 0; i < textoUsuario.length; i++) {
        let char = textoUsuario[i];
        if (char == 'a') {
            textoEncriptado += 'ai';
        } else if (char == 'e') {
            textoEncriptado += 'enter';
        } else if (char == 'i') {
            textoEncriptado += 'imes';
        } else if (char == 'o') {
            textoEncriptado += 'ober';
        } else if (char == 'u') {
            textoEncriptado += 'ufat';
        } else {
            textoEncriptado += char;
        }
    }
    asignarValor(textoEncriptado);
    imagen.style.visibility = 'hidden';
    txt1.style.visibility = 'hidden';
    txt2.style.visibility = 'hidden';
    botonCopiar.style.visibility = 'inherit';
    textArea.style.visibility = 'inherit';
    limpiarCaja();
}

function desencriptar() {

    let textoDesencriptado = document.getElementById('textoUsuario').value;
    
    textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
    textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');
    
    asignarValor(textoDesencriptado);
    limpiarCaja();
}

function asignarValor(textoOutput) {
    let textoRespuesta = document.getElementById('textoRespuesta');
    textoRespuesta.value = textoOutput;
}

function copiar() {
    let textoRespuesta = document.getElementById('textoRespuesta');
    navigator.clipboard.writeText(textoRespuesta.value)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function limpiarCaja() {
    document.querySelector('#textoUsuario').value = '';
}

