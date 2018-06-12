
let hitText = Crafty.e('2D,DOM, Text')
.attr({//hitText location
  x: screenWidth - 100,
  y: 10
});

Crafty.scene('opening1', function(){

   hitText.text('Victory');
});