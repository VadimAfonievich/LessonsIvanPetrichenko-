let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYY-MM-DD");

let appData = {
    finance: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: "",
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько это обойдется?");
    
    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && 
        a != '' && b != '' && a.length < 50 ) {
    console.log("done");        
    appData.expenses[a] = b;
    } else {

    }
};


/*Цикл способом - do - while:
i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько это обойдется?");
    i++;
    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
} while (i < 2);
*/

/* Цикл способом - while:
i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько это обойдется?");
    i++;
    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
};
*/

appData.moneyPerDay = appData.finance / 30;

console.log(appData);
alert("Ваш ежедневный бюджет: " + appData.moneyPerDay + " рублей");

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка!');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка!");
} else {
    console.log("Произошла какая-то ошибка!");
};