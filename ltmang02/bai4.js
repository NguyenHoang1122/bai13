let arr = [1, 5, 6, '8', 9, 'a', 5, 'h','k',5];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] >='a' && arr[i] <= 'z') {
        count++;
    }
}
document.write(`So tu trong mang la : ${count}`);