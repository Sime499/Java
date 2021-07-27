// check paliendrom 

str = "madam"

function isPalindrome(str) {

    //to find the lenghth of palindrome 
    const len = String.lenght;

    //to loop half of the string;
    for (let i = 0; i < len / 2; i++) {
        if (sting[i] !== string[len - 1 - i]) {
            return "is not Palindrome";

        }

    }
    return "isPalindrome";
}

console.log(isPalindrome("madam"));

}




// remove depulicate number 
let chars = ["John", "Mary", "Alex", "Steve", "Mary", "John"];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);


//returns true/false depending on if the item is in the array

function isLess(a, b) {

    if (a, b) {
        return true;
    } else {
        return false;
    }
}
console.log(isLess(7, 6));


// Create an app which finds the largest number in an array

let arr = [33, 44, 3, 21, 554, 65, 4, 77]

let largest = arr[0]

for (let i = 0; i < arr.length; i++) {

    if (arr[i] >= largest) {
        max = arr[i];
    }
}

console.log(largest);
//find smallest number


let arr = [33, 44, 3, 21, 554, 65, 4, 77]

let smallest = arr[0]

for (let i = 0; i < arr.length; i++) {

    if (arr[i] <= smallest) {
        smallest = arr[i];
    }
}

console.log(smallest);

// FIZZBUZZ
for (let i = 1; i < 101; i++) {

    if (i % 15 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 5 === 0) {
        console.log('FIZZ');
    } else if (i % 3 === 0) {
        console.log('BUZZ')
    } else {
        console.log(i)
    }
}

//ODD EVEN

let arr = [2, 6, 8, Int8Array]

for (let i = 0; i < arr.length; i++) {

    if (i % 2 === 0) {
        console.log("Even")
    } else {
        console.log("ODD")
    }
}

// sorted assednding 
const numbers = [3, 4, 56, 7, 8, 1]

const sortedNumbers = numbers.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {

        return 1
    } else {

        return 0
    }

});

console.log(sortedNumbers)

//sorting decending

const numbers = [3, 4, 56, 7, 8, 1]

const sortedNumbers = numbers.sort((a, b) => {
    if (a > b) {
        return -1
    } else if (a < b) {

        return 1
    } else {

        return 0
    }

});

console.log(sortedNumbers)