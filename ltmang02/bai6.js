let arr=[1,3,4,'-',7,4,'-',3,3,'-',7];
for(let i=0;i<arr.length;i++){
    if(arr[i]==='-'){
        arr[i]='_';
    }
}
document.write(`Mang sau khi sua ky thu la ; ${arr}`);