//  Получить кнопку "Начать расчет" через id
let startBtn = document.querySelector('#start');

// Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)

let resultTable = document.querySelector('.result-table'),
    budgetValue = resultTable.querySelector('.budget-value'),
    daybudgetValue = resultTable.querySelector('.daybudget-value'),
    levelValue = resultTable.querySelector('.level-value'),
    expensesValue = resultTable.querySelector('.expenses-value'),
    optionalexpensesValue = resultTable.querySelector('.optionalexpenses-value'),
    incomeValue = resultTable.querySelector('.income-value'),
    monthsavingsValue = resultTable.querySelector('.monthsavings-value'),
    yearsavingsValue = resultTable.querySelector('.yearsavings-value');

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItem = document.querySelectorAll('.expenses-item');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let expensesBtn = document.querySelectorAll('button');
let expensesItemBtn = expensesBtn[0];
let optionalexpensesBtn = expensesBtn[1];
let countBudgetBtn = expensesBtn[2];

console.log(optionalexpensesBtn);

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let income = document.querySelector('#income'),
    checksavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    
    






