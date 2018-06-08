//this is supposed to load the sprite

Crafty.sprite(60,65,'images/explorer sprite.png', {
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
        .attr({w: 800, h: 10})
        .color('#29AB46');
    }
});

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
        this.requires('Actor, spr_sEntrace,Solid,Tween');
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
//this is clcok
Crafty.c('Clock', {
    init: function() {
        this.requires('Actor,Solid,spr_clock');
        this.attr({
            w: Game.map_grid.tile.width,
            h:Game.map_grid.tile.height*2
        });
    },
});
//this is key
Crafty.c('Key', {
    init: function() {
        this.requires('Actor,spr_key,Tween');
    },
});
//this is notebook
Crafty.c('NoteBook', {
    init: function() {
        this.requires('Actor,spr_noteBook,Tween');
    },
});
//this is star
Crafty.c('Star1', {
    init: function() {
        this.requires('Actor,spr_star1');
        this.attr({
            w: Game.map_grid.tile.width*3,
            h:Game.map_grid.tile.height*3
        });
    },
});
//this is door
Crafty.c('Door1', {
    init: function() {
        this.requires('Actor,spr_door1,Solid');
        this.attr({
            w: Game.map_grid.tile.width,
            h:Game.map_grid.tile.height
        });
    },
});
Crafty.c('Door2', {
    init: function() {
        this.requires('Actor,spr_door2,Solid');
        this.attr({
            w: Game.map_grid.tile.width,
            h:Game.map_grid.tile.height
        });
    },
});
//this is angel
Crafty.c('AngelLeft', {
    init: function() {
        this.requires('Actor,spr_angelLeft,Solid');
    },
});
Crafty.c('AngelRight', {
    init: function() {
        this.requires('Actor,spr_angelRight,Solid');
    },
});
//this is Ascetic
Crafty.c('Ascetic', {
    init: function() {
        this.requires('Actor,spr_ascetic,Solid');
    },
});
//this is Evil Dragon
Crafty.c('EDragonR', {
    init: function() {
        this.requires('Actor,spr_evilDragonL,Solid');
    },
});
Crafty.c('EDragonL', {
    init: function() {
        this.requires('Actor,spr_evilDragonR,Solid');
    },
});
//this is Dragon
Crafty.c('Dragon', {
    init: function() {
        this.requires('Actor,spr_dragon,Solid');
    },
});
//this is WaterVat
Crafty.c('WaterVat', {
    init: function() {
        this.requires('Actor,spr_waterVat,Solid');
        this.attr({
            w: Game.map_grid.tile.width*2,
            h:Game.map_grid.tile.height*2
        });
    },
});
//this is arrows
Crafty.c('ArrowUp', {
    init: function() {
        this.requires('Actor,spr_arrowUp');
    },
});
Crafty.c('ArrowDown', {
    init: function() {
        this.requires('Actor,spr_arrowDown');
    },
});
Crafty.c('ArrowLeft', {
    init: function() {
        this.requires('Actor,spr_arrowLeft');
    },
});
Crafty.c('ArrowRight', {
    init: function() {
        this.requires('Actor,spr_arrowRight');
    },
});
//this is bones
Crafty.c('BoneHuman', {
    init: function() {
        this.requires('Actor,spr_boneH');
    },
});
Crafty.c('BoneAnimal', {
    init: function() {
        this.requires('Actor,spr_boneA');
    },
});
//this is Pool
Crafty.c('Pool', {
    init: function() {
        this.requires('Actor,spr_pool,Solid');
        this.attr({
            w: Game.map_grid.tile.width*2,
            h:Game.map_grid.tile.height*2
        });
    },
});
//this is sculpture
Crafty.c('Sculpture1', {
    init: function() {
        this.requires('Actor,Solid,spr_sculpture1');
        this.attr({
            w: Game.map_grid.tile.width*2,
            h:Game.map_grid.tile.height*2
        });
    },
});
Crafty.c('Sculpture2', {
    init: function() {
        this.requires('Actor,Solid,spr_sculpture2');
        this.attr({
            w: Game.map_grid.tile.width*2,
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
        var animation_speed = 0.5;
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
        //console.log("move to final Victory scene")
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
        //reset information Area
        informationArea.innerHTML="<h2>You win!</h2>";
        Crafty.scene('Victory');
    },
    // Respond to this player visiting venus
    visitVenus: function(data) {
        if(!Game2.showEntrance&&Game2.clockPass){
            //create secretEntrace
            Crafty.e('secretEntrace').at(18, 8)
            .attr({alpha:0.2})
            .tween({alpha: 1.0}, 100);
            Game2.showEntrance=true;
           // console.log("entrance showed")
            informationArea.innerHTML=("<h4>You put the key into the hole, there is some noise from right.</h4>")+informationArea.innerHTML;
        }
    },
    // Respond to this player visiting clock
    visitClock: function(data) {
        clock = data[0].obj;
        if(Game2.boxPass&&!Game2.clockPass){
            //create secretEntrace
            Game2.clockPass=true;
            //console.log("clock passed")
            informationArea.innerHTML=("<h4>You turned the clock needle to 12:00 am. You find a special key.</h4>")+informationArea.innerHTML;
            Crafty.e("Key,Tween").at(4,15)
            .attr({alpha:0.2})
            .tween({alpha: 1.0}, 100)
         
        }
    },
    //respond to this player visiting box
    visitBox:function(data){
        box=data[0].obj;
        let boxGridX=box.x/Game.map_grid.tile.width;
        let boxGridY=box.y/Game.map_grid.tile.height;
        if(boxGridX==Game2.boxLeftGridPosition.x&&boxGridY==Game2.boxLeftGridPosition.y){
            if(Game2.leftNotNull){
                //console.log("vist left box and get information for next step")
                Game2.boxPass=true;
                informationArea.innerHTML=("<h4>You find a notebook wrote \"There is a weird clock.\"</h4>")+informationArea.innerHTML;
                Crafty.e("NoteBook").at(3,15)
                .attr({alpha:0.2})
                .tween({alpha: 1.0}, 100);
            }
            else{
                //console.log("vist left box but nothing happen")
                informationArea.innerHTML=("<h4>You find nothing in this empty box.</h4>")+informationArea.innerHTML;
            }
        }
        else{
            if(Game2.leftNotNull){
                //console.log("vist right box but nothing happen")
                informationArea.innerHTML=("<h4>You find nothing in this empty box.</h4>")+informationArea.innerHTML;
            }
            else{
                //console.log("vist right box and get information for next step")
                Game2.boxPass=true;
                informationArea.innerHTML=("<h4>You find a notebook wrote \"There is a weird clock, it only ring at mid nigth.\"</h4>")+informationArea.innerHTML;
                Crafty.e("NoteBook").at(3,15)
                .attr({alpha:0.2})
                .tween({alpha: 1.0}, 100);
            }
        }
        box.destroy();
    },
});