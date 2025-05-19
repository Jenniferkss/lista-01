const temperaturaCelcius = [0, 10, 20, 30, 40]; 
const temperaturasFahrenheit = [];
let contadorArrayFahrenheit = 0;

for (let i = 0; i < temperaturaCelcius.length; i++) {
    temperaturasFahrenheit[contadorArrayFahrenheit] = (temperaturaCelcius[i] * 9) / 5 + 32;
    contadorArrayFahrenheit++;
}

console.table(temperaturaCelcius);
console.table(temperaturasFahrenheit)