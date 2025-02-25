
let userName = prompt("请输入您的姓名：");


if (userName !== null) {
    document.getElementById("greeting").innerHTML = "您好, " + userName + "!";
} else {
    
    document.getElementById("greeting").innerHTML = "您好, 朋友!";
}
