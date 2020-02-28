/*jshint esversion: 6 */
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
    
    let money, time;

    function start() {
      money = +prompt("Ваш бюджет на месяц?", '');
      time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
      while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
      }
    }
    
    start();
    
    
    let appData = {
      budget: money,
      expenses: {},
      optionalExpenses: {},
      income: [],
      timeData: time,
      savings: true,
      chooseExpenses: function() {
        for (let i=0; i<2; i++) {
          let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
              b = prompt("Во сколько обойдется?", "");
              
          if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && a.length <50) {
            console.log("done");
            appData.expenses[a] = b;
          } else {
            i= i-1;
          }
        }
      },
      detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
      },
      detectLevel: function() {
        if(appData.moneyPerDay < 100) {
          console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
          console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
          console.log("Высокий уровень достатка");
        } else {
          console.log("Произошла ошибка");
        }
      },
      checkSavings: function() {
        if(appData.savings == true) {
          let save = +prompt("Какова сумма накоплений?"),
              percent = +prompt("Под какой процент?");
      
          appData.monthIncome = save/100/12*percent;
          alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
      },
      chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
          let optionalCost = prompt('Статья необязательных расходов?');
          appData.optionalExpenses[i] = optionalCost;
        }
      },
      chooseIncome: function() {
        for(let i = 0; i < 1; i++) {
          let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)');
    
          if( (typeof(items)) === 'string' && (typeof(items)) != null && items != '' && (typeof(items)) != 'number'){
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё?'));
            appData.income.sort();
          }else {
            console.log('error');
            i--;
          }
        }
        appData.income.forEach(function(item, i, arr){
          alert("Способы доп. заработка: " + (i+1) +" " + item);
        });
      }
    };
    
    for (let key in appData) {
      console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
    }
    
    






