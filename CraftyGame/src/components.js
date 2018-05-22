

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
