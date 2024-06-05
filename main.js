//--------------------------------------------------------
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const counter = document.getElementById('counter');
// btn
const start = document.getElementById('start');
const pause = document.getElementById('stop');
const reset = document.getElementById('reset');
//---------------------------------------------------------


/// assigning 00
let h = 0;
let m = 0;
let s = 0;
let c = 0;

// empty arr
let arr;

// counter function
const counterFunc = () => {
    c++;
    if(c<9){
        counter.innerHTML = '0' + c;
    }

    if(c>9){
        counter.innerHTML = c;
    }

    if(c>99){
        s++;
        sec.innerHTML = '0' + s;
        c = 0;
        counter.innerHTML = '00';
    }
    if(s>9){
        sec.innerHTML = s;
    }
    if(s>59){
        m++;
        min.innerHTML = '0' + m;
        s = 0;
        sec.innerHTML = '00';
    }
    if(m>9){
        min.innerHTML = m;
    }
    if(m>59){
        h++;
        hour.innerHTML = '0' + h;
        m = 0;
        min.innerHTML = '00';
    }
    if(h>23){
        hour.innerHTML = '00';
    }
}

/// function onclick added
start.onclick = () =>  {
    clearInterval(arr);
    arr = setInterval(counterFunc, 10);
}

pause.onclick = () => {
    clearInterval(arr);
}

reset.onclick = () => {
    clearInterval(arr);
    hour.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    counter.innerHTML = '00';
}

