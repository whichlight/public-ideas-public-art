$(document).ready(function(){
  var myBoard = new DrawingBoard.Board('playground', {
    size:5,
    background: 'img/Graph_paper2.gif',
      DrawingMode: { filler: false},
      controls: [{
        Size: { type: "false" } },
           { Navigation: { forward: false } },
    ],

  });
});

