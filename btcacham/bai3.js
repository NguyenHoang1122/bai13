let arr = 'The Quick Brown Fox';
let Up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let Low = 'abcdefghijklmnopqrstuvwxyz';
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
    if(Up.indexOf(arr[i]) !== -1) {
        arr1.push(arr[i].toLowerCase());
    }
    else if (Low.indexOf(arr[i]) !== -1) {
        arr1.push(arr[i].toUpperCase());
    }
    else {
        arr1.push(arr[i]);
    }
}
document.write(arr1.join(''));