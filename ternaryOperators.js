// const x = 6;
// const y = 6;

// // let z;
// // if (y > x) {
// //     z = 'y is bigger';
// // } else {
// //     z = 'y is not bigger';
// // }

// let z = y > x ? 'y is bigger' : 'y is not bigger';

// console.log(z);

// let checker = (year) => {
//     let message =
//         year > 2000 ? '21 century' : 'middle AGE';

//     console.log(message);
// };

// checker(1999);

// let userYear = prompt('year of birth')
// if (userYear > 2000 ) {
//     alert('you are in the 21st century')
// }
// else {
//     alert('you live in the middle age')
// }

const doOperationOn2Numbers = (
    num1,
    num2,
    operator
) => {
    return eval(`${num1} ${operator} ${num2}`);
};
doOperationOn2Numbers(2, 3, '+');

// const doOperationOn2Numbers = (num1, num2, operator) => {
//     switch(operator) {
//         case '+':
//             return num1 + num2
//         case '-':
//             return num1 - num2
//         case '*':
//             return num1 * num2
//         case '/':
//             return num1 / num2
//     }
// }
