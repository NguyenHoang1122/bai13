let arr = [2,5,7,4,8,11,4,8,55,4];
let max = arr[0];
let vitri = 0;
for (let i = 1; i < arr.length; i++) {
    if(max < arr[i]) {
        max = arr[i];
        vitri = i;
    }
}
document.write(`Gia tri lon nhat la :${max} nam o vi tri so ${vitri}`);