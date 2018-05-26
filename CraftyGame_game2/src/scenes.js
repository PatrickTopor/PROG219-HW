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
        else if(randomNum>0.9){
            Crafty.e('Wall03').at(x, y);
        }
        else{
            Crafty.e('Wall02').at(x, y);
        }
    };
    // Player character, placed at 5, 5 on our grid
    this.player = Crafty.e('PlayerCharacter').at(5, 5);
    this.occupied[this.player.at().x][this.player.at().y] = true;
    // and mark that spot as occupied
    // Place a wall at every edge square on our grid of tiles
    for (var x = 0; x < Game.map_grid.width; x++) {
        for (var y = 0; y < Game.map_grid.height; y++) {
            if(x==0){
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

        }
    }
    // Generate up to five villages on the map in random locations
    var max_villages = 5;
    for (var x = 0; x < Game.map_grid.width; x++) {
        for (var y = 0; y < Game.map_grid.height; y++) {
            if (Math.random() < 0.02) {
                if (Crafty('Village').length < max_villages && !this.occupied[x][y]) {
                    Crafty.e('Village').at(x, y);
                }
            }
        }
    }
    this.show_victory = this.bind('VillageVisited', function() {
        if (!Crafty('Village').length) {
        Crafty.scene('Victory');
        }
    });
},
function() {
    this.unbind('VillageVisited', this.show_victory);
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