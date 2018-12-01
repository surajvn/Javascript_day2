function readvalues()
{
    console.log("clicked")
    var Name= document.getElementById("Name").value;
    var Mail= document.getElementById("emailid").value;
    var Password= document.getElementById("pwd").value;
    var Confirm_Password= document.getElementById("cnfpwd").value;
    var Mob= document.getElementById("mob").value;
    
    if(Password==Confirm_Password)
    {
    console.log(Name);
    console.log(Mail);
    console.log(Password);
    console.log(Confirm_Password);
    console.log(Mob);
    }
    else
    {
        console.log("password and confirm password doesnt match");
        alert("password and confirm password doesnt match");
    }


}