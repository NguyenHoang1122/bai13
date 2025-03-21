let arr =[1,-5,-7,3,5,-11,-5,6,9,-2,0];
count = 0;
for (i=0; i <arr.length; i++) {
    if (arr[i]<0) {
        count++;
    }
}
document.write(`So luong so nguyen am la : ${count}`);