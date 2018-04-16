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
        $("#balance").html(player3.playerAccount);
        $("#status").text ("The winner is: " + player3.name);
        $("#ButtonBet").hide();
    }
    else if(player2.IsPlayerBroke == true && player3.IsPlayerBroke == true){
        $("#balance").html(player1.playerAccount);
            $("#status").text ("The winner is: " + player1.name);
        $("#ButtonBet").hide();
            }
    else if(player3.IsPlayerBroke == true && player1.IsPlayerBroke == true){
        $("#balance").html(player2.playerAccount);
            $("#status").text ("The winner is: " + player2.name);

        $("#ButtonBet").hide();
            }
    else {        
    
    $("#image1").attr("src", "dice-"+RollDice.dice1Number+".jpg");    
        
    $("#image2").attr("src", "dice-"+RollDice.dice2Number+".jpg");
        
        if(playersTurn == 1){
        
            if(player1.IsPlayerBroke == true){
                $("#turnCount").html(player1.turnsTaken );
                $("#balance").html(player1.playerAccount);
                $("#status").text (gameflow.player1Lost);
                playersTurn = 2;
            }
            else{

        if (didPlayerWin() == true){
            //$("#balance").text(parseInt($("#balance").text()) + 1);//figure out how to display the balanxe of the individual players
            player1.playerAccount++;
            $("#balance").html(player1.playerAccount);
            
            $("#status").text (gameflow.player1WonRound);
        }
        else {
            $("#balance").text(parseInt($("#balance").text()) - 1);
            player1.playerAccount--;
            $("#balance").html(player1.playerAccount);
            if(player1.playerAccount == 0){
                player1.IsPlayerBroke = true;
                $("#status").text (gameflow.player1gameOver);  
            }
            else{
                $("#status").text(gameflow.player1LostRound);
            }
               
        }  
        //$("#turnCount").text(parseInt($("#turnCount").text()) + 1);
        player1.turnsTaken++;
        $("#turnCount").html( player1.turnsTaken );
        playersTurn = 2;    
        }//end else statement if player is not broke
    }//ends player turn one
        else if(playersTurn == 2){
            if(player2.IsPlayerBroke == true){
                $("#balance").html(player2.playerAccount);
                $("#turnCount").html(player2.turnsTaken);
                $("#status").text (gameflow.player2Lost); 
                playersTurn = 3;
            }
            else{
            
        if (didPlayerWin() == true){
            //$("#balance").text(parseInt($("#balance").text()) + 1);
            player2.playerAccount++;
            $("#balance").html(player2.playerAccount);
            
            $("#status").text (gameflow.player2WonRound);
        }
        else {
            $("#balance").text(parseInt($("#balance").text()) - 1);
            player2.playerAccount--;
            $("#balance").html( player2.playerAccount);
            if(player2.playerAccount == 0){
                player2.IsPlayerBroke = true;
                $("#status").text (gameflow.player2gameOver);  
            }
            else{
                $("#status").text(gameflow.player2LostRound);
            }
               
        }  
        //$("#turnCount").text(parseInt($("#turnCount").text()) + 1);
        player2.turnsTaken++;
        $("#turnCount").html(player2.turnsTaken );
        playersTurn = 3;
            }//end if not broke else statement
        }
        
        else if(playersTurn == 3){
            if(player3.IsPlayerBroke == true){
                $("#turnCount").html(player3.turnsTaken);
                $("#balance").html(player3.playerAccount);
                $("#status").text (gameflow.player3Lost);
                playersTurn = 1;
            }
            else{
            
        if (didPlayerWin() == true){
            player3.playerAccount++;
            $("#balance").html( player3.playerAccount);
            
            $("#status").text (gameflow.player1WonRound);
        }
        else {
            //$("#balance").text(parseInt($("#balance").text()) - 1);
            player3.playerAccount--;
            $("#balance").html( player3.playerAccount);
            if(player3.playerAccount == 0){
                player3.IsPlayerBroke = true;
                $("#status").text (gameflow.player3gameOver);  
            }
            else{
                $("#status").text(gameflow.player3LostRound);
            }
               
        }  
        //$("#turnCount").text(parseInt($("#turnCount").text()) + 1);//find a way to display the turns of each individual player
        player3.turnsTaken++;
        $("#turnCount").html( player3.turnsTaken  ); 
        playersTurn = 1;
            }
        }
    }
}//end function
