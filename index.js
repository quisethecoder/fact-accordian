const paragraphOne = document.getElementById("answer-one");
const paragraphTwo = document.getElementById("answer-two");



// First Question & Answer accordian

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


// Second Question & Answer accordian

function hideTwo(){  
    var getMe = paragraphTwo.style.display = "none";
 
    document.getElementById("showMeTwo").style.display = "block";
 
    document.getElementById("hideMeTwo").style.display = "none";
 
 }

 function showTwo(){
    var showSum = paragraphTwo.style.display = "block";

    document.getElementById("hideMeTwo").style.display = "block";

    document.getElementById("showMeTwo").style.display = "none";
}