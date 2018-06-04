Crafty.c('Grid', {
    init: function() {
      this.attr({
        w: Game.map_grid.tile.width,
        h: Game.map_grid.tile.height
      })
    },
    // Locate this entity at the given position on the grid
    at: function(x, y) {
      if (x === undefined && y === undefined) {
        return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
      } else {
        this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
        return this;
      }
    }
});
// An "Actor" is an entity that is drawn in 2D 
// on canvas via our logical coordinate grid
Crafty.c('Actor', {
    init: function() {
      this.requires('2D, Canvas, Grid');
    },
});
//this is wall
Crafty.c('Wall01', {
init: function() {
    this.requires('Actor, Solid, spr_midWall01');
},
});
Crafty.c('Wall02', {
    init: function() {
        this.requires('Actor, Solid, spr_midWall02');
    },
});
Crafty.c('Wall03', {
    init: function() {
        this.requires('Actor, Solid, spr_midWall03');
    },
});
Crafty.c('leftWallCorner', {
    init: function() {
        this.requires('Actor, Solid, spr_leftEagleWall');
    },
});
Crafty.c('rightWallCorner', {
    init: function() {
        this.requires('Actor, Solid, spr_rightEagleWall');
    },
});

//this is floor
Crafty.c('floor01', {
    init: function() {
        this.requires('Actor, spr_floor01');
    },
});
Crafty.c('floor02', {
    init: function() {
        this.requires('Actor,spr_floor02');
    },
});
Crafty.c('floor03', {
    init: function() {
        this.requires('Actor,spr_floor03');
    },
});
Crafty.c('floor04', {
    init: function() {
        this.requires('Actor,spr_floor04');
    },
});
Crafty.c('floor05', {
    init: function() {
        this.requires('Actor,spr_floor11');
    },
});
Crafty.c('floor06', {
    init: function() {
        this.requires('Actor,spr_floor12');
    },
});
Crafty.c('floor07', {
    init: function() {
        this.requires('Actor,spr_floor13');
    },
});
Crafty.c('floor08', {
    init: function() {
        this.requires('Actor,spr_floor14');
    },
});
//this is Venus de Milo
Crafty.c('Venus', {
    init: function() {
        this.requires('Actor, Solid, spr_Venus');
        this.attr({
            w: Game.map_grid.tile.width,
            h:Game.map_grid.tile.height*3
        })
    },
});
//this is entrace to secret room
Crafty.c('secretEntrace', {
    init: function() {
        this.requires('Actor, spr_sEntrace,Solid');
        this.attr({
            w: Game.map_grid.tile.width,
            h:Game.map_grid.tile.height
        })
    },
});
//this is box
Crafty.c('Box', {
    init: function() {
        this.requires('Actor,Solid,spr_box');
    },
});
//this is box
Crafty.c('Clock', {
    init: function() {
        this.requires('Actor,Solid,spr_clock');
        this.attr({
            w: Game.map_grid.tile.width,
            h:Game.map_grid.tile.height*2
        });
    },
});
// This is the player-controlled character
Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('Actor, Fourway, Collision, spr_player, SpriteAnimation')
        .fourway(4)
        .onHit('secretEntrace', this.visitSecretEntrace)// this entity hits an entity with the "secretEntrace" component
        .onHit('Venus', this.visitVenus)// this entity hits an entity with the "Venus" component
        .onHit('Clock', this.visitClock)// this entity hits an entity with the "Clock" component
        .onHit('Box', this.visitBox)// this entity hits an entity with the "Box" component
        .onHit('Solid', this.stopMovement)// this entity hits an entity with the "Solid" component
        // These next lines define our four animations
        //  each call to .animate specifies:
        //  - the name of the animation
        //  - the x and y coordinates within the sprite
        //     map at which the animation set begins
        //  - the number of animation frames *in addition to* the first one
        .animate('PlayerMovingUp',    [[2, 0], [2, 1], [2, 2], [2, 3]])
        .animate('PlayerMovingRight', [[3, 0], [3, 1], [3, 2], [3, 3]])
        .animate('PlayerMovingDown',  [[0, 0], [0, 1], [0, 2], [0, 3]])
        .animate('PlayerMovingLeft',  [[1, 0], [1, 1], [1, 2], [1, 3]]);
        // Watch for a change of direction and switch animations accordingly
        var animation_speed = 1;
        this.bind('NewDirection', function(data) {
            if (data.x > 0) {
                this.animate('PlayerMovingRight', animation_speed, -1);
            } else if (data.x < 0) {
                this.animate('PlayerMovingLeft', animation_speed, -1);
            } else if (data.y > 0) {
                this.animate('PlayerMovingDown', animation_speed, -1);
            } else if (data.y < 0) {
                this.animate('PlayerMovingUp', animation_speed, -1);
            } else {
                this.stop();
            }
        });
    
    },
    // Stops the movement
    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
        this.x -= this._movement.x;
        this.y -= this._movement.y;
        }
    },
    // Respond to this player visiting SecretEntrace
    visitSecretEntrace:function(data) {
        //Crafty.trigger('VenusVisited', this);
        console.log("move to final Victory scene")
        Crafty.scene('Victory');
        //reset Game2
        Game2={
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
    },
    // Respond to this player visiting venus
    visitVenus: function(data) {
        if(!Game2.showEntrance&&Game2.boxPass){
            //create secretEntrace
            Crafty.e('secretEntrace').at(18, 8);
            Game2.showEntrance=true;
            console.log("entrance showed")
        }
    },
    // Respond to this player visiting clock
    visitClock: function(data) {
        clock = data[0].obj;
        if(Game2.boxPass&&!Game2.clockPass){
            //create secretEntrace
            Game2.clockPass=true;
            console.log("clock passed")
        }
    },
    //respond to this player visiting box
    visitBox:function(data){
        box=data[0].obj;
        let boxGridX=box.x/Game.map_grid.tile.width;
        let boxGridY=box.y/Game.map_grid.tile.height;
        if(boxGridX==Game2.boxLeftGridPosition.x&&boxGridY==Game2.boxLeftGridPosition.y){
            if(Game2.leftNotNull){
                console.log("vist left box and get information for next step")
                Game2.boxPass=true;
            }
            else{
                console.log("vist left box but nothing happen")
            }
        }
        else{
            if(Game2.leftNotNull){
                console.log("vist right box but nothing happen")
            }
            else{
                console.log("vist right box and get information for next step")
                Game2.boxPass=true;
            }
        }
        box.destroy();
    },
});