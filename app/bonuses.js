// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
   array = []
   for (i = 0; i < str.length; i++) {
      array.push(str.charCodeAt(i))
   }
   for (i = 0; i < array.length; i++) {
      if (i != 0) {
         y = array[i - 1] + 1
         if (array[i] != y) {
            var missingLetter = String.fromCharCode(array[i] - 1)
         }
      }
   }
   if (missingLetter) {
      return missingLetter
   } else {
      return 'no missing letters'
   }
}



// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
   const comp = new Map();
   const len = arr.length;
   for (let i = 0; i < len; i++) {

      if (comp[arr[i]] >= 0) {
         return true;
      }
      comp[target - arr[i]] = i;
   }
   return false;

}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
}