var nomPE1 = "a";
var genPE1 = "ae";
var datPE1 = "ae";
var accPE1 = "am";
var ablPE1 = "ā";
var vocPE1 = "a";

var nomPE1Pl = "ae";
var genPE1Pl = "ãrum";
var datPE1Pl = "īs";
var accPE1Pl = "ãs";
var ablPE1Pl = "īs";
var vocPE1Pl = "ae";


		var pres1stSing = "o";
		var pres2ndSing = "s";
		var pres3rdSing = "t";
		var pres1stPl = "mus";
		var pres2ndPl = "tis";
		var pres3rdPl = "nt";

		var imp3rdSing = "bat";
		var imp3rdPl = "bant";

		var fut3rdSing = "bat";
		var fut3rdPl = "bant";

		var per3rdSing = "vit";
		var per3rdPl = "vērunt";

		var pluPer3rdSing = "verat";
		var pluPer3rdPl = "verant";

		var futPer3rdSing = "verit";
		var futPer3rdPl = "verint";

//var randomTenseIndex = Math.floor(Math.random() * 2;


var randomNounIndex = 0;
var randomObjectIndex = 0;
var randomVerbIndex = 0;
var ranIndex = 0;

///if randomSentenceIndex  = 1



var randomSerpensAIndex = 0;
var correctAnswer = 0;
var wrongAnswer = 0;




var randomSerpensBIndex = 0;
var correctAnswer1 = 0;
var wrongAnswer1 = 0;



var randomSerpensCIndex = 0;
var correctAnswer2 = 0;
var wrongAnswer2 = 0;

var num_questions = 5;
var count = 0;

function incrementCount(){
	count++;
}

function setRandomSerpIndices(){

	randomSerpensAIndex = Math.floor(Math.random() * 2);
	correctAnswer = randomSerpensAIndex;
	wrongAnswer = randomSerpensAIndex;

	randomSerpensBIndex = Math.floor(Math.random() * 2);
	correctAnswer1 = randomSerpensBIndex;
	wrongAnswer1 = randomSerpensBIndex;

	randomSerpensCIndex = Math.floor(Math.random() * 2);
	correctAnswer2 = randomSerpensCIndex;
	wrongAnswer2 = randomSerpensCIndex;
}



//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var serBtnA = get("serBtnA");
    var serBtnB = get("serBtnB");
    var serBtnC = get("serBtnC");

    var serBtnA1 = get("serBtnA1");
    var serBtnB2 = get("serBtnB2");
    var serBtnC3 = get("serBtnC3");



    var responseButton = get("responseButton");
    var responseNext = get("responseNext");





//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "Serpentine";}

function gameTitle() {get("startButton").innerHTML = "Start the Game!";}





//This loads the names of the games

    appName();
    //gameTitle();


function resetColors(){

		serBtnA.style.backgroundColor = "white";
		serBtnA.style.border = "white";
		serBtnA.style.color = "black";
		serBtnA.disabled =false;
		document.getElementById("serpensA").style.backgroundColor = "white";

		serBtnA1.style.color = "black";
		serBtnA1.style.backgroundColor = "white";
		serBtnA1.style.border = "white";
		serBtnA1.disabled = false;
		document.getElementById("serpensA1").style.backgroundColor = "white";



		serBtnB.style.backgroundColor = "white";
		serBtnB.style.border = "white";
		serBtnB.style.color = "black";
		serBtnB.disabled =false;
		document.getElementById("serpensB").style.backgroundColor = "white";

		serBtnB2.style.color = "black";
		serBtnB2.style.backgroundColor = "white";
		serBtnB2.style.border = "white";
		serBtnB2.disabled = false;
		document.getElementById("serpensB2").style.backgroundColor = "white";


		serBtnC.style.backgroundColor = "white";
		serBtnC.style.border = "white";
		serBtnC.style.color = "black";
		serBtnC.disabled =false;
		document.getElementById("serpensC").style.backgroundColor = "white";

		serBtnC3.style.color = "black";
		serBtnC3.style.backgroundColor = "white";
		serBtnC3.style.border = "white";
		serBtnC3.disabled = false;
		document.getElementById("serpensC3").style.backgroundColor = "white";

		responseButton.innerHTML = "";
		responseButton.style.color = "";

}


var correctAns = 0;
var correctAnswerTotal = 1;








//Score variables and functions



    var points = 0;

    var pointsPerCorrectAnswer = 10;



    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }


 //Timer variables
	var timeleft = 20;
	var countdown = setInterval(x,1000);



 	function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			resetColors();
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
    			correctAns = 0;


  }

}



function stopTimer() {


	clearInterval(countdown);


}


function resetTimer(){

	if (correctAns >= 3){
	resetColors();
	stopTimer();
	timeleft = 20;
	document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;

    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Optime!"
    			responseButton.style.color = "yellow";
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
	correctAns = 0;
}
}



function enableButtons(){

	serBtnA.disabled = false;
	serBtnB.disabled = false;
	serBtnC.disabled = false;

	serBtnA1.disabled = false;
	serBtnB2.disabled = false;
	serBtnC3.disabled = false;


}

function disableButtons(){
	serBtnA.disabled = true;
	serBtnB.disabled = true;
	serBtnC.disabled = true;

	serBtnA1.disabled = true;
	serBtnB2.disabled = true;
	serBtnC3.disabled = true;
}




function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



function serpentineTwo () {

	var randomSentenceIndex = Math.floor(Math.random() * 2);

if (randomSentenceIndex == 0){
	serpens();
} else if (randomSentenceIndex == 1){
	serpentine();
}
}























function serpens() {

countDownTimer();
timeleft = 20;
countdown = setInterval(countDownTimer,1000);


resetColors();
setRandomSerpIndices();
enableButtons();
startButton.disabled = true;






class Noun{

 constructor(nounForms){
 this.nounForm = nounForms;
 }
}

var randomTenseIndex = Math.floor(Math.random() * 3);

//This sets the correct subject in serpensA
var subjectArray = [["puella", "puell", "girl"], ["femina", "femin", "woman"],["agricola", "agricol", "farmer"], ["poeta", "poet", "poet"], ["ancilla", "ancill", "maid servant"], ["nauta", "naut", "sailor"]];
var randomNounIndex = Math.floor(Math.random() * subjectArray.length);
newSubject = new Noun(subjectArray[randomNounIndex][0]);
subject = newSubject.nounForm;


//This sets the false subject in serpensA1
falseSubject = new Noun(subjectArray[randomNounIndex][1]);
fakeSubject = falseSubject.nounForm + accPE1;
get("serBtnA1").innerHTML = fakeSubject;

//This randomizes the serpensA and serpensA1



if (randomSerpensAIndex == 0) {
 get("serBtnA").innerHTML = subject;
 get("serBtnA1").innerHTML = fakeSubject;

} else {
 get("serBtnA1").innerHTML = subject;
 get("serBtnA").innerHTML = fakeSubject;

}





//This sets the correct subject in serpensB
var objectArray = [["puella", "puell", "girl"], ["agricola", "agricol", "farmer"], ["filia", "fili", "daughter"], ["femina", "femin", "woman"],["ancilla", "ancill", "maid servant"], ["nauta", "naut", "sailor"]];
var randomObjectIndex = Math.floor(Math.random() * objectArray.length);
newObject = new Noun(objectArray[randomObjectIndex][1]);
object = newObject.nounForm +accPE1;
get("serBtnB").innerHTML = object;


//This sets the fake object in serpensB2
falseObject = new Noun(objectArray[randomObjectIndex][0]);
fakeObject = falseObject.nounForm;
get("serBtnB2").innerHTML = fakeObject;


//This randomizes serpensB and serpensB2


if (randomSerpensBIndex == 0) {
 get("serBtnB").innerHTML = object;
 get("serBtnB2").innerHTML = fakeObject;
} else {
 get("serBtnB2").innerHTML = object;
 get("serBtnB").innerHTML = fakeObject;
}




class Verb{
 constructor(verbForms){
	 this.verbForm = verbForms;
 }
}

//The sets the correct verb in serpensC
var verbArray = [["amo", "ama", "loves","loved", "was loving"], ["neco", "neca", "kills","killed", "was killing"],["pugno", "pugna", "fights", "fought", "was fighting"], ["servo", "serva", "saves","saved", "was saving"], ["specto", "specta", "watches", "watched", "was watching"]];
var randomVerbIndex = Math.floor(Math.random() * verbArray.length);

if (randomTenseIndex == 0){

newVerb = new Verb(verbArray[randomVerbIndex][1]);
verb = newVerb.verbForm + pres3rdSing;

falseVerb = new Verb(verbArray[randomVerbIndex][1]);
fakeVerb = falseVerb.verbForm + imp3rdSing;

} else if (randomTenseIndex == 1){

	newVerb = new Verb(verbArray[randomVerbIndex][1]);
	verb = newVerb.verbForm + per3rdSing;

	falseVerb = new Verb(verbArray[randomVerbIndex][1]);
	fakeVerb = falseVerb.verbForm + pres3rdSing;

} else if (randomTenseIndex == 2){

	newVerb = new Verb(verbArray[randomVerbIndex][1]);
	verb = newVerb.verbForm + imp3rdSing;

	falseVerb = new Verb(verbArray[randomVerbIndex][1]);
	fakeVerb = falseVerb.verbForm + per3rdSing;

}



get ("serBtnC").innerHTML = verb;

//This sets the fake verb in serpensC3

get ("serBtnC3").innerHTML = fakeVerb;


if (randomSerpensCIndex == 0) {
 get("serBtnC").innerHTML = verb;
 get("serBtnC3").innerHTML = fakeVerb;
} else {
 get("serBtnC3").innerHTML = verb;
 get("serBtnC").innerHTML = fakeVerb;
}



//This prints the correct subject in the sentence
subjectTranslation = new Noun(subjectArray[randomNounIndex][2]);
subjectTranslation = subjectTranslation.nounForm;


//This sets the correc verb translaiton in the sentence
verbTranslation = new Verb(verbArray[randomVerbIndex][2]);
verbTranslation = verbTranslation.verbForm;

//This sets the correc verb translaiton in the sentence
verbTranslationTwo = new Verb(verbArray[randomVerbIndex][3]);
verbTranslationTwo = verbTranslationTwo.verbForm;

//This sets the correc verb translaiton in the sentence
verbTranslationThree = new Verb(verbArray[randomVerbIndex][4]);
verbTranslationThree = verbTranslationThree.verbForm;


//This prints the direct object in the sentence
objectTranslation = new Noun(objectArray[randomObjectIndex][2]);
objectTranslation = objectTranslation.nounForm;






if (randomTenseIndex == 0) {
function sentence(){
 get("startButton").innerHTML = "The " + subjectTranslation + " " + verbTranslation + " " + "the " + objectTranslation + ".";
}

sentence();

} else if (randomTenseIndex == 1) {

	function sentenceTwo(){
	 get("startButton").innerHTML = "The " + subjectTranslation + " " + verbTranslationTwo + " " + "the " + objectTranslation + ".";
	}

	sentenceTwo();

} else if (randomTenseIndex == 2) {

	function sentenceThree(){
	 get("startButton").innerHTML = "The " + subjectTranslation + " " + verbTranslationThree + " " + "the " + objectTranslation + ".";
	}

	sentenceThree();

}




incrementCount();



//responseButton.innerHTML = count;

if (count > num_questions) {
 resetColors();
 serBtnA.innerHTML = "";
 serBtnB.innerHTML = "";
 serBtnC.innerHTML = "";

 serBtnA1.innerHTML = "";
 serBtnB2.innerHTML = "";
 serBtnC3.innerHTML = "";


 startButton.innerHTML = "Click to play again!"
 startButton.disabled = false;
 count = 0;
 document.getElementById("boxThree").innerHTML = "Score";
 responseButton.innerHTML = "Try to beat your score of " + points + " points!";
	 points = 0;

 stopTimer();
 document.getElementById("boxOne").innerHTML = "Timer";

}




}





function serpentine() {

countDownTimer();
timeleft = 20;
countdown = setInterval(countDownTimer,1000);


resetColors();
setRandomSerpIndices();
enableButtons();
startButton.disabled = true;


class Noun{

 constructor(nounForms){
 this.nounForm = nounForms;
 }
}


//This sets the correct subject in serpensA
var subjectArray = [["puella", "puell", "girl"], ["agricola", "agricol", "farmer"], ["poeta", "poet", "poet"], ["ancilla", "ancill", "maid servant"], ["nauta", "naut", "sailor"]];
var randomNounIndex = Math.floor(Math.random() * subjectArray.length);
newSubject = new Noun(subjectArray[randomNounIndex][0]);
subject = newSubject.nounForm;


//This sets the false subject in serpensA1
falseSubject = new Noun(subjectArray[randomNounIndex][1]);
fakeSubject = falseSubject.nounForm + accPE1;
get("serBtnA1").innerHTML = fakeSubject;

//This randomizes the serpensA and serpensA1



if (randomSerpensAIndex == 0) {
 get("serBtnA").innerHTML = subject;
 get("serBtnA1").innerHTML = fakeSubject;

} else {
 get("serBtnA1").innerHTML = subject;
 get("serBtnA").innerHTML = fakeSubject;

}





//This sets the correct subject in serpensB
var objectArray = [["puella", "puell", "girl"], ["agricola", "agricol", "farmer"], ["filia", "fili", "daughter"], ["ancilla", "ancill", "maid servant"], ["nauta", "naut", "sailor"]];
var randomObjectIndex = Math.floor(Math.random() * objectArray.length);
newObject = new Noun(objectArray[randomObjectIndex][1]);
object = newObject.nounForm +accPE1;
get("serBtnB").innerHTML = object;


//This sets the fake object in serpensB2
falseObject = new Noun(objectArray[randomObjectIndex][0]);
fakeObject = falseObject.nounForm;
get("serBtnB2").innerHTML = fakeObject;


//This randomizes serpensB and serpensB2


if (randomSerpensBIndex == 0) {
 get("serBtnB").innerHTML = object;
 get("serBtnB2").innerHTML = fakeObject;
} else {
 get("serBtnB2").innerHTML = object;
 get("serBtnB").innerHTML = fakeObject;
}




class Verb{
 constructor(verbForms){
	 this.verbForm = verbForms;
 }
}

//The sets the correct verb in serpensC
var verbArray = [["amo", "ama", "loved"], ["pugno", "pugna", "fought"], ["servo", "serva", "saved"], ["specto", "specta", "watched"]];
var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
newVerb = new Verb(verbArray[randomVerbIndex][1]);
verb = newVerb.verbForm + per3rdSing;
get ("serBtnC").innerHTML = verb;

//This sets the fake verb in serpensC3
falseVerb = new Verb(verbArray[randomVerbIndex][1]);
fakeVerb = falseVerb.verbForm + pres3rdSing;
get ("serBtnC3").innerHTML = fakeVerb;


if (randomSerpensCIndex == 0) {
 get("serBtnC").innerHTML = verb;
 get("serBtnC3").innerHTML = fakeVerb;
} else {
 get("serBtnC3").innerHTML = verb;
 get("serBtnC").innerHTML = fakeVerb;
}



//This prints the correct subject in the sentence
subjectTranslation = new Noun(subjectArray[randomNounIndex][2]);
subjectTranslation = subjectTranslation.nounForm;


//This sets the correc verb translaiton in the sentence
verbTranslation = new Verb(verbArray[randomVerbIndex][2]);
verbTranslation = verbTranslation.verbForm;

//This prints the direct object in the sentence
objectTranslation = new Noun(objectArray[randomObjectIndex][2]);
objectTranslation = objectTranslation.nounForm;




function sentence(){
 get("startButton").innerHTML = "The " + subjectTranslation + " " + verbTranslation + " the " + objectTranslation + ".";
}

sentence();

incrementCount();



//responseButton.innerHTML = count;

if (count > num_questions) {
 resetColors();
 serBtnA.innerHTML = "";
 serBtnB.innerHTML = "";
 serBtnC.innerHTML = "";

 serBtnA1.innerHTML = "";
 serBtnB2.innerHTML = "";
 serBtnC3.innerHTML = "";


 startButton.innerHTML = "Click to play again!"
 startButton.disabled = false;
 count = 0;
 document.getElementById("boxThree").innerHTML = "Score";
 responseButton.innerHTML = "Try to beat your score of " + points + " points!";
	 points = 0;

 stopTimer();
 document.getElementById("boxOne").innerHTML = "Timer";

 }

}

function serpensShuffle(){


	var mixUp = [serpens, serpentine];
	var randomSerpIndex = Math.floor(Math.random() * mixUp.length);

	mixUp[randomSerpIndex]();

}















function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }







   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}











function clickedButton1(){


	if (correctAnswer == 0){
		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnA.style.backgroundColor = "yellow";
		serBtnA.style.border = "yellow";
		document.getElementById("serpensA").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		resetTimer();


	}

if (wrongAnswer == 1){

		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";


	}





}


function clickedButton2(){

	if (wrongAnswer == 0){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

if (correctAnswer == 1){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		responseButton.innerHTML = correctAns;
		document.getElementById("boxThree").innerHTML = points;


		serBtnA1.style.backgroundColor = "yellow";
		serBtnA1.style.border = "yellow";
		document.getElementById("serpensA1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		resetTimer();

	}


}












function gameOverAudio(){
			var gameOverAudio = document.getElementById("gameOverAudio");
			gameOverAudio.play();
								}

 function correctAnswerAudio(){
			var correctAnswerAudio = document.getElementById("correctAnswerAudio");
			correctAnswerAudio.play();
								}

function wrongAnswerAudio(){
			var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
			wrongAnswerAudio.play();
								}







	function resetAnswerColors(){

 A1.style.backgroundColor = "white";
 A2.style.backgroundColor = "white";
 A3.style.backgroundColor = "white";
 A4.style.backgroundColor = "white";

 answerOne.style.backgroundColor = "white";
 answerTwo.style.backgroundColor = "white";
 answerThree.style.backgroundColor = "white";
 answerFour.style.backgroundColor = "white";

 answerOne.style.color = "black";
 answerTwo.style.color = "black";
 answerThree.style.color = "black";
 answerFour.style.color = "black";

}











function clickedButton1(){


 if (correctAnswer == 0){
	 correctAnswerAudio();
	 //clickedCorrectAnswerOneAudio ();
	 points += pointsPerCorrectAnswer;
	 correctAns += correctAnswerTotal;
	 document.getElementById("boxThree").innerHTML = points;

	 serBtnA.style.backgroundColor = "yellow";
	 serBtnA.style.border = "yellow";
	 document.getElementById("serpensA").style.backgroundColor = "yellow";


	 responseButton.innerHTML = "Bene!";
	 responseButton.style.color = "yellow";


	 serBtnA1.style.color = "red";
	 serBtnA1.style.backgroundColor = "black";
	 serBtnA1.style.border = "black";
	 serBtnA1.disabled = true;
	 document.getElementById("serpensA1").style.backgroundColor = "black";

	 resetTimer();


 }

if (wrongAnswer == 1){

	 wrongAnswerAudio();
	 points -= pointsPerCorrectAnswer/2;
	 document.getElementById("boxThree").innerHTML = points;



	 serBtnA.style.color = "red";
	 serBtnA.style.backgroundColor = "black";
	 serBtnA.style.border = "black";
	 serBtnA.disabled = true;
	 document.getElementById("serpensA").style.backgroundColor = "black";
	 responseButton.style.color = "black";

	 responseButton.innerHTML = "Eheu!";


 }





}


function clickedButton2(){

 if (wrongAnswer == 0){
	 wrongAnswerAudio();
	 points -= pointsPerCorrectAnswer/2;
	 document.getElementById("boxThree").innerHTML = points;



	 serBtnA1.style.color = "red";
	 serBtnA1.style.backgroundColor = "black";
	 serBtnA1.style.border = "black";
	 serBtnA1.disabled = true;
	 document.getElementById("serpensA1").style.backgroundColor = "black";
	 responseButton.style.color = "black";

	 responseButton.innerHTML = "Eheu!";

 }

if (correctAnswer == 1){

	 correctAnswerAudio();
	 //clickedCorrectAnswerTwoAudio();
	 points += pointsPerCorrectAnswer;
	 correctAns += correctAnswerTotal;
	 responseButton.innerHTML = correctAns;
	 document.getElementById("boxThree").innerHTML = points;


	 serBtnA1.style.backgroundColor = "yellow";
	 serBtnA1.style.border = "yellow";
	 document.getElementById("serpensA1").style.backgroundColor = "yellow";

	 responseButton.innerHTML = "Bene!";
	 responseButton.style.color = "yellow";


	 serBtnA.style.color = "red";
	 serBtnA.style.backgroundColor = "black";
	 serBtnA.style.border = "black";
	 serBtnA.disabled = true;
	 document.getElementById("serpensA").style.backgroundColor = "black";

	 resetTimer();

 }


}






function clickedButton3(){

	if (correctAnswer1 == 0){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB.style.backgroundColor = "yellow";
		serBtnB.style.border = "yellow";
		document.getElementById("serpensB").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		resetTimer();

	}

if (wrongAnswer1 == 1){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton4(){

	if (wrongAnswer1 == 0){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;


		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

if (correctAnswer1 == 1){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB2.style.backgroundColor = "yellow";
		serBtnB2.style.border = "yellow";
		document.getElementById("serpensB2").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		resetTimer();
	}


}







function clickedButton5(){

	if (correctAnswer2 == 0){

		correctAnswerAudio();
		//clickedCorrectAnswerFiveAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;

		document.getElementById("boxThree").innerHTML = points;

		serBtnC.style.backgroundColor = "yellow";
		serBtnC.style.border = "yellow";
		document.getElementById("serpensC").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";



		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";

		resetTimer();
	}

if (wrongAnswer2 == 1){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton6(){

	if (wrongAnswer2 == 0){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

if (correctAnswer2 == 1){

		correctAnswerAudio();
		//clickedCorrectAnswerSixAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;


		document.getElementById("boxThree").innerHTML = points;

		serBtnC3.style.backgroundColor = "yellow";
		serBtnC3.style.border = "yellow";
		document.getElementById("serpensC3").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";



		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		resetTimer();
	}


}
