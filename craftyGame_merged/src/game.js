let Game = {
    // This map_grid object, defined inside the Game object
    // defines our grid's size and size of each tile
    map_grid: {
        width: 25,
        height: 16,
        tile: {
            width: 32,
            height: 32
        }
    },
    // Define width, height property, they “scale” if board size changes
    // The total width of the game screen.
    // this is just the width of a tile times the width of the grid
    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },
    // The total height of the game screen. 
    // this is just the height of a tile times the height of the grid
    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },
// Initialize and start our game
    start: function() {
/*         // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height(), document.getElementById('game'));
        Crafty.background('rgb(255, 255, 255)');
        // Simply start the "Game" scene to get things going
        Crafty.scene('Loading'); */
        Crafty.init(1200, 800,document.getElementById('game'));
        Crafty.background('rgb(206, 215, 183)');
        Crafty.scene('opening1');

        //starts the game function after a few second(s)
        Crafty.e("Delay").delay(function () {
            Crafty.scene('Game1');
        }, 4000, 0);
    },
};
let Game2={
    boxLeftGridPosition:{
        x:6,
        y:1,
    },
    boxRightGridPosition:{
        x:18,
        y:1,
    },
    showEntrance:false,
    leftNotNull:true,
    boxPass:false,
    clockPass:false,
};
$text_css = {
    'font-size': '24px',
    'font-family': 'Arial',
    'color': 'white',
    'text-align': 'center'
}
let informationArea=document.getElementById("information");
Game.start();   
