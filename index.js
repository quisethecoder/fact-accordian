const paragraphOne = document.getElementById("answer-one");
const paragraphTwo = document.getElementById("answer-two");
const paragraphThree = document.getElementById("answer-three");
const paragraphFour = document.getElementById("answer-four");

gsap.to(".h", { y: 50, duration: 1, yoyo: true, repeat: -1 });
gsap.to(".q", { y: 40, duration: 1, yoyo: true, repeat: -1 });
gsap.to(".w", { y: 30, duration: 1, yoyo: true, repeat: -1 });
gsap.to(".e", { y: 20, duration: 1, yoyo: true, repeat: -1 });
gsap.to(".r", { y: 10, duration: 1, yoyo: true, repeat: -1 });
gsap.to(".y", { y: -10, duration: 1, yoyo: true, repeat: -1 });




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
 
 };

 function showTwo(){
    var showSum = paragraphTwo.style.display = "block";

    document.getElementById("hideMeTwo").style.display = "block";

    document.getElementById("showMeTwo").style.display = "none";
};

// Third Question & Answer accordian

function hideThree(){
    var getMe = paragraphThree.style.display = "none";

    document.getElementById("showMeThree").style.display = "block";

    document.getElementById("hideMeThree").style.display = "none";
};



function showThree(){
    var showSum = paragraphThree.style.display = "block";

    document.getElementById("hideMeThree").style.display = "block";

    document.getElementById("showMeThree").style.display = "none";
};

// fourth Question & Answer accordian

function hideFour(){
    var getMe = paragraphFour.style.display = "none";

    document.getElementById("showMeFour").style.display = "block";

    document.getElementById("hideMeFour").style.display = "none";

};

function showFour(){
    var showSum = paragraphFour.style.display = "block";

    document.getElementById("hideMeFour").style.display = "block";

    document.getElementById("showMeFour").style.display = "none";

};

