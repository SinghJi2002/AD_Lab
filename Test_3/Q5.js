function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertTemperature() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let conversionType = document.getElementById("conversionType").value;
    let resultElement = document.getElementById("result");
    
    if (isNaN(temp)) {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }

    if (conversionType === "CtoF") {
        resultElement.innerText = `${temp}°C is equal to ${celsiusToFahrenheit(temp)}°F`;
    } else {
        resultElement.innerText = `${temp}°F is equal to ${fahrenheitToCelsius(temp)}°C`;
    }
}