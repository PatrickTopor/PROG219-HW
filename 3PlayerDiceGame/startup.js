    //this is needed for it to be displayed
    $("#turnCount").html(0);
        
    
    $("#balance").html(5);
        
    //let dice1 = document.getElementById("image1");//figure out how to make jquery work on this

    $("#image1").html();
    $("#image2").html();
    //let dice2 = document.getElementById("image2");
        
    
        
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


        
