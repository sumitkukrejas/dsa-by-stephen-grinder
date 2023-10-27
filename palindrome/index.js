// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     let rev = '';
//     let arr = str.split('');
//     for(let char of arr){
//         rev = char + rev;
//     }
//     if(rev === str){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function palindrome(str) {
//   let reverse = str.split('').reduce((rev, char) => char + rev, '');
//   return reverse === str;
// }

function palindrome(str){
    return str.split('').every((char, i)=>{
        return char === str[str.length - i - 1]
    });
}

module.exports = palindrome;
