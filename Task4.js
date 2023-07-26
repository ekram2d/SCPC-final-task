// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.




const findTwoSumIndices = (sortedArray, targetValue) => {
      const elementIndices = {};

      for (let i = 0; i < sortedArray.length; i++) {
            elementIndices[sortedArray[i]] = i;


      }
      for (let i = 0; i < sortedArray.length; i++) {
            const currentElement = sortedArray[i];
            const complement = targetValue - currentElement;

            if (complement in elementIndices) {
                  return [i, elementIndices[complement]];
            }



      }

      return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const outputIndices = findTwoSumIndices(sortedArray, targetValue);
console.log(outputIndices);
