var paragraphOne = document.getElementById("answer-one");




function hide(){  
   var getMe = paragraphOne.style.display = "none";

   document.getElementById("showMe").style.display = "block";

   document.getElementById("hideMe").style.display = "none";

}

function show(){
    var showSum = paragraphOne.style.display = "block";

    document.getElementById("hideMe").style.display = "block";

    document.getElementById("showMe").style.display = "none";
}


