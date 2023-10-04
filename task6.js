fuelConsume = 7; //расход топлива на 100 км (в литрах)
distance = 200; //планируемая дистанция поездки (в км)
fuelPrice = 55; //текущая цена топлива за литр

travelPrice = (fuelConsume / 100) * distance * fuelPrice;

console.log(`${travelPrice} - Цена поездки`);

