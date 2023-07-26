const  calculator=(num1, operator, num2)=> {
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          if (num2 === 0) {
            return 'Cannot divide by zero';
          }
          return num1 / num2;
        default:
          return 'Invalid operator';
      }
    }
    

    const num1 = 5;
    const operator = '+';
    const num2 = 3;
    const result = calculator(num1, operator, num2);
    console.log(result); 
    