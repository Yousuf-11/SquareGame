
// selection

let a = document.getElementById("id1");
a.addEventListener("mouseenter",function(){
    let x = Math.floor(Math.random()* 100);
    a.innerHTML = `<h1>${x}</h1>`;
})

a.addEventListener("mouseleave",function(){
    a.innerHTML = "<h1>1</h1>";
})

a.addEventListener("dblclick",function(){
    let x = Math.floor(Math.random() *256);
    let y = Math.floor(Math.random() *256);
    let z = Math.floor(Math.random() *256);
    a.style.backgroundColor = `rgb(${x},${y},${z})`;
})

let b = document.getElementById("id2");
let rang = "red";
b.addEventListener("mouseenter",function(){
    if(rang == "red") {
        b.style.backgroundColor = "red";
        rang = "green";
    }
    else if(rang == "green"){
        b.style.backgroundColor = "green";
        rang = "orange";
    }
    else{
        b.style.backgroundColor = "orange";
        rang = "red";
    }
})

b = document.getElementById("id2");
b.addEventListener("mouseleave",function(){
    b.style.backgroundColor = "white";
})


let c = document.getElementById("id3");
c.addEventListener("mouseenter",function(){
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    c.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
})

c.addEventListener("mouseleave",function(){
    c.style.backgroundColor = "white";
})



let d = document.getElementById("id4");
d.addEventListener("click",function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    a.style.backgroundColor = `rgb(${255},${x},${y})`
    b.style.backgroundColor = `rgb(${x},${255},${y})`
    c.style.backgroundColor = `rgb(${x},${y},${255})`
})

d.addEventListener("mouseleave",function(){
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white";
    c.style.backgroundColor = "white";
})

let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})
