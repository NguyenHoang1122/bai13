let arr = [3,14,2,9,43,98,66,64,5,4];
sum = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        document.write(arr[i] + "<br>");
        sum++;
    }
}
document.write("Tong co " + sum + " so >= 10");