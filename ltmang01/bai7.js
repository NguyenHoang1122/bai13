let arr = [];
let x = ['v'];
for (let i = 0; i < 10; i++) {
    let nhap = prompt("Hay nhap vao : ");
    arr[i]=nhap;
}
for (let i = 0; i <arr.length; i++) {
    if (arr[i]== 'v'){
        arr.splice(i,1);
        arr.push(0);
    }
}
document.write(`Mang moi sau khi check la : ${arr}`);
