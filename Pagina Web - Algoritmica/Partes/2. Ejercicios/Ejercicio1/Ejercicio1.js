function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('user-answer').value);
    const correctAnswer = 20; // La altura máxima en metros (calculada con la fórmula h = v^2 / (2*g), donde g = 9.81 m/s²)

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (userAnswer === correctAnswer) {
        resultDiv.innerHTML = '<p>¡Correcto! La altura máxima es de 20 m.</p>';
    } else {
        resultDiv.innerHTML = '<p>Incorrecto. </p>' + 
        '<p>Procedimiento:</p>' +
        '<p>Usamos la fórmula: h = v^2 / (2*g). </p>' +
        '<p>Donde v es la velocidad inicial y g es la aceleración debida a la gravedad (aproximadamente 9.81 m/s²).</p>' +
        '<p>h = (20 m/s)² / (2 * 9.81 m/s²) = 20.4 m (aproximadamente).</p>';
    }
}