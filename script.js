// Виведення повідомлення у консоль
console.log("Це повідомлення з зовнішнього JavaScript файлу!");
alert("Доброго дня, мене звати Пасічник Дмитро")
// Функція для обчислення  суми та різниці 
function calculateSumAndDifference(a, b) {
    let sum = a + b;
    let difference = a - b;
    //Виведення резульатів у консоль 
    console.log("Сума: " + sum);
    console.log("Різниця: " + difference)
}

//Виклик функції з прикладними числами
calculateSumAndDifference(24, 7);
