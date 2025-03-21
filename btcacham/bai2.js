let arr = [1, 4, 2, 7, 5, 4, 8, 6, 2, 5];

for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2==0){
        if(i+1==arr.length){
            break;
        }else if(arr[i+1]%2==0){
            arr[i] = arr[i]+'-';
        }else{
            continue;
        }
    }
}
document.write(arr.join(""));