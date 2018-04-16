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
        $("#status").text (interactions.player3Winner);
        $("#ButtonBet").hide();
    }
    else if(player2.IsPlayerBroke == true && player3.IsPlayerBroke == true){
            $("#status").text (interactions.player1Winner);
            $("#ButtonBet").hide();
            }
    else if(player3.IsPlayerBroke == true && player1.IsPlayerBroke == true){
            $("#status").text (interactions.player2Winner);
            $("#ButtonBet").hide();
            }
    else {        
    
    $("#image1").attr("src", "dice-"+RollDice.dice1Number+".jpg");    
        
    $("#image2").attr("src", "dice-"+RollDice.dice2Number+".jpg");
    
        if(playersTurn == 1){       
            if(player1.IsPlayerBroke == true){
                playersTurn = 2;
				GameLogic();
            }
            else{
				if (didPlayerWin() == true){
					player1.playerAccount++;
					$("#balance1").text(player1.playerAccount);
					$("#status").text (interactions.player1Won);
				}
				else {
					player1.playerAccount--;
					$("#balance1").text(player1.playerAccount);
					if(player1.playerAccount == 0){
						player1.IsPlayerBroke = true;
						$("#status").text (interactions.player1Done);  
				}
					else{
						$("#status").text(interactions.player1LostRound);
					}					   
				}  
				player1.turnsTaken++;
				$("#turnCount1").text(player1.turnsTaken);
				playersTurn = 2;    
			}//end else statement if player is not broke
		}//ends player turn one
        else if(playersTurn == 2){
            if(player2.IsPlayerBroke == true){
                playersTurn = 3;
				GameLogic();
            }
            else{
            
				if (didPlayerWin() == true){
					player2.playerAccount++;
					$("#balance2").text(player2.playerAccount);
					$("#status").text (interactions.player2Won);
				}
				else {
					player2.playerAccount--;
					$("#balance2").text(player2.playerAccount);
					if(player2.playerAccount == 0){
						player2.IsPlayerBroke = true;
						$("#status").text (interactions.player2Done);  
					}
					else{
						$("#status").text(interactions.player2LostRound);
					}					   
				}  
				player2.turnsTaken++;
				$("#turnCount2").text(player2.turnsTaken);
				playersTurn = 3;
			}//end if not broke else statement
        }        
        else if(playersTurn == 3){
            if(player3.IsPlayerBroke == true){
                playersTurn = 1;
				GameLogic();
            }
            else{
            
				if (didPlayerWin() == true){
					player3.playerAccount++;
					$("#balance3").text(player3.playerAccount);
					$("#status").text (interactions.player3Won);
				}
				else {
					player3.playerAccount--;
					$("#balance3").text(player3.playerAccount);
					if(player3.playerAccount == 0){
						player3.IsPlayerBroke = true;
						$("#status").text (interactions.player3Done);  
					}
					else{
						$("#status").text(interactions.player3LostRound);
					}
					   
				}  
				player3.turnsTaken++;
				$("#turnCount3").text(player3.turnsTaken);
				playersTurn = 1;
            }
        }
    }
}//end function
