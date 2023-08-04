function convert(fromUnit) {
    if (fromUnit === "C") {
        const celsius = parseFloat(document.getElementById("celsius").value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
        } else {
            document.getElementById("fahrenheit").value = "";
        }
    } else if (fromUnit === "F") {
        const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            document.getElementById("celsius").value = celsius.toFixed(2);
        } else {
            document.getElementById("celsius").value = "";
        }
    }
}
