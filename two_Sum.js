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
