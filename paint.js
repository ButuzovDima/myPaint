let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let myColor;
let r = 10;
let t = true;

let fa_pencils = document.getElementsByClassName('fa-pencil');
let fa_eraser = document.getElementById("p_clear");
let style_pencil = function(a){
    for(let i = 0; i < fa_pencils.length; i++){
        if(fa_pencils[i].style.boxShadow = '0 0 6px 3px #454547'){
            fa_pencils[i].style.boxShadow = null;
        }
    }
    if(fa_eraser.style.boxShadow = '0 0 6px 3px #454547'){
        fa_eraser.style.boxShadow = null;
    }
    a.style.borderRadius = '7px';
    a.style.boxShadow = '0 0 6px 3px #454547';
};

let fa_circles = document.getElementsByClassName('fa-circle');
let style_circle = function(a){
    for(let i = 0; i < fa_circles.length; i++){
        if(fa_circles[i].style.boxShadow = '0 0 6px 3px #454547'){
            fa_circles[i].style.boxShadow = null;
        }
    }
    a.style.borderRadius = '7px';
    a.style.boxShadow = '0 0 6px 3px #454547';
};

let rgba_p = document.getElementById('p_black');
style_pencil(rgba_p);
let rgba_c = document.getElementById('lg');
style_circle(rgba_c);

p_black.onclick = function(){
    t = true;
    myColor = 'black';
    let rgba = document.getElementById("p_black");
    style_pencil(rgba);
};
p_red.onclick = function(){
    t = true;
    myColor = 'red';
    let rgba = document.getElementById("p_red");
    style_pencil(rgba);
};
p_blue.onclick = function(){
    t = true;
    myColor = 'blue';
    let rgba = document.getElementById("p_blue");
    style_pencil(rgba);
};
p_green.onclick = function(){
    t = true;
    myColor = 'green';
    let rgba = document.getElementById("p_green");
    style_pencil(rgba);
};
p_brown.onclick = function(){
    t = true;
    myColor = 'brown';
    let rgba = document.getElementById("p_brown");
    style_pencil(rgba);
};
p_yellow.onclick = function(){
    t = true;
    myColor = 'yellow';
    let rgba = document.getElementById("p_yellow");
    style_pencil(rgba);
};
p_clear.onclick = function(){
    t = false;
    let rgba = document.getElementById("p_clear");
    style_pencil(rgba);
};

lg.onclick = function(){
    r = 10;
    let rgba = document.getElementById('lg');
    style_circle(rgba);
};
l2x.onclick = function(){
    r = 15;
    let rgba = document.getElementById('l2x');
    style_circle(rgba);
};
l3x.onclick = function(){
    r = 20;
    let rgba = document.getElementById('l3x');
    style_circle(rgba);
};
l4x.onclick = function(){
    r = 25;
    let rgba = document.getElementById('l4x');
    style_circle(rgba);
};

clear.onclick = function(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
};

let _menu_button = document.getElementsByClassName('menu_button');
let _paint_canvas = document.getElementsByClassName('paint_canvas');
let _img_save = document.getElementById('img_save');
let _save_img = document.getElementsByClassName('save_img');
let _saved_img = document.getElementsByClassName('saved_img');
let _info = document.getElementsByClassName("info");
save.onclick = function(){
    _menu_button[0].style.display = 'none';
    _paint_canvas[0].style.display = 'none';
    _img_save.src = canvas.toDataURL();
    _saved_img[0].style.display = 'block';
    _save_img[0].style.display = 'block';
};
back.onclick = function(){
    _saved_img[0].style.display = 'none';
    _save_img[0].style.display = 'none';
    _info[0].style.display = 'none';
    _menu_button[0].style.display = 'block';
    _paint_canvas[0].style.display = 'block';
};
info.onclick = function(){
    _menu_button[0].style.display = 'none';
    _paint_canvas[0].style.display = 'none';
    _saved_img[0].style.display = 'none';
    _save_img[0].style.display = 'none';
    _info[0].style.display = 'block';
};

canvas.onmousedown = function(e){
    let x = e.offsetX;
    let y = e.offsetY;
    canvas.onmousemove = function(e){
        x = e.offsetX;
        y = e.offsetY;
        canvas.style.cursor = 'pointer';
        console.log(x,y);
        if(t){
            if((x < 5 || y < 5) || (x > 793 || y > 393)){
                canvas.style.cursor = 'auto';
                return canvas.onmousemove = null;
            }
            else{
                ctx.beginPath();
                //ctx.fillStyle = document.getElementById("color").value;
                ctx.fillStyle = myColor;
                ctx.arc(x, y, r, 0, Math.PI*2, true);
                ctx.fill();
            }
        }
        else{
            if((x < 5 || y < 5) || (x > 793 || y > 393)){
                canvas.style.cursor = 'auto';
                return canvas.onmousemove = null;
            }
            else{
                ctx.clearRect(x, y, r, r);
            }
        }
    };
    canvas.onmouseup = function(){
        canvas.onmousemove = null;
        canvas.style.cursor = 'auto';
    };
};




