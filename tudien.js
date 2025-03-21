let arr_vi = ["mot", "hai", "ba"];
let arr_en = ["one", "two", "three"];

//kiem tra tu nhap vao co trong mang tieng viet hay ko?
let key = prompt("Xin moi nhap tu can tim kiem");
// 1 bien de kiem tra
let index = -1;
let index1 = -1;
for (let i = 0; i < 3; i++) {
    if (arr_vi[i] == key) {
        //     hien thi co
        index = i;
        break;
    }
    else if (arr_en[i] == key) {
        index1 = i;
        break;
    }
}
// dua ra ket luan ngay trong vong lap
if (index != -1) {
    document.write(`${key} co nghia la ${arr_en[index]}`);
    // document.write(`${arr_en[index]}`);
}
else if(index1 != -1) {
    document.write(`${key} nghia la ${arr_vi[index1]}`);
}
else {
    document.write(`${key} khong co trong mang`);
}