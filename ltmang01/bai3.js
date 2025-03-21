let arr = [4,7,4,3,2,7,9,5,4,3,6,7,22,65,3,76,23];
let sum = 0;
let max=arr[0];
let avered = 0;
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
        sum += arr[i];
    }
    avered = sum/i;
}
document.write(`Phan tu co gia tri lon nhat la : ${max} gia tri TB cua mang la : ${avered}`);