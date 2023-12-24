let aciertos = 0;
let fallos = 0;
let temporizador;

document.getElementById('startButton').onclick = function() {
    iniciarJuego();
};

function iniciarJuego() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    temporizador = setTimeout(finalizarJuego, 120000); // 2 minutos
    mostrarItemAleatorio();
}

function mostrarItemAleatorio() {
    const itemDisplay = document.getElementById('itemDisplay');
    if (Math.random() < 0.5) {
        const letra = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        itemDisplay.textContent = letra;
    } else {
        const numero = Math.floor(Math.random() * 9) + 1;
        itemDisplay.textContent = numero;
    }
}

function checkAnswer(respuesta) {
    const itemActual = document.getElementById('itemDisplay').textContent;
    if (esRespuestaCorrecta(itemActual, respuesta)) {
        aciertos++;
    } else {
        fallos++;
    }
    mostrarItemAleatorio();
}

function esRespuestaCorrecta(item, respuesta) {
    if (isNaN(item)) {
        if (respuesta === "vocal") {
            return "AEIOU".indexOf(item.toUpperCase()) !== -1;
        } else if (respuesta === "consonante") {
            return "AEIOU".indexOf(item.toUpperCase()) === -1;
        }
    } else {
        if (respuesta === "par") {
            return item % 2 === 0;
        } else if (respuesta === "impar") {
            return item % 2 !== 0;
        }
    }
    return false;
}

function finalizarJuego() {
    clearTimeout(temporizador);
    document.getElementById('gameArea').style.display = 'none';
    alert('Juego finalizado. Aciertos: ' + aciertos + ', Fallos: ' + fallos);
    document.getElementById('startButton').style.display = 'block';
    aciertos = 0;
    fallos = 0;
}

