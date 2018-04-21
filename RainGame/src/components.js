//this is supposed to load the sprite

Crafty.sprite('images/cat-01.png', {str_player:[0, 0, 64, 56]});



//rain drop
Crafty.c('Drop',{
    init:function(){
        this.requires('2D, Canvas, Color, Gravity, Collision')
        .color('#91A5BA')
        .gravity()
        //.gravityConst(0.2);//do not works in new crafty version
    }
});

//player
Crafty.c('Player', {
    init: function() {
        this.requires('2D,Canvas,DOM,Twoway,Gravity,Collision,str_player')//this calls the sprite
        .twoway(10)
        //.color('#FD1C03')
        .gravity('Floor')
        // .gravityConst(25) //do not works in new crafty version
        .stopOnScreenSide();
    },
    // Registers a stop-movement function to be called when
    // this entity hits an entity with the "ScreenSide" component
    stopOnScreenSide: function() {
        this.onHit('ScreenSide', this.stopMovement);
        return this;
    },
    // Stops the movement
    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
        this.x -= this._movement.x;
        }
    }
});

//screenside
Crafty.c('ScreenSide',{
    init:function(){
        this.requires('2D,Canvas,Collision,Canvas, Color,solid')
        .attr({w:10,h:screenHeight})
        .color('#000');
    }
});
//Floor
Crafty.c('Floor',{
    init:function(){
        this.requires('2D, Canvas, Solid, Color')
        .attr({w: screenWidth, h: 20})
        .color('#9D00FF');
    }
});
