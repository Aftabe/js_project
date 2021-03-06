// Setting a clock using js function
function startTime() {  // This is function declaration syntex
    let today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds();
    m = checktime(m);
    s = checktime(s);
    document.getElementById('test').innerHTML = h + ": " + m + ": " + s;

    let = setTimeout(startTime, 500);

}
function checktime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

// Selecting an element from html page and modify the
// Switch method
// const paymenthMethod = 'cash';

// switch(paymenthMethod){
//     case 'cash':
//         alert(`your paymenth method is : ${paymenthMethod}`);
//         break;
//     case 'card':
//         alert(`your paymenth method is : ${paymenthMethod} we are verifying your card`);
//         break;
//         case 'check':
//             alert(`your paymenth method is : ${paymenthMethod} we are processing your check`);
//         break;
// };
switch (paymenthMethod) {
    case 'cash':
        alert(`your paymenth method is : ${paymenthMethod}`);
        break;
    case 'card':
        alert(`your paymenth method is : ${paymenthMethod} we are verifying your card`);
        break;
    case 'check':
        alert(`your paymenth method is : ${paymenthMethod} we are processing your check`);
        break;
};
// This is the second example of 'Switch statement'
const cars = ['Ford', 'Toyota', 'Mazda'];

let seclectCar = 2;
let car;

switch (seclectCar) {
    case 0:
        car = cars[0];
        break;
    case 1:
        car = cars[1];
        break;
    case 2:
        car = cars[2];
        break;
};


// Next line of code

const el = document.getElementById('mody');

el.innerText = 'A Green Message From JavaScript File';
