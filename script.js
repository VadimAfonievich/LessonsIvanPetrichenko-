let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYY-MM-DD");

let expense1 = prompt("Введите обязательную статью расходов в этом месяце"),
    expense01 = +prompt("Во сколько это обойдется?"),
    expense2 = prompt("Введите обязательную статью расходов в этом месяце"),
    expense02 = +prompt("Во сколько это обойдется?");

let appData = {
    finance: money,
    timeData: time,
    expenses: {
        expense1: expense01,
        expense2: expense02
    }, 
    optionalExpenses: "",
    income: "",
    savings: false
};

appData.expenses[expense1] = expense01;
appData.expenses[expense2] = expense02;


console.log(appData.expenses);
alert("Ваш ежедневный бюджет составляет - " + ((appData.finance - (expense01 + expense02)) / 30) + " рублей");