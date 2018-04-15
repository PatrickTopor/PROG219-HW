    
    function GameLogic(){
        
    let RollDice ={
    
    dice1Number: Math.floor(Math.random() * 6) + 1,
    
    dice2Number: Math.floor(Math.random() * 6) + 1,
        
    };
    
    function didPlayerWin(){
      if(RollDice.dice1Number + RollDice.dice2Number == 7){
          return true;
      }  
        else if(RollDice.dice1Number + RollDice.dice2Number == 11){
            return true;
        }
        else if (RollDice.dice1Number == RollDice.dice2Number){
            return true;
        }
        else{
            return false;
        }  
    };
    
    if (player1.IsPlayerBroke == true && player2.IsPlayerBroke == true){
        $("#status").text ("The winner is: " + player3.name);
        button.style.display = "none";
    }
    else if(player2.IsPlayerBroke == true && player3.IsPlayerBroke == true){
            $("#status").text ("The winner is: " + player1.name);
        button.style.display = "none";
            }
    else if(player3.IsPlayerBroke == true && player1.IsPlayerBroke == true){
            $("#status").text ("The winner is: " + player2.name);
        button.style.display = "none";
            }
    else {        
    
    dice1.src = "dice-"+RollDice.dice1Number+".jpg";
    dice2.src = "dice-"+RollDice.dice2Number+".jpg";
        
        if(playersTurn == 1){
        
            if(player1.IsPlayerBroke == true){
                turnsTaken.innerHTML = player1.turnsTaken 
                playerAccount.innerHTML = player1.playerAccount;
                $("#status").text ("You already lost, " +player1.name+ ".  But you should stick around to see who will win!");
                playersTurn = 2;
            }
            else{

        if (didPlayerWin() == true){
            //$("#balance").text(parseInt($("#balance").text()) + 1);//figure out how to display the balanxe of the individual players
            player1.playerAccount++;
            playerAccount.innerHTML = player1.playerAccount;
            $("#status").text ("You won: "+player1.name+"!  Play again to win more!");
        }
        else {
            $("#balance").text(parseInt($("#balance").text()) - 1);
            player1.playerAccount--;
            playerAccount.innerHTML = player1.playerAccount;
            if(player1.playerAccount == 0){
                player1.IsPlayerBroke = true;
                $("#status").text ("GAME OVER FOR: " +player1.name+ "!");  
            }
            else{
                $("#status").text("You lost this round: "+ player1.name  +"!  Try again and you might win!");
            }
               
        }  
        //$("#turnCount").text(parseInt($("#turnCount").text()) + 1);
        player1.turnsTaken++;
        turnsTaken.innerHTML = player1.turnsTaken 
        playersTurn = 2;    
        }//end else statement if player is not broke
    }//ends player turn one
        else if(playersTurn == 2){
            if(player2.IsPlayerBroke == true){
                playerAccount.innerHTML = player2.playerAccount;
                turnsTaken.innerHTML = player2.turnsTaken
                $("#status").text ("You already lost, " + player2.name+".  But you should stick around to see who will win!"); 
                playersTurn = 3;
            }
            else{
            
        if (didPlayerWin() == true){
            //$("#balance").text(parseInt($("#balance").text()) + 1);
            player2.playerAccount++;
            playerAccount.innerHTML = player2.playerAccount;
            $("#status").text ("You won: "+player2.name+"!  Play again to win more!");
        }
        else {
            $("#balance").text(parseInt($("#balance").text()) - 1);
            player2.playerAccount--;
            playerAccount.innerHTML = player2.playerAccount;
            if(player2.playerAccount == 0){
                player2.IsPlayerBroke = true;
                $("#status").text ("GAME OVER FOR: " + player2.name+"!");  
            }
            else{
                $("#status").text("You lost this round: "+ player2.name  +"!  Try again and you might win!");
            }
               
        }  
        //$("#turnCount").text(parseInt($("#turnCount").text()) + 1);
        player2.turnsTaken++;
        turnsTaken.innerHTML = player2.turnsTaken 
        playersTurn = 3;
            }//end if not broke else statement
        }
        
        else if(playersTurn == 3){
            if(player3.IsPlayerBroke == true){
                turnsTaken.innerHTML = player3.turnsTaken
                playerAccount.innerHTML = player3.playerAccount;
                $("#status").text ("You already lost, " + player3.name+".  But you should stick around to see who will win!");
                playersTurn = 1;
            }
            else{
            
        if (didPlayerWin() == true){
            player3.playerAccount++;
            playerAccount.innerHTML = player3.playerAccount;
            $("#status").text ("You won: "+player3.name+"!  Play again to win more!");
        }
        else {
            //$("#balance").text(parseInt($("#balance").text()) - 1);
            player3.playerAccount--;
            playerAccount.innerHTML = player3.playerAccount;
            if(player3.playerAccount == 0){
                player3.IsPlayerBroke = true;
                $("#status").text ("GAME OVER FOR: " + player3.name+"!");  
            }
            else{
                $("#status").text("You lost this round: "+ player3.name  +"!  Try again and you might win!");
            }
               
        }  
        //$("#turnCount").text(parseInt($("#turnCount").text()) + 1);//find a way to display the turns of each individual player
        player3.turnsTaken++;
        turnsTaken.innerHTML = player3.turnsTaken   
        playersTurn = 1;
            }
        }
    }
}//end function
