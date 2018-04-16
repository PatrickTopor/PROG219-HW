
        
    
    function Players(Name, PlayerAccount, TurnsTaken, isPlayerBroke){
    this.name = Name;
    this.playerAccount = PlayerAccount;
    this.turnsTaken = TurnsTaken;
    this.IsPlayerBroke = isPlayerBroke;
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


        
