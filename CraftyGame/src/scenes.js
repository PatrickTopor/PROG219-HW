

Crafty.scene('opening1', function(){

    //somehow cannot get the music to work, must figure out later
    /*var sound = {
        "audio":{
            "first":["../sounds/jungleMusic.mp3"]
        }

    }

    Crafty.load({sound})

    Crafty.audio.play("first");*/

    //Crafty.audio.add("first", "../sounds/jungleMusic.mp3");
    //Crafty.audio.play("first");

    var ent = Crafty.e("2D, DOM, Image")
    .attr({w: 1200, h: 800})
    .image("images/jungle3.jpg");

    Crafty.e('2D, DOM, Text')
    .attr({x: 500, y: 100, w: 200})
    .text("Welcome to the Temple Adventure Game!")
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("You are a professor of History at the prestigious Bellevue College, and you have heard of a lost temple hidden in the jungles of Val Verde.")
    .attr({x: 300, y: 125, w: 650})
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("You boarded a plane and traveled to this country to see if the rumors had some truth to it, and after a long donkey ride, you see the ruins of the temple.")
    .attr({x: 250, y: 150, w: 700})
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("But what would an adventure be without a little danger, you thought as you approach the temple.  As you step closer, your wish is granted.")
    .attr({x: 300, y: 175, w: 700})
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("A large group of natives spring from the top of the temple and start shouting at you.  As you try to think what to say to them, a knife barely misses you.")
    .attr({x: 275, y: 200, w: 700})
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("The temple entrence is unguared and looks to be your only place of refuge at the moment, and as the flurry of knifes start to come at you, you must reach it as soon as possible.")
    .attr({x: 250, y: 225, w: 800})
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("INSTRUCTIONS:")
    .attr({x: 500, y: 350, w: 200})
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("Use the left and right arrow keys on the keyboard to move side to side, and the up arrow key to jump.")
    .attr({x: 400, y: 375, w: 500})
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("Jump from block to block to reach the upper levels of the game.")
    .attr({x: 400, y: 400, w: 500})
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("Get to the other side and through the temple entrance before your charecter gets stabbed 5 times.")
    .attr({x: 400, y: 425, w: 500})
    .textColor('white');

    Crafty.e('2D, DOM, Text')
    .text("If you die, the game will restart and continue until you win.")
    .attr({x: 400, y: 450, w: 500})
    .textColor('white');

});//end opening1 scene

Crafty.scene('Game1', function(){
    let screenWidth = 1200;
    let screenHeight = 800;
    let hitCounter = 0;
    let keepRaining = true;

    //add floor
    Crafty.e('Floor')
    .attr({x: 0, y: 780});

    Crafty.e('ScreenSide')
    .attr({x:0,y:0});
    //screens to trap player in game
    Crafty.e('ScreenSide2')
    .attr({x:1190,y:100});

    Crafty.e('block')
    .attr({x:0, y: 680});

    Crafty.e('block')
    .attr({x:590, y: 680});

    Crafty.e('tree')
    .attr({x: 780, y: 650});

    Crafty.e('tree2')
    .attr({x: 550, y: 650});

    Crafty.e('tree')
    .attr({x: 450, y: 650});

    Crafty.e('tree2')
    .attr({x: 250, y: 650});

    Crafty.e('tree')
    .attr({x: 150, y: 650});

    Crafty.e('tree')
    .attr({x: 50, y: 650});

    Crafty.e('tree2')
    .attr({x: 875, y: 650});

    Crafty.e('tree')
    .attr({x: 1075, y: 650});

    //blocks ahead
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 100, y:500, w: 30, h:30})
    .color('grey');
    
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 600, y:600, w: 30, h:30})
    .color('grey');
    
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 300, y:600, w: 60, h:30})
    .color('grey');
    
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 900, y:400, w: 30, h:30})
    .color('grey');
    
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 1000, y:375, w: 60, h:30})
    .color('#A9A9A9');
    
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 600, y:400, w: 60, h:30})
    .color('grey');
    
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 770, y:225, w: 60, h:30})
    .color('grey');
    
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 500, y:175, w: 30, h:30})
    .color('grey');
    
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 220, y:260, w: 60, h:30})
    .color('grey');
    
    Crafty.e('Block, 2D, Canvas, Color, Floor')
    .attr({x: 1160, y:100, w: 40, h:50})
    .color('black');

    let player1 = Crafty.e('Player')
    .attr({x: 20, y: 200})//player location

    //now just call the enxt scene, but on a 3-5 second delay
    .bind("EnterFrame", function(){
        if (this.x == 1200)
        {
            keepRaining = false;
            Crafty.scene('opening2');
            //call the second game, but make it delayed like the first one
        }
      });

      //shows the player how many times they've been hit
      let hitText = Crafty.e('2D,DOM, Text')
      .attr({
        x: screenWidth - 100,
        y: 10
      });

      //rain function
      function drop()
      {
        let randomx = Math.floor((Math.random() * screenWidth) + 60);
          Crafty.e('Drop')
              .attr({x: randomx, y: 0, w: 2, h: 10})
              .onHit('Player', function(){
                  this.destroy();
                  hitCounter++;
                  hitText.text("Hit:" + hitCounter);
      
                  if (hitCounter == 5)//reset player location and hit counter
                  {
                    player1.x = 20;
                    hitCounter = 0;
                    hitText.text("Hit:" + hitCounter);
                  }
              })
              .bind("EnterFrame", function() {
                  if (this.y > screenHeight-20)
                    this.destroy();
              });
      }

      //controls the rate of rain
      Crafty.bind("EnterFrame", function(){
        if (Crafty.frame() % 10 == 0 && keepRaining == true)
        {
          drop();
        }
      });

});//end Game1 scene

Crafty.scene('opening2', function() { 

    Crafty.e('2D, DOM, Text')
    .text("Congrats!  You made it to the temple alive!  ")
    .attr({x: 500, y: 100, w: 200});

    //add the instructions for the player here

});//end opening2 scene

Crafty.scene('Game2', function() { 
    //this is where Taofei's game goes
    /*
    if(all the puzzles are solved)
    {
        Crafty.scene('Victory');
    }
    else
    {
        Crafty.scene('Defeat');
    }
    */

});

Crafty.scene('Victory', function(){ 

    //congragulate the player on winning
});

Crafty.scene('Defeat', function(){

//tell the player they got killed by the natives
});
