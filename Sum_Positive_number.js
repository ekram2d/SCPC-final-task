const  sumPositiveNumbers=(numbers)=> {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
          sum += numbers[i];
        }
      }
      return sum;
    }
    

    const inputArray = [2, -5, 10, -3, 7];
    const Sum = sumPositiveNumbers(inputArray);
    console.log(Sum); 
    