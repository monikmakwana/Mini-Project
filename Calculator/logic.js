function write_this(val) 
{     
    show=document.getElementById("result").value;
    if(show==0)
    {
        document.getElementById("result").value="";
    } 
    document.getElementById("result").value+=val; 
    
} 

function clr() 
{ 
    document.getElementById("result").value = "0"; 
}

function calculation()
{ 
    x=document.getElementById("result").value;
    y=eval(x);
    document.getElementById("result").value=y;
}


function back() 
{
    var val = document.getElementById("result").value;
    if(val==0)
    {
        document.getElementById("result").value = "0"; 
    }
    else
    {
        document.getElementById("result").value = val.substr(0, val.length - 1);
    }
}