let arr = [];
let arr1 = [];
let nhap1 = +prompt('Nhap so luong muon nhap mang 1 :');
for (let i = 0; i < nhap1; i++) {
    let num = prompt(`Nhap gia thi thu ${i+1} cua mang 1 :`);
    arr[i]=num;
}
let nhap2 = +prompt('Nhap so luong muon nhap mang 2 :');
for (let j = 0; j < nhap2; j++) {
    let num1 = prompt(`Nhap gia thi thu ${j+1} cua mang 2 :`);
    arr1[j]=num1;
}
if(nhap1 === nhap2){
    for (let k = 0; k < nhap2; k++) {
        if(arr[k] !== arr1[k]){
            document.write("Hai mang1 va mang 2 khong giong nhau.");
            break;
        }else {
            document.write("Hai mang1 va mang2 giong nhau.");
            break;
        }
    }
}else {
    document.write("Hai mang1 va mang 2 khong giong nhau.");
}
