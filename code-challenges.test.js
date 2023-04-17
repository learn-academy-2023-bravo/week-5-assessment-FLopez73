// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
// describe("vowelTrader", () => {
//   const secretCodeWord1 = "Lackadaisical"
//   const secretCodeWord2 = "Gobbledygook"
//   const secretCodeWord3 = "Eccentric"
//   it("takes in a string and switches vowels for numbers", () => {
//     expect(vowelTrader(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     expect(vowelTrader(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     expect(vowelTrader(secretCodeWord3)).toEqual("3cc3ntr1c")
//   })
// })

// b) Create the function that makes the test pass.
// pseduocode:
// input:string
// output:string with numbers
// create a function vowelTrader to take in a string as input and replaces a specific vowel with a designated number.
// apply the .replaceAll method that only takes in one argument I will start by replacing "a" with the number 4. I used replaceAll due to it replacing the vowel every occurence inside of the string and not .replace becuase that would only replace the first instance of that vowel. Since I can't add more arguments to the method I can acommplish the rest of the swapping of letters by chaining the .replaceAll method for the rest of the vowels and include one for the capital vowel to cover all the cases of occurance.
// return the string with numbers in place of the vowels.

// const vowelTrader = (string) => {
//   return string
//     .replaceAll("a", 4)
//     .replaceAll("i", 1)
//     .replaceAll("e", 3)
//     .replaceAll("E", 3)
//     .replaceAll("o", 0)
// }

// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-FLopez73/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   vowelTrader
//     ✓ takes in a string and switches vowels for numbers (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.813 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 3.99s.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// describe("fruitRemover", () => {
//   const fruitArray = [
//     "Mango",
//     "Cherry",
//     "Apricot",
//     "Blueberry",
//     "Peach",
//     "Kiwi",
//   ]
//   const letterA = "a"
//   const letterE = "e"
//   it("takes in a string and an array and it returns a new array with strings that do not include the letter argument it is passed", () => {
//     expect(fruitRemover(letterA, fruitArray)).toEqual([
//       "Mango",
//       "Apricot",
//       "Peach",
//     ])
//     expect(fruitRemover(letterE, fruitArray)).toEquak([
//       "Cherry",
//       "Blueberry",
//       "Peach",
//     ])
//   })
// })
// FAIL  ./code-challenges.test.js
// fruitRemover
//   ✕ takes in a string and an array and it returns a new array with strings that do not include the letter argument it is passed (2 ms)

// ● fruitRemover › takes in a string and an array and it returns a new array with strings that do not include the letter argument it is passed

//   ReferenceError: fruitRemover is not defined

//     68 |   const letterE = "e"
//     69 |   it("takes in a string and an array and it returns a new array with strings that do not include the letter argument it is passed", () => {
//   > 70 |     expect(fruitRemover(letterA, fruitArray)).toEqual([
//        |     ^
//     71 |       "Mango",
//     72 |       "Apricot",
//     73 |       "Peach",

//     at Object.expect (code-challenges.test.js:70:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.719 s, estimated 1 s
// Ran all test suites.
// error Command failed with ex
// b) Create the function that makes the test pass.
// pseudocode:
// input: array and string
// output: array with values that match argument.
// create a function friutRemover that takes in an array and a string.
// run a .filter method to iterate through the array and look at each value since this method does not alter the original array I can call a .toLowerCase on the value then chain a .includes method to the value and pass the string as the argument thos will create a copy of the array that meet this condition. If I wanted to cover all of my edge cases I could call a .toLowerCase on the original string argument that the function takes in but it this case that is not necessary.

// const fruitRemover = (array, string) => {
//   return array.filter((value) => value.toLowerCase().includes(string))
// }

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
  const hand1 = [5, 5, 5, 3, 3]
  const hand2 = [5, 5, 3, 3, 4]
  const hand3 = [5, 5, 5, 5, 4]
  const hand4 = [7, 2, 7, 2, 7]
  it("takes an array in and checks if numbers are a full house and returns true or false", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
  })
})
// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ takes an array in and checks if numbers are a full house and returns true or false (2 ms)

// ● fullHouse › takes an array in and checks if numbers are a full house and returns true or false

//   ReferenceError: fullHouse is not defined

//     118 |   const hand4 = [7, 2, 7, 2, 7]
//     119 |   it("takes an array in and checks if numbers are a full house and returns true or false", () => {
//   > 120 |     expect(fullHouse(hand1)).toEqual(true)
//         |     ^
//     121 |     expect(fullHouse(hand2)).toEqual(false)
//     122 |     expect(fullHouse(hand1)).toEqual(false)
//     123 |     expect(fullHouse(hand1)).toEqual(true)

//     at Object.expect (code-challenges.test.js:120:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// input: array
// output: boolean value of true or false
// create a function fullHouse that takes in an array of number.
// declare a variable cardCount that has an empty object to store the number and the instances of the occurence.
// use the .forEach method to iterate through each number. It will check if the number is in the object card count by accesing the value using square brackets if it is not in the object the it returns undefined by using the || it will assing the value of zero to that number then it adds 1 for each instance of occurence.
// it will assing that value to the key inside of the object cardCount.
// declare a variable cardInstance since our cardCount variable is an object with key pair values we can filter by using Object.values to look at each occurence.
// using a method of .includes to check cardInstance has a value of 2 and then use a logical operator to evaluate if cardInstance also has a 3 in it. If both condtions are met then this will mean it is a full house three of a kind and a pair and return true. If it doesn not meet both conditions then it will return false.

//  I found the way to store the count (object) of the numbers and  the logic for my forEach method form stack overflow post and used chat gpt to help explain it more detail in how the number was being counted and stored.
// https://stackoverflow.com/questions/59444492/count-pairs-in-an-array-in-javascript

const fullHouse = (array) => {
  const cardCount = {}
  array.forEach((number) => (cardCount[number] = (cardCount[number] || 0) + 1))
  const cardInstance = Object.values(cardCount)
  return cardInstance.includes(2) && cardInstance.includes(3)
}
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-FLopez73/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   fullHouse
//     ✓ takes an array in and checks if numbers are a full house and returns true or false (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.492 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.43s.
