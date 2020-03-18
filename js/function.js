// Setting a clock using js function
function startTime(){  // This is function declaration syntex
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checktime(m);
    s = checktime(s);
    document.getElementById('test').innerHTML = h + ":" + m + ":" + s;

    let = setTimeout(startTime, 500);

}

function checktime(i){
    if(i < 10) {i = "0" + i};

    return i;
};

// Selecting an element from html page and modify them
