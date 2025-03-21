let arr =[1,-5,-7,3,5,-11,-5,6,9,-2,0];
let nhap = prompt("Nhap phan tu v vao : ");
for(let i = 0; i < arr.length; i++) {
    if (arr[i] == nhap) {
        document.write("V is in the array");
        break;
    }
    document.write("V is not in the array");
    break;
}