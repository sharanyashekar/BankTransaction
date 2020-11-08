
var avbal=document.getElementById("a").innerHTML;

document.getElementById("btn").addEventListener("click",()=>
    {

var dropdown=document.getElementById("dropdown").value;
var desc=document.getElementById("a2").value;
var val=document.getElementById("a3").value;
var deposit=document.getElementById("dep").innerHTML;
var withdraw=document.getElementById("wid").innerHTML;

if(dropdown=="DEPOSIT")
{
    
    if(val==0)
    {
        alert("Deposit not possible as amount is less than 0 ")
    }
        else if(val>0)
        {
            avbal=Number(avbal)+Number(val);
            document.getElementById("a").innerHTML=+avbal;
            deposit=Number(deposit)+Number(val);
            document.getElementById("dep").innerHTML=deposit;

        }
    else {
        alert("Deposit cannot be done with negative values ")   
    }
    document.getElementById("depdesc").addEventListener("click",()=>
    {
        var linode=document.createElement("li")
        
        var textnode=document.createTextNode(new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear()+" " +desc+" "+val)
        linode.appendChild(textnode)
        var element=document.getElementById("depositdescription")
        element.appendChild(linode)
   
    })

    }


    else if(dropdown=="WITHDRAW"){
       
        if(val<=0)
        {
            alert("withdrawal amount should not be zero and negative value")
        }   
        else if(val>0)
            {
             if(val>avbal)
            {

                alert("withdrawal should be less than availabale balance")
         
           
             }

             else {
                avbal=avbal-val;
        document.getElementById("a").innerHTML=+avbal;
         withdraw=Number(withdraw)+Number(val);
         document.getElementById("wid").innerHTML=withdraw;
            }
            
        }
        
else {
alert("some error occured during Withdrawal,please try again")
}  
document.getElementById("wddesc").addEventListener("click",()=>
    {
        var linode=document.createElement("li")
        
        var textnode=document.createTextNode(new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear()+" " +desc+" "+val)
        linode.appendChild(textnode)
        var element=document.getElementById("withdrawdescription")
        element.appendChild(linode)
   
    })


    }
else alert("Select any one option")
 
})    