function ex_01 (a, b, c) {
    a = prompt('введите A');
    b = prompt('введите B');
    c = prompt('введите C');
    let x = alert((a-b)/c);
}

function ex_02 (a) {
    a = prompt('введите число')
    let x = a ** 3;
    let y = a **2;
    alert ('Куб от числа = ' + x + '\nКвадрат от числа = ' + y) 
}

function ex_03 (a, b) {
    a = prompt('введите А');
    b = prompt('введите В');
    if (a > b) alert('A больше B');
    else alert('B больше A');
}


function arr (a, b) {
    a = prompt('введите А - начальное значение');
    b = prompt('введите B - конечное значение');
    x = [];
    for (;a <= b ; a++) {
        x.push(a);
    }
    return x;
}
function ex_04 (x) {
    x = arr ();
    alert(x);
}

let isEven  = function (a) {
    let x = a % 2;
    if (x == 0) return true;
    else return false;  
}

function ex_06 (a) {
    a = prompt('введите длину массива');
    x = [];
    for (let i = 1; a > 0; i++, a--) {
        x.push(i);
    }
    y = [];
    console.log(x);
    for (let i = 0; i < x.length; i++) {
        if (isEven(x[i])) y.push(x[i]);
        else continue;
    }
    console.log(y);
}
function ex_07 () {
    function ex_7 (h) {
        if (arguments.length > 1){
            let y = arguments[1];
            h = arguments[0];
            for (let i = 1; i <= h; i++) {
                x = [];
                for (let j = 1; j <= i; j++) {
                    x.push(y);
                }
                console.log(x);
            } 
        } else {
            for (let i = 1; i <= h; i++) {
                x = [];
                for (let j = 1; j <= i; j++) {
                    x.push(i);
                }
                console.log(x);
            }
        }

    }
    ex_7(prompt('высота пирамидки ?'))
}

function ex_08 () {
    ex_8(prompt('количество строк?'))
    function ex_8 (h) {
        let lenth = h * 2 - 1,
            middle = (lenth - 1) / 2;

        for (let i = 0; i < h; i++) {
            let start = middle - 1,
                end = middle + 1;

            for (let k = 0; k < lenth; k++) {
                if (k >= start && k <= end) {
                    document.write('*')
                }
                else {
                    document.write('_')
                }
            }
            document.write('<br>')
        }
    }
}