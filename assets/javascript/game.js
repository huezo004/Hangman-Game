<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">

      <link rel="stylesheet" type="text/css" href="hang.css">
      <link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet">
       <title>~Hang Man~</title>
    </head>
  <body  background="n44nebula.jpg">
    <div id="game" class= shift >
      <div class="main">Press any key to start playing! </div>
      <div id="guessed"></div>
      <div id="chances"></div>
      <div id="usedLettersc"></div>
    </div>
    <script type="text/javascript">

     function printUsedLetters(arr){
     var i; 
     var str=""; 
     for( i=0; i < arr.length; i++)
	 if(i === length-1)
	     str+= arr[i]; 
	 else
	     str+= arr[i] + " "; 
     return str; 
 }
     function letterInArray(l, arr){
	 var i; 
	 for( i=0; i < arr.length; i++){
	     if( l === arr[i])
		 return true;                    
	 }
	 return false;      
     }
function replaceDash(l, arr, st){        
    var i; 
    for( i=0; i < arr.length; i++){
	if(l=== arr[i]){
	    st[i]= arr[i];  
	    console.log(st[i]); 
	}
    }
    return st;                   
}
var wins=0; 
var losses=0; 
var chances=10;
var planets=["mercury", "venus", "maras", "jupiter", "saturn", "uranus", "neptune", "orion"]; 
var chosenWord= planets[Math.floor((Math.random() * planets.length) + 1)];  
var usedLetters=[]; 
//chosenWord=planets[1];  
st="_ "; 
st= st.repeat(chosenWord.length);  
//replaceDash("e", chosenWord, st); 
//console.log(st); 

document.onkeyup = function( ) {

    console.log(chosenWord); 

    var a= event.key; 
      
    if(letterInArray(a, chosenWord)=== true){

        var g="<div id= guessed class=chancesStyle >"+st+"</div>"; 
        var c = "<div id= chances class=chancesStyle > " + "Number of Options Left:" + chances + "</div>"; 
        document.querySelector("#guessed").innerHTML = g ; 
        document.querySelector("#chances").innerHTML = c ; 
    }   

    if(letterInArray(a, chosenWord) === false){
	if(letterInArray(a, usedLetters)===false  && chances > 0){
	    chances--; 
	    usedLetters.push(a); 
	    str= printUsedLetters(usedLetters); 
	    var g="<div id= guessed class=chancesStyle >"+st+"</div>"; 
	    var c = "<div id= chances class=chancesStyle > " + "Number of Options Left:" + chances + "</div>"; 
	    var a = "<div id= usedLettersc class=chancesStyle > " + "Letters used:" + str + "</div>"; 
	    document.querySelector("#guessed").innerHTML = g ; 
	    document.querySelector("#chances").innerHTML = c ; 
	    document.querySelector("#usedLettersc").innerHTML = a ; 

	    if(chances===0){
		losses++;           
		//var c = "<div id= chances class=chancesStyle >"+ "YOU LOOSE !" +  "Losses: " + losses+"</div>"; 
		var g= "<div id= gussed> </div>"; 
		var c = "<div id= chances class=chancesStyle >"+ "YOU LOOSE !" + "</div>"; 
		var a = " <div id=usedLettersc > </div>"; 
		document.querySelector("#guessed").innerHTML = g; 
		document.querySelector("#chances").innerHTML = c ; 
		document.querySelector("#usedLettersc").innerHTML = a ; 
	    }

	}             
    }
}; 
  
    </script>

  </body>
</html>      
