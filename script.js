/*Add your JavaScript here*/

var barbieScore =  0;
var oppenheimerScore = 0;

var questionCount= 0;

var result = document.getElementById("result")

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


  
q1a1.addEventListener("click", barbieF);
q1a2.addEventListener("click", oppenheimerF);

q2a1.addEventListener("click", barbieF);
q2a2.addEventListener("click", oppenheimerF);

q3a1.addEventListener("click", barbieF);
q3a2.addEventListener("click", oppenheimerF);

var result = document.getElementById("result")
var restart = document.getElementById("restart")

restart.addEventListener("click",repeatF)

function repeatF() {
  barbieScore = 0;
  oppenheimerScore = 0;
  questionCount = 0;
  result.innerHTML = "Your result is...";
  
}

function barbieF () {
  barbieScore +=1
  questionCount += 1

  console.log("questionCount = " + questionCount + " barbieScore = " + barbieScore);
  
  if (questionCount == 3){
  console.log("The quiz is done!")

      updateResult();
 }
}
  
function oppenheimerF () {
  oppenheimerScore+=1
  questionCount+= 1

  console.log("questionCount = " + questionCount + " oppenheimerScore = " + oppenheimerScore);

  if (questionCount == 3){
  console.log("The quiz is done!")
    updateResult();
  }
}

function updateResult (){
  if (barbieScore >=2 ) {
  result.innerHTML = "You are more Barbie"
  console.log("You are more Barbie");
} else if (oppenheimerScore >=2) {
  result.innerHTML = "You are more Oppenheimer"
  console.log("You are more Oppenheimer");
  }
}

