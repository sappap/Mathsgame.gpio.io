
//here will check clicking function of an answer box.

// here we need to check wronganswer = wronganswer [in an option no repeattation of wrong answer], so here need to use of an 'array' statement.

//this script will generate random value of x and y  on Math calculator display, with1 correct answer,3 wrong answer options

//if we are click on start/reset [need to use startgame-'id' from html file for js]

var playing = false; //set variable
var score;
var action;
var timeremaining;
var correctAnswer;
var wrongAnswer;

document.getElementById("startreset").onclick =
    function(){
        
    
    if(playing==true) {
    //if we are playing then page must reload
         location.reload();
        //relaod page
    }
    
    else{
      //if we are not playing  :
        
        //this condition need to follow
        
        //if we are not playing (need to take few action):

        // at last to change mode to playings
        playing =true;
   // set score to 0 {for that need to define 'score' variable}
        
        score=0;
        
       // {need to change score value using id which is in span in html}
        
        document.getElementById("scorevalue").innerHTML = score;
        
        
  //show countdown box {by id 'timereamaining' in html, display property, display to block [initially set to hide/none in html]} shows 60sec now.
        
        document.getElementById("timeremaining").style.display = "block";
        
        show("timeremaining");
        
        timeremaining = 60;
        
        //need to change time 60,59 using .innehtml =var[timeremaining]
        
        document.getElementById("time-remaining-value").innerHTML = timeremaining
        
        //change innerhtml of button to start game button using id in html file. change 'start' button to ="reset game"
        
        //hide game over box
        
        hide("gameover")
        
        document.getElementById("startreset").innerHTML = "Reset-Game"
        
        //here call function, but define from line 58
        
        
        //function start countdown
        
        startCountdown();
        
        
        
    //start countdown of timer, need to make a 'function' with 'functioname'; inside function bracket need to make all function code to reduce no by1 evry sec 
    //using counter 'setInterval (function(){decerse by 1sec, by set varibale and dispaly},1000ms=1sec,)'. but nned to know intial value of timeremaining=60sec
        
        
        
        
//here will check clicking function of an answer box.//2ND CASE: if we click on answer box 
  //if we are playing
     //if correct?
    // if yes-->
       //increase score by 1.
       //show correct box for 1 sec
       //generate new Q&A.

   //if ans is wrong
   //show try again box for 1 sec
        
        
 
        generateQA();
        //function 
        
        //start counter
        
   }

//clicking on anser box

for (i=1; i<5 ; i++){
    
    //for all boxes
    
    
    document.getElementById("box" + i ).onclick = function(){
    
    //check if we are playing 
    
    if(playing == true){ //yes
        
        
        if( this.innerHTML == correctAnswer){ //check ans correct or not a ces inner html of box and compare with var correcYAnswer
           
//            if( document.getElementById("box1")) or use this to click on,coorectanser increse score by1 and dispaly on box by inner html
            
            score ++ ;
            
            document.getElementById("scorevalue").innerHTML = score; // increse score by 1 and dispaly on box by inner html.
        
           
        // NEXT SHOW CORRECT BOX AND HIDE WRONG BOX, betweenn= 1 sec  show of a box use, function to hide correct msg after 1 sec
            
            
            hide("wrong");
            show("correct");
            
//            setTimeout(function(){}, 1000ms)
            
             setTimeout(function(){
                 
                 hide("correct"); // after 1 sec need to hide correct box 
                 
             }, 1000)
            
            
            //now generate next question if ans correct, using fucntion generate
            
            generateQA();
            
            
           } else{ //if we have wrong answer, show try again box for 1 sec, hide correct box, show hide box and shiw wrong box hie after 1sec
               
               
                hide("correct");
            show("wrong");
               
               setTimeout(function(){
                 
                 hide("wrong"); //1 sec need to hidewrong box after 1sec
                 
             }, 1000)
               
           }
    }
    
}



}













//    
//        
        
      function startCountdown(){
          
          action = setInterval(function(){
                               
                               timeremaining -= 1; 
                                         
              
        document.getElementById("time-remaining-value").innerHTML = timeremaining; 
              
              
              
              //timeremaining goes to negative so need to set below condition:
              
              
              if(timeremaining ==0){ //shows game over, but first stop counter using clearInterval(with parameter= variable of setInterval )
                  
                 // clearInterval(action); place in function below 84
                  
                  stopCountdown();
                  //call function to stop at 0 sec time reamining, once stopcountdown nned to show game over msg, so make div visible, using'.display'
                  
                  show("gameover");
                  
                  //document.getElementById("gameover").style.display="block";
                  
                  //also nned to change in inner html of a pargarph
                  
                  document.getElementById("gameover").innerHTML= "<p> Game over!</p> <p>your score is" + score + "</p>" ;
                  
                  //once game is over  we need to disappear box of 'game over' using id 'timeremaining'
                  
                  //document.getElementById("timeremaining").style.display= "none";
                  
                  hide("timeremaining");
                  //when game over box apper need to disapper 'try again' and 'coorect box' using function 1 function for appear-110 , 1 function for hide.-115
                  
                  hide("correct");
                  
                  hide("wrong");
                  
                  //after that change to 'non playing mode'
                  
                  playing= false; //game over display need to chnage into start game
                  
                  document.getElementById("startreset").innerHTML ="Start Game"; //text change to button start game
              }
              
              
                               }, 1000);
          
      }
        //stop couunter
        
        function stopCountdown(){
            
            
            clearInterval(action);
            
        }
        
        
        //hide an element
        
        function hide(Id){
            
            document.getElementById(Id).style.display="none"
        }
        
        // function show an element
        
           function show(Id){
            
            document.getElementById(Id).style.display="block"
        }
        

function generateQA(){
    
//    10*Math.random()= Math.random gives the no. between 0 to 1, mul by 10 gives 1-10 number.
//    Math.round=gives no to nearest integer.
    
//    var x = Math.round(10*Math.random()); //    here no genrerate between 0 to 9.
    
     var x = 1 + Math.round(9*Math.random()); //    this above funciton will generate no. between 0 to 10.
    
     var y = 1 + Math.round(9*Math.random()); //    this above funciton will generate no. between 0 to 10.
    
    
//    var correctAnswer = x*y;  //need to change value of a varible every time, for that need to define variable outside of a function.
    
    correctAnswer = x*y;

//    now need to display x  and y on .inner html display using below
    
    document.getElementById("question").innerHTML= x + "x" + y;
    
//    for coreetposition of boxes between 1 to 4 in below line, each boxes has id
//    Math.round(3*Math.random()= no between 0 to 3.
    
    var correctPosition = 1 + Math.round(3*Math.random()); 
    
//    each boxes has id[it will show correct box id]
//         box +correctPosition = box 3 etc.
    document.getElementById("box" + correctPosition).innerHTML =correctAnswer; //fill one box with correct answer
    
    //fill reamining three boxes with wrong answer
    
    var answers = [correctAnswer];  //this nis an array
    
    for(i=1;i<5; i++){
        
        
       if(i != correctPosition){
            // i not equalvalue of coorectposition, generate worng asniwer out of 4 box checking
            
            var wrongAnswer;
           
           
//           all wronganswer will be diffrent from correctAnswer,if 'wronganswr =correctanswer' then again need to generate random wronganswer. using while loop
//           do loop use
           do{
               
               wrongAnswer = 1 + Math.round(9*Math.random()) * 1 + Math.round(9*Math.random());
              
                 }
           
           while(answers.indexOf(wrongAnswer > -1)) //check index of a wrong answer > -1,= wrong answer already in an ansers array so agaon need to check /make anther wrong answer no not an answers array.
           
//          wrongAnswer = 1 + Math.round(9*Math.random()) * 1 + Math.round(9*Math.random());
            
            //display wrong answer
            
            document.getElementById("box"+ i).innerHTML = wrongAnswer;
           
//           all wronganswer will be diffrent from correctAnswer,if 'wronganswr =correctanswer' then again need to generate random wronganswer. using while loop
       
           answers.push(wrongAnswer); //it will push wrong answer in an array of an answers = "   var answers = [correctAnswer,WA1,WA2,WA3]" WILL GET 4 DIFFERENT VALUE.
       }
        
        
    }
}
}
    
  // reduce time every second (need to keep it in loop)
  //if time left?
     //yes->continue
     //No-->Game over

//generate new Q&A.
      
   // } //else closed tag
        
    
    
    
   // } //function close tag

   //if we are playing
      //reset button-reload [page]


//if we are not playing (need to take few action)

   // set score to 0
  //show countdown box 
  // reduce time every second (need to keep it in loop)
  //if time left?
     //yes->continue
     //No-->Game over
//change button to reset
//generate new Q&A.



