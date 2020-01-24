var i = 0;
var txt = 'AHMET ÇELİK <WELCOME> / ';
var speed = 1666662006;
var x = 0;
var c = "QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ";
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("header").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else if(x < c.length) {
        x++
        document.getElementById('header').innerHTML += c.charAt(Math.floor((Math.random() * c.length) + 1));
    }
}