let btn = document.getElementById("btn");
btn.addEventListener("click",function(e)
{
    e.preventDefault();
    Valid();
})

function Valid(){
    let name = document.getElementById("name").value;
    if(name === "")
    {
        document.getElementById("nameerror").innerHTML = "Enter your name*";
    }
    else if(name.length < 7)
    {
        document.getElementById("nameerror").innerHTML = " name should contain atleast 7 characters";

    }
    else{
        document.getElementById("nameerror").innerHTML = "";

    }
    let pass = document.getElementById("password").value;
    if(pass === "")
    {
        document.getElementById("passerror").innerHTML = "Enter your password*";
    }
    else if(pass.length < 7)
    {
        document.getElementById("passerror").innerHTML = " password should contain atleast 8 characters";

    }
    else{
        document.getElementById("passerror").innerHTML = "";

    }
    let mail = document.getElementById("email").value;
    let required = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([A-Za-z]{2,5}).([A-Za-z]{2,5})?$/
    if(mail === "")
    {
        document.getElementById("emailerror").innerHTML = "enter your email*"
    }
    else if(required.test(mail))
    {
        document.getElementById("emailerror").innerHTML = ""
    }
    else{
        document.getElementById("emailerror").innerHTML = "invalid email*"
    }

    let ph = document.getElementById("phoneno").value;
    if(ph === "")
    {
        document.getElementById("phoneerror").innerHTML = "enter your Phone number";
    }
    else if(ph.length != 10)
    {
        document.getElementById("phoneerror").innerHTML = "Phone number contains only 10 digits"
    }
    else{
        document.getElementById("phoneerror").innerHTML = ""

    }
}