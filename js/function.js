// Setting a clock using js function
function startTime() {  // This is function declaration syntex
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checktime(m);
    s = checktime(s);
    document.getElementById('test').innerHTML = h + ":" + m + ":" + s;

    let = setTimeout(startTime, 500);

}

function checktime(i) {
    if (i < 10) { i = "0" + i };

    return i;
}
// Switch method
const paymenthMethod = 'cash';

switch(paymenthMethod){
    case 'cash':
        alert(`your paymenth method is : ${paymenthMethod}`);
        break;
    case 'card':
        alert(`your paymenth method is : ${paymenthMethod} we are verifying your card`);
        break;
        case 'check':
            alert(`your paymenth method is : ${paymenthMethod} we are processing your check`);
        break;
}