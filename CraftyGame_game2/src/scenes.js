// Loading scene
// -------------
// Handles the loading of binary assets such as images and audio files

Crafty.scene('Loading', function(){
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
    // Player character, placed at 5, 5 on our grid
    // and mark that spot as occupied
    this.player = Crafty.e('PlayerCharacter').at(12, 14);
    this.occupied[this.player.at().x][this.player.at().y] = true;
    // venus character, placed at 12, 7 on our grid
    // and mark that spot as occupied, venus taked 3 grid
    this.Venus = Crafty.e('Venus').at(12, 5);
    this.occupied[this.Venus.at().x][this.Venus.at().y] = true;
    this.occupied[this.Venus.at().x][this.Venus.at().y+1] = true;
    this.occupied[this.Venus.at().x][this.Venus.at().y+1] = true;

    // Generate up to two box on the map , on is in the left ,other is in the right
    this.boxLeft=Crafty.e('Box').at(Game2.boxLeftGridPosition.x,Game2.boxLeftGridPosition.y);
    this.boxRight=Crafty.e('Box').at(Game2.boxRightGridPosition.x,Game2.boxRightGridPosition.y);
    randomBox();//random box not null
    // and mark that spot as occupied
    this.clock = Crafty.e('Clock').at(6, 7);
    this.occupied[this.clock.at().x][this.clock.at().y] = true;

    this.TextShow=Crafty.e("2D, DOM, Text")
                    .attr({ x: 32, y: 10 })
                    .text("Information:")
                    .textColor("#FFFFFF")
                    .textFont({  type: 'italic',size: '1em'});
    console.log(this.TextShow);

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