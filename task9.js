summ1 = 200000; //сумма кредита
percent = 10; //процент годовых
term = 2; //срок

summ2 = summ1 * Math.pow(((percent / 100) + 1), term); //общая сумма выплаты
overpay = summ2-summ1; //переплата

console.log(`${summ2} - Общая сумма выплаты\n${overpay} - Переплата`);