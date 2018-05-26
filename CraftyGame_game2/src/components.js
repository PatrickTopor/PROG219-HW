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

// An "Actor" is an entity that is drawn in 2D 
// on canvas via our logical coordinate grid
Crafty.c('Actor', {
    init: function() {
      this.requires('2D, Canvas, Grid');
    },
});
// This is the player-controlled character
Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('Actor, Fourway, Collision, spr_player, SpriteAnimation')
        .fourway(4)
        .stopOnSolids()
        // right after this existing line, add 
        // Whenever the PC touches a village, respond to the event
        .onHit('Village', this.visitVillage)
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
    // Registers a stop-movement function to be called when
// this entity hits an entity with the "Solid" component
    stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
        return this;
    },
    // Stops the movement
    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
        this.x -= this._movement.x;
        this.y -= this._movement.y;
        }
    },
    // after that code, add:
    // Respond to this player visiting a village
    visitVillage: function(data) {
        villlage = data[0].obj;
        villlage.collect();
    }  
});
// A village is a tile on the grid that the PC must visit in order to win the game
Crafty.c('Village', {
    init: function() {
        this.requires('Actor, spr_village')
    },
    collect: function() {
    this.destroy();
    Crafty.trigger('VillageVisited', this);
    }
});
  