const x = 6;
const y = 6;

// let z;
// if (y > x) {
//     z = 'y is bigger';
// } else {
//     z = 'y is not bigger';
// }

let z = y > x ? 'y is bigger' 
        : y === x ? 'y is equal to x' 
        : 'y is not bigger';

console.log(z);
