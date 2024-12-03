function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('user-answer').value);
    const correctAnswer = 2.5; // La altura máxima en metros (calculada con la fórmula h = v^2 / (2*g), donde g = 9.81 m/s²)

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (userAnswer === correctAnswer) {
        resultDiv.innerHTML = '<p>¡Correcto! El Tiempo es de 2.5 s.</p>';
    } else {
        resultDiv.innerHTML = '<p>Incorrecto.</p>'+  
        '<p>Procedimiento:</p>' +
        '<p>Usamos la fórmula: t = d / v. </p>' + 
        '<p>Donde d es la distancia (150 km) y v es la velocidad (60 km/h).</p>' +
        '<p> t = (150 km) / (60 km/h) = 2.5 s.</p>';
    }
}