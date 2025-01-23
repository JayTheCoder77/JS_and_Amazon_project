let calculation = localStorage.getItem('calculation') || '';

      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        localStorage.setItem('calculation',calculation);
        document.querySelector('.js-display').innerHTML = `${calculation}`;
      }