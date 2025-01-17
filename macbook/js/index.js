btn=document.getElementsByTagName("button");

//console.log(btn);
function total(){
    return 1299+parseInt(document.getElementById("memory-cost").textContent)+parseInt(document.getElementById("storage-cost").textContent)+parseInt(document.getElementById("delivery-cost").textContent);
}
function customPrice(id, cost){
    document.getElementById(id).textContent=cost;
    let price=total();
    console.log(price);
    document.getElementById("total-price").textContent=total();
    document.getElementById("user-payment").textContent=total();
    
}
function promocode(id){
    code=document.getElementById(id).value;
    console.log(code);
    if(code=="Ostad"){
        k=parseInt(document.getElementById("total-price").textContent);
        document.getElementById("user-payment").textContent=k-k*0.1;
    }
}
for(let i =0; i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        if(btn[i].id=="8gb-memory"){
            customPrice("memory-cost",0);
        }
        else if(btn[i].id=="16gb-memory"){
            customPrice("memory-cost",200);
        }
        else if(btn[i].id=="256gb-storage"){
            customPrice("storage-cost",0);
        }
        else if(btn[i].id=="512gb-storage"){
            customPrice("storage-cost",200);
        }
        else if(btn[i].id=="1tb-storage"){
            customPrice("storage-cost",500);
        }
        if(btn[i].id=="late-delivery"){
            customPrice("delivery-cost",0);
        }
        else if(btn[i].id=="early-delivery"){
            customPrice("delivery-cost",20);
        }
        else if(btn[i].id=="apply-btn"){
            promocode("input-field");
        }
        
        
    }


);


}