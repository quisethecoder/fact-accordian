var minuss = document.getElementById("minus");




function hide(){  
   var getMe = minuss.style.display = "none";

   document.getElementById("showMe").style.display = "block";

   document.getElementById("hideMe").style.display = "none";

}

function show(){
    var showSum = minuss.style.display = "block";

    document.getElementById("hideMe").style.display = "block";

    document.getElementById("showMe").style.display = "none";
}


