let a = [];
let b = [];
let c = [];
for (let i = 0; i < 10; i++) {
    let nhapa = prompt(`nhap vao phan thu ${i+1} cua a :`);
    let nhapb = prompt(`nhap vao phan thu ${i+1} cua b :`);
    a[i]=nhapa;
    b[i]=nhapb;
}
c = a.concat(b);
document.write(c);