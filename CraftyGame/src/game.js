Game = {

    start: function() {

        Crafty.init(1200, 800);
        Crafty.background('rgb(206, 215, 183)');
        Crafty.scene('opening1');

        //starts the game function after a few second(s)
        Crafty.e("Delay").delay(function () {
            Crafty.scene('Game1');
        }, 4000, 0);
    }//end function
}; //end Game
