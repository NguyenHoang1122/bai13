let arr =[];
for (let i = 0;i <10;i++){
    let nhap = prompt("Hay nhap cac phan tu vao :")
    arr[i]=nhap;
}
arr.sort((a,b) => b-a);
document.write(`Danh sach sau khi duoc sap xep la ${arr}`);