let arr = [];
let count = 0;
let num = +prompt("Nhap so luong phan tu muon nhap : ");
for (let i = 0; i < num; i++) {
    let nhap = prompt(`Nhap gia tri phan tu thu ${i + 1}`);
    arr[i]=nhap;
}
for(let j = 0; j < arr.length; j++) {
    if(arr[j]>=0 && arr[j]<10){
        count++;
    }
}
document.write(`Do dai mang la : ${num} <br> So luong phan tu tu 0-9 la : ${count}`);