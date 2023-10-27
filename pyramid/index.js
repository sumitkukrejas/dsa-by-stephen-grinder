// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, string = "") {
  if (row === n) {
    return;
  }

  if (string.length === 2 * n - 1) {
    console.log(string);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
let add;
  if (string.length >= midpoint - row && string.length <= midpoint + row) {
    add = "#";
  } else {
    add =  " ";
  }

  return pyramid(n, row, string + add);
}

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let coloumn = 0; coloumn < 2 * n - 1; coloumn++) {
//         if(midpoint-row <=coloumn && midpoint+row >=coloumn){
//             level+='#';
//         }else{
//             level+=' ';
//         }
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;
