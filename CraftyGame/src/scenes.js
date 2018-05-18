Crafty.scene('Opening1', function(){
//this will open the game and explain the story to the player

});

Crafty.scene('Game1', function(){
//this is the first game, where the explorer is trying to enter the temple
//with a hail of knives trying to hit them
//if they die, the game restarts
    var btn1 = document.getElementByID('StartFirstGame');
    btn1.style.display = "none";
    let player1 = Crafty.e('Player')
    .attr({x: 20, y: 200})//player location
    .bind("EnterFrame", function(){
    if (this.x == screenWidth)
      {
        Crafty.scene('opening2');
          var btn2 = document.getElementByID('StartSecondGame');
          //now shows the button for the second game with the second opening scene
          btn2.style.display = "block";
      }
    });

});

Crafty.scene('Opening2', function(){
//after the player enters the temple, they are told to find the tresure 
//that will ensutre that they will make it our alive

});

Crafty.scene('Game2', function(){
//this is the second game, where the player looks around and tries to find the tresure
//before the natives find and kill them
//must add a timer here
  var btn2 = document.getElementByID('StartSecondGame');
  btn2.style.display = "none";
  let player1 = Crafty.e('Player')
    .attr({x: 20, y: 200})//player location
    .bind("EnterFrame", function(){
    if (//the player finds the treasure && the time has not run out)
      {
        Crafty.scene('Victory');
      }
     if(//the player runs out of time)
       {
         Crafty.scene('Loss');
       }
    });

});

Crafty.scene('Victory', function(){
//if the player does not find the tresure, they loose and get killed
//add button for them to retry the 2nd game

});

Crafty.scene('Loss', function(){
//if the player finds the treasure, they win and give a long lost treasure to the natives,
//who are gratful enought to let the player leave with the remaining treasure alive

});
