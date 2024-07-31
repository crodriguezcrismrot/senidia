function nextStep(stepNum) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.style.display = 'none'; // Oculta todos los pasos
    });
    document.getElementById('step' + stepNum).style.display = 'block'; // Muestra el paso actual
}
