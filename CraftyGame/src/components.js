//this is supposed to load the sprite

Crafty.sprite(60,65,'images/explorer.png', {
    str_player:[0, 0]
});

Crafty.sprite(150, 150, 'images/trees.png' , {

    str_tree:[0,0]
});

Crafty.sprite(250, 200, 'images/trees.png' , {

    str_tree2:[0,0]
});

Crafty.sprite(600, 100, 'images/block.png', {
str_block:[0,0]
});

Crafty.sprite( 100, 600, 'images/daggar.png', { 
str_daggar:[0,0]
});


Crafty.c('tree', {
init: function(){
    this.requires('2D,Canvas,DOM,Twoway,Gravity, str_tree')
    .twoway(0)
    }
});

Crafty.c('tree2', {
    init: function(){
        this.requires('2D,Canvas,DOM,Twoway,Gravity, str_tree2')
        .twoway(0)
        }
    });

    Crafty.c('block', {
        init: function(){
            this.requires('2D,Canvas,DOM,Twoway,Gravity, str_block')
            .twoway(0)
            }
        });
        

//rain drop
Crafty.c('Drop',{
    init:function(){
        this.requires('2D, Canvas, Color, Gravity, Collision, str_daggar')
        //.color('#ff0000')
        .gravity()
        //.gravityConst(0.2);//do not works in new crafty version
    }
});

//player
Crafty.c('Player', {
    init: function() {
        this.requires('2D,Canvas,DOM,Twoway,Gravity,Collision,str_player,SpriteAnimation')//this calls the sprite
        .twoway(4)
        .gravity('Floor')
        // .gravityConst(25) //do not works in new crafty version
        .stopOnScreenSide()
        .stopOnScreenSide2()
        .animate('PlayerMovingRight', 0, 0, 2)
        .animate('PlayerMovingLeft',  0, 1, 3);
        var animation_speed = 4;
        this.bind('NewDirection', function(data) {
            if (data.x > 0) {
                this.animate('PlayerMovingRight', animation_speed, -1);
            } else if (data.x < 0) {
                this.animate('PlayerMovingLeft', animation_speed, -1);
            } else {
                this.stop();
            }
        });
    },
    // Registers a stop-movement function to be called when
    // this entity hits an entity with the "ScreenSide" component.
    stopOnScreenSide: function() {
        this.onHit('ScreenSide', this.stopMovement);
        return this;
    },
    stopOnScreenSide2: function(){
        this.onHit('ScreenSide2', this.stopMovement);
        return this;
    },
    // Stops the movement
    stopMovement: function() {// this does not work in new version
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
        .attr({w:10,h:800})
        .color('#000');
    }
});

//2nd screenside
Crafty.c('ScreenSide2',{
    init:function(){
        this.requires('2D,Canvas,Collision,Canvas, Color,solid')
        .attr({w:10,h:700})
        .color('#000');
    }
});
//Floor
Crafty.c('Floor',{
    init:function(){
        this.requires('2D, Canvas, Solid, Color')
        .attr({w: 1200, h: 20})
        .color('#29AB46');
    }
});
