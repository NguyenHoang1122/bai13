let arr = [
    [1,2,3,4,5,6],
    [2,3,4,5,6,7],
    [3,4,5,6,7,8],
    [4,5,6,7,8,9]
];
for (let i = 0; i < arr.length; i++) {
    document.write(`row ${i} <br>`);
    for (let j = 0; j < arr[i].length; j++) {
        document.write(arr[i][j] + "<br>");
    }
}