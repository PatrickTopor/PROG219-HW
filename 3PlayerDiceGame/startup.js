   
    
        $(document).ready(function(){   
    var turnsTaken = document.getElementById("turnCount");//this is needed for it to be displayed
    turnsTaken.innerHTML = 0;
        
    let playerAccount = document.getElementById("balance"); //For some reason, this is needed for the whole thing to work
    playerAccount.innerHTML = 5;
        
    let dice1 = document.getElementById("image1");//figure out how to make jquery work on this
    let dice2 = document.getElementById("image2");
        
    let button = document.getElementById("ButtonBet");//figure out how to make jquery work on this
    button.disabled = false;
        
    function Players(Name, playerAccount, turnsTaken, IsPlayerBroke){
    this.name = Name;
    this.playerAccount = playerAccount;
    this.turnsTaken = turnsTaken;
    this.IsPlayerBroke = IsPlayerBroke;
    }
        
    var player1 = new Players("Player", 5, 0, "false");
    var player2 = new Players("Johnathan", 5, 0, "false");
    var player3 = new Players("Sally", 5, 0, "false");    
        
    let playersTurn = 1; 
            
            $("#ButtonBet").click( function() {
                GameLogic();

            });
        });
