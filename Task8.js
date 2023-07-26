
// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.



function findSecondSmallest(arr) {
      if (arr.length < 2) {
            return ("Array should have at least two elements");
      }

      let smallest = Infinity;
      let secondSmallest = Infinity;

      for (let i = 0; i < arr.length; i++) {
            if (arr[i] < smallest) {
                  smallest = arr[i]
            }

      }

      for (let i = 0; i < arr.length; i++) {
            if (arr[i] != smallest && arr[i] < secondSmallest) {
                  secondSmallest = arr[i];
            }
      }

      if (secondSmallest === Infinity) {
            returnr("No second smallest element found");
      }

      return secondSmallest;
}


const numbers = [5, 10, 3, 4, -7, 9];
const secondSmallest = findSecondSmallest(numbers);
console.log("Second Smallest Element:", secondSmallest);

