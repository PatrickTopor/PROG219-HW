
        
    
        
    function Players(Name, playerAccount, turnsTaken, IsPlayerBroke){
    this.name = Name;
    this.playerAccount = playerAccount;
    this.turnsTaken = turnsTaken;
    this.IsPlayerBroke = IsPlayerBroke;
    }
        
    let player1 = new Players("Player", 5, 0, "false");
    var player2 = new Players("Johnathan", 5, 0, "false");
    var player3 = new Players("Sally", 5, 0, "false");    
        
    let playersTurn = 1;    
    
        $(document).ready(function(){
            $("#ButtonBet").click( function() {
                GameLogic();

            });
        });


        
