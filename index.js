console.log("heleo");
var count = Math.floor(Math.random() * 7);
console.log(count);

var count1 = Math.floor(Math.random() * 7);
console.log(count1);

var text = document.getElementsByTagName("h1")[0].innerHTML;
console.log(text);

if (count == 1) {
    document.getElementById("img").setAttribute("src", "./dice1.png");

}
if (count == 2) {
    document.getElementById("img").setAttribute("src", "./dice2.png");

}
if (count == 3) {
    document.getElementById("img").setAttribute("src", "./dice3.png");

}
if (count == 4) {
    document.getElementById("img").setAttribute("src", "./dice4.png");

}
if (count == 5) {
    document.getElementById("img").setAttribute("src", "./dice5.png");

}
if (count == 6) {
    document.getElementById("img").setAttribute("src", "./dice6.png");

}


if (count1 == 1) {

    document.getElementById("img1").setAttribute("src", "./dice1.png");
}
if (count1 == 2) {

    document.getElementById("img1").setAttribute("src", "./dice2.png");
}
if (count1 == 3) {

    document.getElementById("img1").setAttribute("src", "./dice3.png");
}
if (count1 == 4) {

    document.getElementById("img1").setAttribute("src", "./dice4.png");
}
if (count1 == 5) {
    document.getElementById("img1").setAttribute("src", "./dice5.png");
}
if (count1 == 6) {

    document.getElementById("img1").setAttribute("src", "./dice6.png");
}

if (count > count1) {
    document.getElementsByTagName("h1")[0].innerHTML = "left win";
    console.log(text);
}
else if (count < count1) {
    document.getElementsByTagName("h1")[0].innerHTML = "Right win";
    console.log(text);
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "draw";
    console.log(text);
}