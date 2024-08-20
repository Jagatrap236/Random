function generateRandomDigit() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const resultElement = document.getElementById('randomDigit');

    // Validate input values
    if (isNaN(minValue) || isNaN(maxValue)) {
        resultElement.textContent = "Please enter valid numbers!";
        return;
    }

    if (minValue > maxValue) {
        resultElement.textContent = "Minimum value cannot be greater than maximum value!";
        return;
    }

    // Generate random number between minValue and maxValue (inclusive)
    const randomDigit = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultElement.textContent = `Random Digit: ${randomDigit}`;
}
