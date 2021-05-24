var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var c1_image = "car1.png";
var c2_image = "car2.png";
var background_image = "racing.jpg";
c1x = 10;
c1y = 10;
c1Height = 70;
c1width = 110;
c2x = 10;
c2y = 100;
c2Height = 70;
c2width = 110;
function add(){
    backgroundTag = new Image();
    backgroundTag.onload = uploadBackground;
    backgroundTag.src = background_image;

    car1Tag = new Image();
    car1Tag.onload = uploadc1;
    car1Tag.src = c1_image;

    car2Tag = new Image();
    car2Tag.onload = uploadc2;
    car2Tag.src = c2_image;

}
function uploadBackground(){
    ctx.drawImage(backgroundTag, 0, 0, canvas.width, canvas.height);
}
function uploadc1(){
    ctx.drawImage(car1Tag, c1x, c1y, c1width, c1Height);
}
function uploadc2(){
    ctx.drawImage(car2Tag, c2x, c2y, c2width, c2Height);
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keycode = e.keyCode;
    if (keycode == "37"){
        Left();
        console.log("left clicked");
    }
    if (keycode == "38"){
        up();
        console.log("up clicked");
    }
    if (keycode == "39"){
        right();
        console.log("right clicked");
    }
    if (keycode == "40"){
        down();
        console.log("down clicked");
    }
    if (keycode == "65"){
        a();
        console.log("a clicked");
    }
    if (keycode == "87"){
        w();
        console.log("w clicked");
    }
    if (keycode == "68"){
        d();
        console.log("d clicked");
    }
    if (keycode == "83"){
        s();
        console.log("s clicked");
    }
}