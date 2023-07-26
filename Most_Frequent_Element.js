const findMostFrequentElement = (arr) => {
      let FrequentElementCount = {};
      let mostFrequentElement=arr[0];
      let maxCount = 0;

      for (let i = 0; i < arr.length; i++) {

            if (FrequentElementCount[arr[i]] === undefined) {
                  FrequentElementCount[arr[i]] = 1;
            } else {
                  FrequentElementCount[arr[i]] += 1;

            }

            if (FrequentElementCount[arr[i]] > maxCount) {
                  mostFrequentElement = arr[i];
                  maxCount = FrequentElementCount[arr[i]];
            }
      }

      return mostFrequentElement;
}


const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const outputElement = findMostFrequentElement(inputArray);
console.log(outputElement); 
