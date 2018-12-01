function add()
{
 var a= document.getElementById("num1").value;
 var b= document.getElementById("num2").value;
 var c=parseInt(a)+parseInt(b);
 
 console.log(c)

 document.getElementById("result").innerHTML="<b>"+c+"</b>";

}
