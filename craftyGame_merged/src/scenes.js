

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
    .textColor('#ffffff');

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
    //hide information area
    document.getElementById("information").style.display="none";
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
    .attr({x: 1000, y:275, w: 60, h:30})
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
    Crafty.e("Delay").delay(function () {
        Crafty.scene('Loading');
    }, 4000, 0);









});//end opening2 scene

// Loading scene
// -------------
// Handles the loading of binary assets such as images and audio files

Crafty.scene('Loading', function(){
    Crafty.viewport.init(Game.width(), Game.height(), document.getElementById('game'));

    // Draw some text for the player to see in case the file
    //  takes a noticeable amount of time to load
    Crafty.e('2D, DOM, Text')
      .text('Loading...')
      .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
      .css($text_css);
  
    // Load our sprite map image
    Crafty.load(['images/wall-01.png'], function(){
      // Once the image is loaded...
  
      // Define the individual sprites in the image
      // Each one (spr_tree, etc.) becomes a component
      // These components' names are prefixed with "spr_"
      //  to remind us that they simply cause the entity
      //  to be drawn with a certain sprite
        Crafty.sprite(32, 'images/wall-01.png', {
            spr_midWall01:    [0, 0],
            spr_midWall02:    [1, 0],
            spr_midWall03:    [2, 0],
            spr_leftEagleWall:    [3, 0],
            spr_rightEagleWall:    [4, 0],
        });
        Crafty.sprite(32, 'images/floor.png', {
            spr_floor01:    [0, 0],
            spr_floor02:    [1, 0],
            spr_floor03:    [2, 0],
            spr_floor04:    [3, 0],
            spr_floor11:    [0, 1],
            spr_floor12:    [1, 1],
            spr_floor13:    [2, 1],
            spr_floor14:    [3, 1],
        });
        Crafty.sprite(32,96, 'images/Venus de Milo.png', {
            spr_Venus:    [0, 0]
        });
        Crafty.sprite(32, 'images/lock_box.gif', {
            spr_box:    [0, 0]
        });
        Crafty.sprite(64,61, 'images/entrace_secretRoom.png', {
            spr_sEntrace:    [0, 0]
        });
        Crafty.sprite(64,128, 'images/clock.png', {
            spr_clock:    [0, 0]
        });
        Crafty.sprite(32,32, 'images/notebook.png', {
            spr_noteBook:    [0, 0]
        });
        Crafty.sprite(32,32, 'images/key.png', {
            spr_key:    [0, 0]
        });
        Crafty.sprite(96,96, 'images/star1.png', {
            spr_star1:    [0, 0]
        });
        Crafty.sprite(32,32, 'images/arrow.png', {
            spr_arrowUp:    [0, 0],
            spr_arrowDown:    [1, 0],
            spr_arrowLeft:    [2, 0],
            spr_arrowRight:    [3, 0]
        });
        Crafty.sprite(64,64, 'images/sculpture.png', {
            spr_sculpture1:    [0, 0],
            spr_sculpture2:    [0, 1]
        });
        Crafty.sprite(64,64, 'images/door1.png', {
            spr_door1:    [0, 0],
        });
        Crafty.sprite(64,64, 'images/door2.png', {
            spr_door2:    [0, 0],
        });
        Crafty.sprite(32,64, 'images/sculpture_angel.png', {
            spr_angelLeft:    [0, 0],
            spr_angelRight:    [1, 0],
        });
        Crafty.sprite(32,64, 'images/sculpture_ascetic.png', {
            spr_ascetic:    [0, 0],
        });
        Crafty.sprite(32,64, 'images/sculpture_dragon.png', {
            spr_dragon:    [0, 0],
        });
        Crafty.sprite(51,51, 'images/water_vat.png', {
            spr_waterVat:    [0, 0],
        });
        Crafty.sprite(62,62, 'images/pool.png', {
            spr_pool:    [0, 0],
        });
        Crafty.sprite(32,32, 'images/bones.png', {
            spr_boneH:    [0, 0],
            spr_boneA:    [1, 0],
        });
        Crafty.sprite(64,64, 'images/evil_dragon.png', {
            spr_evilDragonL:    [0, 0],
            spr_evilDragonR:    [1, 0],
        });
        // Define the PC's sprite to be the first sprite in the third row of the
        //  animation sprite map
        Crafty.sprite(32, 'images/player_animation.png', {
            spr_player:  [0, 0],
        }, 0, 2);
  
      // Now that our sprites are ready to draw, start the game
      Crafty.scene('Game');
    })
});




Crafty.scene('Game', function() {
    //display information area for game2
    document.getElementById("information").style.display="block";
    //welcome message
    informationArea.innerHTML="<h2>Welcome to the second game!</h2>";
    // A 2D array to keep track of all occupied tiles (array of arrays!)
    this.occupied = new Array(Game.map_grid.width);
    for (var i = 0; i < Game.map_grid.width; i++) {
        this.occupied[i] = new Array(Game.map_grid.height);
        for (var y = 0; y < Game.map_grid.height; y++) {
        this.occupied[i][y] = false; // start with all tiles empty
        }
    }
    function retunNormalWall(x,y){
        let randomNum=Math.random();
        if(randomNum < 0.2){
            Crafty.e('Wall01').at(x, y);
        }
        else{
            Crafty.e('Wall02').at(x, y);
        }
    };
    function retunNormalFloorWall(x,y){
        let randomNum=Math.random();
        if(randomNum < 0.02){
            Crafty.e('floor01').at(x, y);
        }
        else if(randomNum>=0.02&&randomNum<0.26){
            Crafty.e('floor03').at(x, y);
        }
        else if(randomNum>=0.26&&randomNum<0.32){
            Crafty.e('floor04').at(x, y);
        }
        else if(randomNum>=0.32&&randomNum<0.33){
            Crafty.e('floor05').at(x, y);
        }
        else if(randomNum>=0.35&&randomNum<0.56){
            Crafty.e('floor07').at(x, y);
        }
        else{
            Crafty.e('floor08').at(x, y);
        }
    };
    function randomBox(){
        let randomNum=Math.random();
        if(randomNum < 0.5){
            Game2.leftNotNull=false;
        }
    };

    // Place a wall at every edge square on our grid of tiles
    for (var x = 0; x < Game.map_grid.width; x++) {
        for (var y = 0; y < Game.map_grid.height; y++) {
            if(x==7&&y>0&y<14){
                Crafty.e('Wall03').at(x, y);
                this.occupied[x][y] = true;
            }
            else if(x==17&&y>0&y<14){
                Crafty.e('Wall03').at(x, y);
                this.occupied[x][y] = true;
            }
            else if(y==7&&(x>1&x<7||x<23&x>17)){
                Crafty.e('Wall03').at(x, y);
                this.occupied[x][y] = true;
            }
            else if(x==0){
                if(y==0||y==Game.map_grid.height - 1){
                    // Place a left Wall Corner entity at the current tile
                    Crafty.e('leftWallCorner').at(x, y);
                }
                else{
                    retunNormalWall(x,y);
                }
                this.occupied[x][y] = true;
            }
            else if(x==Game.map_grid.width-1){
                if(y==0||y==Game.map_grid.height - 1){
                    // Place a right Wall Corner entity at the current tile
                    Crafty.e('rightWallCorner').at(x, y);
                }
                else{
                    // Place a Wall entity at the current tile
                    retunNormalWall(x,y);
                }
                this.occupied[x][y] = true;
            }
            else if((y==0)&&(x>0&&x<Game.map_grid.width-1)){
                retunNormalWall(x,y);
                this.occupied[x][y] = true;
            }
            else if((y==Game.map_grid.height-1)&&(x>0&&x<Game.map_grid.width-1)){
                retunNormalWall(x,y);
                this.occupied[x][y] = true;
            }
            else{
                retunNormalFloorWall(x,y);
            }
        }
    }
    //bones
    Crafty.e('BoneHuman').at(3, 5);
    Crafty.e('BoneAnimal').at(3, 4);
    Crafty.e('BoneHuman').at(6, 4);
    Crafty.e('BoneAnimal').at(6, 5);
    Crafty.e('BoneAnimal').at(5, 6);
    Crafty.e('BoneAnimal').at(4,6);
    //arrows
    Crafty.e('ArrowUp').at(18, 3).attr({alpha: 0.6});
    Crafty.e('ArrowDown').at(21, 6).attr({alpha: 0.6});
    Crafty.e('ArrowLeft').at(21, 3).attr({alpha: 0.6});
    Crafty.e('ArrowRight').at(18, 6).attr({alpha: 0.6});
    //Sculpture1 and Sculpture2
    this.Sculpture1=Crafty.e('Sculpture1').at(8, 12);
    this.Sculpture2=Crafty.e('Sculpture2').at(15, 12);
    //star
    this.starLeft=Crafty.e('Star1').at(3, 10);
    this.starRight=Crafty.e('Star1').at(19, 10);
    //door
    this.doorLeft=Crafty.e('Door1').at(12, 0);
    this.doorRight=Crafty.e('Door2').at(12, 15);
    //angel
    this.angelLeft1=Crafty.e('AngelLeft').at(10, 0);
    this.angelLeft2=Crafty.e('AngelLeft').at(8, 0);
    this.angelRight1=Crafty.e('AngelRight').at(14, 0);
    this.angelRight2=Crafty.e('AngelRight').at(16, 0);
    //ascetic
    this.ascetic1=Crafty.e('Ascetic').at(10, 3);
    this.ascetic2=Crafty.e('Ascetic').at(14, 3);
    //pool and waterVat
    this.pool=Crafty.e('Pool').at(19, 4);
    this.waterVat=Crafty.e('WaterVat').at(4, 4);
    //Evil Dragon
    this.eDragonL=Crafty.e('EDragonL').at(22, 1);
    this.eDragonR=Crafty.e('EDragonR').at(1, 1);
    //Dragon
    this.dragon1=Crafty.e('Dragon').at(1, 13);
    this.dragon2=Crafty.e('Dragon').at(23, 13);
    // Player character, placed at 5, 5 on our grid
    // and mark that spot as occupied
    this.player = Crafty.e('PlayerCharacter').at(12, 14);
    // venus character, placed at 12, 7 on our grid
    // and mark that spot as occupied, venus taked 3 grid
    this.Venus = Crafty.e('Venus').at(12, 5);
    // Generate up to two box on the map , on is in the left ,other is in the right
    this.boxLeft=Crafty.e('Box').at(Game2.boxLeftGridPosition.x,Game2.boxLeftGridPosition.y);
    this.boxRight=Crafty.e('Box').at(Game2.boxRightGridPosition.x,Game2.boxRightGridPosition.y);
    randomBox();//random box not null
    // clock
    this.clock = Crafty.e('Clock').at(6, 7);
});
Crafty.scene('Victory', function() {
    Crafty.e('2D, DOM, Text')
        .attr({ x: 0, y: 0 })
        .text('Victory!');
    this.restart_game = function() {
        Crafty.scene('Game');
    };
    this.bind('KeyDown', this.restart_game);
},
function() {
    this.unbind('KeyDown', this.restart_game);
});
