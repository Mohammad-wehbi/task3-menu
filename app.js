let total = 0;

function addEmployee()
{
    total += parseInt(document.getElementById("q1").value * 
            document.getElementById("cost1").value);
    document.getElementById("out").innerHTML= 
            "Total amount of  : " + total; 
        var itemTable=document.getElementsByTagName("table")[0];           
        var item=document.getElementsByTagName("input")[1];
        var quant=document.getElementsByTagName("input")[2];
            
        var itemRow=document.createElement("tr");
        var itemCell=document.createElement("td");
        var quantCell=document.createElement("td");
        var costCell=document.createElement("td");            
            
        itemCell.innerHTML=item.value;
        quantCell.innerHTML=quant.value;
        costCell.innerHTML=quant.value * 
        document.getElementById("cost1").value;            
            
        itemRow.appendChild(itemCell);
        itemRow.appendChild(quantCell);
        itemRow.appendChild(costCell);            
            
        itemTable.appendChild(itemRow);
        item.value="";
        quant.value="";        
}
function size1(x){
    {
        x.style.width = "600px";  
        x.style.borderColor="blue";          
    }

    function size2(x)
    {
        x.style.width = "400px";
        x.style.borderColor="black";
    }        
    function size2(x)
    {
        x.style.width = "400px";
        x.style.borderColor="black";
    }   
}