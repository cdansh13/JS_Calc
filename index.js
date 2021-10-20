function add(){
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
    output = a + b;
    console.log("Working") 
    // console.log(a) 
    console.log(b) 
    
    document.getElementById("out").innerHTML= a + b;
}
function sub(){
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
    output = a + b;
    console.log("Working") 
    // console.log(a) 
    console.log(b) 
    
    document.getElementById("out").innerHTML= a - b;
}
function mul(){
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
    output = a + b;
    console.log("Working") 
    // console.log(a) 
    console.log(b) 
    
    document.getElementById("out").innerHTML= a * b;
}
function div(){
    let a=parseInt(document.getElementById("num1").value);
    let b=parseInt(document.getElementById("num2").value);
    output = a + b;
    console.log("Working") 
    // console.log(a) 
    console.log(b) 
    
    document.getElementById("out").innerHTML= a / b;
} 
function BgColor() {
    // var element=document.getElementById("cont");
    let d = document.getElementById("fid1");
    let e = document.getElementById("fid2");
    let element = document.getElementById("cont");
    document.getElementById("btn").className = "btn btn-outline-primary btnC";
    document.getElementById("btn1").className = "none";
    let f = document.getElementById("btn5");
    document.getElementById("btn2").className = "btn btn-outline-primary mx-5";
    document.getElementById("btn3").className = "btn btn-outline-primary mx-5";
    document.getElementById("btn4").className = "btn btn-outline-primary mx-5";
    let a = document.getElementById("dev");
    let b = document.getElementById("heading");
    let c = document.getElementById("out");
    a.style.color="white";
    b.style.color="white";
    c.style.color="white";
    d.style.color="white";
    e.style.color="white";
    f.style.display="flex";
    element.style.backgroundColor="black";

}
function reloadIt(){
    location.reload();
}
