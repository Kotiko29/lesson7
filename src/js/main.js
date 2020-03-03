/*jshint esversion: 6 */
//  Получить кнопку "Начать расчет" через id
let startBtn = document.querySelector('#start');

// Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)

let resultTable = document.querySelector('.result-table'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value');

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItem = document.querySelectorAll('.expenses-item');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let expensesBtn = document.querySelectorAll('button');
let expensesItemBtn = expensesBtn[0];
let optionalexpensesBtn = expensesBtn[1];
let countBudgetBtn = expensesBtn[2];


// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let income = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    
    let money, time;

    startBtn.addEventListener('click', function () {
      time = prompt('Введите дату в формате YYYY-MM-DD', '');
      money = +prompt("Ваш бюджет на месяц?", '');
        
      while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
      }
      appData.budget = money;
      budgetValue.textContent = money.toFixed();
      appData.timeData = time;
      year.value = new Date(Date.parse(time)).getFullYear();
      month.value = new Date(Date.parse(time)).getMonth()+1;
      day.value = new Date(Date.parse(time)).getDate();
    });

    expensesItemBtn.addEventListener('click', function() {
      let sum = 0;
      for (let i=0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
            
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && a.length <50) {
          console.log("done");
          appData.expenses[a] = b;
          sum += +b;
          
        } else {
          i= i-1;
        }
      }
      expensesValue.textContent = sum;
    });

    optionalexpensesBtn.addEventListener('click', function() {
      for(let i = 0; i < optionalexpensesItem.length; i++) {
        let optionalCost = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = optionalCost;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
      }
    });

    countBudgetBtn.addEventListener('click', function() {
      if(appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        // alert("Ежедневный бюджет: " + appData.moneyPerDay);
        daybudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
          console.log("Минимальный уровень достатка");
          levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
          console.log("Средний уровень достатка");
          levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
          console.log("Высокий уровень достатка");
          levelValue.textContent = "Высокий уровень достатка";
        } else {
          console.log("Произошла ошибка");
          levelValue.textContent = "Произошла ошибка";
        }
      } else {
          daybudgetValue.textContent =  "Произошла ошибка";
      }
    });

    income.addEventListener('input', function() {
      let items = income.value;
      appData.income = items.split(', ');
      incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function() {
      if(appData.savings == true){
        appData.savings = false;
      } else {
        appData.savings = true;
      }
    });

    chooseSum.addEventListener('input', function() {
      if(appData.savings == true) {
        let sum = +chooseSum.value,
            persent = +choosePercent.value;
        
        appData.monthIncome = sum/100/12*persent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
      }
    });

    
    choosePercent.addEventListener('input', function() {
      if(appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
      }
    });
    
      
    let appData = {
      budget: money,
      expenses: {},
      optionalExpenses: {},
      income: [],
      timeData: time,
      savings: false,
      // chooseExpenses: function() {

      // },
      // detectDayBudget: function() {
      //   appData.moneyPerDay = (appData.budget / 30).toFixed();
      //   alert("Ежедневный бюджет: " + appData.moneyPerDay);
      // },
      // detectLevel: function() {
      //   if(appData.moneyPerDay < 100) {
      //     console.log("Минимальный уровень достатка");
      //   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      //     console.log("Средний уровень достатка");
      //   } else if (appData.moneyPerDay > 2000) {
      //     console.log("Высокий уровень достатка");
      //   } else {
      //     console.log("Произошла ошибка");
      //   }
      // },
      checkSavings: function() {
        if(appData.savings == true) {
          let save = +prompt("Какова сумма накоплений?"),
              percent = +prompt("Под какой процент?");
      
          appData.monthIncome = save/100/12*percent;
          alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
      },
      // chooseOptExpenses: function() {// статья необязательных расходов
        
      // },
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
    
    






