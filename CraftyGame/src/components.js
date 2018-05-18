//This is the javascript file for the items in the game
//Floor
Crafty.c('Floor',{
    init:function(){
        this.requires('2D, Canvas, Solid, Color')
        .attr({w: screenWidth, h: 20})
        .color('#9D00FF');
    }
});

//screen for the left side
Crafty.c('ScreenSide',{
    init:function(){
        this.requires('2D,Canvas,Collision,Canvas, Color,solid')
        .attr({w:10,h:screenHeight})
        .color('#000');
    }
});

//screen for the right side, top part must be left alone 
//to allow player to move to next round
Crafty.c('ScreenSide2',{
    init:function(){
        this.requires('2D,Canvas,Collision,Canvas, Color,solid')
      //note to self: move this to the right side later
        .attr({w:10,h:screenHeight - 50})
        .color('#000');
    }
});
