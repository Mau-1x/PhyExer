function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('user-answer').value);
    const correctAnswer = 25; // La distancia recorrida en metros (calculada con la fórmula d = vo . t + 1/2 * a.t<sup>2</sup>)

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (userAnswer === correctAnswer) {
        resultDiv.innerHTML = '<p>¡Correcto! La distancia recorrdia es de 25 m.</p>';
    } else {
        resultDiv.innerHTML = '<p>Incorrecto. </p>' +
        '<p>Procedimiento:</p>'+
        '<p>Usamos la fórmula: d = vo . t + 1/2 * a.t<sup>2</sup> </p>'+
        '<p>(Donde d es la distancia, vo es la velocidad inicial, t es el tiempo y a es la aceleración.)</p>' +
        '<p> d = 0 . 5 + 1/2 * 2.(5)<sup>2</sup> = 25m.</p>';
    }
}