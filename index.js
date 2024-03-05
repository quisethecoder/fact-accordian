var minuss = document.getElementById("minus");




function hide(){  
   var getMe = minuss.style.display = "none";

   if (getMe){
    document.getElementById("hideMe").style.display = "none";
   }else{
    document.getElementById("showMe").style.display = "block";
   }
}

function show(){
    var showSum = minuss.style.display = "block";

    document.getElementById("hideMe").style.display = "block";
}


