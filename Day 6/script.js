// function changename()
// {
//     document.getElementById("sr").innerHTML="Sri Rajeshwara University";
// }
// function undoname()
// {
//     document.getElementById("sr").innerHTML="SR University";
// }
function add()
{
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    let result=parseFloat(a)+parseFloat(b);
    document.getElementById("result").innerHTML=result;
}
  

function sub()
{
    let a=document.getElementById("num1").value;        
    let b=document.getElementById("num2").value;
    let result=parseFloat(a)-parseFloat(b);
    document.getElementById("result").innerHTML=result;
}

function mul()
{
    let a=document.getElementById("num1").value;        
    let b=document.getElementById("num2").value;
    let result=parseFloat(a)*parseFloat(b);
    document.getElementById("result").innerHTML=result;
}   
function div()
{
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    let result=parseFloat(a)/parseFloat(b);
    document.getElementById("result").innerHTML=result;
}